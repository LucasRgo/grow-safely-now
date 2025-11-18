import { Button } from "@/components/ui/button";
import { Lock, Video, MessageCircle, DollarSign } from "lucide-react";
import { useCountdownContext } from "./useCountdown";

export function FinalUrgencySection() {
    const { totalSeconds, isExpired } = useCountdownContext();
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const benefits = [
        {
            icon: MessageCircle,
            title: "Receba o alerta imediato da operação",
            description: "Seja notificado no WhatsApp no momento exato que eu identifico uma oportunidade.",
        },
        {
            icon: Video,
            title: "Assista minha análise em tempo real",
            description: "Veja meu raciocínio completo e aprenda como identifico as melhores operações.",
        },
        {
            icon: DollarSign,
            title: "Seja avisado no momento de encerrar",
            description: "Nunca fique perdido. Você saberá exatamente quando realizar o lucro.",
        },
    ];

    return (
        <section className="relative py-20 md:py-32 px-4">
            {/* Background with red gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#190000] to-black" />

            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)`,
                }}
            />

            {/* Pulsing red line at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-500 animate-pulse" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Two columns layout */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left: What You Get */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                O que você vai receber
                            </h3>
                            <div className="w-32 h-1 bg-gradient-to-r from-[#00ff91] to-transparent" />
                        </div>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-6 group transition-all duration-300 hover:translate-x-2">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#00ff91] group-hover:bg-[#00ff91]/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,145,0.3)]">
                                        <benefit.icon className="w-8 h-8 text-white group-hover:text-[#00ff91] transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                                        <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div>
                            <p className="text-white text-lg">
                                💡{" "}
                                <span className="font-semibold">
                                    Com apenas uma operação bem feita, você já paga todo o investimento.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Urgency CTA */}
                    <div className="space-y-8 text-center">
                        {/* Warning Icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full border-2 border-red-500 animate-pulse">
                            <Lock className="w-10 h-10 text-red-500" />
                        </div>

                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight px-4">
                            Atenção: esta oferta expira em poucos minutos
                        </h2>

                        <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed px-4">
                            Após o término do cronômetro, o valor volta para{" "}
                            <span className="text-red-500 font-bold">R$2.000</span> e o acesso é fechado.
                        </p>

                        {/* Countdown */}
                        <div className="inline-block px-4">
                            <div className="bg-gradient-to-r from-red-500/20 to-red-500/10 backdrop-blur-xl border-2 border-red-500 rounded-lg px-6 md:px-8 py-3 md:py-4 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                                <div className="text-3xl md:text-5xl font-black text-red-500 tabular-nums">
                                    {isExpired ? (
                                        <span>EXPIRADO</span>
                                    ) : (
                                        <>
                                            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Main CTA */}
                        <div className="pt-4 px-4">
                            <Button
                                size="lg"
                                className="bg-[#00ff91] hover:bg-[#00ff91]/90 text-black font-black text-base md:text-xl px-8 md:px-16 py-6 md:py-8 h-auto rounded-full shadow-[0_0_40px_rgba(0,255,145,0.6)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,255,145,0.8)] animate-breathing-glow w-full md:w-auto"
                                onClick={() =>
                                    window.scrollTo({
                                        top: document.getElementById("plans")?.offsetTop,
                                        behavior: "smooth",
                                    })
                                }>
                                LIBERAR MEU ACESSO AGORA
                            </Button>
                        </div>

                        <p className="text-gray-400 text-sm px-4">
                            👉 Oferta única. Disponível apenas por 7 minutos
                        </p>

                        {/* Limited spots badge */}
                        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 animate-pulse-slow mx-4">
                            <Lock className="w-4 md:w-5 h-4 md:h-5 text-yellow-500" />
                            <span className="text-yellow-500 font-semibold text-sm md:text-base">Vagas Limitadas</span>
                        </div>
                    </div>
                </div>

                {/* Footer line */}
                <div className="text-center pt-8 px-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent mb-4" />
                    <p className="text-[#FFD700] font-semibold tracking-wide text-sm md:text-base">
                        Acesso exclusivo — Cliente Protocolo Anti-Perda
                    </p>
                </div>
            </div>
        </section>
    );
}
