import { Card } from "@/components/ui/card";
import { TrendingUp, CheckCircle, DollarSign } from "lucide-react";

export const ProofSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      result: "+350% em 30 dias",
      quote: "Nunca imaginei que seria tão simples. O protocolo é claro e direto ao ponto.",
    },
    {
      name: "Maria Santos",
      result: "+1200% em 60 dias",
      quote: "Eu era completamente leiga. Hoje tenho uma renda extra sólida e confiável.",
    },
    {
      name: "Pedro Costa",
      result: "+580% em 45 dias",
      quote: "Testei com valor baixo no início. Depois que vi o resultado, aumentei o investimento.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Veja o que alunos comuns estão conquistando
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de pessoas que decidiram confiar no método
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 border-2">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full gradient-success flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-heading font-bold text-2xl text-success">
                    {testimonial.result}
                  </span>
                </div>
              </div>
              
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <DollarSign className="h-12 w-12 text-muted-foreground" />
              </div>

              <blockquote className="text-muted-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <p className="font-heading font-semibold text-foreground">
                - {testimonial.name}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-success/10 rounded-lg">
            <CheckCircle className="h-5 w-5 text-success" />
            <p className="text-lg font-heading font-semibold text-success">
              Mais de 300 alunos confirmaram resultados reais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
