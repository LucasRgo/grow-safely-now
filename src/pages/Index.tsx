import { Suspense, lazy } from "react";
import { Navbar } from "@/components/Navbar";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { UrgencyManager } from "@/components/UrgencyManager";

const Testimonials = lazy(() =>
    import("@/components/sections/ResultsSection").then((module) => ({
        default: module.Testimonials,
    }))
);

const ChallengeBanner = lazy(() =>
    import("@/components/sections/ChallengeBanner").then((module) => ({
        default: module.ChallengeBanner,
    }))
);

const InvestmentCalculator = lazy(() =>
    import("@/components/sections/InvestmentCalculator").then((module) => ({
        default: module.InvestmentCalculator,
    }))
);

const PotencialRealSection = lazy(() =>
    import("@/components/sections/PotencialRealSection").then((module) => ({
        default: module.PotencialRealSection,
    }))
);

const BeforeAfterSection = lazy(() =>
    import("@/components/sections/BeforeAfterSection").then((module) => ({
        default: module.BeforeAfterSection,
    }))
);

const HowItWorksSection = lazy(() =>
    import("@/components/sections/HowItWorksSection").then((module) => ({
        default: module.HowItWorksSection,
    }))
);

const CTA = lazy(() =>
    import("@/components/sections/CTA").then((module) => ({
        default: module.CTA,
    }))
);

const About = lazy(() =>
    import("@/components/sections/About").then((module) => ({
        default: module.About,
    }))
);

const QuestionsSection = lazy(() =>
    import("@/components/sections/QuestionsSection").then((module) => ({
        default: module.QuestionsSection,
    }))
);

const FooterSection = lazy(() =>
    import("@/components/sections/FooterSection").then((module) => ({
        default: module.FooterSection,
    }))
);

const FloatingCTAButton = lazy(() =>
    import("@/components/FloatingCTAButton").then((module) => ({
        default: module.FloatingCTAButton,
    }))
);

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeaderSection />
            <Suspense fallback={<div role="status" aria-live="polite" className="py-16" />}>
                <Testimonials />
                <ChallengeBanner />
                <InvestmentCalculator />
                <PotencialRealSection />
                <BeforeAfterSection />
                <HowItWorksSection />
                <CTA />
                <About />
                <QuestionsSection />
                <FooterSection />
            </Suspense>
            <UrgencyManager />
            <Suspense fallback={null}>
                <FloatingCTAButton />
            </Suspense>
        </div>
    );
};

export default Index;
