import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Frown, X, Shield, TrendingUp, Smile, CheckCircle } from "lucide-react";

export const PainDesireSection = () => {
    const pains = [
        { icon: TrendingDown, text: "Perda de dinheiro com investimentos ruins" },
        { icon: Frown, text: "Frustração por não saber por onde começar" },
        { icon: AlertCircle, text: "Medo de ser enganado por falsas promessas" },
        { icon: X, text: "Insegurança sobre cada decisão financeira" },
    ];

    const desires = [
        { icon: Shield, text: "Protocolo validado e testado por centenas" },
        { icon: TrendingUp, text: "Crescimento consistente e previsível" },
        { icon: Smile, text: "Paz de espírito em cada operação" },
        { icon: CheckCircle, text: "Passo a passo claro, sem complicação" },
    ];

    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--blue-accent))] mb-4">
                        Você também sente isso?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        É hora de transformar sua realidade financeira
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Pain side */}
                    <Card className="p-6 md:p-8 card-premium border-red-500/20">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4 border border-red-500/20">
                                <AlertCircle className="h-8 w-8 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-red-500 mb-2">ANTES</h3>
                            <p className="text-muted-foreground">Perda, medo e insegurança</p>
                        </div>

                        <div className="space-y-4">
                            {pains.map((pain, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                                    <pain.icon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                    <p className="text-foreground">{pain.text}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Desire side */}
                    <Card className="p-6 md:p-8 card-premium border-success/20">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4 border border-success/20">
                                <CheckCircle className="h-8 w-8 text-success" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-success mb-2">DEPOIS</h3>
                            <p className="text-muted-foreground">Clareza, método e resultado</p>
                        </div>

                        <div className="space-y-4">
                            {desires.map((desire, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-success/5 rounded-lg border border-success/10">
                                    <desire.icon className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                                    <p className="text-foreground">{desire.text}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};
