import {
  ArrowPathIcon,
  ChartBarIcon,
  HandThumbUpIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Dashboard intuitif",
    description:
      "Suivez en temps réel les performances de votre site, vos statistiques de visites et l’évolution de votre référencement. Demandez des modifications ou des mises à jour en un clic, sans aucune connaissance technique.",
    icon: ChartBarIcon,
  },
  {
    name: "Maintenance & évolutions continues",
    description:
      "Votre site reste toujours à jour, sécurisé et évolue selon vos besoins. Nous gérons pour vous toutes les mises à jour, la sécurité et les améliorations, sans interruption de service.",
    icon: ArrowPathIcon,
  },
  {
    name: "Référencement (SEO) optimisé dès le départ",
    description:
      "Votre visibilité est assurée grâce à un référencement technique et éditorial intégré dès la mise en ligne. Attirez plus de clients sans effort supplémentaire.",
    icon: GlobeAltIcon,
  },
  {
    name: "Abonnement sans engagement",
    description:
      "Profitez d’une formule mensuelle flexible, résiliable à tout moment. Pas de frais cachés, pas d’engagement longue durée : vous restez libre de vos choix.",
    icon: HandThumbUpIcon,
  },
];

export function Features() {
  return (
    <div className="bg-gray-200 rounded-2xl py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">
            Tout est inclus. Concentrez-vous sur votre activité, on s’occupe du
            web.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Un site sur-mesure, performant et clé en main{" "}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Avec Klyx, bénéficiez d’un site internet moderne, rapide et
            sécurisé, sans aucune complexité technique à gérer. Nous nous
            occupons de tout, de la création à la maintenance, pour que vous
            puissiez vous concentrer sur votre métier.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
