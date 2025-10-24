import { Navbar } from "@/components/Navbar";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { Testimonials } from "@/components/sections/ResultsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PotencialRealSection } from "@/components/sections/PotencialRealSection";
import { CTA } from "@/components/sections/CTA";
import { QuestionsSection } from "@/components/sections/QuestionsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { InvestmentCalculator } from "@/components/sections/InvestmentCalculator";
import { AmateurVsProfessionalSection } from "@/components/sections/AmateurVsProfessionalSection";
import { About } from "@/components/sections/About";
import { UrgencyManager } from "@/components/UrgencyManager";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeaderSection />
            <Testimonials />
            <InvestmentCalculator />
            <AmateurVsProfessionalSection />
            <HowItWorksSection />
            <PotencialRealSection />
            <BeforeAfterSection />
            <CTA />
            <About />
            <QuestionsSection />
            <FooterSection />
            <UrgencyManager />
        </div>
    );
};

export default Index;
