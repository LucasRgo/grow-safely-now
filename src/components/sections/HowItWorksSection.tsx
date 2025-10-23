import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, BookOpen, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTransition } from "@/components/sections/SectionTransition";

export const HowItWorksSection = () => {
    const features = [
        {
            icon: BookOpen,
            title: "Aprenda o passo a passo",
            description:
                "Você entende, de forma simples e direta, como aplicar o método que os grandes investidores utilizam, sem precisar de experiência anterior.",
        },
        {
            icon: Shield,
            title: "Aplique o Gerenciamento AntiPerda",
            description:
                "Descubra o momento certo de entrar e sair de uma operação, protegendo cada centavo investido e eliminando o risco de perda.",
        },
        {
            icon: Zap,
            title: "Execute operações com segurança",
            description:
                "Coloque o Protocolo em prática com exemplos guiados e veja como multiplicar seu capital com total controle e previsibilidade.",
        },
        {
            icon: CheckCircle,
            title: "Colha os resultados e reinvista",
            description:
                "Multiplique seus ganhos e aprenda a reinvestir de forma inteligente para acelerar seus resultados e alcançar grandes metas.",
        },
    ];

    return (
        <section id="como-funciona" className="py-16 md:py-24 bg-background relative overflow-hidden">
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

                {/* Potencial Real de Multiplicação */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 md:mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue">
                            O Potencial Real de Multiplicação
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            Exemplos práticos do potêncial real de CADA operação
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}>
                            <Card className="p-6 card-premium hover:border-[hsl(var(--blue-accent))]/30 transition-all duration-300 hover:-translate-y-2 h-full">
                                <div className="text-center space-y-4">
                                    <div className="inline-block px-4 py-2 bg-[hsl(var(--blue-dark))]/30 rounded-full border border-[hsl(var(--blue-accent))]/20">
                                        <span className="text-sm font-semibold text-[hsl(var(--blue-accent))]">
                                            Exemplo 1
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                                            <p className="text-sm text-muted-foreground mb-1">Valor inicial</p>
                                            <p className="text-2xl font-bold text-foreground">R$ 100</p>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <TrendingUp className="h-6 w-6 text-success animate-pulse" />
                                        </div>

                                        <div className="p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/30">
                                            <p className="text-sm text-muted-foreground mb-1">
                                                Multiplicação mínima
                                            </p>
                                            <p className="text-3xl font-bold text-success">R$ 1.000</p>
                                            <p className="text-sm text-muted-foreground mt-2">MULTIPLICADO 10 VEZES</p>
                                        </div>

                                        <div className="pt-2">
                                            <p className="text-sm text-muted-foreground">1.000%</p>
                                            <p className="text-lg font-semibold text-foreground">1 operação</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}>
                            <Card className="p-6 card-premium hover:border-[hsl(var(--blue-accent))]/30 transition-all duration-300 hover:-translate-y-2 h-full border-[hsl(var(--blue-accent))]/20">
                                <div className="text-center space-y-4">
                                    <div className="inline-block px-4 py-2 bg-[hsl(var(--blue-accent))]/20 rounded-full border border-[hsl(var(--blue-accent))]/30">
                                        <span className="text-sm font-semibold text-[hsl(var(--blue-accent))]">
                                            Exemplo 2 - Popular
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                                            <p className="text-sm text-muted-foreground mb-1">Valor inicial</p>
                                            <p className="text-2xl font-bold text-foreground">R$ 500</p>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <TrendingUp className="h-6 w-6 text-success animate-pulse" />
                                        </div>

                                        <div className="p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/30">
                                            <p className="text-sm text-muted-foreground mb-1">
                                                Multiplicação alta
                                            </p>
                                            <p className="text-3xl font-bold text-success">R$ 10.000</p>
                                            <p className="text-sm text-muted-foreground mt-2">MULTIPLICADO 20 VEZES</p>
                                        </div>

                                        <div className="pt-2">
                                            <p className="text-sm text-muted-foreground">2.000%</p>
                                            <p className="text-lg font-semibold text-foreground">
                                                1 operação bem executada
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.5 }}>
                            <Card className="p-6 card-premium hover:border-success/30 transition-all duration-300 hover:-translate-y-2 h-full border-success/20">
                                <div className="text-center space-y-4">
                                    <div className="inline-block px-4 py-2 bg-success/20 rounded-full border border-success/30">
                                        <span className="text-sm font-semibold text-success">
                                            Exemplo 3 - Máximo
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="p-4 bg-background/50 rounded-lg border border-border/50">
                                            <p className="text-sm text-muted-foreground mb-1">Valor inicial</p>
                                            <p className="text-2xl font-bold text-foreground">R$ 1.000</p>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <TrendingUp className="h-6 w-6 text-success animate-pulse" />
                                        </div>

                                        <div className="p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg border border-success/30">
                                            <p className="text-sm text-muted-foreground mb-1">
                                                Potencial máximo documentado
                                            </p>
                                            <p className="text-3xl font-bold text-success">R$ 50.000</p>
                                            <p className="text-sm text-muted-foreground mt-2">MULTIPLICADO 50 VEZES</p>
                                        </div>

                                        <div className="pt-2">
                                            <p className="text-sm text-muted-foreground">5.000%</p>
                                            <p className="text-lg font-semibold text-foreground">
                                                1 operação excepcional
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Texto de apoio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="max-w-4xl mx-auto">
                        <Card className="p-6 bg-gradient-to-br from-[hsl(var(--blue-dark))]/20 to-background border-[hsl(var(--blue-accent))]/20">
                            <div className="flex items-start gap-4">
                                <Shield className="h-8 w-8 text-[hsl(var(--blue-accent))] flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                                        <span className="font-semibold text-[hsl(var(--blue-accent))]">
                                            Esses são os potenciais reais.
                                        </span>{" "}
                                        O Protocolo Antiperda garante que, quando o mercado não favorece, você sai
                                        no zero, sem perdas!
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
            <SectionTransition text="Esta é a sua última chance de garantir sua vaga com o preço promocional:" />
        </section>
    );
};
