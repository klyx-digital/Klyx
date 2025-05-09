import NextAuth from "next-auth";
import prisma from "@/lib/prisma";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { authConfig } from "./auth.config";
import { z } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    Google,
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
          console.log("Validation échouée", credentials);
          return null;
        }

        const { email, password } = validated.data;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) return null;

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;

        console.log("authorize appelé avec", credentials);

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
});
