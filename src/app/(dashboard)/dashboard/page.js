import { Heading, Subheading } from "@/components/ui/heading";
import { auth } from "@/auth";
import { Stat } from "../../../components/dashboard/Stat";
import { ButtonGSC } from "@/components/formulaire/ButtonGSC";
import { getSeoStats } from "@/lib/seoStats";
import { Text, TextLink, Strong } from "@/components/ui/text";
import prisma from "@/lib/prisma";

export default async function dashboardPage() {
  const session = await auth();

  const sites = await prisma.site.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "asc" },
  });

  if (!sites.length)
    return (
      <p className="p-8">
        Aucun site n’est encore lié. Cliquez “Connecter Google Search Console”.
      </p>
    );

  // 4. Calcule les stats (30 j)
  const { clicks, impressions, ctr, position } = await getSeoStats(
    sites[0].url
  );
  return (
    <main>
      <Heading>Bonjour , {session?.user?.name}</Heading>
      <Subheading>Voici votre espace personnel</Subheading>
      <Text>
        <Strong>Site actif : </Strong>
        <TextLink href={sites[0].url} target="_blank">
          {sites[0].url}
        </TextLink>
      </Text>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Clics" value={clicks} />
        <Stat title="Impressions" value={impressions} />
        <Stat title="CTR" value={(ctr * 100).toFixed(1) + " %"} />
        <Stat title="Position moyenne" value={position} />
      </div>
      <div className="flex flex-col mt-8  max-w-lg">
        <ButtonGSC session={session} />
        <p className="text-sm text-muted-foreground mt-2">
          Pour commencer à suivre vos clics, impressions et positionnement sur
          Google, veuillez connecter votre compte Google Search Console.
        </p>
      </div>
    </main>
  );
}
