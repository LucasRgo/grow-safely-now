import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const CHECKOUT_URL = "https://pay.hotmart.com/S102760097M?off=l676dkn1&checkoutMode=10";

export const FloatingCTAButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleCheckout = () => {
        window.open(CHECKOUT_URL, "_self");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:-translate-x-0 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-success via-emerald-500 to-success rounded-full opacity-40 group-hover:opacity-60 blur-xl transition-all duration-300 animate-pulse-slow" />

                <Button
                    onClick={handleCheckout}
                    className="relative bg-gradient-to-br from-success via-success to-emerald-600 hover:from-emerald-600 hover:via-success hover:to-success text-white font-heading font-bold px-6 py-6 md:px-8 md:py-7 rounded-full shadow-[0_8px_30px_rgba(34,197,94,0.5)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.7)] border-2 border-success/50 hover:border-success/80 transition-all duration-300 hover:scale-105 active:scale-95 text-sm md:text-base lg:text-lg whitespace-nowrap">
                    <span className="flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                        QUERO APLICAR O PROTOCOLO
                        <ArrowRight className="h-5 w-5 md:h-6 md:w-6 animate-pulse" />
                    </span>
                </Button>
            </div>
        </div>
    );
};
