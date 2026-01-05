import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Droplets } from 'lucide-react';
import { Button } from './ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-white overflow-hidden" id="section_1_hero">
      <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 pt-24 pb-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-left z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-3 border border-primary-green/20 rounded-full text-xs font-bold tracking-widest text-primary-green mb-6 bg-primary-green/5"
            >
              INOVAÇÃO EM ODONTOLOGIA BIOLÓGICA
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-[44px] text-primary-green font-bold leading-tight mb-6"
            >
              A Revolução do Ozônio: <span className="font-normal">Hálito Puro</span> e Gengivas Saudáveis.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-light text-neutral-text mb-8 max-w-lg leading-relaxed"
            >
              O primeiro blend ozonizado com nanotecnologia que elimina bactérias do mau hálito, combate o tártaro e alivia a sensibilidade. <strong className="font-semibold">Aprovado pela ANVISA.</strong>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6"
            >
              <Button onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}>
                QUERO PROTEGER MEU SORRISO
              </Button>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-neutral-text/70 mb-8 italic"
            >
              Envio imediato para todo o Brasil • Frete Grátis disponível*
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 text-sm font-medium text-primary-green"
            >
              <div className="flex items-center gap-2 bg-white border border-primary-green/10 px-3 py-2 rounded-lg shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                Livre de Flúor e Álcool
              </div>
              <div className="flex items-center gap-2 bg-white border border-primary-green/10 px-3 py-2 rounded-lg shadow-sm">
                <Droplets className="w-4 h-4 text-brand-gold" />
                Nanotecnologia
              </div>
              <div className="flex items-center gap-2 bg-white border border-primary-green/10 px-3 py-2 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                Dermatologicamente Testado
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/50">
               {/* Updated product image */}
              <img 
                src="https://images.unsplash.com/photo-1607960402012-7041136af2c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="N1 Bucal Blend Frasco Âmbar" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-green/40 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-green/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};