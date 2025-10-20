import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, CheckCircle, DollarSign, Play, User } from "lucide-react";

export const Testimonials = () => {
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
        <section id="resultados" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue">
                        Veja o que alunos comuns estão conquistando
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Resultados reais de pessoas que aplicaram o protocolo
                    </p>
                </div>

                <div className="relative mb-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto"
                    >
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
                                                    poster={`/api/placeholder/400/225?text=${encodeURIComponent(testimonial.name)}`}
                                                >
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
                                            <p className="font-heading font-bold text-success">{testimonial.result}</p>
                                        </div>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12" />
                        <CarouselNext className="hidden md:flex -right-12" />
                    </Carousel>

                    {/* Indicadores para mobile */}
                    <div className="flex justify-center mt-6 md:hidden">
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className="w-2 h-2 rounded-full bg-success/30"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
