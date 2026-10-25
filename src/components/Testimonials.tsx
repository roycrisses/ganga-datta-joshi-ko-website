import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#090a0f] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            <span className="text-[#ccff00] font-semibold">SAK Digital University Leadership</span>
            <span aria-hidden="true">/</span>
            <span>Academic & Industry Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Syne',sans-serif] text-white tracking-tight">
            Institutional Endorsements
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Attributable testimonials from university deans and growth executives detailing the commercial and academic impact created by Ganga Datta Joshi.
          </p>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#12131c] border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.04)]"
            >
              <div>
                <Quote className="w-6 h-6 text-[#ccff00] mb-4 opacity-80" />
                
                <p className="font-['Fraunces',serif] italic text-base sm:text-lg text-zinc-200 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="font-bold text-white font-['Syne',sans-serif] text-sm">
                  {t.author}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {t.role} · <span className="text-white">{t.organization}</span>
                </div>
                
                {/* Verified Metric Badge (Clean unboxed text) */}
                <div className="mt-3 text-[11px] font-mono text-[#ccff00] font-semibold">
                  Verified Outcome: {t.verifiedMetric}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
