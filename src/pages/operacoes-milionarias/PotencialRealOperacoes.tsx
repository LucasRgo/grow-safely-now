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
import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import print1 from "@/assets/images/PrintsOperacoes/1.jpeg";
import print2 from "@/assets/images/PrintsOperacoes/2.jpeg";
import print3 from "@/assets/images/PrintsOperacoes/3.jpeg";
import print4 from "@/assets/images/PrintsOperacoes/4.jpeg";
import print5 from "@/assets/images/PrintsOperacoes/5.jpeg";

export const PotencialRealOperacoes = () => {
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
            title: "R$5.000 → R$380.000 em 8 meses",
            percentage: "7.500%",
            multiplication: "Multiplicado 76x",
            image: print1,
        },
        {
            id: 2,
            title: "R$70.000 em 3 dias",
            percentage: "600%",
            multiplication: "Multiplicado 7x",
            image: print2,
        },
        {
            id: 3,
            title: "R$1.000 → R$11.290 em 1 operação",
            percentage: "1.029%",
            multiplication: "Multiplicado 11x",
            image: print3,
        },
        {
            id: 4,
            title: "R$60.000 em 90 dias",
            percentage: "200%",
            multiplication: "Multiplicado 3x",
            image: print4,
        },
        {
            id: 5,
            title: "$5.000 → $74.000 em 4 meses",
            percentage: "1.380%",
            multiplication: "Multiplicado 15x",
            image: print5,
        },
    ];

    return (
        <section className="py-8 md:py-16 bg-gradient-to-br from-slate-950 via-background to-slate-900/50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 md:mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue">
                            Operações Milionárias Na Prática
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Relatos de alunos que copiaram minhas operações
                        </p>
                    </div>

                    <div className="relative mb-8">
                        <div className="text-center mb-2">
                            <p className="text-sm md:text-base text-white/80 font-medium">
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
                            <CarouselPrevious className="flex -left-4 md:-left-12" />
                            <CarouselNext className="flex -right-4 md:-right-12" />
                        </Carousel>

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
                                        title={`Slide ${index + 1} de ${count}`}>
                                        <span className="sr-only">Ir para slide {index + 1} de {count}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

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
                                            Segurança antes de tudo.
                                        </span>{" "}
                                        Quando o mercado não favorece, o protocolo anti-perda garante a saída no zero a zero.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
            <SectionTransition text="Agora que você viu que é real, simule seu potencial:" />
        </section>
    );
};


