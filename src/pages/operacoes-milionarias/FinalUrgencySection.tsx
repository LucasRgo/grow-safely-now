import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useCountdownContext } from "./useCountdown";

export function FinalUrgencySection() {
    const { totalSeconds, isExpired } = useCountdownContext();
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return (
        <section className="relative py-20 md:py-32 px-4">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#190000] to-black" />
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)`,
                }}
            />
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-500 animate-pulse" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/60 bg-red-500/10 text-red-400 text-sm uppercase tracking-[0.3em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />

                    <span>Oferta Final</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.4)] space-y-8 backdrop-blur-md">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                        Atenção: o acesso volta ao preço original assim que o relógio zerar
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                        Enquanto o cronômetro estiver ativo você garante o Protocolo Anti-Perda por R$497.
                    </p>

                    <div className="inline-block px-4">
                        <div className="bg-gradient-to-r from-red-500/20 to-red-500/10 backdrop-blur-xl border-2 border-red-500 rounded-lg px-8 py-4 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                            <div className="text-3xl md:text-5xl font-black text-red-500 tabular-nums">
                                {isExpired ? (
                                    <span>EXPIRADO</span>
                                ) : (
                                    <>
                                        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                                    </>
                                )}
                            </div>
                            <p className="text-red-200 text-xs md:text-sm mt-2 tracking-[0.3em] uppercase">
                                Tempo restante
                            </p>
                        </div>
                    </div>

                    <div className="pt-4 px-4 space-y-4">
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
                        <p className="text-gray-400 text-sm">
                            👉 Oferta única, disponível apenas por 7 minutos
                        </p>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-3 animate-pulse-slow mx-4 text-yellow-400 font-semibold">
                    <Lock className="w-5 h-5" />
                    <span>Vagas realmente limitadas</span>
                </div>

                <div className="text-center pt-4 px-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent mb-4" />
                    <p className="text-[#FFD700] font-semibold tracking-wide text-sm md:text-base">
                        Acesso exclusivo — Cliente Protocolo Anti-Perda
                    </p>
                </div>
            </div>
        </section>
    );
}
