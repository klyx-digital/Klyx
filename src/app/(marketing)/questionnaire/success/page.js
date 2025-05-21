import {
  MagnifyingGlassCircleIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/outline";
import { EspaceClient } from "./EspaceClient";

const features = [
  {
    name: "Analyse approfondie",
    description:
      "Notre équipe va étudier attentivement vos réponses pour comprendre parfaitement vos besoins et vos attentes.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Prise de contact personnalisée",
    description:
      "Nous vous recontacterons très rapidement (sous 24 heures ouvrées) pour discuter des détails de votre projet et répondre à toutes vos questions.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Délai de création",
    description:
      "Comptez environ 7 à 14 jours ouvrés à partir de notre premier échange pour la conception et le développement de votre site web sur-mesure.",
    icon: CalendarDaysIcon,
  },
];

const featuresSerenite = [
  {
    name: "Paiement uniquement à la validation",
    description:
      "Vous ne paierez rien tant que vous n'aurez pas validé le design final de votre site web.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Lancement et abonnement",
    description:
      "Votre abonnement mensuel débutera uniquement lorsque votre site sera mis en ligne et que vous serez entièrement satisfait du résultat.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Zéro engagement",
    description:
      "Si, pour une raison quelconque, le site que nous vous proposons ne correspond pas à vos attentes, vous êtes libre d'abandonner sans aucun frais. Vous ne prenez aucun risque !",
    icon: NoSymbolIcon,
  },
];

export default function Page() {
  return (
    <main>
      <div className="bg-white pt-12 sm:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Merci ! Votre projet web est entre de bonnes mains.
            </h1>
            <p className="mt-6 text-lg/8 text-gray-600">
              Nous avons bien reçu votre brief et sommes impatients de donner
              vie à votre site web.
            </p>
          </div>
          <div className="mx-auto  max-w-2xl sm:mt-12  lg:max-w-none">
            <h2 className="text-lg font-semibold pb-2 md:pb-4">
              Voici ce qui va se passer ensuite :
            </h2>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col ">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto  max-w-2xl mt-12 sm:mt-16 lg:max-w-none">
            <h2 className="text-lg font-semibold py-6 pb-2 md:pb-4">
              Votre sérénité est notre priorité :
            </h2>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {featuresSerenite.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <EspaceClient />
    </main>
  );
}
