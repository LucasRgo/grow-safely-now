import { CTAButton } from "@/components/CTAButton";
import { Shield, CheckCircle, Award } from "lucide-react";

export const LastChanceSection = () => {
    return (
        <section className="py-16 md:py-24 gradient-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border-4 border-success rounded-full" />
                <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-success rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 md:mb-8 leading-tight glow-green px-4">
                        Você vai continuar com medo de perder...
                        <br />
                        <span className="text-success">ou vai multiplicar com segurança?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
                        A decisão está em suas mãos. Centenas de alunos já fizeram a escolha certa. É a sua vez.
                    </p>

                    {/* Trust badges */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
                        <div className="card-premium p-6 border-success/20">
                            <Shield className="h-8 w-8 md:h-10 md:w-10 text-success mx-auto mb-3" />
                            <p className="text-foreground font-heading font-semibold text-sm md:text-base">
                                Método Validado
                            </p>
                            <p className="text-muted-foreground text-xs md:text-sm mt-1">Testado e aprovado</p>
                        </div>

                        <div className="card-premium p-6 border-success/20">
                            <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-success mx-auto mb-3" />
                            <p className="text-foreground font-heading font-semibold text-sm md:text-base">
                                Garantia 7 Dias
                            </p>
                            <p className="text-muted-foreground text-xs md:text-sm mt-1">Risco zero para você</p>
                        </div>

                        <div className="card-premium p-6 border-success/20">
                            <Award className="h-8 w-8 md:h-10 md:w-10 text-success mx-auto mb-3" />
                            <p className="text-foreground font-heading font-semibold text-sm md:text-base">
                                Suporte Exclusivo
                            </p>
                            <p className="text-muted-foreground text-xs md:text-sm mt-1">Grupo VIP incluso</p>
                        </div>
                    </div>

                    <div className="px-4">
                        <CTAButton size="xl" className="w-full md:w-auto">
                            Quero Multiplicar com Segurança Agora
                        </CTAButton>
                    </div>

                    <p className="text-muted-foreground mt-6 md:mt-8 text-xs md:text-sm px-4">
                        Acesso imediato após a confirmação do pagamento
                    </p>
                </div>
            </div>
        </section>
    );
};
