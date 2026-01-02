import React from 'react';
import { Section } from './ui/Section';
import { Check, X, ShieldCheck } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const features = [
    {
      label: "Naturalidade",
      other: "Contém álcool e químicos",
      n1: "100% Natural: Sem químicos agressivos"
    },
    {
      label: "Tecnologia",
      other: "Apenas disfarça odores",
      n1: "Ozonização Premium: Tecnologia avançada de purificação"
    },
    {
      label: "Funcionalidade",
      other: "Uso limitado (Enxágue)",
      n1: "Multipropósito: Solução completa para saúde bucal"
    },
    {
      label: "Segurança",
      other: "Risco de ressecamento",
      n1: "Testado Dermatologicamente: Seguro para uso diário"
    },
    {
      label: "Paladar",
      other: "Ardência e sabor artificial",
      n1: "Sabor Agradável: Menta refrescante natural"
    }
  ];

  return (
    <Section id="comparison" background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3 block">Diferenciais Corpore Life</span>
        <h2 className="text-3xl md:text-4xl text-primary-green font-bold mb-6">
          A Escolha Inteligente <span className="font-normal">para sua Saúde</span>
        </h2>
        <p className="text-neutral-text/80 font-light text-lg">
          Entenda por que o N1 Bucal Blend é superior aos enxaguantes tradicionais.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-2 md:px-0">
        {/* Header - Visible mainly on desktop for structure */}
        <div className="grid grid-cols-12 gap-2 md:gap-6 mb-4 md:mb-8 text-center items-end">
           <div className="col-span-12 md:col-span-4 pb-2 md:pb-0 block md:hidden mb-4">
              <span className="text-primary-green font-bold text-lg">Comparativo</span>
           </div>
           <div className="col-span-0 md:col-span-4 hidden md:block"></div>
           <div className="col-span-6 md:col-span-4 pb-4">
              <span className="text-neutral-400 font-semibold text-xs md:text-sm uppercase tracking-wider">Comuns</span>
           </div>
           <div className="col-span-6 md:col-span-4 bg-primary-green text-white py-4 rounded-t-2xl shadow-lg relative mt-6 md:mt-0">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-brand-gold text-primary-green p-2 rounded-full shadow-md border-4 border-white">
                   <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
              <span className="font-bold tracking-wide text-sm md:text-base">N1 Bucal Blend</span>
           </div>
        </div>

        {/* Comparison Rows */}
        <div className="space-y-3 md:space-y-4">
          {features.map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-2 md:gap-6 items-center">
               
               {/* Label */}
               <div className="col-span-12 md:col-span-4 md:text-right md:pr-4 mb-1 md:mb-0 text-center md:text-right">
                  <span className="text-neutral-500 font-medium text-xs md:text-sm uppercase tracking-wider">{item.label}</span>
               </div>
               
               {/* Others Card */}
               <div className="col-span-6 md:col-span-4 bg-gray-50 rounded-xl p-3 md:p-5 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 border border-gray-100 opacity-60 h-full">
                  <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-gray-500 text-center md:text-left leading-tight">{item.other}</span>
               </div>

               {/* N1 Card */}
               <div className="col-span-6 md:col-span-4 bg-secondary-bg rounded-xl p-3 md:p-5 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 border border-brand-gold/30 shadow-sm relative overflow-hidden h-full">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold"></div>
                  <Check className="w-4 h-4 text-primary-green flex-shrink-0" strokeWidth={3} />
                  <span className="text-xs md:text-sm font-bold text-primary-green text-center md:text-left leading-tight">{item.n1}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};