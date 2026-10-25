import React from 'react';
import { ArrowUp, Mail, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050608] border-t border-white/10 text-zinc-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="text-base font-bold font-['Syne',sans-serif] text-white">
              Ganga Datta Joshi
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              Digital Marketing Expert at SAK Digital University. Age 25. Engineering high-velocity student acquisition and surrealist brand ecosystems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-300">
            <a href="#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#university-impact" className="hover:text-white transition-colors">
              SAK Impact
            </a>
            <a href="#campaign-lab" className="hover:text-white transition-colors">
              Simulator
            </a>
            <a href="#design-system" className="hover:text-white transition-colors">
              Design System
            </a>
            <button
              onClick={onOpenConsultation}
              className="text-[#ccff00] hover:underline font-semibold cursor-pointer"
            >
              Book Advisory Call
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer"
            title="Scroll to Top"
          >
            <span className="text-xs font-mono">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ccff00]" />
          </button>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} Ganga Datta Joshi. All rights reserved. SAK Digital University.
          </div>
          <div className="flex items-center gap-4">
            <span>Direct: {PERSONAL_INFO.email}</span>
            <span aria-hidden="true">·</span>
            <span>Maximalism & Surrealism Design System v1.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
