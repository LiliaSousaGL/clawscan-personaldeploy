// src/app/page.tsx
import { Hero } from "../components/Hero";
import { ClientLogos } from "../components/ClientLogos";
import { ProductSection } from "../components/ProductSection";
import { SolutionSection } from "../components/SolutionSection";
import { ControlCenter } from "../components/ControlCenter";
import { ComparisonSection } from "../components/ComparisonSection";
import { AudienceSection } from "../components/AudienceSection";
import { GroupsSection } from "../components/GroupsSection";
import { PricingSection } from "../components/PricingSection"; // <--- Import New Component

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Product Content */}
      <Hero />
      <ClientLogos />
      <ProductSection />
      <SolutionSection />
      <ControlCenter />
      
      {/* Solutions Content */}
      <ComparisonSection />
      <AudienceSection />
      <GroupsSection />

      {/* Pricing Content */}
      <PricingSection />

      {/* Contact Placeholder */}
      <section id="contact" className="h-[50vh] flex items-center justify-center border-t border-white/5">
        <h2 className="text-3xl text-gray-500">Contact Section Placeholder</h2>
      </section>
    </div>
  );
}