import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import Email from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  // debug: true,
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // CredentialsProvider({
    //   name: "Sign in",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "example@example.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   // メルアド認証処理
    //   async authorize(credentials) {
    //     const users = [
    //       { id: "1", email: "user1@example.com", password: "password1" },
    //       { id: "2", email: "user2@example.com", password: "password2" },
    //       { id: "3", email: "abc@abc", password: "123" },
    //     ];

    //     const user = users.find((user) => user.email === credentials?.email);

    //     if (user && user?.password === credentials?.password) {
    //       return {
    //         id: user.id,
    //         name: user.email,
    //         email: user.email,
    //         role: "admin",
    //       };
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  // callbacks: {
  //   jwt: async ({ token, user, account, profile, isNewUser }) => {
  //     // 注意: トークンをログ出力してはダメです。
  //     // console.log("in jwt", { user, token, account, profile });

  //     if (user) {
  //       token.user = user;
  //       const u = user as any;
  //       token.role = u.role;
  //     }
  //     if (account) {
  //       token.accessToken = account.access_token;
  //     }
  //     return token;
  //   },
  //   session: ({ session, token }) => {
  //     // console.log("in session", { session, token });
  //     token.accessToken;
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         role: token.role,
  //       },
  //     };
  //   },
  // },
};
