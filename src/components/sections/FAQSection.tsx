import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso ter experiência prévia em investimentos?",
      answer: "Não! O Protocolo foi desenvolvido especialmente para iniciantes. Tudo é explicado passo a passo, sem jargões técnicos ou complicações.",
    },
    {
      question: "Quanto preciso investir para começar?",
      answer: "Você pode começar com valores baixos para testar. Muitos alunos iniciaram com apenas R$ 100 e aumentaram gradualmente conforme ganharam confiança.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados podem aparecer já nas primeiras semanas. Porém, recomendamos seguir o protocolo por pelo menos 30 dias para resultados mais consistentes.",
    },
    {
      question: "O protocolo realmente funciona?",
      answer: "Sim! Mais de 300 alunos confirmaram resultados reais. O método foi validado e testado extensivamente antes de ser lançado ao público.",
    },
    {
      question: "E se eu não tiver tempo durante o dia?",
      answer: "O protocolo foi desenhado para pessoas ocupadas. Você precisa de apenas 15-30 minutos por dia para aplicar as estratégias.",
    },
    {
      question: "Existe risco de perda?",
      answer: "O Protocolo Antiperda foi criado justamente para minimizar riscos. Ensinamos técnicas de proteção e gestão que reduzem drasticamente as chances de perda.",
    },
    {
      question: "Posso tirar dúvidas durante o processo?",
      answer: "Sim! Você terá acesso ao grupo fechado VIP onde pode tirar dúvidas diretamente com outros alunos e receber suporte contínuo.",
    },
    {
      question: "Há alguma garantia?",
      answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se você não gostar do conteúdo por qualquer motivo, devolvemos 100% do seu investimento.",
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire todas as suas dúvidas antes de começar
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-2 rounded-lg px-6 data-[state=open]:border-success"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <span className="font-heading font-semibold text-lg text-foreground pr-4">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
