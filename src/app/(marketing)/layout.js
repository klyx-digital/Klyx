import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Footer } from "@/components/layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <MarketingLayout>
        {children}
        <Footer />
      </MarketingLayout>
    </>
  );
}
