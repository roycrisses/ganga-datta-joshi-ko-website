import React, { useState } from 'react';
import { PERSONAL_INFO, HERO_METRICS } from '../data/portfolioData';
import { ArrowRight, Sparkles, TrendingUp, Award, Layers } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreDesignSystem: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreDesignSystem }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 border-b border-white/10">
      {/* Background surreal ambient glow & geometrical grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1833ff]/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-[#ccff00]/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#ff2a85]/15 rounded-full blur-2xl" />
        {/* Subtle surreal line-grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch min-h-[580px]">
          
          {/* Left Column: Typographic Hierarchy & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Clean unboxed kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <span className="text-[#ccff00] font-semibold">SAK Digital University</span>
              <span aria-hidden="true">/</span>
              <span>Digital Marketing Expert</span>
              <span aria-hidden="true">/</span>
              <span>Age 25</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Syne',sans-serif] tracking-tight leading-[1.08] text-white text-balance">
              Where Growth Science Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#00f5a0] to-[#ff2a85] font-['Fraunces',serif] italic font-normal">
                Surrealist
              </span>{' '}
              Maximalism.
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              I am <strong className="text-white font-semibold">Ganga Datta Joshi</strong>. At 25, I direct full-funnel digital marketing and student acquisition architecture at <span className="text-white border-b border-[#ccff00]/50">SAK Digital University</span>. I merge multi-million dollar performance media economics with unapologetic, high-retention creative systems.
            </p>

            {/* Quick value proposition tags (clean unboxed text) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 font-mono">
              <span>Paid Performance (Meta & Google)</span>
              <span aria-hidden="true">·</span>
              <span>EdTech Enrollment Engines</span>
              <span aria-hidden="true">·</span>
              <span>Surrealist Brand Identity</span>
              <span aria-hidden="true">·</span>
              <span>Data Attribution</span>
            </div>

            {/* Interactive CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#campaign-lab"
                className="px-6 py-3.5 text-sm font-bold text-black bg-[#ccff00] hover:bg-[#d8ff33] active:scale-98 transition-all maximalist-border flex items-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <span>Launch Campaign Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onExploreDesignSystem}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#ccff00]/50 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#ccff00]" />
                <span>Explore Design System</span>
              </button>
            </div>

            {/* Credential summary */}
            <div className="pt-2 flex items-center gap-4 text-xs text-zinc-400 border-t border-white/10">
              <span className="font-semibold text-white">SAK Digital University</span>
              <span aria-hidden="true">·</span>
              <span>Direct Inquiries: {PERSONAL_INFO.email}</span>
            </div>
          </div>

          {/* Right Column: Visual Container with Ganga's Portrait & Surrealist Maximalist Staging */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Surrealist layered geometrical backdrops */}
            <div className="absolute inset-0 border border-white/10 rotate-2 translate-x-2 translate-y-2 pointer-events-none" />
            <div className="absolute inset-0 border-2 border-[#1833ff]/40 -rotate-2 -translate-x-2 -translate-y-2 pointer-events-none" />
            
            {/* Surrealist glowing focal frame */}
            <div className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-b from-[#12131c] to-[#090a0f] p-4 border-2 border-white/20 shadow-[12px_12px_0px_0px_#ccff00] transition-all hover:shadow-[16px_16px_0px_0px_#ff2a85] group">
              
              {/* Inner portrait viewport */}
              <div className="relative w-full h-full overflow-hidden bg-zinc-900 border border-white/10">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-500 font-mono text-xs">
                    Loading portrait...
                  </div>
                )}

                <img
                  src="/public/assets/aistudio/5eff39f5-a457-4bf3-ad12-7dc4a1ada4f6_a3e91528.jpg"
                  alt="Ganga Datta Joshi - Digital Marketing Expert at SAK Digital University"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-top filter contrast-[1.04] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={(e) => {
                    // Try alternate path if /public/ prefix differs
                    const target = e.currentTarget;
                    if (target.src.includes('/public/')) {
                      target.src = '/assets/aistudio/5eff39f5-a457-4bf3-ad12-7dc4a1ada4f6_a3e91528.jpg';
                    } else {
                      setImageError(true);
                    }
                  }}
                />

                {/* Resilient fallback container if image fails */}
                {imageError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#12131c] via-[#1a1b2e] to-[#090a0f]">
                    <div className="w-20 h-20 rounded-full border-2 border-[#ccff00] flex items-center justify-center text-2xl font-bold font-['Syne',sans-serif] text-white mb-3">
                      GDJ
                    </div>
                    <h3 className="font-bold text-white text-lg">Ganga Datta Joshi</h3>
                    <p className="text-xs text-[#ccff00] mt-1 font-mono">SAK Digital University</p>
                    <p className="text-xs text-zinc-400 mt-2">Digital Marketing Expert · Age 25</p>
                  </div>
                )}

                {/* Cinematic gradient scrim at bottom for text protection */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* High-legibility caption overlay inside portrait */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="text-xs font-mono text-[#ccff00] font-semibold tracking-wide">
                    LEAD GROWTH ARCHITECT
                  </div>
                  <div className="text-lg font-bold font-['Syne',sans-serif] text-white">
                    Ganga Datta Joshi
                  </div>
                  <div className="text-xs text-zinc-300">
                    SAK Digital University Admissions Engine
                  </div>
                </div>
              </div>

              {/* Floating Surrealist Stickers / Badges */}
              <div className="absolute -top-4 -left-4 bg-black border-2 border-[#ccff00] px-3 py-1.5 text-xs font-mono text-[#ccff00] font-bold shadow-[4px_4px_0px_0px_#ffffff] rotate-[-4deg] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>AGE 25 · CHIEF STRATEGIST</span>
              </div>

              <div className="absolute -bottom-5 -right-4 bg-[#1833ff] border-2 border-white px-3.5 py-2 text-xs font-mono text-white font-bold shadow-[4px_4px_0px_0px_#ccff00] rotate-[3deg] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>6.8x BLENDED ROAS</span>
              </div>
            </div>

          </div>
        </div>

        {/* Full-Width Row of Key Metrics Below the Split */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HERO_METRICS.map((metric, index) => (
              <div 
                key={index} 
                className="bg-[#12131c]/60 border border-white/10 p-5 hover:border-[#ccff00]/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Syne',sans-serif] text-white tabular-nums tracking-tight">
                  <span className="text-[#ccff00]">{metric.value}</span>
                </div>
                <div className="text-sm font-semibold text-zinc-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
