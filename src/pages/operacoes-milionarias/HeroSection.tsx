import { Button } from "@/components/ui/button";
import { useCountdownContext } from "./useCountdown";
import { useEffect, useState } from "react";

export function HeroSection() {
    const { totalSeconds, isExpired } = useCountdownContext();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Determina a cor do timer baseado no tempo restante
    const timerColor =
        totalSeconds <= 30
            ? "text-red-500 border-red-500/50"
            : totalSeconds <= 120
            ? "text-yellow-400 border-yellow-400/50"
            : "text-[#FFD700] border-[#FFD700]/50";

    const timerBgColor =
        totalSeconds <= 30
            ? "from-red-500/20 to-red-500/10"
            : totalSeconds <= 120
            ? "from-yellow-400/20 to-yellow-400/10"
            : "from-[#FFD700]/20 to-[#FFD700]/10";

    const timerShadowColor =
        totalSeconds <= 30
            ? "shadow-[0_0_30px_rgba(239,68,68,0.3)]"
            : totalSeconds <= 120
            ? "shadow-[0_0_30px_rgba(250,204,21,0.3)]"
            : "shadow-[0_0_30px_rgba(255,215,0,0.3)]";

    const shouldPulse = totalSeconds <= 30;

    // Track mouse position for radial gradient effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const section = document.querySelector("section");
            if (section) {
                const rect = section.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Velocidade das partículas aumenta nos últimos 2 minutos
    const particleSpeed = totalSeconds <= 120 ? 6 : 25;

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-3 md:px-20 lg:px-24 py-12 overflow-hidden bg-gradient-to-br from-[#0a1628] to-black">
            {/* Mouse-following radial gradient effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,215,0,0.1), transparent 40%)`,
                }}
            />

            {/* Countdown Timer - Barra de urgência flutuante */}
            <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50">
                <div
                    className={`bg-gradient-to-r ${timerBgColor} backdrop-blur-xl border ${
                        timerColor.split(" ")[1]
                    } rounded-xl px-5 py-3 md:px-6 md:py-3 ${timerShadowColor} transition-all duration-500 ${
                        shouldPulse ? "animate-pulse-border" : ""
                    }`}>
                    <div className="flex items-center gap-3">
                        <span className="text-xl">⚡</span>
                        <div>
                            <p className="text-white/90 text-[10px] md:text-xs font-semibold leading-tight">
                                Oferta expira em:
                            </p>
                            <div
                                className={`text-2xl md:text-3xl font-black ${
                                    timerColor.split(" ")[0]
                                } tabular-nums leading-tight`}>
                                {isExpired ? (
                                    <span className="text-red-500">EXPIRADO</span>
                                ) : (
                                    <>
                                        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Título Principal - Fora das colunas */}
            <div className="relative z-10 w-full mb-8 md:mb-12 px-1 md:px-0 md:max-w-7xl md:mx-auto mt-20 md:mt-0">
                <h1
                    className="font-black text-white leading-[1.1] text-center uppercase"
                    style={{
                        fontSize: "clamp(38px, 10vw, 72px)",
                        fontWeight: "950",
                        textShadow: "0 0 30px rgba(255,215,0,0.4), 0 0 60px rgba(255,215,0,0.2)",
                        letterSpacing: "0.01em",
                    }}>
                    RECEBA MINHAS OPERAÇÕES
                    <span className="block text-[#FFD700] mt-3 drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]">
                        ANTES QUE ACONTEÇAM
                    </span>
                </h1>
            </div>

            {/* Content - Two columns layout com offset diagonal */}
            <div className="relative z-10 w-full md:max-w-7xl md:mx-auto">
                <div className="grid md:grid-cols-[1.0fr_1fr] gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-5 md:space-y-8 text-center md:text-right md:pt-8 px-1">
                        {/* Logo/Brand */}
                        <div className="inline-block md:float-right">
                            <div className="relative">
                                <p className="text-yellow-400 text-xs md:text-sm font-bold tracking-widest uppercase drop-shadow-lg transform -rotate-1 border border-yellow-400/30 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                    Operações Milionárias
                                </p>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-sm -z-10"></div>
                            </div>
                        </div>

                        {/* Subtitles */}
                        <div className="space-y-4 md:space-y-5 mx-auto md:mx-0 md:text-right">
                            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed">
                                Você já garantiu sua proteção com o{" "}
                                <span className="text-[#FFD700] font-semibold relative inline-block">
                                    Protocolo Antiperda
                                </span>
                                .
                                <br />
                                Agora tem <span className=" font-bold underline">poucos minutos</span> pra ir além:
                            </h2>
                            <h2 className="text-base md:text-xl lg:text-3xl font-bold text-white/85 leading-relaxed">
                                Veja exatamente{" "}
                                <span className="text-[#FFD700] font-bold relative inline-block">
                                    as operações que eu entro
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFD700] to-transparent"></span>
                                </span>{" "}
                                e copie tudo em tempo real, direto do seu celular.
                            </h2>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2 space-y-3">
                            <Button
                                size="lg"
                                className="w-full md:w-auto bg-gradient-to-r from-[#00ff91] to-[#00cc73] text-white hover:from-[#00ff91] hover:to-[#00ff91] font-semibold text-base md:text-lg px-10 md:px-12 py-5 md:py-6 h-auto rounded-full shadow-[0_0_25px_rgba(0,255,145,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,145,0.6)] hover:scale-[1.03] animate-pulse-glow relative overflow-hidden group"
                                onClick={() =>
                                    window.scrollTo({
                                        top: document.getElementById("plans")?.offsetTop,
                                        behavior: "smooth",
                                    })
                                }>
                                {/* Reflexo animado diagonal */}
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out skew-x-12" />
                                <span className="relative z-10">Liberar Meu Acesso Agora</span>
                            </Button>
                            <p className="text-white/50 text-xs md:text-sm text-center md:text-right">
                                Oferta única. Expira em poucos minutos.
                            </p>
                        </div>
                    </div>

                    {/* Right: WhatsApp Mockup */}
                    <div className="relative md:pb-8 px-1">
                        <div className="relative max-w-md mx-auto group">
                            {/* Glow effect multicamadas */}
                            <div className="absolute inset-0 bg-[#00ff91] opacity-20 blur-[80px] rounded-full animate-pulse-slow" />
                            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-[60%] bg-[#00ff91] opacity-10 blur-[40px]" />

                            {/* Phone mockup com glass effect e animação float */}
                            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0e0e0e] rounded-[3rem] p-3 md:p-4 border border-[rgba(0,255,145,0.15)] shadow-[0_30px_60px_rgba(0,0,0,0.8),0_10px_20px_rgba(0,255,145,0.2)] backdrop-blur-xl transition-transform duration-700 ease-out group-hover:-translate-y-2 animate-float-slow">
                                <div className="bg-black rounded-[2.5rem] overflow-hidden shadow-inner">
                                    {/* Status bar */}
                                    <div className="bg-[#075e54] px-4 md:px-6 py-3 md:py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm">
                                                OM
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-white font-semibold text-sm md:text-base">
                                                    Operações Milionárias
                                                </div>
                                                <div className="text-white/70 text-xs flex items-center gap-1">
                                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                                    online
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Messages com animação sequencial */}
                                    <div className="bg-[#0b141a] p-3 md:p-4 space-y-3 min-h-[350px] md:min-h-[400px]">
                                        <div className="bg-[#005c4b] rounded-lg p-2.5 md:p-3 ml-auto max-w-[85%] animate-slide-in-right shadow-lg">
                                            <p className="text-white text-xs md:text-sm mb-1">
                                                🚨 <strong>NOVA OPERAÇÃO DISPONÍVEL!</strong>
                                            </p>
                                            <p className="text-white/90 text-xs">
                                                Acabei de identificar uma oportunidade de alta probabilidade.
                                            </p>
                                            <div className="text-white/60 text-[10px] md:text-xs text-right mt-2">
                                                Agora
                                            </div>
                                        </div>

                                        <div
                                            className="bg-[#005c4b] rounded-lg p-2.5 md:p-3 ml-auto max-w-[85%] animate-slide-in-right shadow-lg"
                                            style={{ animationDelay: "0.4s" }}>
                                            <p className="text-white text-xs md:text-sm">
                                                📊 Assista o vídeo com minha análise completa.
                                            </p>
                                            <div className="text-white/60 text-[10px] md:text-xs text-right mt-2">
                                                Agora
                                            </div>
                                        </div>

                                        <div
                                            className="bg-[#005c4b] rounded-lg p-2.5 md:p-3 ml-auto max-w-[85%] animate-slide-in-right shadow-lg"
                                            style={{ animationDelay: "0.8s" }}>
                                            <p className="text-white text-xs md:text-sm mb-1">
                                                ✅ <strong>Lucro realizado!</strong>
                                            </p>
                                            <p className="text-white/90 text-xs">
                                                Pode encerrar a operação agora.
                                            </p>
                                            <div className="text-white/60 text-[10px] md:text-xs text-right mt-2">
                                                2h atrás
                                            </div>
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
}
