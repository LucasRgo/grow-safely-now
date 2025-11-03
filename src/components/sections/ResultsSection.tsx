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

const SMARTPLAYER_SDK_URL = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
const SMARTPLAYER_BASE_URL = "https://scripts.converteai.net/e4afbe22-7a6e-4dd8-9576-24f2a422d026";

type VideoIframeProps = {
    embedId: string;
    iframeId: string;
    aspectRatio: number;
    title: string;
    isDragging?: boolean;
};

const VideoIframe = ({ embedId, iframeId, aspectRatio, title, isDragging = false }: VideoIframeProps) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") {
            setShouldLoad(true);
            return;
        }

        const wrapper = wrapperRef.current;
        if (!wrapper) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            setShouldLoad(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                        break;
                    }
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(wrapper);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!shouldLoad) {
            return;
        }

        if (typeof document === "undefined") return;

        if (!document.querySelector(`script[src="${SMARTPLAYER_SDK_URL}"]`)) {
            const script = document.createElement("script");
            script.src = SMARTPLAYER_SDK_URL;
            script.async = true;
            document.head.appendChild(script);
        }

        const iframe = iframeRef.current;
        if (!iframe) {
            return;
        }

        const baseUrl = `${SMARTPLAYER_BASE_URL}/players/${embedId}/v4/embed.html`;

        if (typeof window !== "undefined") {
            const search = window.location.search || "";
            const href = window.location.href;
            const query = search ? `${search}&vl=${encodeURIComponent(href)}` : `?vl=${encodeURIComponent(href)}`;
            iframe.src = `${baseUrl}${query}`;
        } else {
            iframe.src = baseUrl;
        }

        return () => {
            iframe.src = "about:blank";
        };
    }, [embedId, shouldLoad]);

    return (
        <div ref={wrapperRef} id={`${iframeId}_wrapper`} style={{ margin: "0 auto", width: "100%" }}>
            <div
                id={`${iframeId}_aspect`}
                style={{ position: "relative", padding: `${aspectRatio}% 0 0 0` }}>
                <iframe
                    ref={iframeRef}
                    id={iframeId}
                    title={title}
                    loading="lazy"
                    allowFullScreen
                    frameBorder={0}
                    referrerPolicy="origin"
                    src="about:blank"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: isDragging ? "none" : "auto",
                    }}
                />
            </div>
        </div>
    );
};

export const Testimonials = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

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

    // Detectar arrasto usando eventos de toque/mouse
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let isDraggingLocal = false;
        let startX = 0;
        let startY = 0;

        const handleStart = (e: TouchEvent | MouseEvent) => {
            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
            startX = clientX;
            startY = clientY;
            isDraggingLocal = false;
        };

        const handleMove = (e: TouchEvent | MouseEvent) => {
            if (!startX || !startY) return;

            const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
            const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

            const diffX = Math.abs(clientX - startX);
            const diffY = Math.abs(clientY - startY);

            // Se o movimento horizontal for maior que o vertical, está arrastando o carousel
            if (diffX > 10 && diffX > diffY) {
                isDraggingLocal = true;
                setIsDragging(true);
            }
        };

        const handleEnd = () => {
            if (isDraggingLocal) {
                // Pequeno delay para permitir que o carousel termine o movimento
                setTimeout(() => {
                    setIsDragging(false);
                }, 100);
            }
            startX = 0;
            startY = 0;
            isDraggingLocal = false;
        };

        carousel.addEventListener("touchstart", handleStart, { passive: true });
        carousel.addEventListener("touchmove", handleMove, { passive: true });
        carousel.addEventListener("touchend", handleEnd);
        carousel.addEventListener("mousedown", handleStart);
        carousel.addEventListener("mousemove", handleMove);
        carousel.addEventListener("mouseup", handleEnd);
        carousel.addEventListener("mouseleave", handleEnd);

        return () => {
            carousel.removeEventListener("touchstart", handleStart);
            carousel.removeEventListener("touchmove", handleMove);
            carousel.removeEventListener("touchend", handleEnd);
            carousel.removeEventListener("mousedown", handleStart);
            carousel.removeEventListener("mousemove", handleMove);
            carousel.removeEventListener("mouseup", handleEnd);
            carousel.removeEventListener("mouseleave", handleEnd);
        };
    }, []);

    const testimonials = [
        {
            embedId: "6904faf538a8c7d701dda218",
            iframeId: "ifr_6904faf538a8c7d701dda218",
            aspectRatio: 56.25,
            caption: "Jabez - Dobrou Capital em 2 meses",
        },
        {
            embedId: "6904cd3d7394fd46f1d412c8",
            iframeId: "ifr_6904cd3d7394fd46f1d412c8",
            aspectRatio: 56.60377358490566,
            caption: "Jhonata - de R$200 para R$1.500 por operação",
        },
        {
            embedId: "6904cd871ca2b9b70e6b393a",
            iframeId: "ifr_6904cd871ca2b9b70e6b393a",
            aspectRatio: 56.25,
            caption: "Vitor - de R$50 pra R$500 por operação",
        },
        {
            embedId: "6904cdba1ca2b9b70e6b397d",
            iframeId: "ifr_6904cdba1ca2b9b70e6b397d",
            aspectRatio: 56.25,
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
                        ref={carouselRef}
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                            dragFree: false,
                        }}
                        className="w-full max-w-6xl mx-auto"
                        style={{ touchAction: "pan-x" }}>
                        <CarouselContent className="-ml-2 md:-ml-4 rounded-lg">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 rounded-lg">
                                    <Card className="p-0 hover:border-success/20 transition-all duration-300 h-full flex flex-col">
                                        {/* Video */}
                                        <div
                                            className="relative bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/20 overflow-hidden"
                                            style={{ touchAction: "pan-x" }}>
                                            <VideoIframe
                                                embedId={testimonial.embedId}
                                                iframeId={testimonial.iframeId}
                                                aspectRatio={testimonial.aspectRatio}
                                                title={testimonial.caption}
                                                isDragging={isDragging}
                                            />
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
                                    title={`Slide ${index + 1} de ${count}`}>
                                    <span className="sr-only">
                                        Ir para slide {index + 1} de {count}
                                    </span>
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
