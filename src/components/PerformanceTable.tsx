import React, { useState } from 'react';
import { MARKETING_CHANNELS_DATA } from '../data/portfolioData';
import { ArrowUpDown, HelpCircle } from 'lucide-react';

export const PerformanceTable: React.FC = () => {
  const [sortField, setSortField] = useState<'spend' | 'roas' | 'leads' | 'cpa'>('roas');
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const handleSort = (field: 'spend' | 'roas' | 'leads' | 'cpa') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  const sortedData = [...MARKETING_CHANNELS_DATA].sort((a, b) => {
    let valA = 0;
    let valB = 0;

    if (sortField === 'spend') {
      valA = parseFloat(a.spend.replace(/[^0-9.-]+/g, ''));
      valB = parseFloat(b.spend.replace(/[^0-9.-]+/g, ''));
    } else if (sortField === 'roas') {
      valA = parseFloat(a.roas.replace('x', ''));
      valB = parseFloat(b.roas.replace('x', ''));
    } else if (sortField === 'leads') {
      valA = parseFloat(a.leads.replace(/,/g, ''));
      valB = parseFloat(b.leads.replace(/,/g, ''));
    } else if (sortField === 'cpa') {
      valA = parseFloat(a.cpa.replace(/[^0-9.-]+/g, ''));
      valB = parseFloat(b.cpa.replace(/[^0-9.-]+/g, ''));
    }

    return sortAsc ? valA - valB : valB - valA;
  });

  return (
    <section id="university-impact" className="w-full py-20 bg-[#07080c] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            <span className="text-[#ccff00] font-semibold">SAK Digital University Cohort Benchmarks</span>
            <span aria-hidden="true">/</span>
            <span>Tabular Channel Audit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Syne',sans-serif] text-white tracking-tight">
            Performance Media Attribution Matrix
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
            Granular breakdown of multi-channel capital allocation, lead volume, and return on ad spend orchestrated by Ganga Datta Joshi.
          </p>
        </div>

        {/* Tabular Numerals Data Table with Horizontal Scroll Overflow */}
        <div className="w-full overflow-x-auto border border-white/15 bg-[#12131c]">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-white/10 bg-black/40 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Acquisition Channel</th>
                <th 
                  onClick={() => handleSort('spend')}
                  className="py-4 px-4 font-semibold text-right cursor-pointer hover:text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-1">
                    Managed Spend <ArrowUpDown className="w-3 h-3" />
                  </span>
                </th>
                <th className="py-4 px-4 font-semibold text-right">Clicks</th>
                <th className="py-4 px-4 font-semibold text-right">Avg CPC</th>
                <th 
                  onClick={() => handleSort('leads')}
                  className="py-4 px-4 font-semibold text-right cursor-pointer hover:text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-1">
                    Inquiries <ArrowUpDown className="w-3 h-3" />
                  </span>
                </th>
                <th 
                  onClick={() => handleSort('cpa')}
                  className="py-4 px-4 font-semibold text-right cursor-pointer hover:text-white transition-colors"
                >
                  <span className="inline-flex items-center gap-1">
                    Cost/Lead <ArrowUpDown className="w-3 h-3" />
                  </span>
                </th>
                <th 
                  onClick={() => handleSort('roas')}
                  className="py-4 px-6 font-semibold text-right text-[#ccff00] cursor-pointer hover:text-[#d8ff33] transition-colors"
                >
                  <span className="inline-flex items-center gap-1">
                    Cohort ROAS <ArrowUpDown className="w-3 h-3" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono text-xs text-zinc-300">
              {sortedData.map((row) => (
                <tr key={row.channel} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-4 px-6 font-semibold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                    {row.channel}
                  </td>
                  <td className="py-4 px-4 text-right tabular-nums">{row.spend}</td>
                  <td className="py-4 px-4 text-right tabular-nums text-zinc-400">{row.clicks}</td>
                  <td className="py-4 px-4 text-right tabular-nums text-zinc-400">{row.cpc}</td>
                  <td className="py-4 px-4 text-right tabular-nums font-semibold text-white">{row.leads}</td>
                  <td className="py-4 px-4 text-right tabular-nums text-zinc-300">{row.cpa}</td>
                  <td className="py-4 px-6 text-right tabular-nums font-bold text-[#ccff00] text-sm">
                    {row.roas}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-white/20 bg-black/60 font-mono text-xs font-bold text-white">
                <td className="py-4 px-6 font-semibold">Blended Performance Total</td>
                <td className="py-4 px-4 text-right tabular-nums text-[#ccff00]">$3,400,000</td>
                <td className="py-4 px-4 text-right tabular-nums text-zinc-400">1,988,400</td>
                <td className="py-4 px-4 text-right tabular-nums text-zinc-400">$1.71</td>
                <td className="py-4 px-4 text-right tabular-nums text-[#ccff00]">68,400</td>
                <td className="py-4 px-4 text-right tabular-nums">$14.85</td>
                <td className="py-4 px-6 text-right tabular-nums text-base text-[#ccff00]">6.82x</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>* Click column headers to reorder by Spend, Leads, CPA, or ROAS</span>
          <span>Verified through SAK Digital University Admissions CRM</span>
        </div>

      </div>
    </section>
  );
};
