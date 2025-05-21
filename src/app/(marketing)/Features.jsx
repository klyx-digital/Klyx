import {
  ArrowPathIcon,
  ChartBarIcon,
  HandThumbUpIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Gestion simplifiée de votre site",
    description:
      "Accédez à vos données et demandez des ajustements en un clic, sans coder.",
    icon: ChartBarIcon,
  },
  {
    name: "Votre site toujours au top, sans souci.",
    description:
      "Nous assurons la maintenance, la sécurité et les mises à jour pour une performance optimale continue.",
    icon: ArrowPathIcon,
  },
  {
    name: "Gagnez en visibilité sans effort",
    description:
      "Nous optimisons votre SEO pour que vous atteigniez votre public cible plus facilement.",
    icon: GlobeAltIcon,
  },
  {
    name: "Liberté totale, sans engagement forcé",
    description:
      "Notre abonnement mensuel est flexible et résiliable à tout moment.",
    icon: HandThumbUpIcon,
  },
];

export function Features() {
  return (
    <section className="bg-gray-200 rounded-2xl py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">
            Votre succès en ligne, simplifié. Concentrez-vous sur votre
            croissance, Klyx gère le reste.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Imaginez un site moderne, rapide et sécurisé qui attire vos clients
            et booste votre activité, sans la complexité technique. Klyx le rend
            possible.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            De la conception initiale à la maintenance continue et à
            l'optimisation pour les moteurs de recherche, nous prenons soin de
            chaque détail pour que vous puissiez vous consacrer pleinement à
            l'essentiel : le développement de votre entreprise.
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
    </section>
  );
}
