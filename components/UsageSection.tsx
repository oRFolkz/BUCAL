import React from 'react';
import { Section } from './ui/Section';
import { Sparkles, Activity, Droplet, ShieldPlus } from 'lucide-react';

export const UsageSection: React.FC = () => {
  return (
    <Section id="section_usage" background="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3 block">Protocolo Clínico</span>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] text-primary-green font-bold leading-tight mb-6">
          Versatilidade e <span className="font-normal">Potência</span>
        </h2>
        <p className="text-neutral-text/80 font-light text-sm leading-relaxed max-w-2xl mx-auto">
          Integre o poder do ozônio à sua rotina de forma simples e multifuncional.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Card 1: Higiene Diária */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-neutral-100 hover:border-brand-gold/30 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-green/5 rounded-bl-full -mr-8 -mt-8"></div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center text-primary-green">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary-green">Higiene Diária</h3>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-primary-green font-bold text-xs">1</div>
              </div>
              <div>
                <h4 className="font-bold text-neutral-text mb-1">Escovação Ozonizada</h4>
                <p className="text-sm font-light text-neutral-500 leading-relaxed">
                  Aplique 2 gotas puras na escova ou misture ao seu creme dental habitual. Potencializa a limpeza e elimina o biofilme.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-primary-green font-bold text-xs">2</div>
              </div>
              <div>
                <h4 className="font-bold text-neutral-text mb-1">Enxaguante Natural</h4>
                <p className="text-sm font-light text-neutral-500 leading-relaxed">
                  Dilua 10 gotas em um pouco de água e faça bochecho/gargarejo. Alcaliniza o pH da boca e garante hálito puro.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Tratamento Específico */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-neutral-100 hover:border-brand-gold/30 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full -mr-8 -mt-8"></div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-primary-green">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary-green">Tratamento Focal</h3>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <ShieldPlus className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-text mb-1">Gengivas e Dentes</h4>
                <p className="text-sm font-light text-neutral-500 leading-relaxed">
                  Em casos de sensibilidade, dor ou inflamação gengival, aplique algumas gotas diretamente no local afetado para alívio rápido e regeneração.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <Droplet className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-text mb-1">Garganta</h4>
                <p className="text-sm font-light text-neutral-500 leading-relaxed">
                  Aplique diretamente na garganta 3 vezes ao dia ou conforme necessidade para combater desconfortos e infecções.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};