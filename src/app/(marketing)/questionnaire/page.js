import Wizard from "./Wizard";
import { Heading, Subheading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";

export default async function Page({ searchParams }) {
  const { plan: rawPlan } = await searchParams;
  const plan = ["essentiel", "pro", "premium"].includes(rawPlan)
    ? rawPlan
    : "default";

  return (
    <main className="min-h-screen px-4 md:px-8">
      <div className="flex flex-col items-center justify-center py-6 md:py-12">
        <Heading>Questionnaire Klyx</Heading>
        <Subheading>Construisons ensemble votre futur site web !</Subheading>
        <Text>Ce formulaire ne prend que 3 minutes.</Text>
      </div>
      <div className="px-4 md:px-8">
        <Divider />
      </div>
      <Wizard plan={plan} />
    </main>
  );
}
