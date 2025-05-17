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
            offers: tiers.map((tier) => ({
              "@type": "Offer",
              name: tier.name,
              price: tier.priceMonthly,
              priceCurrency: "EUR",
              url: `https://klyxdigital.fr/register?plan=${tier.name}`,
              availability: "https://schema.org/InStock",
              validFrom: new Date().toISOString().split("T")[0],
            })),
          }),
        }}
      />
      <Pricing />
      <Collapse />
    </main>
  );
}
