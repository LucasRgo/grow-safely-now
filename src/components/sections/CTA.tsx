import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/CTAButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { useCountdownContext } from "@/components/context/CountdownContext";
import { COUNTDOWN_DURATION } from "@/hooks/UseCountdown";
import { Shield, CheckCircle, Award, Users, Gift, Clock } from "lucide-react";
import { SectionTransition } from "@/components/sections/SectionTransition";

export const CTA = () => {
    const { totalSeconds, isExpired } = useCountdownContext();
    const MIN_SPOTS = 2;
    const MAX_SPOTS = 16;
    const totalDurationSeconds = Math.floor(COUNTDOWN_DURATION / 1000);
    const normalizedSeconds = Math.max(0, Math.min(totalSeconds, totalDurationSeconds));
    const ratio = totalDurationSeconds > 0 ? normalizedSeconds / totalDurationSeconds : 0;
    const spotsRange = MAX_SPOTS - MIN_SPOTS;
    const spotsLeft = isExpired ? MIN_SPOTS : Math.max(MIN_SPOTS, Math.round(MIN_SPOTS + ratio * spotsRange));

    return (
        <section id="oferta" className="py-16 md:py-24 gradient-primary relative overflow-hidden">
            {/* Background decoration - more organic curves */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border-4 border-success rounded-full blur-sm" />
                <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-success rounded-full blur-sm" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* HIERARQUIA 1: TÍTULO - Reduzido o brilho */}
                    <div className="text-center mb-6 md:mb-8 lg:mb-12">
                        <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-urgent/20 text-urgent rounded-full mb-4 md:mb-6 animate-pulse-border border border-urgent/30 shadow-lg shadow-urgent/20">
                            <Gift className="h-4 w-4 md:h-5 md:w-5" />
                            <span className="font-heading font-semibold text-xs md:text-sm lg:text-base">
                                ÚLTIMA CHAMADA - ACESSO EXCLUSIVO
                            </span>
                        </div>

                        <h2 className="text-xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground mb-3 md:mb-4 leading-tight px-3 md:px-4 opacity-95">
                            UMA ÚNICA OPERAÇÃO CERTA JÁ PAGA O INVESTIMENTO.
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-heading font-medium max-w-3xl mx-auto px-3 md:px-4 opacity-90">
                            Um sistema completo só para você copiar e ganhar.
                        </p>
                    </div>

                    <Card className="p-5 md:p-8 lg:p-10 card-premium border-success/30 mb-6 md:mb-8 shadow-2xl shadow-success/10 rounded-2xl md:rounded-3xl backdrop-blur-sm">
                        {/* HIERARQUIA 2: PREÇO - Máxima atenção visual */}
                        <div className="text-center mb-6 md:mb-8 space-y-3 md:space-y-4">
                            <div className="text-muted-foreground text-sm md:text-base lg:text-lg line-through opacity-60">
                                De R$ 500
                            </div>

                            <div className="flex justify-center">
                                <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-urgent/20 border border-urgent/40 rounded-full shadow-lg shadow-urgent/20">
                                    <span className="text-urgent font-heading font-bold text-xs md:text-sm lg:text-base tracking-wide">
                                        🔥 80.6% OFF
                                    </span>
                                </div>
                            </div>

                            {/* Preço com halo luminoso */}
                            <div className="flex justify-center">
                                <div className="relative inline-block">
                                    {/* Halo esverdeado */}
                                    <div className="absolute inset-0 bg-gradient-radial from-success/30 via-success/10 to-transparent blur-3xl scale-150" />

                                    <div className="relative">
                                        <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-success tracking-tight leading-none">
                                            <span className="inline-block bg-gradient-to-br from-success via-success to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                                                R$ 97
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs md:text-sm lg:text-base text-muted-foreground/80 font-medium px-2">
                                Valor simbólico de entrada – acesso vitalício
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-4 max-w-md mx-auto">
                            <div className="flex-shrink-0">
                                <CountdownTimer />
                            </div>
                            <div className="flex-shrink-0">
                                <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-lg md:rounded-xl glass border-2 border-urgent/40 text-urgent">
                                    <div className="relative">
                                        <Users className="h-4 w-4 md:h-5 md:w-5 text-urgent" />
                                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-urgent rounded-full animate-ping" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] md:text-xs text-urgent/80 font-semibold">Atenção:</span>
                                        <span className="text-urgent font-bold text-sm md:text-base whitespace-nowrap">
                                            Só restam {spotsLeft} vagas
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Trust badges - mais compactos */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4 my-8 max-w-2xl mx-auto">
                            <div className="card-premium p-3 md:p-4 border-success/30 rounded-2xl shadow-lg shadow-success/5 text-center">
                                <Shield className="h-6 w-6 md:h-8 md:w-8 text-success mx-auto mb-2 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                                <p className="text-foreground font-heading font-semibold text-xs md:text-sm">
                                    Método Seguro
                                </p>
                            </div>

                            <div className="card-premium p-3 md:p-4 border-success/30 rounded-2xl shadow-lg shadow-success/5 text-center">
                                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-success mx-auto mb-2 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                                <p className="text-foreground font-heading font-semibold text-xs md:text-sm">
                                    Garantia 7 Dias
                                </p>
                            </div>

                            <div className="card-premium p-3 md:p-4 border-success/30 rounded-2xl shadow-lg shadow-success/5 text-center">
                                <Award className="h-6 w-6 md:h-8 md:w-8 text-success mx-auto mb-2 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                                <p className="text-foreground font-heading font-semibold text-xs md:text-sm">
                                    Passo a Passo
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 md:mt-8 lg:mt-10 relative group">
                            {/* Glow effect on hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-success via-emerald-500 to-success rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 animate-pulse-slow" />
                            <CTAButton
                                size="xl"
                                className="w-full relative bg-gradient-to-br from-success via-success to-emerald-600 hover:from-emerald-600 hover:via-success hover:to-success shadow-[0_8px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_12px_40px_rgba(34,197,94,0.6)] border-2 border-success/50 hover:border-success/80 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-xl md:rounded-2xl py-4 md:py-6 lg:py-8 text-sm md:text-lg lg:text-xl font-black tracking-wide">
                                <span className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                                    💰 QUERO MULTIPLICAR COM SEGURANÇA AGORA
                                </span>
                            </CTAButton>
                        </div>
                    </Card>

                    {/* Garantia destacada - parece cláusula legal */}
                    <div className="text-center px-3">
                        <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 lg:px-8 py-3 md:py-4 bg-gradient-to-br from-background/80 via-background/90 to-background/80 backdrop-blur-sm border-2 border-success/40 rounded-xl md:rounded-2xl shadow-xl shadow-success/10">
                            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-success/20 flex items-center justify-center border-2 border-success/50">
                                <Shield className="h-5 w-5 md:h-6 md:w-6 text-success drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                            </div>
                            <div className="text-left">
                                <p className="text-success font-heading font-bold text-xs md:text-sm lg:text-base mb-0.5">
                                    ✓ Garantia Antiperda de 7 dias
                                </p>
                                <p className="text-muted-foreground text-[10px] md:text-xs lg:text-sm">
                                    Se não gostar, devolvemos 100% do seu dinheiro
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SectionTransition text="Conheça quem criou este protocolo de multiplicação segura:" />
        </section>
    );
};
