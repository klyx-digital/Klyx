import { Collapse } from "./Collapse";
import { Pricing } from "./Pricing";

export const metadata = {
  title: "Tarifs Klyx – Formules Essentiel, Pro & Premium",
  description:
    "Découvrez nos abonnements sites web sur-mesure, SEO inclus, hébergement & maintenance à partir de 99€/mois.",
  alternates: { canonical: "https://klyxdigital.fr/pricing" },
  openGraph: {
    title: "Klyx – Tarifs & Formules",
    description:
      "100% sur-mesure, SEO inclus, à partir de 99€/mois. Hébergement & maintenance.",
    url: "https://klyxdigital.fr/pricing",
    siteName: "Klyx Digital",
    images: [
      {
        url: "https://klyxdigital.fr/og/pricing.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klyx – Tarifs & Formules",
    description: "Abonnements site web sur-mesure dès 99€/mois, SEO inclus.",
    images: ["https://klyxdigital.fr/og/pricing.png"],
  },
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Abonnement site web sur-mesure Klyx",
            description:
              "Plans Essentiel, Pro et Premium incluant site sur-mesure, SEO, hébergement et maintenance.",
            brand: {
              "@type": "Organization",
              name: "Klyx Digital",
              url: "https://klyxdigital.fr",
              logo: "https://klyxdigital.fr/logo.png",
            },
            offers: [
              {
                "@type": "Offer",
                name: "Essentiel",
                price: "99",
                priceCurrency: "EUR",
                url: "https://klyxdigital.fr/pricing",
                availability: "https://schema.org/InStock",
                validFrom: "2025-05-17",
              },
              {
                "@type": "Offer",
                name: "Pro",
                price: "199",
                priceCurrency: "EUR",
                url: "https://klyxdigital.fr/pricing",
                availability: "https://schema.org/InStock",
                validFrom: "2025-05-17",
              },
              {
                "@type": "Offer",
                name: "Premium",
                price: "299",
                priceCurrency: "EUR",
                url: "https://klyxdigital.fr/pricing",
                availability: "https://schema.org/InStock",
                validFrom: "2025-05-17",
              },
            ],
          }),
        }}
      />
      <Pricing />
      <Collapse />
    </main>
  );
}
