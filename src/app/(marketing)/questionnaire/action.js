"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

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
  email: z.string().email("Email invalide"),
  autresInformations: z.string().optional(),
});

export async function actionQuestionnaire(prevState, formData) {
  const result = QuestionnaireSchema.safeParse(formData);
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: null,
    };
  }
  const {
    nameEntreprise,
    objectifSite,
    cible,
    concurrents,
    identiteVisuelle,
    textes,
    fonctionnalites,
    inspiration,
    nomDeDomaine,
    email,
    autresInformations,
  } = result.data;
  const questionnaire = await prisma.questionnaire.create({
    data: {
      nameEntreprise,
      objectifSite,
      cible,
      concurrents,
      identiteVisuelle,
      textes,
      fonctionnalites,
      inspiration,
      nomDeDomaine,
      email,
      autresInformations,
    },
  });
  return {
    errors: {},
    message: "Questionnaire créé avec succès",
  };
}
