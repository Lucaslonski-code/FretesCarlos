import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { CoverageArea } from './components/CoverageArea';
import { Simulator } from './components/Simulator/Simulator';
import { About } from './components/About';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenSimulator = () => {
    // Scrolls to simulator section
    const simulatorEl = document.getElementById('simulador');
    if (simulatorEl) {
      simulatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceCategory = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleOpenSimulator();
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans flex flex-col selection:bg-neutral-900 selection:text-white">
      
      {/* Sticky Header Navbar */}
      <Header onOpenSimulator={handleOpenSimulator} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero */}
        <Hero onOpenSimulator={handleOpenSimulator} />

        {/* 2. Benefícios */}
        <Benefits />

        {/* 3. Como funciona */}
        <HowItWorks onOpenSimulator={handleOpenSimulator} />

        {/* 4. Serviços */}
        <Services onSelectService={handleSelectServiceCategory} />

        {/* 5. Área de atendimento */}
        <CoverageArea />

        {/* 6. Simulador de orçamento (Core Feature) */}
        <Simulator key={selectedServiceId || 'default'} />

        {/* 7. Sobre o profissional */}
        <About />

        {/* 8. Diferenciais */}
        <Differentials />

        {/* 9. Depoimentos */}
        <Testimonials />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. CTA Final */}
        <FinalCTA onOpenSimulator={handleOpenSimulator} />

      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
