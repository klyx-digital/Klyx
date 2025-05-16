import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export function Newsletter() {
  return (
    <div className="bg-gray-900 py-4 sm:py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Restez inspirée , abonnez-vous à la newsletter Klyx&nbsp;!
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Recevez chaque semaine nos meilleurs articles, astuces et
              ressources exclusives directement dans votre boîte mail. Rejoignez
              une communauté passionnée et avancez plus vite dans vos projets
              web.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Adresse e-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Je m’abonne
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Un email par semaine
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Recevez un condensé d’inspiration, de conseils pratiques et de
                nouveautés web chaque vendredi.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Zéro spam, 100% valeur
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Votre adresse reste confidentielle. Désinscription possible à
                tout moment, sans conditions.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
