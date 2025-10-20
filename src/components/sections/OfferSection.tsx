import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/CTAButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CheckCircle, Users, FileSpreadsheet, MessageSquare, Gift } from "lucide-react";
import { useState, useEffect } from "react";

export const OfferSection = () => {
    const [spotsLeft, setSpotsLeft] = useState(23);

    useEffect(() => {
        const interval = setInterval(() => {
            setSpotsLeft((prev) => (prev > 5 ? prev - 1 : prev));
        }, 30000); // Decrease every 30 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="oferta" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-urgent/20 text-urgent rounded-full mb-6 animate-pulse-border border border-urgent/30">
                            <Gift className="h-5 w-5" />
                            <span className="font-heading font-semibold text-sm md:text-base">
                                OFERTA EXCLUSIVA
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-green">
                            Tudo isso por apenas R$250
                        </h2>
                        <p className="text-xl md:text-2xl text-urgent font-heading font-semibold mb-6">
                            Mas só até hoje às 23:59
                        </p>

                        <div className="flex justify-center mb-8">
                            <CountdownTimer />
                        </div>
                    </div>

                    <Card className="p-6 md:p-8 lg:p-12 card-premium border-success/20 mb-8">
                        <div className="mb-8">
                            <h3 className="text-xl md:text-2xl font-heading font-bold text-center mb-6 text-foreground">
                                O que está incluso:
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 bg-success/5 rounded-lg border border-success/10">
                                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-heading font-semibold text-base md:text-lg mb-1 text-foreground">
                                            Protocolo Completo de Multiplicação Antiperda
                                        </p>
                                        <p className="text-muted-foreground text-sm md:text-base">
                                            Acesso vitalício ao método completo, com atualizações gratuitas
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-success/5 rounded-lg border border-success/10">
                                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-heading font-semibold text-base md:text-lg mb-1 text-foreground">
                                            Retorno Imediato
                                        </p>
                                        <p className="text-muted-foreground text-sm md:text-base">
                                            Uma única operação já paga o investimento
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-border pt-6 mb-8">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xl md:text-2xl font-heading font-bold gap-2">
                                <span className="text-foreground">Valor total:</span>
                                <div className="text-right">
                                    <div className="text-muted-foreground line-through text-lg md:text-xl">
                                        R$ 500
                                    </div>
                                    <div className="text-urgent text-sm md:text-base font-semibold mt-1">
                                        Desconto de 80.6%
                                    </div>
                                    <div className="text-success text-2xl md:text-3xl glow-green">R$ 97</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <CTAButton size="xl" className="w-full md:w-auto">
                                Quero Acesso AGORA ao Protocolo Validado
                            </CTAButton>

                            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-urgent/10 border border-urgent/30 rounded-lg animate-pulse-border">
                                <Users className="h-5 w-5 text-urgent" />
                                <p className="text-urgent font-heading font-semibold text-sm md:text-base">
                                    Apenas {spotsLeft} vagas restantes
                                </p>
                            </div>
                        </div>
                    </Card>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 md:px-6 py-3 card-premium border-success/20">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <p className="text-muted-foreground text-sm md:text-base">
                                <span className="font-semibold text-success">Garantia de 7 dias</span> - Se não
                                gostar, devolvemos 100% do seu dinheiro
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
