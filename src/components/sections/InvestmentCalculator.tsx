import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTransition } from "@/components/sections/SectionTransition";

export function InvestmentCalculator() {
    const [investmentValue, setInvestmentValue] = useState<string>("100");

    // Calcula o retorno de 1500% (multiplicar por 16)
    const calculateReturn = (value: string) => {
        const numValue = parseFloat(value) || 0;
        return numValue * 10;
    };

    const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvestmentValue(e.target.value);
    };

    return (
        <section className="py-8 md:py-16 px-4 overflow-hidden bg-gradient-to-br from-blue-950/30 via-background to-blue-900/20">
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue text-center">
                    Simulador de lucro por operação
                </h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="gradient-primary-blue rounded-xl p-4 sm:p-6 border-2 border-success/30 shadow-lg">
                    <div className="flex flex-col gap-3">
                        {/* Texto e Input */}
                        <div className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-lg font-semibold p-4">
                            <label htmlFor="investment-input" className="text-foreground mb-4">
                                Se você aplicar
                            </label>
                            <div className="relative group">
                                <span
                                    className="absolute -top-5 left-2 text-xs text-success transition-opacity"
                                    aria-hidden="true">
                                    ✎ Altere o valor
                                </span>
                                <div className="relative flex items-center">
                                    <span
                                        className="absolute left-2.5 text-foreground/70 text-sm font-medium"
                                        aria-hidden="true">
                                        R$
                                    </span>
                                    <input
                                        id="investment-input"
                                        type="number"
                                        value={investmentValue}
                                        onChange={handleInvestmentChange}
                                        className="w-28 sm:w-32 px-2 pl-9 py-1.5 bg-background/50 border-2 border-success rounded-lg text-center font-bold text-success focus:outline-none focus:ring-2 focus:ring-success focus:border-transparent transition-all hover:bg-background/70 hover:scale-105"
                                        min="0"
                                        step="100"
                                        aria-label="Valor do investimento em reais"
                                    />
                                </div>
                            </div>
                            <span className="text-foreground mb-4 text-center">
                                em UMA operação, consegue transformar em:
                            </span>
                        </div>

                        {/* Resultado */}
                        <div className="text-center">
                            <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-success/20 via-success/10 to-success/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-success/40">
                                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-success animate-pulse flex-shrink-0" />
                                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-success break-all glow-green">
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(calculateReturn(investmentValue))}
                                </span>
                                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-success animate-pulse flex-shrink-0" />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-2 font-medium px-2">
                                🚀 Retorno de{" "}
                                <span className="text-success font-bold whitespace-nowrap">
                                    +
                                    {(
                                        calculateReturn(investmentValue) - (parseFloat(investmentValue) || 0)
                                    ).toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </span>{" "}
                                (1000%)
                            </p>
                            <p className="text-sm sm:text-base text-foreground/80 mt-3 font-medium px-2 italic">
                                Retorno mínimo de 10x o valor aplicado por operação pra quem segue o
                                protocolo a risca.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <SectionTransition text="Agora que você calculou seu potencial, veja a prova real de que o método funciona:" />
        </section>
    );
}
