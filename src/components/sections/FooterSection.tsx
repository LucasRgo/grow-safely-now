export const FooterSection = () => {
    return (
        <footer className="bg-card border-t border-border py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-muted-foreground mb-4 text-xs md:text-sm">
                        © 2024 Protocolo de Multiplicação Antiperda. Todos os direitos reservados.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-xs md:text-sm">
                        <a href="#" className="text-muted-foreground hover:text-[hsl(var(--blue-accent))] transition-colors">
                            Termos de Uso
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-success transition-colors">
                            Política de Privacidade
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-[hsl(var(--blue-accent))] transition-colors">
                            Contato
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
