import { Card } from "@/components/ui/card";
import { BarChart3, CheckCircle2, User } from "lucide-react";

export const ValidationSection = () => {
  return (
    <section className="py-24 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Validado. Real. Reprodutível.
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Não é teoria. São resultados concretos que você pode alcançar também.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-16 h-16 rounded-full bg-success mx-auto mb-4 flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-heading font-bold text-white mb-2">300+</div>
              <p className="text-white/80">Alunos aprovam o método</p>
            </Card>

            <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-16 h-16 rounded-full bg-success mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-heading font-bold text-white mb-2">1500%</div>
              <p className="text-white/80">Retorno máximo registrado</p>
            </Card>

            <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-16 h-16 rounded-full bg-success mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-heading font-bold text-white mb-2">98%</div>
              <p className="text-white/80">Taxa de satisfação</p>
            </Card>
          </div>

          {/* Video depoimento do criador */}
          <div className="max-w-3xl mx-auto">
            <Card className="p-2 bg-white/5 backdrop-blur-sm border-white/10">
              <div className="aspect-video bg-gradient-to-br from-primary/50 to-primary rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <User className="h-16 w-16 text-white mx-auto mb-4" />
                  <p className="text-white text-lg font-heading italic mb-2">
                    "Desenvolvi este protocolo após anos de estudo e testes.<br />
                    Agora, centenas de alunos comprovam sua eficácia."
                  </p>
                  <p className="text-white/70">- Criador do Protocolo Antiperda</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
