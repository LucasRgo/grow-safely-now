import { Card } from "@/components/ui/card";
import { SectionTransition } from "@/components/sections/SectionTransition";

export const ChallengeBanner = () => {
    return (
        <section className="py-8 md:py-16 bg-gradient-to-br from-success/5 via-background to-success/10">
            <div className="max-w-4xl mx-auto px-4">
                <Card className="p-8 md:p-10 bg-gradient-to-br from-success/10 via-success/5 to-transparent border-2 border-success/30 shadow-2xl shadow-success/20 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-success/5 rounded-full blur-3xl -z-0" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-success/5 rounded-full blur-3xl -z-0" />

                <div className="relative z-10">
                    {/* Badge */}
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-success/30 via-success/20 to-success/30 border-2 border-success/50 text-success font-bold text-sm md:text-base uppercase tracking-wider glow-green shadow-lg shadow-success/20 animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
                            Desafio
                            <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
                        </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center text-foreground mb-6 leading-tight glow-green">
                        Atingir seus primeiros <span className="text-success">R$ 300 mil</span> em até{" "}
                        <span className="text-success">6 meses</span>
                    </h3>

                    {/* Texto Principal */}
                    <p className="text-lg md:text-xl text-center text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                        Seguindo o{" "}
                        <span className="font-semibold text-foreground">
                            Protocolo de Multiplicação Anti-Perda
                        </span>
                        , esta é a meta que traçamos para você. Não é sorte, é{" "}
                        <span className="font-semibold text-success">método aplicado com disciplina</span>.
                    </p>

                    {/* Subtexto */}
                    <div className="text-center">
                        <p className="text-base md:text-lg text-success font-bold mb-2 glow-green">
                            Muitos alunos já estão no caminho. E você?
                        </p>
                    </div>
                </div>
                </Card>
                <SectionTransition text="Não acha que seja possivel? Veja o resultado de alguns alunos:" />
            </div>
        </section>
    );
};
