import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Prêt à passer à l’étape supérieure ?{" "}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
            N'attendez plus pour avoir le site web sur-mesure qui vous permettra
            d'atteindre vos objectifs. Avec Klyx, lancez-vous et concentrez-vous
            sur la croissance de votre entreprise.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/questionnaire"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Je lance mon projet web
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
