import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { SectionTransition } from "@/components/sections/SectionTransition";
import print1 from "@/assets/images/Prints/1.jpeg";
import print2 from "@/assets/images/Prints/2.jpeg";
import print3 from "@/assets/images/Prints/3.jpeg";
import print4 from "@/assets/images/Prints/4.jpeg";
import print5 from "@/assets/images/Prints/5.jpeg";
import print6 from "@/assets/images/Prints/6.jpeg";
import print7 from "@/assets/images/Prints/7.jpeg";
import print8 from "@/assets/images/Prints/8.jpeg";
import print9 from "@/assets/images/Prints/9.jpeg";
import print10 from "@/assets/images/Prints/10.jpeg";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const PotencialRealSection = () => {
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

    const prints = [
        {
            id: 1,
            title: "R$100 → R$1.400 em 1 operação",
            percentage: "1.300%",
            multiplication: "Multiplicado 14x",
            image: print1,
        },
        {
            id: 2,
            title: "R$500 → R$13.293 em 4 operações",
            percentage: "2.558%",
            multiplication: "Multiplicado 26x",
            image: print2,
        },
        {
            id: 3,
            title: "R$5.000 → R$380.000 em 8 meses",
            percentage: "7.500%",
            multiplication: "Multiplicado 76x",
            image: print3,
        },
        {
            id: 4,
            title: "R$200 → R$2.780 em 1 operação",
            percentage: "1.290%",
            multiplication: "Multiplicado 14x",
            image: print4,
        },
        {
            id: 5,
            title: "R$1.000 → R$11.290 em 1 operação",
            percentage: "1.029%",
            multiplication: "Multiplicado 11x",
            image: print5,
        },
        {
            id: 6,
            title: "R$500 → R$2.000 em 1 operação",
            percentage: "300%",
            multiplication: "Multiplicado 4x",
            image: print6,
        },
        {
            id: 7,
            title: "R$60.000 em 90 dias",
            percentage: "200%",
            multiplication: "Multiplicado 3x",
            image: print7,
        },
        {
            id: 8,
            title: "R$70.000 em 3 dias",
            percentage: "600%",
            multiplication: "Multiplicado 7x",
            image: print8,
        },
        {
            id: 9,
            title: "$5.000 → $74.000 em 4 meses",
            percentage: "1.380%",
            multiplication: "Multiplicado 15x",
            image: print9,
        },
        {
            id: 10,
            title: "578% em 1 operação",
            percentage: "578%",
            multiplication: "Multiplicado 6.8x",
            image: print10,
        },
    ];

    return (
        <section className="py-8 md:py-16 bg-gradient-to-br from-slate-950 via-background to-slate-900/50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Potencial Real de Multiplicação */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 md:mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue">
                            Os Resultados Reais Da Multiplicação
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Exemplos práticos dos resultados reais de CADA operação
                        </p>
                    </div>

                    <div className="relative mb-8">
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
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {prints.map((print, index) => (
                                    <CarouselItem
                                        key={print.id}
                                        className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}>
                                            <Card
                                                className="card-premium hover:border-[hsl(var(--blue-accent))]/30 transition-all duration-300 hover:-translate-y-2 h-full border-[hsl(var(--blue-accent))]/20 overflow-hidden flex flex-col">
                                                <div className="relative bg-background/40 rounded-xl overflow-hidden">
                                                    <img
                                                        src={print.image}
                                                        alt={print.title}
                                                        className="w-full h-auto object-contain"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                                                </div>

                                                <div className="flex flex-col gap-2 p-6 mt-auto text-left">
                                                    <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide text-success">
                                                        <span className="mx-7">{print.percentage}</span>
                                                        <span className="mx-7">{print.multiplication}</span>
                                                    </div>
                                                    <p className="text-base text-center md:text-lg font-semibold text-foreground leading-snug">
                                                        {print.title}
                                                    </p>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex -left-12" />
                            <CarouselNext className="hidden md:flex -right-12" />
                        </Carousel>

                        {/* Indicadores para mobile */}
                        <div className="flex justify-center mt-6 md:hidden">
                            <div className="flex gap-3">
                                {Array.from({ length: count }).map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-3 h-3 rounded-full border transition-all duration-300 cursor-pointer ${
                                            index + 1 === current
                                                ? "bg-[hsl(var(--blue-accent))] border-[hsl(var(--blue-accent))] shadow-lg shadow-[hsl(var(--blue-accent))]/20"
                                                : "bg-[hsl(var(--blue-accent))]/40 border-[hsl(var(--blue-accent))]/60 hover:bg-[hsl(var(--blue-accent))]/60"
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

                    {/* Texto de apoio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="max-w-4xl mx-auto">
                        <Card className="p-6 bg-gradient-to-br from-[hsl(var(--blue-dark))]/20 to-background border-[hsl(var(--blue-accent))]/20">
                            <div className="flex items-start gap-4">
                                <Shield className="h-8 w-8 text-[hsl(var(--blue-accent))] flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                                        <span className="font-semibold text-[hsl(var(--blue-accent))]">
                                            Esses são os resultados reais.
                                        </span>{" "}
                                        O Protocolo Anti-Perda garante que, quando o mercado não favorece, você sai
                                        no zero a zero, sem perdas!
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
            <SectionTransition text="Agora que você viu que é real, veja os benefícios de quem segue o protocolo:" />
        </section>
    );
};
