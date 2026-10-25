import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DesignSystemExplorer } from './components/DesignSystemExplorer';
import { CampaignSimulator } from './components/CampaignSimulator';
import { CaseStudies } from './components/CaseStudies';
import { Capabilities } from './components/Capabilities';
import { PerformanceTable } from './components/PerformanceTable';
import { Testimonials } from './components/Testimonials';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeThemeAccent, setActiveThemeAccent] = useState<'acid' | 'ultramarine' | 'magenta'>('acid');

  const scrollToDesignSystem = () => {
    const el = document.getElementById('design-system');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#090a0f] text-[#f4f4f5] selection:bg-[#ccff00] selection:text-black font-['Plus_Jakarta_Sans',sans-serif] ${
      activeThemeAccent === 'ultramarine' ? 'accent-ultramarine' : activeThemeAccent === 'magenta' ? 'accent-magenta' : 'accent-acid'
    }`}>
      
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main>
        {/* Split-Screen Hero with Ganga's Portrait & Metrics */}
        <Hero
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onExploreDesignSystem={scrollToDesignSystem}
        />

        {/* Section Divider: Animated Ribbon */}
        <div className="w-full bg-[#ccff00] text-black py-2.5 overflow-hidden font-mono text-xs font-black uppercase tracking-wider border-y-2 border-black">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            <span>SAK DIGITAL UNIVERSITY ADMISSIONS ARCHITECTURE</span>
            <span>·</span>
            <span>GANGA DATTA JOSHI (AGE 25)</span>
            <span>·</span>
            <span>$3.4M+ MANAGED MEDIA SPEND</span>
            <span>·</span>
            <span>6.8X BLENDED ROAS</span>
            <span>·</span>
            <span>68,400+ MATRICULATED ENROLLMENTS</span>
            <span>·</span>
            <span>SURREALIST MAXIMALISM DESIGN SYSTEM</span>
            <span>·</span>
            <span>FULL-FUNNEL CRO & CAPI INTEGRATION</span>
            <span>·</span>
            <span>SAK DIGITAL UNIVERSITY ADMISSIONS ARCHITECTURE</span>
            <span>·</span>
            <span>GANGA DATTA JOSHI (AGE 25)</span>
            <span>·</span>
            <span>$3.4M+ MANAGED MEDIA SPEND</span>
            <span>·</span>
            <span>6.8X BLENDED ROAS</span>
            <span>·</span>
            <span>68,400+ MATRICULATED ENROLLMENTS</span>
            <span>·</span>
            <span>SURREALIST MAXIMALISM DESIGN SYSTEM</span>
          </div>
        </div>

        {/* Interactive Campaign Simulator */}
        <CampaignSimulator onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* SAK Digital University Case Studies */}
        <CaseStudies onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Performance Media Attribution Matrix (Tabular Rigor) */}
        <PerformanceTable />

        {/* Interactive Maximalist & Surrealism Design System Explorer */}
        <DesignSystemExplorer
          activeThemeAccent={activeThemeAccent}
          onSelectThemeAccent={setActiveThemeAccent}
        />

        {/* Digital Marketing Capabilities & Playbooks */}
        <Capabilities onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Institutional Proof & Testimonials */}
        <Testimonials />

        {/* Direct Strategy Callout Banner */}
        <section className="w-full py-16 bg-gradient-to-r from-[#12131c] via-[#090a0f] to-[#12131c] border-b border-white/10 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ccff00] font-bold">
              Direct Strategic Partnership
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Syne',sans-serif] text-white tracking-tight text-balance">
              Ready to Accelerate Admissions Yield with Ganga Datta Joshi?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Whether you represent an ambitious university, an edtech venture, or a high-ticket program looking to engineer 6x+ ROAS, let’s audit your acquisition engine.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 text-xs font-bold text-black bg-[#ccff00] hover:bg-[#d8ff33] uppercase tracking-wider maximalist-border shadow-[6px_6px_0px_#ffffff] cursor-pointer transition-all active:scale-95"
              >
                Schedule Private Strategy Audit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet, Compliant Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
