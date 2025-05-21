"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import meet from "../../../public/Meet.jpg";
import code from "../../../public/Code.jpg";
import deploy from "../../../public/Deploie.jpg";

const features = [
  {
    title: "Parlons de vous",
    description:
      "Partagez vos objectifs et vos rêves à travers un quiz interactif. Ce brief détaillé est la clé pour créer un site web qui vous ressemble vraiment.",
    image: meet,
  },
  {
    title: "Votre site prend forme, sous votre regard",
    description:
      "Suivez l'évolution de votre site sur-mesure, visualisez chaque détail et demandez des modifications facilement. Votre avis compte à chaque étape.",
    image: code,
  },
  {
    title: "Votre succès en ligne commence ici.",
    description:
      "Une fois validé, votre site optimisé (SEO, sécurité) est mis en ligne. Mais notre accompagnement ne s'arrête pas là : nous restons à vos côtés pour la maintenance et les évolutions futures.",
    image: deploy,
  },
];

export function Etape() {
  const [tabOrientation, setTabOrientation] = useState("horizontal");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 rounded-2xl pt-20 pb-20 sm:py-32"
    >
      <div className="relative p-4">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Votre site web clé en main en 3 étapes simples{" "}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Votre projet web mérite une approche simple et efficace. Klyx vous
            accompagne main dans la main à travers 3 étapes claires pour
            transformer votre vision en une réalité en ligne performante, sans
            stress et avec un accompagnement personnalisé à chaque étape.
          </p>
        </div>
        <TabGroup
          selectedIndex={selectedIndex}
          onChange={handleTabChange}
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        "group relative rounded-full pl-12 pr-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6 lg:pl-16 transition-all duration-200",
                        selectedIndex === featureIndex
                          ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset"
                          : "hover:bg-white/10 lg:hover:bg-white/5"
                      )}
                    >
                      <div
                        className={clsx(
                          "absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm lg:left-6",
                          selectedIndex === featureIndex
                            ? "bg-blue-600 text-white"
                            : "bg-white/20 text-white"
                        )}
                      >
                        {features.indexOf(feature) + 1}
                      </div>
                      <h3 className="relative">
                        <Tab
                          className={clsx(
                            "font-display text-lg data-selected:not-data-focus:outline-hidden text-left hover:cursor-pointer",
                            selectedIndex === featureIndex
                              ? "text-blue-600 lg:text-white"
                              : "text-blue-100 hover:text-white lg:text-white"
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block",
                          selectedIndex === featureIndex
                            ? "text-white"
                            : "text-blue-100 group-hover:text-white"
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-2xl shadow-blue-900/30 sm:w-auto lg:mt-0 lg:w-[57.8125rem] transition-all duration-300 hover:shadow-blue-900/40 hover:-translate-y-1">
                      <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                        Étape {features.indexOf(feature) + 1}
                      </div>
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt={feature.title}
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </div>
    </section>
  );
}
