"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.cause) {
        case "CredentialsSignin":
          return "Identifiants invalides.";
        default:
          return "Une erreur est survenue.";
      }
    }

    throw error;
  }
}
