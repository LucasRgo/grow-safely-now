import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { SectionTransition } from "@/components/sections/SectionTransition";
import teamPhoto from "@/assets/images/5.webp";

export function About() {
    return (
        <section className="pt-16 md:pt-24 pb-0 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                    {/* Left side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 leading-tight text-foreground">
                                Quem está por trás do{" "}
                                <span className="text-blue-400">PROTOCOLO MULTIPLICAÇÃO ANTI-PERDA?</span>
                            </h2>
                            <div className="w-20 h-1 bg-primary/50 mb-6"></div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground leading-snug">
                            Renan Freitas, fundador da R7 Investimentos.
                        </h3>
                        <div className="space-y-4">
                            <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
                                Por anos busquei resultados no mercado sem um método claro, com medo de perder
                                dinheiro.
                            </p>

                            <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
                                Até entender:{" "}
                                <span className="text-blue-400">
                                quem não segue um protocolo validado está condenado ao fracasso.
                                </span>
                            </p>

                            <p className="text-base md:text-lg text-foreground text-white font-bold">
                                Grandes fundos usam estratégias matemáticas testadas há décadas. Eu traduzi essas
                                estratégias para uma linguagem simples que qualquer pessoa pode aplicar.
                            </p>

                            <p className="text-base md:text-lg text-foreground leading-relaxed">
                                O resultado: um protocolo que protege seu dinheiro e multiplica ele por no mínimo{" "}
                                <span className="font-bold text-blue-400">1.000%</span> - 10x mais o valor aplicado por operação.
                            </p>
                            <div className="bg-gradient-to-r from-success/10 via-success/15 to-success/20 border-l-4 border-success p-4 rounded-lg">
                                <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                                    Cansei de ver pessoas queimando capital por falta de método.{" "}
                                    <span className="text-blue-300">
                                        Agora você tem acesso ao que os grandes players usam, sem complicação.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Image without card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex items-end justify-center">
                        <img
                            src={teamPhoto}
                            alt="Renan Freitas - Fundador R7 Investimentos"
                            className="w-full h-auto object-contain max-w-lg"
                        />
                        <Badge className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 gradient-blue text-white font-bold text-sm shadow-lg whitespace-nowrap border-0">
                            Fundador R7 Investimentos
                        </Badge>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
