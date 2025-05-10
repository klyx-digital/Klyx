"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "./action"; // ou "@/lib/actions" selon structure
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, Label } from "@/components/ui/fieldset";
import { Heading } from "@/components/ui/heading";
import { Text, TextLink, Strong } from "@/components/ui/text";
import { SignInGoogle } from "@/components/formulaire/SignInGoogle";
import { AuthLayout } from "@/components/ui/auth-layout";

export function FormulaireLogin() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <AuthLayout>
      <form
        action={formAction}
        className="grid w-full max-w-sm grid-cols-1 gap-8"
      >
        <Heading>Connectez-vous à votre compte</Heading>

        <SignInGoogle label="Se connecter avec Google" />

        <div className="flex items-center gap-4 my-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">ou</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" id="email" autoComplete="email" />
        </Field>

        <Field>
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Field>

        <input type="hidden" name="redirectTo" value={callbackUrl} />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Connexion..." : "Se connecter"}
        </Button>

        {errorMessage && (
          <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
        )}

        <Text>
          Vous n’avez pas de compte ?{" "}
          <TextLink href="/register">
            <Strong>Créer un compte</Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  );
}
