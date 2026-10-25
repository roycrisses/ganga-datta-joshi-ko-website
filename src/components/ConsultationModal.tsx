import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, CheckCircle2, Clock, Mail, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [goal, setGoal] = useState('Scale Cohort Student Admissions');
  const [budgetRange, setBudgetRange] = useState('$10,000 - $30,000 / mo');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#ccff00', '#1833ff', '#ff2a85', '#ffffff'],
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setOrganization('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0e0f17] border-2 border-[#ccff00] p-6 sm:p-8 shadow-[14px_14px_0px_0px_#ffffff] max-h-[95vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#ccff00] uppercase tracking-wider">
              Admissions & Performance Advisory
            </div>
            <h3 className="text-2xl font-bold font-['Syne',sans-serif] text-white mt-1">
              Book a Growth Consultation
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Direct consultation with Ganga Datta Joshi (Age 25, SAK Digital University).
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-2 text-xl font-mono cursor-pointer"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 bg-[#ccff00] mx-auto flex items-center justify-center text-black border-2 border-white shadow-[4px_4px_0px_#ffffff]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-bold font-['Syne',sans-serif] text-white">
              Consultation Reserved
            </h4>

            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Ganga Datta Joshi has received your inquiry for <strong className="text-[#ccff00]">{organization}</strong>. A tailored preparation brief and calendar confirmation will arrive at <span className="text-white underline">{email}</span> within 4 business hours.
            </p>

            <div className="p-4 bg-black/60 border border-white/10 text-xs font-mono text-zinc-400 max-w-md mx-auto text-left space-y-1">
              <div><strong className="text-white">Focus:</strong> {goal}</div>
              <div><strong className="text-white">Budget Bracket:</strong> {budgetRange}</div>
              <div><strong className="text-white">Host:</strong> Ganga Datta Joshi · SAK Digital University</div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-bold text-black bg-[#ccff00] hover:bg-white uppercase tracking-wider maximalist-border cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maya Chen"
                  className="w-full px-3.5 py-2.5 bg-black border border-white/20 text-white text-sm focus:border-[#ccff00] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-300 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. maya@university.edu"
                  className="w-full px-3.5 py-2.5 bg-black border border-white/20 text-white text-sm focus:border-[#ccff00] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-300 mb-1">
                Organization / Academic Institution *
              </label>
              <input
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. Global Tech Institute / EdTech Org"
                className="w-full px-3.5 py-2.5 bg-black border border-white/20 text-white text-sm focus:border-[#ccff00] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-300 mb-1">
                  Primary Objective
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black border border-white/20 text-white text-sm focus:border-[#ccff00] focus:outline-none cursor-pointer"
                >
                  <option value="Scale Cohort Student Admissions">Scale Cohort Admissions</option>
                  <option value="Reduce Paid CPA on Meta & Google">Lower Acquisition CPA</option>
                  <option value="Full Funnel & CRO Audit">Full Admissions Funnel Audit</option>
                  <option value="Surrealist Brand Identity Launch">Surrealist Brand Campaign</option>
                  <option value="Executive Master's Intake Engine">Executive Master's Engine</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-300 mb-1">
                  Monthly Media Budget
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black border border-white/20 text-white text-sm focus:border-[#ccff00] focus:outline-none cursor-pointer"
                >
                  <option value="$5,000 - $10,000 / mo">$5,000 - $10,000 / mo</option>
                  <option value="$10,000 - $30,000 / mo">$10,000 - $30,000 / mo</option>
                  <option value="$30,000 - $75,000 / mo">$30,000 - $75,000 / mo</option>
                  <option value="$75,000+ / mo">$75,000+ / mo</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 text-xs font-bold text-black bg-[#ccff00] hover:bg-[#d8ff33] uppercase tracking-wider maximalist-border flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Confirm & Reserve Strategy Session</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-zinc-400 font-mono">
              Strict privacy guarantee. No spam. Direct response from Ganga Datta Joshi.
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
