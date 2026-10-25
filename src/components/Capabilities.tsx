import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Capabilities: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <section id="expertise" className="w-full py-20 bg-[#090a0f] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              <span className="text-[#ccff00] font-semibold">Core Disciplines</span>
              <span aria-hidden="true">/</span>
              <span>Ganga Datta Joshi</span>
              <span aria-hidden="true">/</span>
              <span>Growth Playbooks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Syne',sans-serif] text-white tracking-tight">
              Digital Marketing Mastery & Operational Frameworks
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Every tactic is designed to withstand algorithm shifts, scale admissions cohorts predictably, and achieve superior return on media capital.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs font-bold text-black bg-[#ccff00] hover:bg-[#b8e600] uppercase tracking-wider shadow-[2px_2px_0px_#ffffff] cursor-pointer shrink-0 self-start md:self-auto"
          >
            Request Strategic Audit
          </button>
        </div>

        {/* 4 Pillars of Capability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className="bg-[#12131c] border border-white/15 p-6 flex flex-col justify-between hover:border-[#1833ff] transition-all group shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[6px_6px_0px_0px_#1833ff]"
            >
              <div>
                <div className="text-xs font-mono text-[#ccff00] font-bold mb-3">
                  0{idx + 1}. CAPABILITY
                </div>
                
                <h3 className="text-lg font-bold font-['Syne',sans-serif] text-white group-hover:text-[#ccff00] transition-colors leading-snug">
                  {category.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                  {category.description}
                </p>

                {/* Sub-skill bullet points */}
                <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ccff00] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Demonstrated Outcome</div>
                <div className="text-xs font-bold font-mono text-white mt-1">
                  {category.impactMetric}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
