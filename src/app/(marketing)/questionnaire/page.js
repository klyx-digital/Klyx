import { Heading, Subheading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Text, Strong } from "@/components/ui/text";
import { QuestionnaireForm } from "./QuestionnaireForm";

export default async function Page() {
  return (
    <main className="min-h-screen px-4 md:px-8">
      <div className="flex flex-col items-center justify-center py-6 md:py-12">
        <Heading>Lancez votre projet web sur-mesure avec Klyx</Heading>
        <Subheading className="max-w-2xl text-center">
          Ce questionnaire rapide nous permet de cerner précisément vos besoins,
          vos objectifs et vos inspirations
        </Subheading>
        <Text className="max-w-xl text-center">
          En moins de 5 minutes, partagez votre vision : nous créons pour vous
          un site <br />
          <Strong>unique, performant et 100% optimisé SEO</Strong>
        </Text>
      </div>
      <div className="px-4 md:px-8">
        <Divider />
      </div>
      <QuestionnaireForm />
    </main>
  );
}
