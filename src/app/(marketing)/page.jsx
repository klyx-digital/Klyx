import Hero from "./Hero";
import { MarketingLayout } from "./MarketingLayout";
import { Features } from "./Features";
import { ForWho } from "./ForWho";
import { Statistique } from "./Statistique";
import { PourquoiKlyxPreview } from "./PourquoiKlyxPreview";
import { Etape } from "./Etape";

export default function Page() {
  return (
    <MarketingLayout>
      <Hero />
      <Features />
      <Statistique />
      <PourquoiKlyxPreview />
      <ForWho />
      <Etape />
    </MarketingLayout>
  );
}
