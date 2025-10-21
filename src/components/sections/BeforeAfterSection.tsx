import { Card } from "@/components/ui/card";
import { TrendingDown, RotateCcw, Users, Brain, Shield, TrendingUp, Heart, Lock } from "lucide-react";

export const BeforeAfterSection = () => {
    const pains = [
        {
            icon: TrendingDown,
            title: "Ver o saldo sumir enquanto o medo trava suas decisões",
            description:
                "Você entra achando que vai multiplicar. Sai com menos do que entrou. E a pergunta não sai da cabeça: onde eu errei?",
        },
        {
            icon: RotateCcw,
            title: "Testar estratégias aleatórias e perder de novo",
            description:
                "Cada operação nova parece a certa. Até não ser. E o ciclo recomeça: esperança, perda, frustração.",
        },
        {
            icon: Users,
            title: "Sentir que o jogo é feito contra você",
            description:
                "Parece que só você perde. Todo mundo posta ganho, você acumula prejuízo. E começa a acreditar que não é pra você.",
        },
        {
            icon: Brain,
            title: "Carregar o peso de cada decisão errada",
            description: "Não é só dinheiro. É a confiança que vai embora junto. E o medo de tentar de novo.",
        },
    ];

    const desires = [
        {
            icon: Shield,
            title: "Operar com a tranquilidade de quem tem método",
            description:
                "Você não torce. Você aplica. Porque sabe que o protocolo já foi validado centenas de vezes antes de chegar em você.",
        },
        {
            icon: TrendingUp,
            title: "Crescimento previsível, sem susto",
            description: "Cada operação segue o mesmo padrão. Você não está apostando. Está replicando.",
        },
        {
            icon: Heart,
            title: "Paz de espírito em cada movimento",
            description: "Acabou o medo. Acabou a ansiedade. Você sabe exatamente o que fazer em cada etapa.",
        },
        {
            icon: Lock,
            title: "Confiança de quem sabe que está protegido",
            description:
                "Mesmo que o mercado oscile, seu capital está blindado. Você só entra quando o protocolo autoriza.",
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
        </section>
    );
};
