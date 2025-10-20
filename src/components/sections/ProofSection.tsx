import { Card } from "@/components/ui/card";
import { TrendingUp, CheckCircle, DollarSign } from "lucide-react";

export const ProofSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      result: "+350% em 30 dias",
      quote: "Nunca imaginei que seria tão simples. O protocolo é claro e direto ao ponto.",
      icon: TrendingUp,
      role: "Iniciante"
    },
    {
      name: "Maria Santos",
      result: "+1200% em 60 dias",
      quote: "Eu era completamente leiga. Hoje tenho uma renda extra sólida e confiável.",
      icon: CheckCircle,
      role: "Leiga em investimentos"
    },
    {
      name: "Pedro Costa",
      result: "+580% em 45 dias",
      quote: "Testei com valor baixo no início. Depois que vi o resultado, aumentei o investimento.",
      icon: DollarSign,
      role: "Primeiro investidor"
    },
  ];

  return (
    <section id="resultados" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-green">
            Veja o que alunos comuns estão conquistando
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de pessoas que aplicaram o protocolo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 card-premium hover:border-success/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-success/10 rounded-full border border-success/20">
                  <testimonial.icon className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <p className="font-heading font-bold text-success">{testimonial.result}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
            Mais de 300 alunos confirmaram resultados reais
          </p>
          <p className="text-muted-foreground">
            após aplicar o protocolo
          </p>
        </div>
      </div>
    </section>
  );
};
