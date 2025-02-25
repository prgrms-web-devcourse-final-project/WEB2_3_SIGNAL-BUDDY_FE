import NextAuth from "next-auth";
import Kakao from "next-auth/providers/kakao";
import Credentials from "next-auth/providers/credentials";

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

        const response = await fetch("http://52.79.71.9/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id,
            password,
          }),
        });

        if (!response.ok) return null;

        const data = await response.json();
        console.log(1, data);
        return data;
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
      return token;
    },
    session: async ({ session, token }) => {
      return session;
    },
  },
});
