import { CTAButton } from "@/components/CTAButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Shield, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary pt-20 md:pt-0">
      {/* Particles background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-success rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-success rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-success rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-success rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="p-3 md:p-4 bg-success/10 rounded-full backdrop-blur-sm border border-success/20">
              <Shield className="h-12 w-12 md:h-16 md:w-16 text-success" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground uppercase mb-4 md:mb-6 leading-tight glow-green px-4">
            PROTEJA E MULTIPLIQUE SEU PATRIMÔNIO
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            O protocolo <span className="font-semibold text-success">VALIDADO</span> que já ajudou iniciantes a conquistar até{" "}
            <span className="font-semibold text-success">1500% por operação</span> – sem risco e sem enrolação
          </p>

          {/* CTA Button */}
          <div className="mb-6 md:mb-8 px-4">
            <CTAButton size="xl">
              Quero Acessar o Protocolo Validado
            </CTAButton>
          </div>

          {/* Timer */}
          <div className="flex justify-center mb-8 md:mb-12 px-4">
            <CountdownTimer />
          </div>

          {/* Video testimonial placeholder */}
          <div className="max-w-2xl mx-auto px-4">
            <div className="relative rounded-xl overflow-hidden card-premium glow-border">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-card to-background">
                <div className="text-center p-6 md:p-8">
                  <TrendingUp className="h-12 w-12 md:h-16 md:w-16 text-success mx-auto mb-4" />
                  <p className="text-foreground text-base md:text-lg font-heading italic">
                    "Tive medo, mas confiei e hoje tripliquei meu capital"
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm md:text-base">- Aluno do Protocolo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
