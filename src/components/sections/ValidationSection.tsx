import { Card } from "@/components/ui/card";
import { BarChart3, CheckCircle2, User } from "lucide-react";

export const ValidationSection = () => {
  const stats = [
    { icon: User, value: "300+", label: "Alunos aprovam o método" },
    { icon: BarChart3, value: "1500%", label: "Retorno máximo registrado" },
    { icon: CheckCircle2, value: "98%", label: "Taxa de satisfação" },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-green">
              Validado. Real. Reprodutível.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Não é promessa. São resultados que você pode ver e verificar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 md:p-8 card-premium hover:border-success/20 text-center group transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-success/10 rounded-full border border-success/20 group-hover:bg-success/20 transition-all">
                    <stat.icon className="h-10 w-10 md:h-12 md:w-12 text-success" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-6 md:p-8 card-premium">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-success/10 rounded-full border border-success/20">
                  <User className="h-6 w-6 md:h-8 md:w-8 text-success" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-base md:text-lg">Criador do Protocolo</p>
                  <p className="text-muted-foreground text-sm md:text-base">Especialista em multiplicação segura</p>
                </div>
              </div>
              
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center mb-4 border border-border">
                <User className="h-12 w-12 md:h-16 md:w-16 text-success" />
              </div>
              
              <p className="text-muted-foreground italic text-sm md:text-base">
                "Desenvolvi este protocolo após anos de estudo e validação com alunos reais. 
                Cada passo foi testado centenas de vezes para garantir resultados consistentes."
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
