"use client";

import { AuthLayout } from "@/components/ui/auth-layout";
import { Button } from "@/components/ui/button";
import { Field, Label } from "@/components/ui/fieldset";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Strong, Text, TextLink } from "@/components/ui/text";
import { useActionState, useState, useEffect } from "react";
import { registerUser } from "./action";
import {
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { SignInGoogle } from "@/components/formulaire/SignInGoogle";

export default function PageRegister() {
  const initialState = {
    errors: {},
    message: null,
  };
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      setShowSuccessModal(true);
    }
  }, [state.success]);

  return (
    <section>
      <AuthLayout>
        <form
          action={formAction}
          className="grid w-full max-w-sm grid-cols-1 gap-8"
        >
          <Heading>Créer un compte</Heading>
          {state.message && (
            <p className="rounded bg-red-100 px-3 py-2 text-sm text-red-700">
              {state.message}
            </p>
          )}
          <SignInGoogle label="S'inscrire avec Google" />
          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-500">ou</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <Field>
            <Label htmlFor="name">Nom complet</Label>
            <Input name="name" id="name" />
            {state.errors?.name?.map((err, index) => (
              <p key={index} className="text-sm text-red-500 mt-1">
                {err}
              </p>
            ))}
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" autoComplete="email" />
            {state.errors?.email?.map((err, index) => (
              <p key={index} className="text-sm text-red-500 mt-1">
                {err}
              </p>
            ))}
          </Field>
          <Field>
            <Label htmlFor="password">Mot de passe</Label>
            <Input type="password" name="password" id="password" />
            {state.errors?.password?.map((err, index) => (
              <p key={index} className="text-sm text-red-500 mt-1">
                {err}
              </p>
            ))}
          </Field>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Création en cours..." : "Créer un compte"}
          </Button>
          <Text>
            Vous avez déjà un compte ?{" "}
            <TextLink href="/login">
              <Strong>Se connecter</Strong>
            </TextLink>
          </Text>
        </form>
      </AuthLayout>

      <Dialog open={showSuccessModal} onClose={setShowSuccessModal}>
        <DialogTitle>Compte créé avec succès</DialogTitle>
        <DialogDescription>
          Votre compte a bien été enregistré. Vous pouvez maintenant vous
          connecter pour accéder à votre espace.
        </DialogDescription>
        <DialogActions>
          <Button color="dark" className="w-full" href="/login">
            Se connecter
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
