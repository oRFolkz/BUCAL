import React from 'react';
import { Section } from './ui/Section';
import { Leaf, Droplet, Zap, Award } from 'lucide-react';

const IngredientCard = ({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 group">
    <div className="w-14 h-14 rounded-full bg-soft-white border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 text-primary-green" />
    </div>
    <h4 className="text-xl font-bold text-primary-green mb-3">{title}</h4>
    <p className="text-neutral-text font-light text-sm leading-relaxed">{desc}</p>
  </div>
);

export const MechanismSection: React.FC = () => {
  return (
    <Section id="section_3_mechanism" background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3 block">Engenharia Natural</span>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] text-primary-green font-bold leading-tight mb-6">A Sinergia <span className="font-normal">do Blend</span></h2>
        <p className="text-neutral-text/80 font-light text-sm leading-relaxed max-w-2xl mx-auto">
          Três ativos poderosos potencializados pela nossa exclusiva tecnologia de ozonização.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        <IngredientCard 
          icon={Zap}
          title="Óleo de Girassol Ozonizado"
          desc="Carreador de oxigênio ativo. Rompe a membrana de bactérias nocivas e estimula a regeneração das gengivas."
        />
        <IngredientCard 
          icon={Droplet}
          title="Azeite de Oliva Extra Virgem"
          desc="Rico em polifenóis e Vitamina E. Atua como poderoso antioxidante e anti-inflamatório natural."
        />
        <IngredientCard 
          icon={Leaf}
          title="Menta Piperita"
          desc="Refrescância terapêutica. Combate o mau hálito instantaneamente e possui ação analgésica local."
        />
      </div>

      {/* Tech Specs Block */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-100 grid md:grid-cols-2">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-2xl text-primary-green mb-6">Especificações Clínicas</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Award className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
              <span className="text-neutral-text text-sm font-light"><strong>Nanotecnologia</strong> de liberação prolongada para proteção 12h.</span>
            </li>
            <li className="flex items-start gap-3">
              <Award className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
              <span className="text-neutral-text text-sm font-light">Bioatividade preservada por <strong>liofilização </strong>(secagem por congelação).</span>
            </li>
            <li className="flex items-start gap-3">
              <Award className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
              <span className="text-neutral-text text-sm font-light">Eficácia superior à Clorexidina em estudos comparativos (sem manchar os dentes).</span>
            </li>
          </ul>
        </div>
        <div className="relative h-64 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Especificações Clínicas" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-green/20 mix-blend-multiply"></div>
        </div>
      </div>
    </Section>
  );
};