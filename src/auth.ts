import NextAuth, { CredentialsSignin } from "next-auth";
import Kakao from "next-auth/providers/kakao";
import Credentials from "next-auth/providers/credentials";
import { login } from "./services/auth.service";

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
        const cookies = response.headers["set-cookie"];
        const user = response.data;
        const refreshToken = cookies ? cookies[0] : null;
        console.log(token);
        console.log(refreshToken);
        console.log(user);
        return { ...user, token, refreshToken };

        // if (!response.ok) {
        //   throw new Error("알 수 없는 에러가 발생했습니다.");
        // }

        // const headers = response.headers;
        // console.log(headers.getSetCookie());
        // const token = headers.get("Authorization");
        // const refreshToken = headers.getSetCookie()[0];
        // const data = await response.json();
        // return { ...data, token, refreshToken };
      },
    }),
    Kakao({
      clientId: process.env.AUTH_KAKAO_CLIENT_ID || "",
      clientSecret: process.env.AUTH_KAKAO_CLIENT_SECRET || "",
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
    signIn: async () => {
      return true;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.token = token.token as string;
        session.user.refreshToken = token.refreshToken as string;
      }
      return session;
    },
  },
});
