import { HeroWhy } from "./HeroWhy";
import { CodeVsNocode } from "./CodeVsNocode";
import { List } from "./List";
import { CtaWhy } from "./CtaWhy";
import { Techno } from "./Techno";

export const metadata = {
  title: "Pourquoi Klyx ? – Klyx Digital",
  description:
    "Découvrez pourquoi Klyx est la solution idéale pour un site professionnel, évolutif et performant, là où les plateformes No-Code et les agences classiques montrent leurs limites.",
  alternates: {
    canonical: "https://klyxdigital.fr/why-klyx",
  },
  openGraph: {
    title: "Pourquoi Klyx ? – Klyx Digital",
    description:
      "Découvrez pourquoi Klyx est la solution idéale pour un site professionnel, évolutif et performant, là où les plateformes No-Code et les agences classiques montrent leurs limites.",
    url: "https://klyxdigital.fr/why-klyx",
    siteName: "Klyx Digital",
    images: [
      {
        url: "https://klyxdigital.fr/og-why-klyx.png",
        width: 1200,
        height: 630,
        alt: "Pourquoi Klyx – Klyx Digital",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pourquoi Klyx ? – Klyx Digital",
    description:
      "Découvrez pourquoi Klyx est la solution idéale pour un site professionnel, évolutif et performant, là où les plateformes No-Code et les agences classiques montrent leurs limites.",
    images: ["https://klyxdigital.fr/og-why-klyx.png"],
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
            "@type": "WebPage",
            url: "https://klyxdigital.fr/why-klyx",
            name: "Pourquoi Klyx ? – Klyx Digital",
            description:
              "Découvrez pourquoi Klyx est la solution idéale pour un site professionnel, évolutif et performant, là où les plateformes No-Code et les agences classiques montrent leurs limites.",
            publisher: {
              "@type": "Organization",
              name: "Klyx Digital",
              logo: {
                "@type": "ImageObject",
                url: "https://klyxdigital.fr/logo-klyx.svg",
              },
            },
          }),
        }}
      />
      <HeroWhy />
      <CodeVsNocode />
      <List />
      <Techno />
      <CtaWhy />
    </main>
  );
}
