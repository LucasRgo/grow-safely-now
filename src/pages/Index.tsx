import { HeroSection } from "@/components/sections/HeroSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { PainDesireSection } from "@/components/sections/PainDesireSection";
import { ProtocolSection } from "@/components/sections/ProtocolSection";
import { ValidationSection } from "@/components/sections/ValidationSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProofSection />
      <PainDesireSection />
      <ProtocolSection />
      <ValidationSection />
      <ProofSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
