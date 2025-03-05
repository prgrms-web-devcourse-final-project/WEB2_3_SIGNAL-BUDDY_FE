import NextAuth, { CredentialsSignin } from "next-auth";
import Kakao from "next-auth/providers/kakao";
import Naver from "next-auth/providers/naver";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth.service";
import { cookies } from "next/headers";
import server from "./lib/api/server";

class InvalidLoginError extends CredentialsSignin {
  code = "사용자를 찾을 수 없습니다.";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        id: { label: "id" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        const { id, password } = credentials;

        const response = await login({
          id: id as string,
          password: password as string,
        });
        if (response.status === 404) {
          throw new InvalidLoginError();
        }

        const token = response.headers["authorization"];
        const resCookies = response.headers["set-cookie"];
        const user = response.data;
        const refreshToken = resCookies ? resCookies[0] : "";
        const cookieStore = await cookies();
        const match = refreshToken.match(/refresh-token=([^;]+)/);
        cookieStore.set({
          name: "refresh-token",
          value: match ? decodeURIComponent(match[1]) : refreshToken,
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 60 * 60 * 24 * 7,
        });
        return { ...user.data, token, refreshToken };
      },
    }),
    Kakao({
      clientId: process.env.AUTH_KAKAO_CLIENT_ID || "",
      clientSecret: process.env.AUTH_KAKAO_CLIENT_SECRET || "",
    }),
    Naver({
      clientId: process.env.AUTH_NAVER_CLIENT_ID || "",
      clientSecret: process.env.AUTH_NAVER_CLIENT_SECRET || "",
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt", // JSON Web Token 사용
    maxAge: 60 * 60 * 24, // 세션 만료 시간(sec)
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: async ({ account, profile }) => {
      if (account && account.provider !== "credentials" && profile) {
        const body = {
          provider: account.provider,
          socialUserId: account.providerAccountId,
        };
        console.log(body);
        // const res = await server.post("/api/auth/social-login", body);
        // console.log(res);
        const params = new URLSearchParams();
        params.set("provider", account.provider);
        params.set("id", account.providerAccountId);
        if (account.provider === "naver") {
          if (profile.response.nickname)
            params.set("nickname", profile.response.nickname);
          if (profile.response.email)
            params.set("email", profile.response.email);
        }
        if (account.provider === "kakao") {
          if (profile.kakao_account.profile.nickname)
            params.set("nickname", profile.kakao_account.profile.nickname);
          if (profile.kakao_account.email)
            params.set("email", profile.kakao_account.email);
        }
        if (account.provider === "google") {
          if (profile.name) params.set("nickname", profile.name);
          if (profile.email) params.set("email", profile.email);
        }

        return `/join?${params.toString()}`;
      }
      return true;
    },
    jwt: async ({ token, user, account, trigger, session }) => {
      console.log("token", token);
      console.log("account", account);
      if (user) {
        token = { ...token, ...user };
      }
      if (trigger === "update" && session) {
        const { nickname, profileImageUrl } = session;
        token.nickname = nickname;
        token.profileImageUrl = profileImageUrl;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.memberId = token.memberId as number;
        session.user.nickname = token.nickname as string;
        session.user.profileImageUrl = token.profileImageUrl as string;
        session.user.email = token.email as string;
        session.user.role = token.role as "USER" | "ADMIN";
        session.user.token = token.token as string;
        session.user.refreshToken = token.refreshToken as string;
      }
      return session;
    },
  },
});
