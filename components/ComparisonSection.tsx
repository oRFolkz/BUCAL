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
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3 block">Diferenciais Corpore Life</span>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] text-primary-green font-bold leading-tight mb-6">
          A Escolha Inteligente <span className="font-normal">para sua Saúde</span>
        </h2>
        <p className="text-neutral-text/80 font-light text-sm leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
          Entenda por que o N1 Bucal Blend é superior aos enxaguantes tradicionais.
        </p>
      </div>

      <div className="w-full mx-auto px-2 md:px-0 lg:max-w-[1200px]">
        {/* Header Row */}
        <div className="grid grid-cols-12 gap-3 md:gap-6 mb-4 md:mb-8 text-center items-end mt-8 md:mt-0">
           
           {/* Spacer for Label Column (Desktop) */}
           <div className="hidden md:block md:col-span-2"></div>

           {/* N1 Header (Highlighted) - Middle Column */}
           <div className="col-span-6 md:col-span-5 bg-primary-green text-white py-3 md:py-4 rounded-t-xl md:rounded-t-2xl shadow-lg relative mt-4 md:mt-0 mx-1 md:mx-0">
              <div className="absolute -top-5 md:-top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-brand-gold text-primary-green p-1.5 md:p-2 rounded-full shadow-md border-2 md:border-4 border-white">
                   <ShieldCheck className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>
              <span className="font-bold tracking-wide text-xs md:text-base block pt-1 md:pt-0">N1 Bucal Blend</span>
           </div>

           {/* Comuns Header - Right Column */}
           <div className="col-span-6 md:col-span-5 pb-2 md:pb-4">
              <span className="text-neutral-400 font-semibold text-[10px] md:text-sm uppercase tracking-wider">Comuns</span>
           </div>
        </div>

        {/* Content Rows */}
        <div className="space-y-4 md:space-y-4">
          {features.map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-3 md:gap-6 items-stretch group">
               
               {/* Label (Left) */}
               <div className="col-span-12 md:col-span-2 flex items-center justify-center md:justify-start py-1 md:py-0 border-b md:border-0 border-dashed border-gray-200 md:border-transparent mb-1 md:mb-0">
                  <span className="text-neutral-500 font-bold text-xs md:text-sm uppercase tracking-wider text-center md:text-left">{item.label}</span>
               </div>
               
               {/* N1 Card (Middle) */}
               <div className="col-span-6 md:col-span-5 bg-secondary-bg rounded-lg md:rounded-xl p-3 md:p-5 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 border border-brand-gold/30 shadow-sm relative overflow-hidden h-full transform transition-transform md:group-hover:-translate-y-1">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold"></div>
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-primary-green flex-shrink-0" strokeWidth={3} />
                  <span className="text-[11px] md:text-sm font-bold text-primary-green text-center md:text-left leading-tight">{item.n1}</span>
               </div>

               {/* Comuns Card (Right) */}
               <div className="col-span-6 md:col-span-5 bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-5 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 border border-gray-100 opacity-60 h-full grayscale-[0.5]">
                  <X className="w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-[11px] md:text-sm text-gray-500 text-center md:text-left leading-tight font-light">{item.other}</span>
               </div>

            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};