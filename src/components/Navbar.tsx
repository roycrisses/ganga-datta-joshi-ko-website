import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element, whitespace-nowrap shrink-0) */}
        <a
          href="#"
          className="text-lg font-bold font-['Syne',sans-serif] tracking-tight text-white hover:text-[#ccff00] transition-colors whitespace-nowrap shrink-0"
        >
          Ganga Datta Joshi
        </a>

        {/* Zone 2: 4-5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a
            href="#case-studies"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#ccff00]"
          >
            Case Studies
          </a>
          <a
            href="#university-impact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#ccff00]"
          >
            SAK University
          </a>
          <a
            href="#campaign-lab"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#ccff00]"
          >
            Campaign Simulator
          </a>
          <a
            href="#design-system"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#ccff00]"
          >
            Design System
          </a>
          <a
            href="#expertise"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#ccff00]"
          >
            Capabilities
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 text-xs font-bold text-black bg-[#ccff00] hover:bg-[#b8e600] active:scale-95 transition-all shadow-[2px_2px_0px_0px_#ffffff] rounded-none whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
