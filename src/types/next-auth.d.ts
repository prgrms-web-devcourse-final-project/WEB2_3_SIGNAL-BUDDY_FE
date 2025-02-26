import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      nickname: string;
      email: string;
      token: string;
      refreshToken: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    token: string;
    refreshToken: string;
  }

  interface JWT {
    id: string;
    token: string;
    refreshToken: string;
  }
}
