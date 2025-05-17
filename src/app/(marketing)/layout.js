import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Footer } from "@/components/layout/Footer";

export default function Layout({ children }) {
  return (
    <section>
      <MarketingLayout>
        <main>{children}</main>
        <Footer />
      </MarketingLayout>
    </section>
  );
}
