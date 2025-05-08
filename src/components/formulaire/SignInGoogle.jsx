"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export function SignInGoogle() {
  return (
    <Button
      className="flex justify-center items-center"
      color="white"
      onClick={() => signIn("google")}
    >
      <Image
        src="/icones/BtnGoogle.svg"
        height={30}
        width={30}
        alt="logo google"
      />
      Se connecter avec Google
    </Button>
  );
}
