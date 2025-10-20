import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, Frown, X, Shield, TrendingUp, Smile, CheckCircle } from "lucide-react";

export const PainDesireSection = () => {
  const pains = [
    { icon: TrendingDown, text: "Perda de dinheiro com investimentos ruins" },
    { icon: Frown, text: "Frustração por não saber por onde começar" },
    { icon: AlertCircle, text: "Medo de ser enganado por falsas promessas" },
    { icon: X, text: "Insegurança sobre cada decisão financeira" },
  ];

  const desires = [
    { icon: Shield, text: "Protocolo validado e testado por centenas" },
    { icon: TrendingUp, text: "Crescimento consistente e previsível" },
    { icon: Smile, text: "Paz de espírito em cada operação" },
    { icon: CheckCircle, text: "Passo a passo claro, sem complicação" },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Você também sente isso?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            É hora de transformar sua realidade financeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pain side */}
          <Card className="p-8 bg-white border-2 border-red-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-red-600 mb-2">
                ANTES
              </h3>
              <p className="text-muted-foreground">
                Perda, medo e insegurança
              </p>
            </div>

            <div className="space-y-4">
              {pains.map((pain, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <pain.icon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-foreground">{pain.text}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Desire side */}
          <Card className="p-8 bg-white border-2 border-success">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-success mb-2">
                DEPOIS
              </h3>
              <p className="text-muted-foreground">
                Clareza, método e resultado
              </p>
            </div>

            <div className="space-y-4">
              {desires.map((desire, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-success/5 rounded-lg">
                  <desire.icon className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-foreground">{desire.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
