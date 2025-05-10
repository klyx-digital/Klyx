import { FormulaireRegister } from "./FormulaireRegister";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Register",
};

export default async function Page() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main>
      <FormulaireRegister />
    </main>
  );
}
