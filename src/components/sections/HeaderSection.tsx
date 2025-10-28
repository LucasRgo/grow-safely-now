import { CTAButton } from "@/components/CTAButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Play, CheckCircle2 } from "lucide-react";
import { SectionTransition } from "@/components/sections/SectionTransition";

export const HeaderSection = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary-blue pt-20 md:pt-0">
            {/* Particles background effect */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(var(--blue-dark))] rounded-full animate-float blur-3xl" />
                <div
                    className="absolute top-40 right-20 w-40 h-40 bg-success rounded-full animate-float blur-3xl"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-40 left-20 w-32 h-32 bg-success rounded-full animate-float blur-3xl"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute bottom-20 right-40 w-40 h-40 bg-[hsl(var(--blue-dark))] rounded-full animate-float blur-3xl"
                    style={{ animationDelay: "1.5s" }}
                />
                <div
                    className="absolute top-1/2 left-1/4 w-36 h-36 gradient-success rounded-full animate-float blur-3xl"
                    style={{ animationDelay: "0.5s" }}
                />
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-8 md:py-16 relative z-10">
                <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Coluna da esquerda - Texto */}
                        <div className="text-center lg:text-end flex flex-col justify-center items-center lg:items-end w-full">
                            {/* Headline */}
                            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground uppercase mb-4 md:mb-6 leading-tight glow-green text-center lg:text-end w-full break-words">
                                O Protocolo Validado Que <span className="text-success">Multiplica</span> Seu
                                Capital <span className="text-success">Com Segurança</span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed text-center lg:text-end max-w-2xl lg:ml-auto">
                                Lucro de mais de <span className="font-semibold text-success">1.000%</span> por
                                operação. E o mais importante: você{" "}
                                <span className="font-semibold text-success">não perde dinheiro</span>.
                            </p>
                            {/* CTA Button */}
                            <div className="mb-6 md:mb-8 w-full flex justify-center lg:justify-end">
                                <CTAButton size="xl" className="w-full sm:w-auto text-sm sm:text-base">
                                    Multiplicar Com Segurança Agora
                                </CTAButton>
                            </div>

                            {/* Features List */}
                            <div className="mb-6 md:mb-8 w-full flex justify-center lg:justify-end">
                                <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-end max-w-2xl">
                                    <div className="flex items-center gap-2 group">
                                        <CheckCircle2 className="w-4 h-4 text-success drop-shadow-[0_0_6px_rgba(34,197,94,0.5)] group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all flex-shrink-0" />
                                        <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                                            Estratégia anti-perda
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 group">
                                        <CheckCircle2 className="w-4 h-4 text-success drop-shadow-[0_0_6px_rgba(34,197,94,0.5)] group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all flex-shrink-0" />
                                        <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                                            Usado por grandes empresas, simplificado para você
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 group">
                                        <CheckCircle2 className="w-4 h-4 text-success drop-shadow-[0_0_6px_rgba(34,197,94,0.5)] group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all flex-shrink-0" />
                                        <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                                            Feito para qualquer pessoa aplicar
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 group">
                                        <CheckCircle2 className="w-4 h-4 text-success drop-shadow-[0_0_6px_rgba(34,197,94,0.5)] group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all flex-shrink-0" />
                                        <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                                            Acesso vitalício
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 group">
                                        <CheckCircle2 className="w-4 h-4 text-success drop-shadow-[0_0_6px_rgba(34,197,94,0.5)] group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all flex-shrink-0" />
                                        <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                                            Garantia de 7 dias
                                        </span>
                                    </div>
                                    <div className="mt-4 flex justify-end lg:justify-end w-full">
                                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--blue-dark))]/20 via-[hsl(var(--success))]/15 to-[hsl(var(--blue-dark))]/20 border border-[hsl(var(--success))]/30 text-success text-xs sm:text-sm font-semibold font-heading uppercase tracking-wide glow-border animate-pulse-slow shadow-lg backdrop-blur-sm">
                                            <span className="drop-shadow-[0_0_6px_rgba(34,197,94,0.4)]">
                                                UMA ÚNICA OPERAÇÃO PAGA O INVESTIMENTO E AINDA GERA LUCRO
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna da direita - Vídeo */}
                        <div className="flex justify-center lg:justify-start w-full">
                            <div className="w-full">
                                <div className="relative rounded-lg md:rounded-xl overflow-hidden card-premium">
                                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[hsl(var(--blue-darker))]/30 via-card to-background">
                                        <div className="text-center p-4 sm:p-6 md:p-8">
                                            <div className="p-3 bg-[hsl(var(--blue-dark))]/40 rounded-full inline-block mb-3 md:mb-4 border border-[hsl(var(--blue-accent))]/40">
                                                <Play className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-[hsl(var(--blue-accent))] mx-auto" />
                                            </div>
                                            <p className="text-foreground text-sm sm:text-base md:text-lg font-heading italic px-2">
                                                "Tive medo, mas confiei e hoje tripliquei meu capital"
                                            </p>
                                            <p className="text-muted-foreground mt-2 text-xs sm:text-sm md:text-base">
                                                - Aluno do Protocolo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
