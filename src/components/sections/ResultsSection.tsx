import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { TrendingUp } from "lucide-react";
import { SectionTransition } from "@/components/sections/SectionTransition";
import { useEffect, useState, useRef } from "react";

// Component to handle vturb-smartplayer embeds
const VideoPlayer = ({ playerId, scriptUrl }: { playerId: string; scriptUrl: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        if (!containerRef.current || scriptLoadedRef.current) return;

        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
        if (!existingScript) {
            // Load the script
            const script = document.createElement("script");
            script.src = scriptUrl;
            script.async = true;
            document.head.appendChild(script);
        }

        // Create the player element
        const playerElement = document.createElement("vturb-smartplayer");
        playerElement.id = playerId;
        playerElement.setAttribute("style", "display: block; margin: 0 auto; width: 100%;");
        containerRef.current.appendChild(playerElement);

        scriptLoadedRef.current = true;

        return () => {
            // Cleanup
            if (containerRef.current && containerRef.current.contains(playerElement)) {
                containerRef.current.removeChild(playerElement);
            }
        };
    }, [playerId, scriptUrl]);

    return <div ref={containerRef} className="w-full" />;
};

export const Testimonials = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const testimonials = [
        {
            playerId: "vid-6904faf538a8c7d701dda218",
            scriptUrl: "https://scripts.converteai.net/e4afbe22-7a6e-4dd8-9576-24f2a422d026/players/6904faf538a8c7d701dda218/v4/player.js",
            caption: "Jabez - Dobrou Capital em 2 meses",
        },
        {
            playerId: "vid-6904cd3d7394fd46f1d412c8",
            scriptUrl: "https://scripts.converteai.net/e4afbe22-7a6e-4dd8-9576-24f2a422d026/players/6904cd3d7394fd46f1d412c8/v4/player.js",
            caption: "Jhonata - de R$200 para R$1.500 por operação",
        },
        {
            playerId: "vid-6904cd871ca2b9b70e6b393a",
            scriptUrl: "https://scripts.converteai.net/e4afbe22-7a6e-4dd8-9576-24f2a422d026/players/6904cd871ca2b9b70e6b393a/v4/player.js",
            caption: "Vitor - de R$50 pra R$500 por operação",
        },
        {
            playerId: "vid-6904cdba1ca2b9b70e6b397d",
            scriptUrl: "https://scripts.converteai.net/e4afbe22-7a6e-4dd8-9576-24f2a422d026/players/6904cdba1ca2b9b70e6b397d/v4/player.js",
            caption: "Bruno - de R$50 pra R$600 por operação",
        },
    ];

    return (
        <section
            id="resultados"
            className="py-8 md:py-16 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
            {/* Background texture overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="absolute top-20 left-10 w-32 h-32 border border-gray-700/30 rounded-full" />
                <div className="absolute bottom-20 right-10 w-40 h-40 border border-gray-700/30 rounded-full" />
            </div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue">
                        Veja o que pessoas comuns estão conquistando
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Resultados reais de pessoas que aplicaram o protocolo
                    </p>
                </div>

                <div className="relative mb-12">
                    {/* Texto indicativo para arrastar */}
                    <div className="text-center mb-2">
                        <p className="text-sm md:text-base text-muted-foreground font-medium">
                            Arraste para ver mais &gt;
                        </p>
                    </div>

                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto">
                        <CarouselContent className="-ml-2 md:-ml-4 rounded-lg">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 rounded-lg">
                                    <Card className="p-0 hover:border-success/20 transition-all duration-300 h-full flex flex-col">
                                        {/* Video */}
                                        <div className="relative bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/20 aspect-video overflow-hidden">
                                            <VideoPlayer playerId={testimonial.playerId} scriptUrl={testimonial.scriptUrl} />
                                        </div>

                                        {/* Bottom content with padding */}
                                        <div className="p-4 mt-auto rounded-b-lg">
                                            {/* TrendingUp Icon and Caption */}
                                            <div className="flex items-center justify-center gap-2">
                                                <TrendingUp className="h-5 w-5 text-success" />
                                                <p className="text-sm md:text-base text-foreground font-medium">
                                                    {testimonial.caption}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="flex -left-4 md:-left-12" />
                        <CarouselNext className="flex -right-4 md:-right-12" />
                    </Carousel>

                    {/* Indicadores para mobile */}
                    <div className="flex justify-center mt-6 md:hidden">
                        <div className="flex gap-3">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full border transition-all duration-300 cursor-pointer ${
                                        index + 1 === current
                                            ? "bg-success border-success shadow-lg shadow-success/20"
                                            : "bg-success/40 border-success/60 hover:bg-success/60"
                                    }`}
                                    onClick={() => api?.scrollTo(index)}
                                    aria-label={`Ir para slide ${index + 1} de ${count}`}
                                    title={`Slide ${index + 1} de ${count}`}
                                >
                                    <span className="sr-only">Ir para slide {index + 1} de {count}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SectionTransition text="Estes resultados são reais. Agora veja o desafio que propomos para você:" />
        </section>
    );
};
