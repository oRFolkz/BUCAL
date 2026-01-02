import React from 'react';
import { Section } from './ui/Section';
import { AlertTriangle, Microscope, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <Section id="section_2_problem" className="relative" background="light">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Comparison Visual - Left 5 cols */}
        <div className="lg:col-span-5 relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-neutral-100 relative overflow-hidden group">
            <h3 className="text-2xl text-primary-green mb-6">Comparativo de Ação</h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-red-200">
                <div className="absolute -left-2.5 top-0 bg-white text-red-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-neutral-text">Higiene Comum</h4>
                <p className="text-sm text-neutral-500 mt-1">Apenas 25% da área bucal. Bactérias anaeróbicas continuam vivas fermentando restos de alimentos.</p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-brand-gold">
                <div className="absolute -left-2.5 top-0 bg-white text-brand-gold">
                  <Microscope className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-primary-green">Tecnologia N1</h4>
                <p className="text-sm text-neutral-500 mt-1">Penetração profunda com Gás Ozônio. Neutraliza a acidez e atinge 99% das bactérias nocivas.</p>
              </div>
            </div>

            <div className="mt-8 bg-neutral-50 rounded-xl p-4 text-left">
              <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Área de Proteção</span>
              <div className="flex items-end justify-center gap-4 h-32">
                 <div className="w-16 bg-red-200 rounded-t-lg h-[25%] relative group-hover:opacity-50 transition-opacity">
                    <span className="absolute -top-6 left-0 right-0 text-xs font-bold text-red-400">25%</span>
                 </div>
                 <div className="w-16 bg-primary-green rounded-t-lg h-[99%] relative shadow-lg">
                    <span className="absolute -top-6 left-0 right-0 text-xs font-bold text-primary-green">99%</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - Right 7 cols */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl text-primary-green font-bold mb-6">
            Por que apenas escovar <br className="hidden md:block"/> <span className="font-normal">não é suficiente?</span>
          </h2>
          
          <div className="space-y-6 text-neutral-text text-lg font-light leading-relaxed">
            <p>
              A escovação alcança apenas <strong className="font-bold">25% da superfície bucal</strong>. Os outros 75% são o esconderijo perfeito para bactérias anaeróbicas que fermentam restos de alimentos, liberando <span className="underline decoration-brand-gold/50 decoration-2 underline-offset-2">compostos de enxofre</span> — a verdadeira causa do mau hálito e da gengivite.
            </p>
            <p>
              Enxaguantes comuns tentam resolver isso com álcool e químicos agressivos. O resultado? Eles ressecam sua boca, matam as bactérias boas e criam um <strong className="text-red-800/80">efeito rebote</strong>, piorando o hálito a longo prazo.
            </p>
          </div>

          <div className="mt-8 bg-primary-green rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-brand-gold font-bold text-xl mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> O Diferencial N1
              </h3>
              <p className="text-white/90 font-light">
                O N1 Bucal Blend não apenas limpa; <strong>ele oxigena.</strong> Bactérias ruins não sobrevivem em ambientes ricos em oxigênio. Nossa fórmula penetra onde a escova não chega, neutralizando a acidez e protegendo seu sorriso por até 12 horas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};