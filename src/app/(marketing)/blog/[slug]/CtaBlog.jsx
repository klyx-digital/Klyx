import Link from "next/link";

export function CtaBlog() {
  return (
    <div className="bg-blue-900">
      <div className="px-6 py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Passez à l’action avec un site web sur-mesure, sans engagement.{" "}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg/8 text-pretty text-indigo-200">
            Avec Klyx, bénéficiez d’un site 100% personnalisé, conçu et géré
            pour vous, sans frais initiaux et sans contrainte technique.
            Choisissez la formule qui vous correspond, profitez d’un
            accompagnement continu, et concentrez-vous sur l’essentiel : votre
            activité.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/pricing"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-xs hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Découvrir les offres Klyx
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
