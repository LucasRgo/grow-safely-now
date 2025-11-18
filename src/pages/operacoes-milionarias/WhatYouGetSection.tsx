import { Button } from "@/components/ui/button";
import { MessageCircle, Video, DollarSign } from "lucide-react";

const benefits = [
    {
        icon: MessageCircle,
        title: "Receba o alerta imediato da operação",
        description: "Você é avisado no WhatsApp no momento exato em que identifico uma oportunidade.",
    },
    {
        icon: Video,
        title: "Assista minha análise em tempo real",
        description: "Acompanhe meu raciocínio completo e aprenda a identificar novas operações.",
    },
    {
        icon: DollarSign,
        title: "Seja avisado quando encerrar",
        description: "Nada de ficar perdido. Indico o momento certo de realizar o lucro.",
    },
];

export function WhatYouGetSection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-[#050505]" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(0,255,145,0.95) 0%, transparent 65%)" }} />

            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-12">
                <div className="space-y-6">
                    <p className="text-xs tracking-[0.35em] uppercase text-[#00ff91]">Operações Milionárias</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                        O que você recebe ao entrar no grupo de operações
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                        Tenha clareza absoluta do que acontece em cada operação: alerta imediato, acompanhamento em tempo real e orientação para sair com segurança.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit.title}
                            className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 text-left text-white transition duration-300 hover:border-[#00ff91] hover:bg-[#00ff91]/5 hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-[#00ff91]">
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <div className="space-y-2 text-center">
                                <h3 className="text-lg md:text-xl font-bold">{benefit.title}</h3>
                                <p className="text-sm md:text-base text-gray-300">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <p className="text-white text-lg">
                        💡 <span className="font-semibold">Uma única operação bem feita paga todo o investimento.</span>
                    </p>
                    <Button
                        size="lg"
                        className="bg-[#00ff91] hover:bg-[#00ff91]/90 text-black font-black text-base md:text-xl px-10 py-6 h-auto rounded-full shadow-[0_0_40px_rgba(0,255,145,0.4)] transition-all duration-300"
                        onClick={() =>
                            window.scrollTo({
                                top: document.getElementById("plans")?.offsetTop,
                                behavior: "smooth",
                            })
                        }>
                        VER PLANOS AGORA
                    </Button>
                </div>
            </div>
        </section>
    );
}


