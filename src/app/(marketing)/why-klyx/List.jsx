import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  CurrencyEuroIcon,
  UserCircleIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    title: "Performance et optimisation",
    description:
      "Un site rapide, fluide et optimisé dès le premier pixel pour maximiser l’expérience utilisateur.",
    icon: RocketLaunchIcon,
    points: [
      "Les plateformes No-Code sont souvent lentes et peu optimisées.",
      "Les agences classiques livrent des sites rapidement obsolètes si non maintenus.",
    ],
  },
  {
    title: "SEO et visibilité",
    description:
      "Soyez visible sur Google grâce à une structure technique optimisée pour le référencement.",
    icon: MagnifyingGlassIcon,
    points: [
      "Les No-Code nuisent au SEO via un code surchargé.",
      "Les agences facturent le SEO en option, augmentant les coûts.",
    ],
  },
  {
    title: "Maintenance et mises à jour",
    description:
      "Votre site est constamment sécurisé, maintenu et optimisé sans effort de votre part.",
    icon: WrenchScrewdriverIcon,
    points: [
      "Les agences facturent les mises à jour en supplément.",
      "Les plateformes No-Code exigent une gestion technique autonome.",
    ],
  },
  {
    title: "Tarification transparente",
    description:
      "Un abonnement tout compris sans frais cachés, pour une maîtrise totale de votre budget.",
    icon: CurrencyEuroIcon,
    points: [
      "Les No-Code affichent des prix d'appel mais ajoutent de nombreux suppléments.",
      "Les agences imposent des frais initiaux + coûts de maintenance.",
    ],
  },
  {
    title: "Simplicité et accessibilité",
    description:
      "Aucune compétence technique requise : vous restez concentré sur votre activité, on s’occupe du reste.",
    icon: UserCircleIcon,
    points: [
      "Les plateformes No-Code demandent de longues heures d'apprentissage.",
    ],
  },
  {
    title: "Évolutivité et accompagnement",
    description:
      "Votre site s’adapte à la croissance de votre entreprise avec un accompagnement humain et durable.",
    icon: ArrowsPointingOutIcon,
    points: [
      "Les plateformes No-Code sont limitées en termes de scalabilité.",
      "Les agences facturent chaque modification ou ajout.",
    ],
  },
];

export function List() {
  return (
    <section className="bg-gray-100 py-20 px-6 mt-12 rounded-2xl">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 ">
          Les avantages Klyx, là où ça fait la différence{" "}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Klyx se démarque là où ça compte vraiment : personnalisation,
          rapidité, visibilité, simplicité et accompagnement humain.
        </p>
      </div>

      <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 scroll-smooth pb-4">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="min-w-[350px] max-w-sm snap-center shrink-0 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center pt-6">
              <div className="rounded-full bg-blue-100 p-3">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </CardTitle>
              <CardDescription className="mt-2 text-sm text-gray-500">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 list-disc space-y-2 px-4 text-sm text-gray-600">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
