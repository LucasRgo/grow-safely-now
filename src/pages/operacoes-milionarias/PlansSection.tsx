import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CHECKOUT_URL_3_MONTHS = "https://pay.kiwify.com.br/seu-link-3-meses";
const CHECKOUT_URL_LIFETIME = "https://pay.kiwify.com.br/seu-link-vitalicio";

export function PlansSection() {
    const plans = [
        {
            name: "Acesso 3 Meses",
            description: "Receba as operações por 3 meses completos",
            oldPrice: "R$ 1000",
            installmentLabel: " x 12",
            installmentPrice: "R$ 29,99",
            cashPrice: "R$ 290",
            features: [
                "Acesso ao Grupo de Operações",
                "Alertas de operações em tempo real",
                "Vídeos com análises detalhadas",
                "Suporte dedicado as operações",
            ],
            color: "green",
            url: CHECKOUT_URL_3_MONTHS,
        },
        {
            name: "Acesso Vitalício",
            description: "Acesso permanente + todos os bônus futuros",
            oldPrice: "R$ 2.997",
            installmentLabel: " x 12",
            installmentPrice: "R$ 49,95",
            cashPrice: "R$ 497",
            features: [
                "Acesso VITALÍCIO ao Grupo de Operações",
                "Todos os alertas de operações para sempre",
                "Vídeos com análises ilimitadas",
                "Suporte prioritário vitalício",
            ],
            color: "gold",
            recommended: true,
            url: CHECKOUT_URL_LIFETIME,
        },
    ];

    return (
        <section id="plans" className="relative py-20 md:py-32 px-4">
            {/* Background with diagonal gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black" />

            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)`,
                }}
            />

            {/* Gold glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700] opacity-10 blur-[150px] rounded-full" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Liberar Meu Acesso
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] to-transparent mx-auto" />
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative group w-full max-w-[420px] mx-auto md:max-w-none ${
                                plan.recommended ? "md:scale-105" : ""
                            }`}>
                            {/* Recommended badge */}
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold text-xs px-4 py-1.5 rounded-full shadow-lg">
                                        🔥 MAIS ESCOLHIDO
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className={`relative h-full bg-[#0e0e0e]/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 ${
                                    plan.color === "gold"
                                        ? "border-[#FFD700]/50 hover:border-[#FFD700] shadow-[0_0_40px_rgba(255,215,0,0.2)] hover:shadow-[0_0_60px_rgba(255,215,0,0.4)] animate-pulse-glow"
                                        : "border-[#00ff91]/30 hover:border-[#00ff91] hover:shadow-[0_0_30px_rgba(0,255,145,0.2)]"
                                }`}>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-gray-400 text-sm">{plan.description}</p>
                                </div>

                                <div className="text-center mb-8 space-y-2">
                                    <div className="text-red-400 text-lg line-through">{plan.oldPrice}</div>
                                    <div className="text-gray-300 text-base uppercase tracking-wide flex flex-wrap items-end justify-center gap-2">
                                        <span
                                            className={`text-4xl sm:text-5xl font-black ${
                                                plan.color === "gold" ? "text-[#FFD700]" : "text-[#00ff91]"
                                            }`}>
                                            {plan.installmentPrice}
                                        </span>
                                        <span>{plan.installmentLabel}</span>
                                    </div>
                                    <div className="text-gray-400 text-sm">ou {plan.cashPrice} à vista</div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check
                                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                                    plan.color === "gold" ? "text-[#FFD700]" : "text-[#00ff91]"
                                                }`}
                                            />
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    size="lg"
                                    className={`w-full font-bold text-lg h-14 transition-all duration-300 ${
                                        plan.color === "gold"
                                            ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                            : "bg-[#00ff91] hover:bg-[#00ff91]/80 text-black"
                                    }`}
                                    onClick={() => window.open(plan.url, "_self")}>
                                    {plan.color === "gold" ? "Garantir Acesso Para Sempre" : "Garantir Acesso Agora"}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-white text-lg">
                        💡{" "}
                        <span className="font-semibold">
                            Com apenas uma operação bem feita, você já paga todo o investimento.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
