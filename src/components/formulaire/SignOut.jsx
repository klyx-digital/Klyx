"use client";
import { signOut } from "next-auth/react";
import { DropdownItem, DropdownLabel } from "@/components/ui/dropdown";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/20/solid";

export function SignOut() {
  return (
    <DropdownItem onClick={() => signOut()}>
      <ArrowRightStartOnRectangleIcon />
      <DropdownLabel>Déconnexion</DropdownLabel>
    </DropdownItem>
  );
}
