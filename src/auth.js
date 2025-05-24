import NextAuth from "next-auth";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { z } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const LoginSchema = z.object({
          email: z.string().email("Email invalide"),
          password: z.string().min(6, "Mot de passe trop court"),
        });

        const validated = LoginSchema.safeParse(credentials);
        if (!validated.success) {
          return null;
        }

        const { email, password } = validated.data;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) return null;

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // 1. Première connexion : on a l'objet user
      if (user) {
        token.id = user.id;
      }

      // 2. Si on vient d'un consentement GSC
      if (
        account?.provider === "google" &&
        account.scope?.includes("webmasters.readonly")
      ) {
        token.scope = account.scope;
      }

      // 3. Fallback : si id manquant (par ex. utilisateur déjà connecté)
      if (!token.id && token.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email },
          select: { id: true },
        });
        if (dbUser) token.id = dbUser.id;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.scope = token.scope;
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      await prisma.questionnaire.updateMany({
        where: { email: user.email, userId: null },
        data: { userId: user.id },
      });
    },
  },
  pages: { signIn: "/login" },
});
