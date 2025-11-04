import { Phone, Video, Navigation } from "lucide-react";

export function WhatYouGetSection() {
    const benefits = [
        {
            icon: Phone,
            title: "Receba o alerta imediato da operação",
            description: "Seja notificado no WhatsApp no momento exato que eu identifico uma oportunidade.",
        },
        {
            icon: Video,
            title: "Assista minha análise em tempo real",
            description: "Veja meu raciocínio completo e aprenda como identifico as melhores operações.",
        },
        {
            icon: Navigation,
            title: "Seja avisado no momento de encerrar",
            description: "Nunca fique perdido. Você saberá exatamente quando realizar o lucro.",
        },
    ];

    return (
        <section className="relative py-20 md:py-32 px-4">
            {/* Background with carbon fiber texture */}
            <div className="absolute inset-0 bg-black" />
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)`,
                }}
            />
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text and Icons */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                O que você vai receber
                            </h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] to-transparent" />
                        </div>

                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-6 group transition-all duration-300 hover:translate-x-2">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#00ff91] group-hover:bg-[#00ff91]/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,145,0.3)]">
                                        <benefit.icon className="w-8 h-8 text-white group-hover:text-[#00ff91] transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>

                    {/* Right: WhatsApp Mockup */}
                    <div className="relative">
                        <div className="relative max-w-md mx-auto">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-[#00ff91] opacity-20 blur-[60px] rounded-full" />

                            {/* Phone mockup */}
                            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0e0e0e] rounded-[3rem] p-4 border-4 border-white/10 shadow-2xl">
                                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                                    {/* Status bar */}
                                    <div className="bg-[#075e54] px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white/20 rounded-full" />
                                            <div className="flex-1">
                                                <div className="text-white font-semibold">
                                                    Operações Milionárias
                                                </div>
                                                <div className="text-white/70 text-xs">online</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Messages */}
                                    <div className="bg-[#0b141a] p-4 space-y-3 min-h-[400px]">
                                        <div className="bg-[#005c4b] rounded-lg p-3 ml-auto max-w-[85%] animate-slide-in-right">
                                            <p className="text-white text-sm mb-1">
                                                🚨 <strong>NOVA OPERAÇÃO DISPONÍVEL!</strong>
                                            </p>
                                            <p className="text-white/90 text-xs">
                                                Acabei de identificar uma oportunidade de alta probabilidade.
                                            </p>
                                            <div className="text-white/60 text-xs text-right mt-2">Agora</div>
                                        </div>

                                        <div
                                            className="bg-[#005c4b] rounded-lg p-3 ml-auto max-w-[85%] animate-slide-in-right"
                                            style={{ animationDelay: "0.3s" }}>
                                            <p className="text-white text-sm">
                                                📊 Assista o vídeo com minha análise completa.
                                            </p>
                                            <div className="text-white/60 text-xs text-right mt-2">Agora</div>
                                        </div>

                                        <div
                                            className="bg-[#005c4b] rounded-lg p-3 ml-auto max-w-[85%] animate-slide-in-right"
                                            style={{ animationDelay: "0.6s" }}>
                                            <p className="text-white text-sm">
                                                ✅ <strong>Lucro realizado!</strong>
                                            </p>
                                            <p className="text-white/90 text-xs">
                                                Pode encerrar a operação agora.
                                            </p>
                                            <div className="text-white/60 text-xs text-right mt-2">2h atrás</div>
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
