import "@/styles/globals.css";

export const metadata = {
  title: "Klyx",
  description:
    "Klyx est une agence digitale spécialisée dans la création de sites web professionnels modernes, performants et adaptés aux besoins des entrepreneurs et petites entreprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
