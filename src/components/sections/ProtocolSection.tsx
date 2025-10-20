import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, BookOpen, Zap, CheckCircle } from "lucide-react";

export const ProtocolSection = () => {
    const features = [
        {
            icon: BookOpen,
            title: "Passo a passo simples",
            description: "Instruções claras e diretas, sem jargões complicados. Qualquer pessoa consegue seguir.",
        },
        {
            icon: Shield,
            title: "Sem risco de perda",
            description: "Estratégia antiperda validada. Você opera com segurança e tranquilidade.",
        },
        {
            icon: Zap,
            title: "Acesso imediato",
            description: "Comece hoje mesmo. Material completo disponível assim que você garantir sua vaga.",
        },
        {
            icon: CheckCircle,
            title: "Método validado",
            description: "Testado e aprovado por centenas de alunos com resultados reais comprovados.",
        },
    ];

    return (
        <section id="protocolo" className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Subtle geometric pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(0deg, transparent 24%, rgba(0, 200, 83, .05) 25%, rgba(0, 200, 83, .05) 26%, transparent 27%, transparent 74%, rgba(0, 200, 83, .05) 75%, rgba(0, 200, 83, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 200, 83, .05) 25%, rgba(0, 200, 83, .05) 26%, transparent 27%, transparent 74%, rgba(0, 200, 83, .05) 75%, rgba(0, 200, 83, .05) 76%, transparent 77%, transparent)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-success/10 rounded-full border border-success/20">
                            <div className="relative">
                                <Shield className="h-10 w-10 md:h-12 md:w-12 text-success" />
                                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-success absolute -bottom-1 -right-1" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-green">
                        O que é o Protocolo de Multiplicação Antiperda?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Um sistema completo, passo a passo, para você multiplicar seu patrimônio com segurança e
                        previsibilidade
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="p-6 card-premium hover:border-success/20 transition-all duration-300 text-center group">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-success/10 rounded-full border border-success/20 group-hover:bg-success/20 transition-all">
                                    <feature.icon className="h-8 w-8 text-success" />
                                </div>
                            </div>
                            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
