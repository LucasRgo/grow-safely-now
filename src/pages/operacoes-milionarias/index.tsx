import { CountdownProvider } from "./useCountdown";
import { HeroSection } from "./HeroSection";
import { PlansSection } from "./PlansSection";
import { FinalUrgencySection } from "./FinalUrgencySection";
import { PotencialRealOperacoes } from "./PotencialRealOperacoes";
import { WhatYouGetSection } from "./WhatYouGetSection";

import { VideoPresentationSection } from "./VideoPresentationSection";

export default function OperacoesMilionarias() {
    return (
        <CountdownProvider>
            <div className="min-h-screen bg-black w-full overflow-x-hidden">
                <HeroSection />
                <VideoPresentationSection />
                <PotencialRealOperacoes />
                <WhatYouGetSection />
                <PlansSection />
                <FinalUrgencySection />
            </div>
        </CountdownProvider>
    );
}
