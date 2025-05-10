import Hero from "./Hero";
import { MarketingLayout } from "./MarketingLayout";
import { Features } from "./Features";

export default function Page() {
  return (
    <MarketingLayout>
      <Hero />
      <Features />
    </MarketingLayout>
  );
}
