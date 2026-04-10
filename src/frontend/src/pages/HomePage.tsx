import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { FloatingOrderButton } from "../components/FloatingOrderButton";
import { HeroBanner } from "../components/HeroBanner";
import { Layout } from "../components/Layout";
import { OffersSection } from "../components/OffersSection";
import { ProductsSection } from "../components/ProductsSection";

export function HomePage() {
  return (
    <Layout>
      <HeroBanner />
      <ProductsSection />
      <AboutSection />
      <OffersSection />
      <ContactSection />
      <FloatingOrderButton />
    </Layout>
  );
}
