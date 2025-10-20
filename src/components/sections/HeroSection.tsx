import { CTAButton } from "@/components/CTAButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Shield, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary">
      {/* Particles background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-white rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Shield className="h-16 w-16 text-success" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white uppercase mb-6 leading-tight">
            PROTEJA E MULTIPLIQUE SEU PATRIMÔNIO
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            O protocolo <span className="font-semibold text-success">VALIDADO</span> que já ajudou iniciantes a conquistar até{" "}
            <span className="font-semibold text-success">1500% por operação</span> – sem risco e sem enrolação
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <CTAButton size="xl">
              Quero Acessar o Protocolo Validado
            </CTAButton>
          </div>

          {/* Timer */}
          <div className="flex justify-center mb-12">
            <CountdownTimer />
          </div>

          {/* Video testimonial placeholder */}
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
                <div className="text-center p-8">
                  <TrendingUp className="h-16 w-16 text-success mx-auto mb-4" />
                  <p className="text-white text-lg font-heading italic">
                    "Tive medo, mas confiei e hoje tripliquei meu capital"
                  </p>
                  <p className="text-white/60 mt-2">- Aluno do Protocolo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
