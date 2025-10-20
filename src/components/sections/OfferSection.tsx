import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/CTAButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CheckCircle, Users, FileSpreadsheet, MessageSquare, Gift } from "lucide-react";
import { useState, useEffect } from "react";

export const OfferSection = () => {
  const [spotsLeft, setSpotsLeft] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft(prev => prev > 5 ? prev - 1 : prev);
    }, 30000); // Decrease every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const bonuses = [
    {
      icon: MessageSquare,
      title: "Grupo Fechado VIP",
      description: "Acesso exclusivo à comunidade de alunos. Tire dúvidas e compartilhe resultados.",
      value: "R$ 497",
    },
    {
      icon: CheckCircle,
      title: "Checklist da Execução",
      description: "Passo a passo detalhado para não errar em nenhuma etapa do protocolo.",
      value: "R$ 297",
    },
    {
      icon: FileSpreadsheet,
      title: "Planilha de Controle",
      description: "Ferramenta completa para acompanhar suas operações e resultados em tempo real.",
      value: "R$ 397",
    },
  ];

  return (
    <section className="py-24 bg-success/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-urgent text-urgent-foreground rounded-full mb-6 animate-pulse-border">
              <Gift className="h-5 w-5" />
              <span className="font-heading font-semibold">OFERTA EXCLUSIVA</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Tudo isso por apenas R$250
            </h2>
            <p className="text-2xl text-urgent font-heading font-semibold mb-6">
              Mas só até hoje às 23:59
            </p>
            
            <div className="flex justify-center mb-8">
              <CountdownTimer />
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-white border-2 border-success mb-8">
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-center mb-6">
                O que está incluso:
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-success/5 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-heading font-semibold text-lg mb-1">
                      Protocolo Completo de Multiplicação Antiperda
                    </p>
                    <p className="text-muted-foreground">
                      Acesso vitalício ao método completo, com atualizações gratuitas
                    </p>
                  </div>
                </div>

                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-success/5 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                      <bonus.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-heading font-semibold text-lg">
                          {bonus.title}
                        </p>
                        <span className="text-success font-heading font-bold">
                          {bonus.value}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-success/20 pt-6 mb-8">
              <div className="flex items-center justify-between text-2xl font-heading font-bold">
                <span>Valor total:</span>
                <div className="text-right">
                  <div className="text-muted-foreground line-through text-xl">R$ 1.441</div>
                  <div className="text-success text-3xl">R$ 250</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <CTAButton size="xl" className="w-full md:w-auto">
                Quero Acesso AGORA ao Protocolo Validado
              </CTAButton>
              
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-urgent/10 border border-urgent rounded-lg animate-pulse-border">
                <Users className="h-5 w-5 text-urgent" />
                <p className="text-urgent font-heading font-semibold">
                  Apenas {spotsLeft} vagas restantes
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary" />
              <p className="text-muted-foreground">
                <span className="font-semibold text-primary">Garantia de 7 dias</span> - Se não gostar, devolvemos 100% do seu dinheiro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
