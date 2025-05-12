import Image from "next/image";

export function PourquoiKlyxPreview() {
  return (
    <section className="bg-black text-white rounded-2xl py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Bien plus qu’un site web : une solution complète, humaine et
            performante
          </h2>
          <p className="mt-6 text-base/7 text-gray-200">
            Chez Klyx, nous ne nous contentons pas de livrer un site : nous vous
            accompagnons à chaque étape pour garantir votre sérénité, la
            performance de votre présence en ligne et la croissance de votre
            activité. Découvrez ce qui fait notre force :
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 p-4 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="bg-white rounded-full">
            <Image
              src="/Hand coding-bro.svg"
              alt="Ensemble"
              width={200}
              height={200}
            />
          </div>
          <span className="text-base/7 font-semibold text-blue-600">
            Un site qui vous ressemble, pensé pour durer
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-2xl">
            Création sur-mesure
          </h3>
          <p className="text-center">
            Votre site est unique, conçu à votre image et développé avec les
            technologies les plus modernes (Next.js, React, Tailwind CSS…). Fini
            les templates impersonnels : vous bénéficiez d’une solution
            évolutive, rapide et parfaitement adaptée à vos besoins.
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
          <span className="text-base/7 font-semibold text-blue-600">
            Un accompagnement humain, à chaque instant{" "}
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-2xl">
            Support dédié & réactif{" "}
          </h3>
          <p className="text-center">
            Vous n’êtes jamais seul. Notre équipe est disponible, à l’écoute et
            vous guide à chaque étape. Nous répondons à toutes vos questions et
            faisons évoluer votre site selon vos ambitions.
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
          <span className="text-base/7 font-semibold text-blue-600">
            La technique, c’est notre métier
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-2xl">
            Hébergement & gestion intégrale{" "}
          </h3>
          <p className="text-center">
            Nous prenons en charge l’hébergement, le nom de domaine et toute la
            gestion technique. Votre site reste rapide, sécurisé et accessible,
            sans que vous ayez à vous en soucier.
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
          <span className="text-base/7 font-semibold text-blue-600">
            Vos données, notre priorité
          </span>
          <h3 className="text-xl font-semibold tracking-tight text-pretty sm:text-2xl">
            Sécurité & conformité{" "}
          </h3>
          <p className="text-center">
            La confidentialité et la protection de vos données - et celles de
            vos clients - sont assurées selon les meilleures pratiques du web.
            Naviguez l’esprit tranquille, tout est sous contrôle.
          </p>
        </div>
      </div>
    </section>
  );
}
