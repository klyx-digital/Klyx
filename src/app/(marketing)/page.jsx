import Hero from "./Hero";
import { Features } from "./Features";
import { ForWho } from "./ForWho";
import { Statistique } from "./Statistique";
import { PourquoiKlyxPreview } from "./PourquoiKlyxPreview";
import { Etape } from "./Etape";
import { CTA } from "./CTA";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <Statistique />
      <PourquoiKlyxPreview />
      <ForWho />
      <Etape />
      <CTA />
    </main>
  );
}
