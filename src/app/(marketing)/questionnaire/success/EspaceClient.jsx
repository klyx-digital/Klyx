import {
  ChartBarIcon,
  PencilSquareIcon,
  ClockIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";

const features = [
  {
    name: "Accès simplifié",
    description:
      "Une fois votre site web en ligne et validé, connectez-vous directement à votre tableau de bord personnalisé.",
    icon: ArrowRightCircleIcon,
  },
  {
    name: "Suivi de performance intuitif",
    description:
      "Surveillez en temps réel les statistiques clés de votre site : nombre de visiteurs, pages les plus consultées, performances SEO et bien plus encore. Tout est présenté de manière claire et facile à comprendre, sans aucune connaissance technique requise.",
    icon: ChartBarIcon,
  },
  {
    name: "Modifications en toute simplicité",
    description:
      "Besoin de mettre à jour un texte, changer une image ou ajouter une nouvelle section ? Faites vos demandes de modifications directement depuis votre tableau de bord. Plus besoin de toucher au code ! Notre équipe s'en charge pour vous, en respectant votre vision.",
    icon: PencilSquareIcon,
  },
  {
    name: "Gain de temps précieux",
    description:
      "Anticipez la gestion de votre site et familiarisez-vous avec votre futur espace personnalisé.",
    icon: ClockIcon,
  },
];

export function EspaceClient() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-blue-600">
                Prenez une longueur d'avance : Créez votre espace client dès
                maintenant !
              </h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">
                Même si votre site est en cours de création, vous pouvez dès à
                présent configurer votre espace personnel Klyx.{" "}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Pourquoi créer votre compte maintenant ?
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-blue-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div>
            <img
              alt="Capture d'eran dashboard klyx"
              src="/KlyxCaptureEcran.png"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl sm:w-228 md:-ml-4 lg:-ml-0"
            />
            <div className="py-6 space-y-3">
              <h3 className="text-lg font-semibold">
                Prêt à découvrir votre futur centre de contrôle ?
              </h3>
              <Button href="/register" color="blue">
                Créer mon espace client
              </Button>
              <p>
                Nous sommes impatients de vous offrir une expérience de gestion
                web simple, puissante et entièrement pensée pour votre succès !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
