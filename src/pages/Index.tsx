import { Navbar } from "@/components/Navbar";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { Testimonials } from "@/components/sections/ResultsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { QuestionsSection } from "@/components/sections/QuestionsSection";
import { LastChanceSection } from "@/components/sections/LastChanceSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { InvestmentCalculator } from "@/components/sections/InvestmentCalculator";
import { About } from "@/components/sections/About";
import { UrgencyManager } from "@/components/UrgencyManager";
import { SectionTransition } from "@/components/sections/SectionTransition";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeaderSection />
            <SectionTransition text="Antes de continuar, veja o poder de multiplicação do protocolo:" />

            <InvestmentCalculator />
            <SectionTransition text="Esses números parecem irreais? Veja o que alunos reais estão conquistando:" />

            <Testimonials />
            <SectionTransition text="Se você se identificou com esses resultados, provavelmente também se identifica com isso:" />

            <BeforeAfterSection />
            <SectionTransition text="Agora que você viu a validação, entenda como o protocolo funciona:" />

            <HowItWorksSection />
            <SectionTransition text="Você pode ter tudo isso começando hoje mesmo:" />

            <PricingSection />
            <SectionTransition text="Esta é a última chamada para garantir sua vaga com o preço promocional:" />

            <LastChanceSection />
            <SectionTransition text="Conheça quem criou este protocolo de multiplicação segura:" />

            <About />
            <SectionTransition text="Tire suas últimas dúvidas antes de começar sua jornada:" />

            <QuestionsSection />
            <FooterSection />
            <UrgencyManager />
        </div>
    );
};

export default Index;
