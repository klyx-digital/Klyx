import { Heading, Subheading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Text, Strong } from "@/components/ui/text";
import { QuestionnaireForm } from "./QuestionnaireForm";

export default async function Page() {
  return (
    <main className="min-h-screen px-4 md:px-8">
      <div className="flex flex-col items-center justify-center py-6 md:py-12">
        <Heading>
          Votre projet web sur-mesure commence ici : répondez à notre
          questionnaire rapide !
        </Heading>
        <Subheading className="max-w-2xl text-center">
          Quelques questions pour donner vie à votre vision. Notre questionnaire
          est simple et rapide à compléter.
        </Subheading>
        <Text className="max-w-xl text-center">
          Rêvez de votre site idéal ? En moins de 5 minutes, décrivez-nous vos
          envies et laissez Klyx transformer votre vision en une présence en
          ligne <Strong>exceptionnelle et optimisée pour le succès</Strong>.
        </Text>
      </div>
      <div className="px-4 md:px-8">
        <Divider />
      </div>
      <QuestionnaireForm />
    </main>
  );
}
