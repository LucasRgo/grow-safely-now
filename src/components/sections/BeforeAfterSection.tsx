import { Card } from "@/components/ui/card";
import { Building2, Shield, TrendingUp } from "lucide-react";
import { SectionTransition } from "@/components/sections/SectionTransition";
import { motion } from "framer-motion";

export const BeforeAfterSection = () => {
    const professionalPoints = [
        {
            icon: Building2,
            title: "Estratégia baseada em protocolos validados",
            description:
                "Segue o mesmo modelo usado por grandes empresas e investidores de alto nível, adaptado para linguagem simples e execução prática.",
        },
        {
            icon: Shield,
            title: "Controle emocional e blindagem contra perdas",
            description:
                "Cada movimento é calculado. O Gerenciamento Anti-perda define o limite e protege o capital. O medo deixa de existir.",
        },
        {
            icon: TrendingUp,
            title: "Lucros previsíveis e confiança crescente",
            description:
                "Cada operação fortalece a disciplina. A mente e o dinheiro crescem juntos: tudo dentro de uma estrutura que funciona.",
        },
    ];

    return (
        <section className="py-8 md:py-16 relative overflow-hidden bg-gradient-to-b from-slate-900 to-green-950">
            {/* Overlay para suavizar o gradient */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Glow effects */}
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 glow-blue">
                        O Método Validado por Grandes Empresas
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Professional side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-3 mb-3">
                                <TrendingUp className="w-10 h-10 text-green-400 animate-pulse" />
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-green-400 glow-green">
                                    Benefícios do Protocolo
                                </h3>
                            </div>
                            <p className="text-gray-300 text-lg">Previsibilidade, paz e proteção do capital</p>
                        </div>

                        <div className="space-y-6">
                            {professionalPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}>
                                    <Card className="p-6 min-h-[170px] md:min-h-[170px] h-full bg-green-950/40 backdrop-blur-sm border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] ring-2 ring-green-500/20 group">
                                        <div className="flex items-start gap-5">
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500/40 group-hover:scale-110 transition-transform">
                                                    <point.icon
                                                        className="h-8 w-8 md:h-10 md:w-10 text-green-400"
                                                        strokeWidth={2.5}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 pt-1">
                                                <h4 className="text-lg md:text-xl font-semibold text-white mb-2 leading-tight">
                                                    {point.title}
                                                </h4>
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                                                    {point.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-green-500/20 text-center">
                            <p className="text-green-400 font-bold text-base glow-green">
                                Resultado: Multiplicação constante e domínio total
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 md:mt-16">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 rounded-xl blur-lg" />
                        <div className="relative bg-gradient-to-r from-blue-500/10 via-green-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-green-500/30 rounded-xl p-6 md:p-8">
                            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                                Agora você também pode lucrar como os grandes.
                            </p>
                            <p className="text-lg md:text-xl text-green-400 font-semibold glow-green">
                                O Protocolo ensina exatamente como!
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <SectionTransition text="Veja como o protocolo funciona na prática:" />
        </section>
    );
};
