import { FormulaireLogin } from "./FormulaireLogin";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main>
      <section>
        <FormulaireLogin />
      </section>
    </main>
  );
}
