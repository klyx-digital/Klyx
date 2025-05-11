import Image from "next/image";

export function PourquoiKlyxPreview() {
  return (
    <section className="bg-black text-white rounded-2xl py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Un accompagnement complet, humain et moderne pour votre réussite
            digitale
          </h2>
          <p className="mt-6 text-base/7 text-gray-200">
            Chez Klyx, nous faisons bien plus que créer des sites web : nous
            vous accompagnons à chaque étape pour garantir votre tranquillité
            d’esprit, la performance de votre site et la croissance de votre
            activité. Voici ce qui fait notre différence :
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 p-4 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="bg-white rounded-full ">
            <Image
              src="/Hand coding-bro.svg"
              alt="Ensemble"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-2xl">
            Création sur-mesure
          </h3>
          <p className="text-center">
            Un site unique, à votre image, conçu avec les technologies les plus
            modernes (Next.js, React, Tailwind CSS…).
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="bg-white rounded-full ">
            <Image
              src="/Ensemble.svg"
              alt="Ensemble"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-2xl">
            Support humain et réactif
          </h3>
          <p className="text-center">
            Une équipe à votre écoute, pour répondre à toutes vos questions et
            accompagner votre croissance.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="bg-white rounded-full ">
            <Image
              src="/Server-bro.svg"
              alt="Ensemble"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-2xl">
            Hébergement et nom de domaine inclus
          </h3>
          <p className="text-center">
            Nous prenons en charge l’hébergement, le nom de domaine et la
            gestion technique.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="bg-white rounded-full ">
            <Image
              src="/Privacy policy-rafiki.svg"
              alt="Ensemble"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-2xl">
            Sécurité et conformité
          </h3>
          <p className="text-center">
            Vos données et celles de vos clients sont protégées selon les
            meilleures pratiques du web.
          </p>
        </div>
      </div>
    </section>
  );
}
