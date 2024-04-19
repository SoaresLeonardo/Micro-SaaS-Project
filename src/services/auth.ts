import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./database";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/app'
  },
  providers: [
    EmailProvider({
      server: {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "756680810918a0",
          pass: "9adf4c7e305a9c",
        },
      },
      from: "leonardohenriquesoarasalvez784@gmail.com",
    }),
  ],
});
