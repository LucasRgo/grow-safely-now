import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, BookOpen, Zap, CheckCircle } from "lucide-react";

export const ProtocolSection = () => {
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-6">
            <Shield className="h-10 w-10 text-white" />
            <TrendingUp className="h-10 w-10 text-success -ml-3" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            O que é o Protocolo de Multiplicação Antiperda?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um método passo a passo que elimina o risco de perdas e maximiza seus ganhos de forma consistente e previsível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full gradient-success flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
