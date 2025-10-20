import { Navbar } from "@/components/Navbar";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { Testimonials } from "@/components/sections/ResultsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { QuestionsSection } from "@/components/sections/QuestionsSection";
import { LastChanceSection } from "@/components/sections/LastChanceSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { InvestmentCalculator } from "@/components/sections/InvestmentCalculator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeaderSection />
      <InvestmentCalculator />
      <Testimonials />
      <BeforeAfterSection />
      <StatsSection />
      <HowItWorksSection />
      <PricingSection />
      <LastChanceSection />
      <QuestionsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
