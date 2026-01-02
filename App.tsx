import React from 'react';
import { ProblemSection } from './components/ProblemSection';
import { MechanismSection } from './components/MechanismSection';
import { BenefitsSection } from './components/BenefitsSection';
import { OfferSection } from './components/OfferSection';
import { UsageSection } from './components/UsageSection';
import { ComparisonSection } from './components/ComparisonSection';

function App() {
  return (
    <div className="font-sans antialiased text-neutral-text bg-white selection:bg-brand-gold/30 selection:text-primary-green">
      <main>
        <BenefitsSection />
        <ProblemSection />
        <MechanismSection />
        <UsageSection />
        <ComparisonSection />
        <OfferSection />
      </main>

      {/* Sticky Mobile CTA - Visible only on small screens when scrolled past hero */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-neutral-100 md:hidden z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
         <button 
            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-brand-gold text-primary-green font-bold py-3 rounded-xl shadow-lg text-sm uppercase tracking-wide"
         >
            Quero Meu Sorriso Saudável
         </button>
      </div>
    </div>
  );
}

export default App;