export const FooterSection = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center text-white/70 text-sm space-y-2">
          <p>© 2025 Protocolo de Multiplicação Antiperda. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <p className="text-xs mt-4">
            Este produto é comercializado com garantia de 7 dias através da plataforma segura
          </p>
        </div>
      </div>
    </footer>
  );
};
