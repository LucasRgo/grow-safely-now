import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, BookOpen, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTransition } from "@/components/sections/SectionTransition";

export const HowItWorksSection = () => {
    const features = [
        {
            icon: BookOpen,
            title: "Passo a passo simples",
            description: "Instruções claras e diretas, sem jargões complicados. Qualquer pessoa consegue seguir.",
        },
        {
            icon: Shield,
            title: "Sem risco de perda",
            description: "Estratégia antiperda validada. Você opera com segurança e tranquilidade.",
        },
        {
            icon: Zap,
            title: "Acesso imediato",
            description: "Comece hoje mesmo. Material completo disponível assim que você garantir sua vaga.",
        },
        {
            icon: CheckCircle,
            title: "Método validado",
            description: "Testado e aprovado por centenas de alunos com resultados reais comprovados.",
        },
    ];

    return (
        <section id="protocolo" className="py-16 md:py-24 bg-background relative overflow-hidden">
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
                                <Shield className="h-10 w-10 md:h-12 md:w-12 text-[hsl(var(--blue-accent))]" />
                                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-success absolute -bottom-1 -right-1" />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue">
                        O que é o Protocolo de Multiplicação Antiperda?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Um sistema completo, passo a passo, para você multiplicar seu patrimônio com segurança e
                        previsibilidade
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}>
                            <Card className="p-4 sm:p-8 card-premium hover:border-success/20 transition-all duration-300 hover:-translate-y-1 h-full">
                                <div className="flex gap-3 sm:gap-6 items-start">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-[#020817] via-[#1e3a8a] to-[#60a5fa] flex items-center justify-center shadow-lg flex-shrink-0">
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
            <SectionTransition text="Esta é a sua última chance de garantir sua vaga com o preço promocional:" />
        </section>
    );
};
