import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { ArrowUpRight, CheckCircle2, TrendingUp, Sparkles, Filter } from 'lucide-react';

export const CaseStudies: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Paid Acquisition', 'Viral Organic', 'Funnel CRO', 'SEO & Directory'];

  const filteredStudies =
    activeCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category === activeCategory);

  return (
    <section id="case-studies" className="w-full py-20 bg-[#07080c] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              <span className="text-[#ccff00] font-semibold">SAK Digital University</span>
              <span aria-hidden="true">/</span>
              <span>Selected Growth Records</span>
              <span aria-hidden="true">/</span>
              <span>2024–2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Syne',sans-serif] text-white tracking-tight">
              Featured Case Studies & Funnel Breakthroughs
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Explore how Ganga Datta Joshi scaled enrollment yield, engineered viral academic engagement, and slashed admissions acquisition costs.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons allowed for state selection) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#12131c] border border-white/10 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ccff00] text-black font-bold shadow-[2px_2px_0px_#ffffff]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-[#12131c] border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-[#ccff00]/50 transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(255,255,255,0.06)] hover:shadow-[8px_8px_0px_0px_#ccff00]"
            >
              <div>
                {/* Clean unboxed metadata header */}
                <div className="flex items-center justify-between gap-4 text-xs font-mono text-zinc-400 mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-[#ccff00] font-semibold">0{index + 1}.</span>
                    <span>{study.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.duration}</span>
                  </div>
                  <span className="text-zinc-300 font-bold tabular-nums">
                    {study.metricHighlight} {study.metricLabel}
                  </span>
                </div>

                {/* Primary Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-['Syne',sans-serif] text-white group-hover:text-[#ccff00] transition-colors leading-tight">
                  {study.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-['Fraunces',serif] italic text-zinc-300 mt-2">
                  {study.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed">
                  {study.summary}
                </p>

                {/* Quantitative Results Preview */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10">
                  {study.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="p-3 bg-black/40 border border-white/10">
                      <div className="text-[11px] font-mono text-zinc-400">{res.kpi}</div>
                      <div className="text-lg font-bold font-mono text-white tabular-nums mt-0.5 flex items-center justify-between">
                        <span>{res.value}</span>
                        <span className="text-xs text-[#ccff00] font-normal">{res.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                {/* Unboxed tags */}
                <div className="text-xs text-zinc-400 font-mono truncate max-w-[240px]">
                  {study.tags.slice(0, 3).join(' · ')}
                </div>

                {/* Interactive Modal Opener */}
                <button
                  onClick={() => setSelectedCaseStudy(study)}
                  className="px-4 py-2 text-xs font-bold text-black bg-[#ccff00] hover:bg-white transition-all flex items-center gap-1 cursor-pointer uppercase tracking-wider shadow-[2px_2px_0px_#ffffff]"
                >
                  <span>Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* DETAILED CASE STUDY LIGHTBOX / MODAL */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0e0f17] border-2 border-white/20 p-6 sm:p-10 shadow-[16px_16px_0px_#ccff00] max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-wider mb-1">
                  <span>{selectedCaseStudy.category}</span>
                  <span aria-hidden="true">/</span>
                  <span>SAK Digital University Cohort</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Syne',sans-serif] text-white leading-tight">
                  {selectedCaseStudy.title}
                </h3>
                <div className="text-sm font-['Fraunces',serif] italic text-zinc-300 mt-1">
                  {selectedCaseStudy.subtitle}
                </div>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="text-zinc-400 hover:text-white p-2 text-xl font-mono cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Results 4-Column Grid */}
            <div className="my-6 p-4 bg-black/60 border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {selectedCaseStudy.results.map((res, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-[11px] font-mono text-zinc-400">{res.kpi}</div>
                  <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                    {res.value}
                  </div>
                  <div className="text-xs font-mono text-[#ccff00] mt-0.5">{res.change}</div>
                </div>
              ))}
            </div>

            {/* Narrative Breakdown */}
            <div className="space-y-6 text-sm text-zinc-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff2a85] inline-block" />
                  The Strategic Challenge
                </h4>
                <p className="text-zinc-300 text-xs sm:text-sm pl-4 border-l border-white/20">
                  {selectedCaseStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ccff00] inline-block" />
                  The Growth Architecture & Creative Solution
                </h4>
                <p className="text-zinc-300 text-xs sm:text-sm pl-4 border-l border-white/20">
                  {selectedCaseStudy.solution}
                </p>
              </div>

              {/* Channels & Technology Stack (Clean unboxed tags) */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-xs font-mono text-zinc-400">Deployed Channels & Tools:</div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {selectedCaseStudy.tags.concat(selectedCaseStudy.channels).map((item, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-400">
                Architected by Ganga Datta Joshi · SAK Digital University
              </span>
              <button
                onClick={() => {
                  setSelectedCaseStudy(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-black bg-[#ccff00] hover:bg-white uppercase tracking-wider shadow-[3px_3px_0px_#ffffff] cursor-pointer"
              >
                Inquire About Similar Architecture
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
