import Image from "next/image";

export function ForWho() {
  return (
    <section className="  rounded-2xl py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Un accompagnement sur-mesure, humain et innovant
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Chez Klyx, chaque projet est unique. Nous adaptons nos solutions à
            vos besoins, à votre budget et à vos ambitions, pour rendre le web
            accessible, performant et rentable à tous les entrepreneurs. Notre
            mission : transformer vos idées en une présence digitale qui vous
            ressemble et qui fait grandir votre activité
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4">
          <div
            className="relative overflow-hidden rounded-lg w-full max-w-md
 mx-auto"
          >
            <div className=" aspect-square w-full h-full">
              <Image
                src="/Independant.jpg"
                alt="Indépendant"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                Artisans, indépendants & freelances{" "}
              </h3>
              <p className="text-white/95 text-lg drop-shadow-md">
                Valorisez votre savoir-faire et attirez de nouveaux clients
                grâce à un site professionnel, sans vous soucier de la
                technique.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg w-full max-w-md mx-auto  ">
            <div className=" aspect-square w-full h-full">
              <Image src="/PME.jpg" alt="PME" fill className="object-cover" />
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                TPE et PME
              </h3>
              <p className="text-white/95 text-lg drop-shadow-md">
                Démarquez-vous de la concurrence avec un site moderne, rapide et
                fiable, pensé pour inspirer confiance et générer des
                opportunités.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg w-full max-w-md mx-auto">
            <div className=" aspect-square w-full h-full">
              <Image
                src="/Startup.jpg"
                alt="Startups"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                Startups, entreprises en croissance & grands groupes
              </h3>
              <p className="text-white/95 text-lg drop-shadow-md">
                Bénéficiez d’un site sur-mesure, évolutif et ultra-performant,
                avec un accompagnement humain et une gestion technique complète.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
