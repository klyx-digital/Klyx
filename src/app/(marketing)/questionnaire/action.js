"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const QuestionnaireSchema = z.object({
  nameEntreprise: z.string().optional(),
  objectifSite: z.enum(["essential", "pro", "premium"]),
  cible: z.string().optional(),
  concurrents: z.string().optional(),
  identiteVisuelle: z.enum(["yes", "partial", "no"]),
  textes: z.enum(["yes", "no"]),
  fonctionnalites: z.array(z.string()).default([]),
  inspiration: z.string().optional(),
  nomDeDomaine: z.enum(["yes", "no"]),
  email: z.string().email(),
  autresInformations: z.string().optional(),
});

export async function actionQuestionnaire(prev, formData) {
  /* 1. convertir formData */
  const dataObject = Object.fromEntries(formData.entries());
  const payload = {
    ...dataObject,
    fonctionnalites: formData.getAll("fonctionnalites"), // tableau réel
  };

  /* 2. valider */
  const parsed = QuestionnaireSchema.safeParse(payload);
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors, message: null };
  }

  /* 3. lier à l’utilisateur connecté (si existe) */
  const session = await auth();

  await prisma.questionnaire.create({
    data: {
      ...parsed.data,
      userId: session?.user?.id ?? null,
    },
  });

  redirect("/questionnaire/success");
}
