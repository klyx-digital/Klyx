import { Heading, Subheading } from "@/components/ui/heading";
import { auth } from "@/auth";
import { Stat } from "../../../components/Stat";

export default async function dashboardPage() {
  const session = await auth();
  return (
    <>
      <Heading>Bonjour , {session?.user?.name}</Heading>
      <Subheading>Voici votre espace personnel</Subheading>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Visiteurs" value="542" change="+4.5%" />
        <Stat title="Score SEO" value="$455" change="-0.5%" />
        <Stat title="Conversions" value="37" change="+4.5%" />
        <Stat title="Revenus" value="823,067" change="+21.2%" />
      </div>
    </>
  );
}
