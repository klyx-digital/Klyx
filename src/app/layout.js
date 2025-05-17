import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Klyx – Agence digitale pour sites web modernes et performants",
  description:
    "Klyx est une agence digitale spécialisée dans la création de sites web professionnels, optimisés SEO et évolutifs, pour les entrepreneurs et PME.",
  keywords: [
    "Klyx",
    "agence digitale",
    "site web",
    "Next.js",
    "SEO",
    "performance",
    "freelance",
    "PME",
    "entrepreneur",
  ],
  authors: [{ name: "Mouctar", url: "https://klyxdigital.fr" }],
  creator: "Klyx",
  publisher: "Klyx",
  metadataBase: new URL("https://klyxdigital.fr"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Klyx – Agence digitale",
    description:
      "Créez un site web sur-mesure, performant et évolutif avec Klyx.",
    url: "https://klyxdigital.fr",
    siteName: "Klyx",
    images: [
      {
        url: "https://klyxdigital.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Klyx logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klyx – Agence digitale",
    description:
      "Créez un site web sur-mesure, performant et évolutif avec Klyx.",
    creator: "@klyx_digital",
    images: ["https://klyxdigital.fr/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
