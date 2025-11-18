import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export const FooterSection = () => {
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    return (
        <>
            <footer id="main-footer" className="bg-card border-t border-border py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="text-muted-foreground mb-4 text-xs md:text-sm">
                            © 2025: Protocolo de Multiplicação Anti-Perda. Todos os direitos reservados.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-xs md:text-sm">
                            <button
                                onClick={() => setIsTermsModalOpen(true)}
                                className="text-muted-foreground hover:text-[hsl(var(--blue-accent))] transition-colors text-left md:text-center"
                            >
                                TERMOS DE USO
                            </button>
                            <button
                                onClick={() => setIsPrivacyModalOpen(true)}
                                className="text-muted-foreground hover:text-success transition-colors text-left md:text-center"
                            >
                                POLÍTICA DE PRIVACIDADE
                            </button>
                            <a href="https://wa.me/+5511960642003" className="text-muted-foreground hover:text-[hsl(var(--blue-accent))] transition-colors">
                                CONTATO
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <Dialog open={isTermsModalOpen} onOpenChange={setIsTermsModalOpen}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">
                            TERMOS DE USO
                        </DialogTitle>
                        <DialogDescription className="text-sm text-muted-foreground mb-6">
                            Última atualização: 10/09/2025
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6 text-sm md:text-base leading-relaxed">
                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                1. Sobre o Serviço
                            </h3>
                            <p className="text-foreground">
                                O Protocolo de Multiplicação Anti-Perda é um produto digital que oferece conteúdos exclusivos sobre estratégias de investimento para o mercado de renda variável, incluindo estratégias de operações em vídeo aulas, atualizações semanais do mercado financeiro e acesso a materiais complementares.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                2. Assinatura e Pagamento
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                                <li>O valor original do produto é R$1.000, porém pode ser adquirido pelo valor promocional de R$97,00, conforme condição vigente no momento da compra.</li>
                                <li>O pagamento é realizado por meio das plataformas parceiras disponíveis (ex.: Hotmart, Stripe, PayPal).</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                3. Cancelamento
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                                <li>O usuário pode solicitar o cancelamento a qualquer momento dentro dos 7 dias após a compra ter sido aprovada, diretamente na plataforma de pagamento ou entrando em contato com o suporte.</li>
                                <li>Em caso de cancelamento, todo o acesso ao manterial será bloqueado.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                4. Garantia de Satisfação
                            </h3>
                            <p className="text-foreground">
                                Oferecemos garantia de 7 dias após a compra. Caso não esteja satisfeito, o cliente pode solicitar reembolso integral.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                5. Propriedade Intelectual
                            </h3>
                            <p className="text-foreground">
                                Todo o conteúdo do Protocolo de Multiplicação Anti-Perda é de uso exclusivo dos compradores, não podendo ser copiado, distribuído ou revendido.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                6. Alterações nos Termos
                            </h3>
                            <p className="text-foreground">
                                A R7 Investimentos pode atualizar estes Termos e a Política de Privacidade sempre que necessário. Os clientes serão notificados em caso de mudanças relevantes.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                7. Foro
                            </h3>
                            <p className="text-foreground">
                                Fica eleito o foro da comarca de São Bernardo do Campo/SP para dirimir quaisquer conflitos relacionados a este contrato.
                            </p>
                        </section>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={isPrivacyModalOpen} onOpenChange={setIsPrivacyModalOpen}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">
                            POLÍTICA DE PRIVACIDADE
                        </DialogTitle>
                        <DialogDescription className="text-sm text-muted-foreground mb-6">
                            Última atualização: 10/09/2025
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6 text-sm md:text-base leading-relaxed">
                        <p className="text-foreground">
                            A R7 Investimentos e Consultoria LTDA valoriza a privacidade e a proteção dos dados de seus clientes. Esta Política de Privacidade explica como coletamos, utilizamos e protegemos suas informações ao acessar e utilizar o serviço Protocolo de Multiplicação Anti-Perda.
                        </p>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                1. Informações que Coletamos
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                                <li><strong>Dados de cadastro:</strong> nome, e-mail e telefone.</li>
                                <li><strong>Dados de pagamento:</strong> processados por parceiros como [Hotmart/Stripe/PayPal], sem que tenhamos acesso direto a informações sensíveis como número de cartão.</li>
                                <li><strong>Dados de navegação:</strong> cookies e pixels para análise de tráfego e campanhas de marketing.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                2. Como Utilizamos suas Informações
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                                <li>Para liberar seu acesso ao Protocolo de Multiplicação Anti-Perda.</li>
                                <li>Para enviar atualizações de mercado, comunicados e conteúdos educativos.</li>
                                <li>Para informar sobre novidades e promoções, sempre com opção de descadastro.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                3. Compartilhamento de Dados
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                                <li>Não vendemos ou repassamos seus dados a terceiros.</li>
                                <li>Compartilhamos apenas com serviços essenciais, como processadores de pagamento e plataformas de envio de e-mails.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                4. Cookies e Tecnologias de Rastreamento
                            </h3>
                            <p className="text-foreground">
                                Utilizamos cookies para melhorar sua experiência e medir campanhas de marketing. Você pode desativá-los nas configurações do navegador, mas algumas funcionalidades podem ser limitadas.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                5. Segurança dos Dados
                            </h3>
                            <p className="text-foreground">
                                Adotamos medidas técnicas e administrativas para proteger suas informações pessoais contra acessos não autorizados.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                6. Direitos do Usuário
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                                <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
                                <li>Solicitar o cancelamento da assinatura a qualquer momento.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h3 className="text-lg md:text-xl font-semibold text-foreground">
                                7. Contato
                            </h3>
                            <p className="text-foreground">
                                Se tiver dúvidas, entre em contato: <a href="mailto:contato.r7investimentos@gmail.com" className="text-[hsl(var(--blue-accent))] hover:underline">contato.r7investimentos@gmail.com</a>
                            </p>
                        </section>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
