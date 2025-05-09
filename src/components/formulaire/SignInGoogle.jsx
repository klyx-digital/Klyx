"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export function SignInGoogle({ label }) {
  return (
    <Button
      className="flex justify-center items-center"
      color="white"
      onClick={() => signIn("google", { redirectTo: "/dashboard" })}
    >
      <Image
        src="/icones/BtnGoogle.svg"
        height={30}
        width={30}
        alt="logo google"
      />
      {label}
    </Button>
  );
}
