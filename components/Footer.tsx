import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-green py-12 text-white/80 text-sm font-light border-t border-brand-gold/30">
      <div className="container mx-auto px-6 text-center">
        <h4 className="text-2xl text-white mb-6">Corpore Life</h4>
        <p className="mb-8 max-w-md mx-auto">
          Comprometidos com a soberania da sua saúde através da inovação natural e biotecnologia.
        </p>
        <div className="flex justify-center gap-6 mb-8 text-brand-gold">
          <a href="#" className="hover:underline">Termos de Uso</a>
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:underline">Contato</a>
        </div>
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Corpore Life. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};