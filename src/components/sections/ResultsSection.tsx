import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { TrendingUp, CheckCircle, DollarSign, Play, User } from "lucide-react";
import { SectionTransition } from "@/components/sections/SectionTransition";
import { useEffect, useState } from "react";

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
            name: "João Silva",
            result: "+350% em 30 dias",
            quote: "Nunca imaginei que seria tão simples. O protocolo é claro e direto ao ponto.",
            icon: TrendingUp,
            role: "Iniciante",
            videoUrl: "", // Placeholder para URL do vídeo
        },
        {
            name: "Maria Santos",
            result: "+1200% em 60 dias",
            quote: "Eu era completamente leiga. Hoje tenho uma renda extra sólida e confiável.",
            icon: CheckCircle,
            role: "Leiga em investimentos",
            videoUrl: "", // Placeholder para URL do vídeo
        },
        {
            name: "Pedro Costa",
            result: "+580% em 45 dias",
            quote: "Testei com valor baixo no início. Depois que vi o resultado, aumentei o investimento.",
            icon: DollarSign,
            role: "Primeiro investidor",
            videoUrl: "", // Placeholder para URL do vídeo
        },
        {
            name: "Ana Oliveira",
            result: "+890% em 50 dias",
            quote: "Comecei com medo, mas o protocolo me deu confiança. Resultados incríveis!",
            icon: TrendingUp,
            role: "Mãe de família",
            videoUrl: "", // Placeholder para URL do vídeo
        },
        {
            name: "Carlos Mendes",
            result: "+750% em 40 dias",
            quote: "Aposentado que encontrou uma nova fonte de renda. Recomendo para todos!",
            icon: CheckCircle,
            role: "Aposentado",
            videoUrl: "", // Placeholder para URL do vídeo
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
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card className="p-6 card-premium hover:border-success/20 transition-all duration-300 h-full">
                                        {/* Placeholder do vídeo */}
                                        <div className="relative mb-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/20 aspect-video flex items-center justify-center group cursor-pointer hover:from-success/20 hover:to-success/10 transition-all duration-300">
                                            {testimonial.videoUrl ? (
                                                <video
                                                    className="w-full h-full object-cover rounded-lg"
                                                    controls
                                                    poster={`/api/placeholder/400/225?text=${encodeURIComponent(
                                                        testimonial.name
                                                    )}`}>
                                                    <source src={testimonial.videoUrl} type="video/mp4" />
                                                    Seu navegador não suporta vídeos.
                                                </video>
                                            ) : (
                                                <div className="text-center">
                                                    <div className="p-4 bg-success/20 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:bg-success/30 transition-colors">
                                                        <Play className="h-8 w-8 text-success" />
                                                    </div>
                                                    <p className="text-sm text-muted-foreground font-medium">
                                                        Vídeo de {testimonial.name}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        Clique para assistir
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Resultado */}
                                        <div className="flex items-center justify-center gap-2">
                                            <TrendingUp className="h-5 w-5 text-success" />
                                            <p className="font-heading font-bold text-success">
                                                {testimonial.result}
                                            </p>
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
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SectionTransition text="Estes resultados são reais. Agora veja o desafio que propomos para você:" />
        </section>
    );
};
