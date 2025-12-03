// src/app/page.tsx
import { Hero } from "../components/Hero";
import { ClientLogos } from "../components/ClientLogos";
import { ProductSection } from "../components/ProductSection";
import { SolutionSection } from "../components/SolutionSection";
import { ControlCenter } from "../components/ControlCenter";
import { ComparisonSection } from "../components/ComparisonSection";
import { AudienceSection } from "../components/AudienceSection";
import { GroupsSection } from "../components/GroupsSection";
import { PricingSection } from "../components/PricingSection";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { AboutSection } from "../components/AboutSection"; // <--- Import New Component

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Product Content */}
      <Hero />

      <ProductSection />
      <SolutionSection />
      <ControlCenter />
      
      {/* Solutions Content */}
      <ComparisonSection />
      <AudienceSection />
      <GroupsSection />

      {/* Pricing Content */}
      <PricingSection />

      {/* About & Contact Info (Placed before FAQ) */}
      <AboutSection />
      
      {/* FAQ Content */}
      <FAQSection />

      {/* Final Call to Action Form */}
      <ContactSection />
    </div>
  );
}