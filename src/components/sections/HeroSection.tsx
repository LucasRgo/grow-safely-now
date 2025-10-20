import { CTAButton } from "@/components/CTAButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Play } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary pt-20 md:pt-0">
            {/* Particles background effect */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-32 h-32 bg-success rounded-full animate-float blur-3xl" />
                <div
                    className="absolute top-40 right-20 w-40 h-40 bg-success rounded-full animate-float blur-3xl"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-40 left-20 w-32 h-32 bg-success rounded-full animate-float blur-3xl"
                    style={{ animationDelay: "2s" }}
                />
                <div
                    className="absolute bottom-20 right-40 w-40 h-40 bg-success rounded-full animate-float blur-3xl"
                    style={{ animationDelay: "1.5s" }}
                />
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-12 md:py-16 relative z-10">
                <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Coluna da esquerda - Texto */}
                        <div className="text-center lg:text-end flex flex-col justify-center items-center lg:items-end w-full">
                            {/* Headline */}
                            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground uppercase mb-4 md:mb-6 leading-tight glow-green text-center lg:text-end w-full break-words">
                                PROTEJA E MULTIPLIQUE SEU PATRIMÔNIO
                            </h1>

                            {/* Subheadline */}
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed text-center lg:text-end w-full">
                                O protocolo <span className="font-semibold text-success">VALIDADO</span> que já ajudou
                                iniciantes a conquistar até{" "}
                                <span className="font-semibold text-success">1500% por operação</span> – sem risco e sem
                                enrolação
                            </p>

                            {/* CTA Button */}
                            <div className="mb-6 md:mb-8 w-full flex justify-center lg:justify-end">
                                <CTAButton size="xl" className="w-full sm:w-auto text-sm sm:text-base">
                                    Quero Acessar o Protocolo Validado
                                </CTAButton>
                            </div>

                            {/* Timer */}
                            <div className="flex justify-center lg:justify-end mb-8 md:mb-12 lg:mb-0 w-full">
                                <CountdownTimer />
                            </div>
                        </div>

                        {/* Coluna da direita - Vídeo */}
                        <div className="flex justify-center lg:justify-start w-full">
                            <div className="w-full">
                                <div className="relative rounded-lg md:rounded-xl overflow-hidden card-premium glow-border">
                                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-card to-background">
                                        <div className="text-center p-4 sm:p-6 md:p-8">
                                            <Play className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-success mx-auto mb-3 md:mb-4" />
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
