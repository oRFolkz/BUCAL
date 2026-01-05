import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-2xl mb-4 border transition-all duration-300 ${isOpen ? 'border-brand-gold/30 shadow-md' : 'border-white shadow-sm hover:shadow-md'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-base font-bold text-primary-green pr-8">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold transition-all duration-300 ${isOpen ? 'bg-brand-gold text-white border-brand-gold' : 'bg-transparent group-hover:border-brand-gold'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-8 text-neutral-text font-light leading-relaxed text-sm">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const OfferSection: React.FC = () => {
  return (
    <Section id="offer" background="light">
      <div className="max-w-4xl mx-auto">
        
        {/* FAQ Only */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-[44px] text-primary-green font-bold mb-4 leading-tight">
              Perguntas <span className="font-normal italic">Frequentes</span>
            </h3>
            <p className="text-neutral-400 font-bold text-xs uppercase tracking-widest">
              Tudo o que você precisa saber sobre o N1 Bucal Blend
            </p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="Como devo usar o N1 Bucal Blend?" 
              answer="Versatilidade total: Pingue 1-2 gotas na escova junto com sua pasta, faça bochechos diluindo 10 gotas em água, ou aplique puro sobre aftas e gengivas inflamadas." 
            />
            <FAQItem 
              question="Por quanto tempo posso usar?" 
              answer="O N1 é seguro para uso diário e contínuo. Diferente da Clorexidina, ele não mancha os dentes e não altera o paladar." 
            />
            <FAQItem 
              question="Crianças podem usar?" 
              answer="Sim, por ser 100% natural e livre de químicos agressivos, é seguro para toda a família (sob supervisão para menores de 6 anos)." 
            />
            <FAQItem 
              question="O Bucal Blend tem gosto ruim?" 
              answer="Não. Pelo contrário: ele tem sabor natural de menta, com sensação refrescante e leve durante o uso, sem aquele gosto forte de “química” na aplicação." 
            />
          </div>
        </div>

      </div>
    </Section>
  );
};