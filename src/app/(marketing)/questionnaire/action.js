"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { auth } from "@/auth";

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
  console.log("dataObject", dataObject);
  const payload = {
    ...dataObject,
    fonctionnalites: formData.getAll("fonctionnalites"), // tableau réel
  };

  console.log("payload", payload);

  /* 2. valider */
  const parsed = QuestionnaireSchema.safeParse(payload);
  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors, message: null };
  }

  console.log("parsed", parsed);

  /* 3. lier à l’utilisateur connecté (si existe) */
  const session = await auth();
  console.log("session", session);

  await prisma.questionnaire.create({
    data: {
      ...parsed.data,
      userId: session?.user?.id ?? null,
    },
  });

  console.log("Questionnaire enregistré !");

  return { success: true, message: "Questionnaire enregistré !" };
}
