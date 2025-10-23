import { Card } from "@/components/ui/card";
import { TrendingDown, RotateCcw, Users, Brain, Shield, TrendingUp, Heart, Lock, Building2 } from "lucide-react";
import { SectionTransition } from "@/components/sections/SectionTransition";

export const BeforeAfterSection = () => {
    const pains = [
        {
            icon: RotateCcw,
            title: "Viver o ciclo da tentativa e erro",
            description:
                "Muda a estratégia, muda o vídeo, muda o indicador, mas o resultado é o mesmo: perda atrás de perda e nenhuma constância.",
        },
        {
            icon: TrendingDown,
            title: "Ver o saldo sumir e não entender o porquê",
            description:
                "Você entra com esperança, mas sai com o saldo menor. Cada perda parece um erro pessoal, e o medo começa a dominar.",
        },
        {
            icon: Users,
            title: "A sensação de que o mercado é um jogo contra você",
            description:
                "Enquanto outros mostram lucros, você vê prejuízo. Parece que só quem já é grande ganha, e que o mercado foi feito pra te tirar.",
        },
        {
            icon: Brain,
            title: "Decisões emocionais e arrependimento constante",
            description:
                "Cada operação vira um peso emocional. O medo de errar trava. E a confiança em você mesmo começa a desaparecer.",
        },
    ];

    const desires = [
        {
            icon: Building2,
            title: "Seguir o mesmo modelo dos grandes fundos",
            description:
                "O Protocolo foi inspirado nas estratégias reais usadas por corporações globais e grandes investidores, mas traduzido para linguagem simples que qualquer pessoa aplica.",
        },
        {
            icon: Shield,
            title: "Operar com blindagem total contra perdas",
            description:
                "O Gerenciamento Anti-Perda elimina o medo. Você sabe exatamente o que fazer quando o mercado vira, e nunca sai no prejuízo.",
        },
        {
            icon: TrendingUp,
            title: "Multiplicar com previsibilidade e segurança",
            description:
                "Com o Protocolo, cada operação segue uma estrutura validada. Nada é aleatório, tudo é replicável e mensurável.",
        },
        {
            icon: Heart,
            title: "Tranquilidade para lucrar com controle",
            description:
                "O medo sai de cena, a clareza entra. Você entende o jogo e opera com calma, sabendo que o risco foi removido do caminho.",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b md:bg-gradient-to-r from-red-950 via-slate-900 to-green-950">
            {/* Overlay para suavizar o gradient */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 glow-blue">
                        Antes e Depois do Protocolo
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        O que muda quando você opera com um método
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Pain side */}
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-red-400 mb-2">
                                Sem Método
                            </h3>
                            <p className="text-gray-300 text-lg">Perda, ansiedade e decisões erradas</p>
                        </div>

                        <div className="space-y-6">
                            {pains.map((pain, index) => (
                                <Card
                                    key={index}
                                    className="p-6 min-h-[170px] md:min-h-[170px] h-full bg-red-950/40 backdrop-blur-sm border-red-500/30 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                                    <div className="flex items-start gap-5">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500/40">
                                                <pain.icon
                                                    className="h-8 w-8 md:h-10 md:w-10 text-red-400"
                                                    strokeWidth={2.5}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <h4 className="text-lg md:text-xl font-semibold text-white mb-2 leading-tight">
                                                {pain.title}
                                            </h4>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                {pain.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Desire side */}
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-green-400 mb-2">
                                Com Método
                            </h3>
                            <p className="text-gray-300 text-lg">Previsibilidade, paz e proteção do capital</p>
                        </div>

                        <div className="space-y-6">
                            {desires.map((desire, index) => (
                                <Card
                                    key={index}
                                    className="p-6 min-h-[170px] md:min-h-[170px] h-full bg-green-950/40 backdrop-blur-sm border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                                    <div className="flex items-start gap-5">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500/40">
                                                <desire.icon
                                                    className="h-8 w-8 md:h-10 md:w-10 text-green-400"
                                                    strokeWidth={2.5}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <h4 className="text-lg md:text-xl font-semibold text-white mb-2 leading-tight">
                                                {desire.title}
                                            </h4>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                {desire.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SectionTransition text="Agora que você viu a validação, entenda como o protocolo funciona:" />
        </section>
    );
};
