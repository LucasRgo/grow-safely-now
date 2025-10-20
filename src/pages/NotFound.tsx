import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col gradient-primary">
            <main className="flex-1 flex items-center justify-center px-4 py-16">
                <div className="max-w-xl w-full text-center card-premium rounded-2xl p-8 md:p-10 glow-border">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase text-foreground mb-3 glow-green">
                        404
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg mb-8">
                        Oops! Página não encontrada.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-lg bg-success px-5 py-3 text-sm md:text-base font-medium text-success-foreground shadow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/50"
                    >
                        Voltar para a página inicial
                    </Link>
                </div>
            </main>

            <FooterSection />
        </div>
    );
};

export default NotFound;
