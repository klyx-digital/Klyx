import { Fragment } from "react";
import { CheckIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";

const tiers = [
  {
    name: "Essentiel",
    description:
      "Le point de départ idéal pour les indépendants et petites entreprises qui veulent être visibles rapidement.",
    priceMonthly: "99",
    href: "#",
    highlights: [
      { description: "Site 100% sur-mesure (jusqu'à 5 pages)" },
      { description: "SEO & référencement local inclus" },
      { description: "Design moderne et responsive" },
      { description: "Hébergement & nom de domaine offert la 1ère année" },
      { description: "Maintenance et mises à jour" },
      { description: "2 modifications incluses/mois" },
      { description: "Blog intégré", disabled: true },
      { description: "E-commerce", disabled: true },
    ],
  },
  {
    name: "Pro",
    description:
      "Pour les entreprises qui veulent un site plus complet, un meilleur SEO et un blog intégré.",
    priceMonthly: "179",
    href: "#",
    highlights: [
      { description: "Site avancé (jusqu'à 12 pages)" },
      { description: "SEO avancé & référencement priorisé" },
      { description: "Blog intégré" },
      { description: "Formulaires de contact avancés" },
      { description: "Hébergement sécurisé & mises à jour automatiques" },
      { description: "5 modifications incluses/mois" },
      { description: "E-commerce", disabled: true },
    ],
  },
  {
    name: "Premium",
    description:
      "La solution sans limite pour les marques ambitieuses : e‑commerce, performances, et accompagnement expert.",
    priceMonthly: "299",
    href: "#",
    highlights: [
      { description: "Site sur-mesure, pages illimitées" },
      { description: "E-commerce complet" },
      { description: "SEO expert & audit SEO mensuel" },
      { description: "Hébergement premium (haute performance)" },
      { description: "8 modifications incluses/mois" },
      { description: "Rapports mensuels de performances" },
      { description: "Développement spécifique sur devis", disabled: true },
    ],
  },
];

const sections = [
  {
    name: "Fonctionnalités principales",
    features: [
      {
        name: "Site 100% sur-mesure",
        tiers: { Essentiel: true, Pro: true, Premium: true },
      },
      {
        name: "Nombre de pages incluses",
        tiers: { Essentiel: "5", Pro: "12", Premium: "Illimité" },
      },
      {
        name: "SEO & Référencement local",
        tiers: {
          Essentiel: true,
          Pro: true,
          Premium: true,
        },
      },
      {
        name: "Blog intégré",
        tiers: { Essentiel: false, Pro: true, Premium: true },
      },
      {
        name: "E-commerce",
        tiers: { Essentiel: false, Pro: false, Premium: true },
      },
      {
        name: "Formulaires avancés",
        tiers: { Essentiel: false, Pro: true, Premium: true },
      },
    ],
  },
  {
    name: "Gestion & accompagnement",
    features: [
      {
        name: "Modifications incluses/mois",
        tiers: { Essentiel: "2", Pro: "5", Premium: "8" },
      },
      {
        name: "Hébergement & nom de domaine",
        tiers: { Essentiel: true, Pro: true, Premium: true },
      },
      {
        name: "Maintenance & mises à jour",
        tiers: { Essentiel: true, Pro: true, Premium: true },
      },
      {
        name: "Rapports de performance",
        tiers: { Essentiel: true, Pro: true, Premium: true },
      },
      {
        name: "Support prioritaire",
        tiers: { Essentiel: false, Pro: false, Premium: true },
      },
    ],
  },
  {
    name: "Limites & extras",
    features: [
      {
        name: "Pages supplémentaires",
        tiers: { Essentiel: "80 €/page", Pro: "80 €/page", Premium: "Inclus" },
      },
      {
        name: "Modifications supplémentaires",
        tiers: {
          Essentiel: "40 €/modif.",
          Pro: "35 €/modif.",
          Premium: "30 €/modif.",
        },
      },
      {
        name: "Développement spécifique",
        tiers: { Essentiel: false, Pro: false, Premium: "Sur devis" },
      },
    ],
  },
];

export function Pricing() {
  return (
    <div className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl lg:text-pretty">
          Choisissez la formule adaptée à votre ambition.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-600 max-lg:mx-auto sm:text-xl/8">
          Tous nos plans incluent la création d’un site web 100% sur-mesure,
          optimisé SEO, hébergé et maintenu par nos soins.
        </p>
      </div>
      <div className="relative pt-16 sm:pt-24">
        <div className="absolute inset-x-0 top-48 bottom-0 bg-[radial-gradient(circle_at_center_center,#3b82f6,#1e40af,#030712_70%)] lg:bg-[radial-gradient(circle_at_center_150%,#3b82f6,#1e40af,#030712_70%)]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="-m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                  <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <h2 className="text-sm font-semibold text-blue-600">
                      {tier.name} <span className="sr-only">plan</span>
                    </h2>
                    <p className="mt-2 text-sm/6 text-pretty text-gray-600">
                      {tier.description}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-5xl font-semibold text-gray-950">
                        {tier.priceMonthly}
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>€</p>
                        <p>par mois</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      {tier.name === "Essentiel" && (
                        <>
                          <Link
                            href="/register?plan=Essentiel"
                            aria-label="Créer mon site Essentiel avec Klyx"
                            className="inline-block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Créer mon site Essentiel
                          </Link>
                        </>
                      )}
                      {tier.name === "Pro" && (
                        <>
                          <Link
                            href="/register?plan=Pro"
                            aria-label="Passer à l'offre Pro"
                            className="inline-block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Créer mon site Pro
                          </Link>
                        </>
                      )}
                      {tier.name === "Premium" && (
                        <>
                          <Link
                            href="/contact?plan=Premium"
                            aria-label="Être recontacté pour l'offre Premium"
                            className="inline-block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            Créer mon site Premium
                          </Link>
                        </>
                      )}
                    </div>

                    <div className="mt-8">
                      <h3 className="text-sm/6 font-medium text-gray-950">
                        Inclus dans cette offre&nbsp;:
                      </h3>
                      <ul className="mt-3 space-y-3">
                        {tier.highlights.map((highlight) => (
                          <li
                            key={highlight.description}
                            data-disabled={highlight.disabled}
                            className="group flex items-start gap-4 text-sm/6 text-gray-600 data-disabled:text-gray-400"
                          >
                            <span className="inline-flex h-6 items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="size-4 fill-gray-400 group-data-disabled:fill-gray-300"
                              />
                            </span>
                            {highlight.disabled ? (
                              <span className="sr-only">Not included:</span>
                            ) : null}
                            {highlight.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between py-16 opacity-60 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 "></div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <table className="w-full text-left max-sm:hidden">
          <caption className="sr-only">Pricing plan comparison</caption>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr>
              <td className="p-0" />
              {tiers.map((tier) => (
                <th key={tier.name} scope="col" className="p-0">
                  <div className="text-sm font-semibold text-blue-600">
                    {tier.name} <span className="sr-only">plan</span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-0" />
              {tiers.map((tier) => (
                <td key={tier.name} className="px-0 pt-3 pb-0">
                  <Link
                    href={tier.href}
                    aria-label={`Get started with the ${tier.name} plan`}
                    className="inline-block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                  >
                    Démarrer
                  </Link>
                </td>
              ))}
            </tr>
          </thead>
          {sections.map((section) => (
            <tbody key={section.name} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                    {section.name}
                  </div>
                </th>
              </tr>
              {section.features.map((feature) => (
                <tr
                  key={feature.name}
                  className="border-b border-gray-100 last:border-none"
                >
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    {feature.name}
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="p-4 max-sm:text-center">
                      {typeof feature.tiers[tier.name] === "string" ? (
                        <>
                          <span className="sr-only">{tier.name} includes:</span>
                          <span className="text-sm/6 text-gray-950">
                            {feature.tiers[tier.name]}
                          </span>
                        </>
                      ) : (
                        <>
                          {feature.tiers[tier.name] === true ? (
                            <CheckIcon
                              aria-hidden="true"
                              className="inline-block size-4 fill-green-600"
                            />
                          ) : (
                            <MinusIcon
                              aria-hidden="true"
                              className="inline-block size-4 fill-gray-400"
                            />
                          )}

                          <span className="sr-only">
                            {feature.tiers[tier.name] === true
                              ? `Included in ${tier.name}`
                              : `Not included in ${tier.name}`}
                          </span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
        <TabGroup className="sm:hidden">
          <TabList className="flex">
            {tiers.map((tier) => (
              <Tab
                key={tier.name}
                className="w-1/3 border-b border-gray-100 py-4 text-base/8 font-medium text-blue-600 data-selected:border-blue-600 [&:not([data-focus])]:focus:outline-hidden"
              >
                {tier.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels as={Fragment}>
            {tiers.map((tier) => (
              <TabPanel key={tier.name}>
                <Link
                  href={tier.href}
                  className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                >
                  Créer mon site {tier.name}
                </Link>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {section.name}
                    </div>
                    <dl>
                      {section.features.map((feature) => (
                        <div
                          key={feature.name}
                          className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                        >
                          <dt className="text-sm/6 font-normal text-gray-600">
                            {feature.name}
                          </dt>
                          <dd className="text-center">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <span className="text-sm/6 text-gray-950">
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="inline-block size-4 fill-green-600"
                                  />
                                ) : (
                                  <MinusIcon
                                    aria-hidden="true"
                                    className="inline-block size-4 fill-gray-400"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Yes"
                                    : "No"}
                                </span>
                              </>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Fragment>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
      <p className="mt-4 text-sm text-gray-500 max-w-3xl mx-auto text-center px-6">
        <strong className="text-black">À savoir :</strong> Les modifications
        incluses concernent les textes, images ou ajustements mineurs de design.
        Les modifications non utilisées ne sont pas reportables. Les évolutions
        structurelles ou ajouts de fonctionnalités sont facturés sur devis.
      </p>
    </div>
  );
}
