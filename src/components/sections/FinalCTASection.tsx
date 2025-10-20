import { CTAButton } from "@/components/CTAButton";
import { Shield, CheckCircle, Award } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
            Você vai continuar com medo de perder...
            <br />
            <span className="text-success">ou vai multiplicar com segurança?</span>
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            A decisão está em suas mãos. Centenas de alunos já fizeram a escolha certa. É a sua vez.
          </p>

          {/* Trust badges */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-10 w-10 text-success mx-auto mb-3" />
              <p className="text-white font-heading font-semibold">
                Método Validado
              </p>
              <p className="text-white/70 text-sm mt-1">
                Testado e aprovado
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <CheckCircle className="h-10 w-10 text-success mx-auto mb-3" />
              <p className="text-white font-heading font-semibold">
                Garantia 7 Dias
              </p>
              <p className="text-white/70 text-sm mt-1">
                Risco zero para você
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Award className="h-10 w-10 text-success mx-auto mb-3" />
              <p className="text-white font-heading font-semibold">
                Suporte Exclusivo
              </p>
              <p className="text-white/70 text-sm mt-1">
                Grupo VIP incluso
              </p>
            </div>
          </div>

          <CTAButton size="xl">
            Quero Multiplicar com Segurança Agora
          </CTAButton>

          <p className="text-white/70 mt-8 text-sm">
            Acesso imediato após a confirmação do pagamento
          </p>
        </div>
      </div>
    </section>
  );
};
