import React from 'react';
import { Section } from './ui/Section';
import { Check, Star, Quote } from 'lucide-react';

const Testimonial = ({ name, role, text }: { name: string, role: string, text: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col h-full relative">
    <Quote className="absolute top-6 right-6 text-brand-gold/20 w-8 h-8" />
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-brand-gold fill-current" />)}
    </div>
    <p className="text-neutral-text italic font-light mb-6 flex-grow text-sm">"{text}"</p>
    <div className="mt-auto">
      <p className="font-bold text-primary-green">{name}</p>
      <p className="text-xs uppercase tracking-wider text-neutral-400">{role}</p>
    </div>
  </div>
);

export const BenefitsSection: React.FC = () => {
  return (
    <Section id="section_4_benefits" background="white">
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-3xl md:text-4xl text-primary-green font-bold mb-8">
            Resultados Clinicamente <span className="font-normal">Visíveis</span>
          </h2>
          <div className="space-y-6">
            {[
              { title: "Fim da Halitose", desc: "Neutraliza odores na origem, garantindo hálito fresco e natural." },
              { title: "Gengivas Fortes", desc: "Reduz sangramentos, inchaço e retração gengival." },
              { title: "Alívio da Sensibilidade", desc: "Fortalece o esmalte e reduz a dor ao frio/calor." },
              { title: "Dentes mais Limpos", desc: "Ação anti-tártaro que deixa a superfície dental lisa e polida." },
              { title: "Multifuncional", desc: "Use puro, na escova, ou como enxaguante diluído." },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary-green text-brand-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-green text-lg">{benefit.title}</h4>
                  <p className="text-neutral-text font-light text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-soft-white rounded-3xl p-8 border border-neutral-200 flex flex-col justify-center">
            <h3 className="text-center text-2xl text-primary-green mb-8">Eficácia Comprovada</h3>
            <div className="grid grid-cols-2 gap-8 text-center mb-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                    <span className="block text-4xl md:text-5xl font-bold text-brand-gold mb-2">90%</span>
                    <span className="text-sm font-medium text-primary-green">Redução na Halitose</span>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                    <span className="block text-4xl md:text-5xl font-bold text-brand-gold mb-2">97%</span>
                    <span className="text-sm font-medium text-primary-green">Aprovação do Sabor</span>
                </div>
            </div>
            
            <p className="text-center text-neutral-text font-light mb-8 px-2 md:px-6 leading-relaxed text-sm">
              Diferença notável já nas primeiras aplicações. Hálito mais fresco, dentes mais limpos, gengivas mais saudáveis e proteção duradoura contra problemas bucais.
            </p>

            <p className="text-center text-xs text-neutral-400 italic">
                *Estudo clínico realizado com 32 participantes durante 30 dias.
            </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Testimonial 
          name="Dr. André L."
          role="Cirurgião Dentista"
          text="O Bucal Blend mudou meu protocolo clínico. Indico para todos os pacientes com doença periodontal. A recuperação tecidual é fantástica."
        />
        <Testimonial 
          name="Mariana S."
          role="Cliente Verificada"
          text="Eu tinha vergonha de conversar de perto. O Bucal Blend me devolveu a segurança. Sinto minha boca limpa o dia todo, como se tivesse acabado de sair do dentista."
        />
        <Testimonial 
          name="Carlos E."
          role="Cliente Verificada"
          text="Sofria com aftas recorrentes. Bastou aplicar uma gota do N1 e a dor sumiu. Cicatrizou em tempo recorde."
        />
      </div>
    </Section>
  );
};