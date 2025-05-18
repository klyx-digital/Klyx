"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createAnswers({ plan, answers }) {
  await prisma.answers.create({
    data: { plan, data: answers },
  });
  redirect(`/signup?plan=${plan}`);
}
