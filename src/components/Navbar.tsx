import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            setIsMobileMenuOpen(false);
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

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection("protocolo")}
                            className="text-muted-foreground hover:text-foreground transition-colors font-heading text-sm">
                            O Protocolo
                        </button>
                        <button
                            onClick={() => scrollToSection("resultados")}
                            className="text-muted-foreground hover:text-foreground transition-colors font-heading text-sm">
                            Resultados
                        </button>
                        <button
                            onClick={() => scrollToSection("oferta")}
                            className="text-muted-foreground hover:text-foreground transition-colors font-heading text-sm">
                            Oferta
                        </button>
                        <Button
                            onClick={() => scrollToSection("oferta")}
                            className="bg-success hover:bg-success/90 text-success-foreground font-heading font-semibold">
                            Acessar Agora
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => scrollToSection("protocolo")}
                                className="text-muted-foreground hover:text-foreground transition-colors font-heading text-sm text-left py-2">
                                O Protocolo
                            </button>
                            <button
                                onClick={() => scrollToSection("resultados")}
                                className="text-muted-foreground hover:text-foreground transition-colors font-heading text-sm text-left py-2">
                                Resultados
                            </button>
                            <button
                                onClick={() => scrollToSection("oferta")}
                                className="text-muted-foreground hover:text-foreground transition-colors font-heading text-sm text-left py-2">
                                Oferta
                            </button>
                            <Button
                                onClick={() => scrollToSection("oferta")}
                                className="bg-success hover:bg-success/90 text-success-foreground font-heading font-semibold w-full">
                                Acessar Agora
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
