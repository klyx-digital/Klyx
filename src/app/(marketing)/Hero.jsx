import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <div className="mt-6 sm:mt-12 lg:mt-2">
            <div className="inline-flex space-x-6">
              <Badge color="blue">Nouveauté</Badge>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                <span>Lancement officiel</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
            Votre site web sur-mesure, pensé pour convertir.
          </h1>
          <p className="mt-8 text-lg text-gray-500 sm:text-xl">
            Démarquez-vous avec un site ultra-rapide, sécurisé et 100%
            personnalisé, conçu pour attirer plus de clients et booster votre
            visibilité.
          </p>
          <p className="mt-2 text-gray-500">
            <span className="font-semibold text-blue-700">
              À partir de 99€/mois
            </span>{" "}
            - tout compris : hébergement, maintenance, SEO et accompagnement
            humain.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button href="/register" color="blue">
              Créer mon site maintenant
            </Button>
            <Button href="/pricing" plain>
              Voir les formules & tarifs <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                alt="App screenshot"
                src="/KlyxCaptureEcran.png"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
