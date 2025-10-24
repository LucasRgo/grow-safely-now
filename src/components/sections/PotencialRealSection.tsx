import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTransition } from "@/components/sections/SectionTransition";
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

    const examples = [
        {
            id: 1,
            title: "Exemplo 1",
            initialValue: "R$ 100",
            finalValue: "R$ 1.000",
            multiplication: "10 VEZES",
            percentage: "1.000%",
            description: "1 operação",
            borderColor: "border-[hsl(var(--blue-accent))]/20",
            badgeColor: "bg-[hsl(var(--blue-dark))]/30",
            badgeBorder: "border-[hsl(var(--blue-accent))]/20",
            textColor: "text-[hsl(var(--blue-accent))]",
        },
        {
            id: 2,
            title: "Exemplo 2 - Popular",
            initialValue: "R$ 500",
            finalValue: "R$ 10.000",
            multiplication: "20 VEZES",
            percentage: "2.000%",
            description: "1 operação bem executada",
            borderColor: "border-[hsl(var(--blue-accent))]/20",
            badgeColor: "bg-[hsl(var(--blue-accent))]/20",
            badgeBorder: "border-[hsl(var(--blue-accent))]/30",
            textColor: "text-[hsl(var(--blue-accent))]",
        },
        {
            id: 3,
            title: "Exemplo 3 - Máximo",
            initialValue: "R$ 1.000",
            finalValue: "R$ 50.000",
            multiplication: "50 VEZES",
            percentage: "5.000%",
            description: "1 operação excepcional",
            borderColor: "border-success/20",
            badgeColor: "bg-success/20",
            badgeBorder: "border-success/30",
            textColor: "text-success",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
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
                            O Potencial Real de Multiplicação
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Exemplos práticos do potêncial real de CADA operação
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
                                {examples.map((example, index) => (
                                    <CarouselItem
                                        key={example.id}
                                        className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}>
                                            <Card
                                                className={`p-6 card-premium hover:border-[hsl(var(--blue-accent))]/30 transition-all duration-300 hover:-translate-y-2 h-full ${example.borderColor}`}>
                                                <div className="text-center space-y-4">
                                                    <div
                                                        className={`inline-block px-4 py-2 ${example.badgeColor} rounded-full border ${example.badgeBorder}`}>
                                                        <span
                                                            className={`text-sm font-semibold ${example.textColor}`}>
                                                            {example.title}
                                                        </span>
                                                    </div>

                                                    <div className="space-y-3">
                                                        <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                                                            <p className="text-sm text-muted-foreground mb-1">
                                                                Valor inicial
                                                            </p>
                                                            <p className="text-2xl font-bold text-foreground">
                                                                {example.initialValue}
                                                            </p>
                                                        </div>

                                                        <div className="flex items-center justify-center">
                                                            <TrendingUp className="h-6 w-6 text-success animate-pulse" />
                                                        </div>

                                                        <div className="p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/30">
                                                            <p className="text-sm text-muted-foreground mb-1">
                                                                {example.id === 1
                                                                    ? "Multiplicação mínima"
                                                                    : example.id === 2
                                                                    ? "Multiplicação alta"
                                                                    : "Potencial máximo documentado"}
                                                            </p>
                                                            <p className="text-3xl font-bold text-success">
                                                                {example.finalValue}
                                                            </p>
                                                            <p className="text-sm text-muted-foreground mt-2">
                                                                MULTIPLICADO {example.multiplication}
                                                            </p>
                                                        </div>

                                                        <div className="pt-2">
                                                            <p className="text-sm text-muted-foreground">
                                                                {example.percentage}
                                                            </p>
                                                            <p className="text-lg font-semibold text-foreground">
                                                                {example.description}
                                                            </p>
                                                        </div>
                                                    </div>
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
                                    />
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
                                            Esses são os potenciais reais.
                                        </span>{" "}
                                        O Protocolo Antiperda garante que, quando o mercado não favorece, você sai
                                        no zero, sem perdas!
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
            <SectionTransition text="Veja a transformação que o protocolo pode fazer na sua vida:" />
        </section>
    );
};
