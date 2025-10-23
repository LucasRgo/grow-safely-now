import { motion } from "framer-motion";
import { XCircle, CheckCircle2, TrendingDown, TrendingUp } from "lucide-react";
import { SectionTransition } from "./SectionTransition";

export function AmateurVsProfessionalSection() {
    const amateurPoints = [
        "Opera sem protocolo validado",
        "Toma decisões no impulso e emoção",
        "Não sabe quando entrar ou sair",
        "Perde dinheiro e repete os erros",
    ];

    const professionalPoints = [
        "Seguem estratégias testadas por fundos globais",
        "Operam com método e disciplina",
        "Sabem exatamente quando agir",
        "Multiplicam com previsibilidade",
    ];

    return (
        <section className="py-16 px-4 overflow-hidden relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-50" />
            
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue">
                        A Diferença Entre Quem Perde e Quem Multiplica
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                        <span className="text-destructive font-bold">Quem perde é o amador.</span>{" "}
                        <span className="text-success font-bold">Os grandes sempre sabem o que fazer.</span>
                    </p>
                </motion.div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {/* Amador Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <div className="relative bg-card/80 backdrop-blur-sm border-2 border-destructive/30 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-destructive/20">
                                <div className="bg-destructive/20 p-3 rounded-lg">
                                    <TrendingDown className="w-8 h-8 text-destructive" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-destructive">
                                    O Amador
                                </h3>
                            </div>

                            {/* Points */}
                            <ul className="space-y-4">
                                {amateurPoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3 group/item">
                                        <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-foreground/90 text-base md:text-lg leading-relaxed">
                                            {point}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Bottom accent */}
                            <div className="mt-8 pt-6 border-t border-destructive/20">
                                <p className="text-destructive/80 font-semibold text-sm text-center italic">
                                    Resultado: Prejuízo constante
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-success/20 to-success/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <div className="relative bg-card/80 backdrop-blur-sm border-2 border-success/40 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 ring-2 ring-success/20">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-success/20">
                                <div className="bg-success/20 p-3 rounded-lg">
                                    <TrendingUp className="w-8 h-8 text-success animate-pulse" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-success glow-green">
                                    Os Grandes Investidores
                                </h3>
                            </div>

                            {/* Points */}
                            <ul className="space-y-4">
                                {professionalPoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3 group/item">
                                        <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-foreground/90 text-base md:text-lg leading-relaxed font-medium">
                                            {point}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Bottom accent */}
                            <div className="mt-8 pt-6 border-t border-success/20">
                                <p className="text-success font-bold text-sm text-center glow-green">
                                    Resultado: Multiplicação constante
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-success/20 via-primary/20 to-success/20 rounded-xl blur-lg" />
                        <div className="relative bg-gradient-to-r from-primary/10 via-success/10 to-primary/10 backdrop-blur-sm border-2 border-success/30 rounded-xl p-8">
                            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                                Agora você também pode operar como os grandes.
                            </p>
                            <p className="text-lg md:text-xl text-success font-semibold glow-green">
                                O Protocolo ensina exatamente como!
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <SectionTransition text="Agora que você entende a diferença, veja como o protocolo funciona na prática:" />
        </section>
    );
}

