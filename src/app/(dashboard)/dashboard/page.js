import { Heading, Subheading } from "@/components/ui/heading";
import { auth } from "@/auth";
import { Stat } from "../../../components/dashboard/Stat";

export default async function dashboardPage() {
  const session = await auth();
  return (
    <>
      <Heading>Bonjour , {session?.user?.name}</Heading>
      <Subheading>Voici votre espace personnel</Subheading>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Visiteurs" value="12 450" change="+7,8%" />
        <Stat title="Score SEO" value="84 / 100" change="+1,2 pt" />
        <Stat title="Conversions" value="268" change="+6,1%" />
        <Stat title="Revenus" value="18 734 €" change="+9,4%" />
      </div>
    </>
  );
}
