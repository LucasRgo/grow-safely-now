import { CountdownProvider } from "./useCountdown";
import { HeroSection } from "./HeroSection";
import { PlansSection } from "./PlansSection";
import { FinalUrgencySection } from "./FinalUrgencySection";

export default function OperacoesMilionarias() {
    return (
        <CountdownProvider>
            <div className="min-h-screen bg-black w-full overflow-x-hidden">
                <HeroSection />
                <PlansSection />
                <FinalUrgencySection />
            </div>
        </CountdownProvider>
    );
}
