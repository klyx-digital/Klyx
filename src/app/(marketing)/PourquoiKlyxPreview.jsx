import Image from "next/image";

export function PourquoiKlyxPreview() {
  return (
    <section className="bg-black text-white rounded-2xl py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Transformez votre présence en ligne avec une solution web complète,
            humaine et performante.
          </h2>
          <p className="mt-6 text-base/7 text-gray-200">
            Chez Klyx, nous sommes plus que des créateurs de sites web. Nous
            sommes vos partenaires dédiés, engagés à vous offrir une expérience
            sereine, une présence en ligne performante et une croissance
            durable.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-6 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="bg-white rounded-full">
            <Image
              src="/Hand coding-bro.svg"
              alt="Ensemble"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-base/7 font-semibold text-blue-600">
            Votre identité en ligne, sublimée par une technologie de pointe
          </h3>
          <p className="text-left sm:text-center">
            Un site unique, développé avec Next.js, React et Tailwind CSS, pour
            une performance et une évolutivité maximales. Dites adieu aux
            designs génériques !
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="bg-white rounded-full">
            <Image
              src="/Ensemble.svg"
              alt="Ensemble"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-base/7 font-semibold text-blue-600">
            Votre équipe web dédiée, toujours à vos côtés.
          </h3>
          <p className="text-left sm:text-center">
            Bénéficiez d'un support humain réactif et expert pour vous guider,
            répondre à vos questions et faire évoluer votre site en fonction de
            vos besoins. Vous n'êtes jamais seul avec Klyx.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="bg-white rounded-full">
            <Image
              src="/Server-bro.svg"
              alt="Ensemble"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-base/7 font-semibold text-blue-600">
            Zéro souci technique, une performance optimale garantie.{" "}
          </h3>
          <p className="text-left sm:text-center">
            Nous gérons l'hébergement, le nom de domaine et la maintenance pour
            que votre site soit toujours rapide, sécurisé et accessible, sans
            que vous ayez à lever le petit doigt.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="bg-white rounded-full">
            <Image
              src="/Privacy policy-rafiki.svg"
              alt="Ensemble"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-base/7 font-semibold text-blue-600">
            Votre sécurité et la confidentialité de vos clients, notre priorité
            absolue.{" "}
          </h3>
          <p className="text-left sm:text-center">
            Nous appliquons les meilleures pratiques du web pour garantir la
            protection de vos données et la conformité de votre site.
          </p>
        </div>
      </div>
    </section>
  );
}
