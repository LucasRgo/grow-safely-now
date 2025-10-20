import { useState, useEffect } from "react";
import { Shield } from "lucide-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
                    : "bg-transparent"
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => scrollToSection("hero")}>
                        <div className="p-2 bg-success/10 rounded-lg">
                            <Shield className="h-6 w-6 md:h-7 md:w-7 text-success" />
                        </div>
                        <span className="font-heading font-bold text-base md:text-lg text-foreground">
                            Protocolo Antiperda
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};
