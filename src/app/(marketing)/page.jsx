import Script from "next/script";
import Hero from "./Hero";
import { Features } from "./Features";
import { ForWho } from "./ForWho";
import { Statistique } from "./Statistique";
import { PourquoiKlyxPreview } from "./PourquoiKlyxPreview";
import { Etape } from "./Etape";
import { CTA } from "./CTA";

export const metadata = {
  title: "Klyx – Votre site web sur-mesure, conçu pour convertir",
  description:
    "Abonnement mensuel tout-inclus à partir de 99 €/mois : site 100 % personnalisé, hébergement, maintenance, SEO et support humain.",
  alternates: {
    canonical: "https://klyxdigital.fr/",
    languages: { fr: "https://klyxdigital.fr/" },
  },
  openGraph: {
    type: "website",
    url: "https://klyxdigital.fr/",
    title: "Klyx – Votre site web sur-mesure, conçu pour convertir",
    description:
      "Abonnement mensuel tout-inclus à partir de 99 €/mois : site 100 % personnalisé, hébergement, maintenance, SEO et support humain.",
    siteName: "Klyx",
    images: [
      {
        url: "https://klyxdigital.fr/og-image-hero.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@klyx_digital",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Klyx",
          "url": "https://klyxdigital.fr/",
          "logo": "https://klyxdigital.fr/Logo Klyx.svg",
          "sameAs": [
            "https://www.facebook.com/klyx_digital",
            "https://www.instagram.com/klyx_digital",
            "https://x.com/klyx_digital",
            "https://github.com/klyx-digital"
          ]
        }`}
      </Script>
      <main>
        <Hero />
        <Features />
        <Statistique />
        <PourquoiKlyxPreview />
        <ForWho />
        <Etape />
        <CTA />
      </main>
    </>
  );
}
