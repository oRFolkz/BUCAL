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
    </div>
  );
}

export default App;