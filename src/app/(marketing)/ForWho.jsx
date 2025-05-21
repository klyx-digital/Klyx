import Image from "next/image";

export function ForWho() {
  return (
    <section className="  rounded-2xl py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Klyx s’adapte à tous les profils
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Le web peut être complexe, mais votre présence en ligne ne devrait
            pas l'être. Klyx rend le digital accessible, performant et rentable
            pour chaque entrepreneur, en adaptant nos solutions à vos besoins
            spécifiques pour une croissance significative.
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
              <p className="text-white/95 drop-shadow-md">
                Vous êtes unique, votre site aussi. Valorisez votre savoir-faire
                et attirez une clientèle ciblée grâce à un site web
                professionnel et facile à gérer. Concentrez-vous sur votre
                passion, nous gérons la technique.
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
              <p className="text-white/95 drop-shadow-md">
                Démarquez-vous et inspirez confiance. Un site web moderne,
                rapide et fiable signé Klyx vous positionne comme un leader et
                attire de nouvelles opportunités commerciales.
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
              <p className="text-white/95 drop-shadow-md">
                Votre croissance, notre expertise. Bénéficiez d'une solution web
                sur-mesure, capable d'évoluer avec vos ambitions, soutenue par
                un accompagnement humain et une gestion technique de pointe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
