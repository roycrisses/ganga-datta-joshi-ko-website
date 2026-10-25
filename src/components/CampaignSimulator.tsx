import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Calculator, Sparkles, ArrowRight, Download, CheckCircle2, TrendingUp } from 'lucide-react';

interface ProgramOption {
  id: string;
  name: string;
  tuition: number;
  benchmarkCPA: number;
}

const PROGRAM_OPTIONS: ProgramOption[] = [
  { id: 'cs-ai', name: 'BSc Computer Science & AI', tuition: 14500, benchmarkCPA: 16.5 },
  { id: 'mba-growth', name: 'Digital Marketing & Growth MBA', tuition: 18500, benchmarkCPA: 22.0 },
  { id: 'data-bootcamp', name: 'Data Science & Analytics Bootcamp', tuition: 6800, benchmarkCPA: 12.0 },
  { id: 'exec-masters', name: 'Global Executive Tech Leadership', tuition: 28000, benchmarkCPA: 38.0 },
];

export const CampaignSimulator: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [budget, setBudget] = useState<number>(15000);
  const [selectedProgram, setSelectedProgram] = useState<string>('mba-growth');
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['meta', 'google', 'viral']);
  const [funnelOptimization, setFunnelOptimization] = useState<'standard' | 'ganga-optimized' | 'aggressive'>('ganga-optimized');
  const [showPlanModal, setShowPlanModal] = useState<boolean>(false);

  const toggleChannel = (channel: string) => {
    if (selectedChannels.includes(channel)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter((c) => c !== channel));
      }
    } else {
      setSelectedChannels([...selectedChannels, channel]);
    }
  };

  const program = useMemo(() => {
    return PROGRAM_OPTIONS.find((p) => p.id === selectedProgram) || PROGRAM_OPTIONS[0];
  }, [selectedProgram]);

  // Real-time calculation model based on Ganga's historical SAK Digital University benchmarks
  const calculations = useMemo(() => {
    const optimizationMultiplier =
      funnelOptimization === 'aggressive' ? 1.45 : funnelOptimization === 'ganga-optimized' ? 1.25 : 1.0;
    
    // Channel efficiency blend
    let channelEfficiency = 1.0;
    if (selectedChannels.includes('meta')) channelEfficiency += 0.15;
    if (selectedChannels.includes('google')) channelEfficiency += 0.2;
    if (selectedChannels.includes('viral')) channelEfficiency += 0.25;
    if (selectedChannels.includes('linkedin')) channelEfficiency += 0.1;

    // Blended effective CPA per student application
    const effectiveApplicationCPA = Math.max(
      9.5,
      (program.benchmarkCPA / (optimizationMultiplier * (channelEfficiency / 1.3)))
    );

    const projectedApplications = Math.round(budget / effectiveApplicationCPA);
    const estimatedInterviews = Math.round(projectedApplications * 0.38);
    // Typical university conversion from interview to matriculated enrollment
    const matriculationRate = funnelOptimization === 'aggressive' ? 0.32 : funnelOptimization === 'ganga-optimized' ? 0.26 : 0.18;
    const enrolledStudents = Math.max(1, Math.round(estimatedInterviews * matriculationRate));

    const totalPipelineRevenue = enrolledStudents * program.tuition;
    const roas = Number((totalPipelineRevenue / budget).toFixed(2));
    const costPerEnrolledStudent = Math.round(budget / enrolledStudents);

    return {
      effectiveApplicationCPA: effectiveApplicationCPA.toFixed(2),
      projectedApplications,
      estimatedInterviews,
      enrolledStudents,
      totalPipelineRevenue,
      roas,
      costPerEnrolledStudent,
    };
  }, [budget, program, selectedChannels, funnelOptimization]);

  const handleTriggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ccff00', '#1833ff', '#ff2a85', '#ffffff'],
    });
    setShowPlanModal(true);
  };

  return (
    <section id="campaign-lab" className="w-full py-20 bg-[#090a0f] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            <span className="text-[#ccff00] font-semibold">SAK Digital University Methodology</span>
            <span aria-hidden="true">/</span>
            <span>Live ROI Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Syne',sans-serif] text-white tracking-tight">
            Interactive Admissions Campaign Simulator
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
            Simulate your university cohort or edtech program’s enrollment yield using Ganga Datta Joshi’s validated multi-channel performance algorithm.
          </p>
        </div>

        {/* 2-Column Simulator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#12131c] border border-white/15 p-6 sm:p-8 space-y-7">
            
            {/* Control 1: Monthly Budget Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-white font-['Syne',sans-serif] uppercase tracking-wider">
                  01. Monthly Media Spend
                </label>
                <span className="text-xl font-bold font-mono text-[#ccff00] tabular-nums">
                  ${budget.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min={2000}
                max={60000}
                step={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-black rounded-none appearance-none cursor-pointer accent-[#ccff00]"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>$2,000 (Pilot)</span>
                <span>$15,000 (Cohort Scale)</span>
                <span>$60,000 (Global Blitz)</span>
              </div>
            </div>

            {/* Control 2: Target Academic Program */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white font-['Syne',sans-serif] uppercase tracking-wider">
                02. Academic Program Profile
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROGRAM_OPTIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProgram(item.id)}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      selectedProgram === item.id
                        ? 'border-[#ccff00] bg-black/80 shadow-[3px_3px_0px_#ccff00]'
                        : 'border-white/10 bg-black/40 hover:border-white/30 text-zinc-300'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{item.name}</div>
                    <div className="text-[11px] font-mono text-zinc-400 mt-1 flex justify-between">
                      <span>Tuition: ${item.tuition.toLocaleString()}</span>
                      <span className="text-[#ccff00]">CPA ~${item.benchmarkCPA}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Multi-Channel Mix (Interactive checkboxes styled cleanly) */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white font-['Syne',sans-serif] uppercase tracking-wider">
                03. Acquisition Channel Strategy
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'meta', name: 'Meta (IG/FB)' },
                  { id: 'google', name: 'Google PMax' },
                  { id: 'viral', name: 'TikTok Viral' },
                  { id: 'linkedin', name: 'LinkedIn B2B' },
                ].map((ch) => {
                  const isChecked = selectedChannels.includes(ch.id);
                  return (
                    <button
                      key={ch.id}
                      onClick={() => toggleChannel(ch.id)}
                      className={`p-2.5 text-center text-xs font-mono font-medium border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#1833ff] text-white border-white shadow-[2px_2px_0px_#ccff00]'
                          : 'bg-black/40 text-zinc-400 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {ch.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Control 4: Funnel Architecture Level */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white font-['Syne',sans-serif] uppercase tracking-wider">
                04. Funnel Optimization Framework
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', title: 'Standard Page', badge: '1.0x' },
                  { id: 'ganga-optimized', title: 'Ganga Optimized', badge: '1.25x' },
                  { id: 'aggressive', title: 'Surreal Omnichannel', badge: '1.45x' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setFunnelOptimization(tier.id as any)}
                    className={`p-2.5 text-center border text-xs transition-all cursor-pointer ${
                      funnelOptimization === tier.id
                        ? 'border-[#ff2a85] bg-black text-white shadow-[2px_2px_0px_#ff2a85]'
                        : 'border-white/10 bg-black/40 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-xs">{tier.title}</div>
                    <div className="font-mono text-[10px] text-[#ccff00] mt-0.5">{tier.badge} Yield</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Column: Dynamic Projection Dashboard (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#12131c] to-[#090a0f] border-2 border-white/20 p-6 sm:p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_#ccff00]">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#ccff00] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5" />
                  Yield Forecast
                </span>
                <span className="text-xs font-mono text-zinc-400">SAK Standard Model</span>
              </div>

              {/* Primary Massive Metric: Projected Tuition Pipeline */}
              <div className="p-4 bg-black/60 border border-white/10">
                <div className="text-xs font-mono text-zinc-400">Projected Tuition Pipeline</div>
                <div className="text-3xl sm:text-4xl font-extrabold font-['Syne',sans-serif] text-white tabular-nums tracking-tight mt-1 text-balance">
                  <span className="text-[#ccff00]">${calculations.totalPipelineRevenue.toLocaleString()}</span>
                </div>
                <div className="text-xs font-mono text-[#00f5a0] mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>Blended ROAS: {calculations.roas}x Multiple</span>
                </div>
              </div>

              {/* Sub-Metric 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-black/40 border border-white/10">
                  <div className="text-[11px] font-mono text-zinc-400">Expected Applications</div>
                  <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                    {calculations.projectedApplications.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">@ ${calculations.effectiveApplicationCPA} CPA</div>
                </div>

                <div className="p-3 bg-black/40 border border-white/10">
                  <div className="text-[11px] font-mono text-zinc-400">Enrolled Students</div>
                  <div className="text-xl font-bold font-mono text-[#ccff00] tabular-nums mt-0.5">
                    {calculations.enrolledStudents.toLocaleString()} Students
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Final matriculation</div>
                </div>

                <div className="p-3 bg-black/40 border border-white/10">
                  <div className="text-[11px] font-mono text-zinc-400">Admissions Interviews</div>
                  <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                    {calculations.estimatedInterviews.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">38% qualified rate</div>
                </div>

                <div className="p-3 bg-black/40 border border-white/10">
                  <div className="text-[11px] font-mono text-zinc-400">Cost / Enrolled Student</div>
                  <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                    ${calculations.costPerEnrolledStudent.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Comprehensive CAC</div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={handleTriggerConfetti}
                className="w-full py-3.5 px-4 text-xs font-bold text-black bg-[#ccff00] hover:bg-[#d8ff33] active:scale-98 transition-all maximalist-border flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Generate Strategy Blueprint</span>
              </button>

              <p className="text-[11px] text-center text-zinc-400 font-mono">
                Calculations calibrated against actual SAK Digital University cohort data.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* STRATEGY BLUEPRINT MODAL */}
      {showPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#0e0f17] border-2 border-[#ccff00] p-6 sm:p-8 shadow-[12px_12px_0px_#ffffff] max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <div className="text-xs font-mono text-[#ccff00] uppercase tracking-wider">
                  SAK Digital University · Growth Playbook
                </div>
                <h3 className="text-xl font-bold font-['Syne',sans-serif] text-white mt-1">
                  Strategic Growth Plan for {program.name}
                </h3>
              </div>
              <button
                onClick={() => setShowPlanModal(false)}
                className="text-zinc-400 hover:text-white p-1 text-lg font-mono cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-6 space-y-5 text-sm text-zinc-300">
              <div className="p-4 bg-black/60 border border-white/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Budget Allocated</div>
                  <div className="text-lg font-bold font-mono text-white tabular-nums">${budget.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Target Applications</div>
                  <div className="text-lg font-bold font-mono text-[#ccff00] tabular-nums">{calculations.projectedApplications}</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Expected ROAS</div>
                  <div className="text-lg font-bold font-mono text-[#00f5a0] tabular-nums">{calculations.roas}x</div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white font-['Syne',sans-serif] text-sm uppercase text-[#ccff00]">
                  Phase 1: High-Voltage Creative Sprints (Days 1–14)
                </h4>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Deploy 24 surrealist ad variations across Meta and TikTok combining salary increase case reels with high-contrast degree accreditation authority. Implement server-side CAPI event tracking for accurate iOS conversion capture.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white font-['Syne',sans-serif] text-sm uppercase text-[#1833ff]">
                  Phase 2: Funnel Compression & Automated Routing (Days 15–45)
                </h4>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Route incoming inquiries into a 3-step qualification quiz. Qualified candidates receive an automated WhatsApp calendar invite to book directly with SAK admissions officers, reducing latency from 24 hours to 4 minutes.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white font-['Syne',sans-serif] text-sm uppercase text-[#ff2a85]">
                  Phase 3: High-Yield Remarketing & Scholarship Urgency (Days 46–60)
                </h4>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Re-engage incomplete applications with time-sensitive academic scholarship tiers and video student reviews, capturing 25% of lingering drop-offs before cohort closure.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-400">
                Prepared by Ganga Datta Joshi (Age 25)
              </span>
              <button
                onClick={() => {
                  setShowPlanModal(false);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-black bg-[#ccff00] hover:bg-[#d8ff33] uppercase tracking-wider maximalist-border cursor-pointer"
              >
                Review Strategy With Ganga
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
