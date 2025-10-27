import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, BookOpen, Zap, CheckCircle, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTransition } from "@/components/sections/SectionTransition";

export const HowItWorksSection = () => {
    const features = [
        {
            icon: BookOpen,
            title: "Receba o passo a passo profissional",
            description:
                "Aprenda o método exato que investidores experientes usam para lucrar. Domine cada etapa e opere com confiança, mesmo sem conhecimento prévio.",
        },
        {
            icon: Shield,
            title: "Proteja cada centavo com o Sistema AntiPerda",
            description:
                "Descubra os pontos exatos de entrada e saída que blindam seu capital. Elimine prejuízos e transforme cada operação em lucro, mesmo com mercado oscilando.",
        },
        {
            icon: Zap,
            title: "Execute com exemplos práticos",
            description:
                "Coloque o Protocolo em ação imediatamente. Multiplique seu capital com total controle e saiba exatamente o que fazer em cada momento.",
        },
        {
            icon: Users,
            title: "Acesse o Grupo VIP",
            description:
                "Receba sinais exclusivos direto no WhatsApp em tempo real. Reinvista seus lucros com estratégia inteligente e acelere rumo a metas maiores.",
        },
    ];

    return (
        <section id="como-funciona" className="py-8 md:py-16 bg-gradient-to-br from-blue-950/20 via-background to-cyan-950/20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-[hsl(var(--blue-dark))]/20 rounded-full border border-[hsl(var(--blue-accent))]/30">
                            <div className="relative">
                                <Zap className="h-10 w-10 md:h-12 md:w-12 text-[hsl(var(--blue-accent))]" />
                                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-success absolute -bottom-1 -right-1" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue">
                        Como Funciona o Protocolo na Prática
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Um guia passo a passo para você aplicar executar de forma simples, segura e comprovada.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}>
                            <Card className="p-4 sm:p-8 card-premium hover:border-success/20 transition-all duration-300 hover:-translate-y-1 h-full">
                                <div className="flex gap-3 sm:gap-6 items-start">
                                    <div className="w-20 h-20 sm:w-16 sm:h-16 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-[#020817] via-[#1e3a8a] to-[#60a5fa] flex items-center justify-center shadow-lg flex-shrink-0">
                                        <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-20 lg:h-20 text-foreground" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-2xl font-heading font-bold mb-1 sm:mb-2 text-foreground">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-base sm:text-xl">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            <SectionTransition text="Agora que sabe como funciona, não perca tempo e comece a operar como os grandes:" />
        </section>
    );
};
