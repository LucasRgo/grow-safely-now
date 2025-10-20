import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const QuestionsSection = () => {
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
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-[hsl(var(--blue-dark))]/20 rounded-full border border-[hsl(var(--blue-accent))]/30">
                                <HelpCircle className="h-10 w-10 md:h-12 md:w-12 text-[hsl(var(--blue-accent))]" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 glow-blue">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground">Tire suas últimas dúvidas</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="card-premium px-6">
                                <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline text-foreground text-sm md:text-base">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-sm md:text-base">
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
