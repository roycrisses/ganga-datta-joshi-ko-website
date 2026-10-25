import React, { useState } from 'react';
import { DESIGN_TOKENS } from '../data/portfolioData';
import { Copy, Check, Sliders, Type, Palette, ShieldCheck, Sparkles } from 'lucide-react';

interface DesignSystemExplorerProps {
  activeThemeAccent: 'acid' | 'ultramarine' | 'magenta';
  onSelectThemeAccent: (theme: 'acid' | 'ultramarine' | 'magenta') => void;
}

export const DesignSystemExplorer: React.FC<DesignSystemExplorerProps> = ({
  activeThemeAccent,
  onSelectThemeAccent,
}) => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [customPreviewText, setCustomPreviewText] = useState('SAK Digital University Growth Architecture');
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'manifesto'>('tokens');

  const copyToClipboard = (tokenName: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <section id="design-system" className="w-full py-20 bg-[#07080c] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ccff00] mb-2">
              <span>Ganga Datta Joshi</span>
              <span aria-hidden="true">/</span>
              <span>Proprietary Style Guide</span>
              <span aria-hidden="true">/</span>
              <span>Living Spec</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Syne',sans-serif] text-white tracking-tight">
              The Surrealist Maximalism Design System
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Engineered to dissolve banner blindness in higher education marketing. High-voltage contrast, avant-garde surrealist collisions, and strict WCAG tabular precision.
            </p>
          </div>

          {/* Theme Mood Selector (Interactive segmented control) */}
          <div className="p-1.5 bg-[#12131c] border border-white/10 flex items-center gap-1.5 shrink-0">
            <span className="text-xs font-mono text-zinc-400 px-2">Accent Mode:</span>
            <button
              onClick={() => onSelectThemeAccent('acid')}
              className={`px-3 py-1.5 text-xs font-bold transition-all ${
                activeThemeAccent === 'acid'
                  ? 'bg-[#ccff00] text-black shadow-[2px_2px_0px_#ffffff]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Acid Supernova
            </button>
            <button
              onClick={() => onSelectThemeAccent('ultramarine')}
              className={`px-3 py-1.5 text-xs font-bold transition-all ${
                activeThemeAccent === 'ultramarine'
                  ? 'bg-[#1833ff] text-white shadow-[2px_2px_0px_#ccff00]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Ultramarine
            </button>
            <button
              onClick={() => onSelectThemeAccent('magenta')}
              className={`px-3 py-1.5 text-xs font-bold transition-all ${
                activeThemeAccent === 'magenta'
                  ? 'bg-[#ff2a85] text-white shadow-[2px_2px_0px_#ffffff]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Surreal Magenta
            </button>
          </div>
        </div>

        {/* Tab Navigation (Segmented Interactive Control) */}
        <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'tokens'
                ? 'bg-white text-black shadow-[3px_3px_0px_#ccff00]'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Color & Style Tokens</span>
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'typography'
                ? 'bg-white text-black shadow-[3px_3px_0px_#ccff00]'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Interactive Type Tester</span>
          </button>
          <button
            onClick={() => setActiveTab('manifesto')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'manifesto'
                ? 'bg-white text-black shadow-[3px_3px_0px_#ccff00]'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Maximalist Constitution</span>
          </button>
        </div>

        {/* TAB 1: COLOR & STYLE TOKENS */}
        {activeTab === 'tokens' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESIGN_TOKENS.filter((t) => t.type === 'color').map((token) => (
              <div
                key={token.name}
                className="bg-[#12131c] border border-white/15 p-5 relative group hover:border-[#ccff00]/50 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[6px_6px_0px_0px_#ccff00]"
              >
                {/* Visual Swatch */}
                <div
                  className="w-full h-24 mb-4 border border-white/20 relative flex items-end p-2.5"
                  style={{ backgroundColor: token.value }}
                >
                  <span
                    className="font-mono text-xs font-bold px-1.5 py-0.5 bg-black/80 text-white"
                  >
                    {token.value}
                  </span>
                </div>

                {/* Token Details */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-sm font-['Syne',sans-serif]">
                      {token.name}
                    </h4>
                    <button
                      onClick={() => copyToClipboard(token.name, token.value)}
                      title="Copy HEX code"
                      className="text-zinc-400 hover:text-[#ccff00] transition-colors p-1"
                    >
                      {copiedToken === token.name ? (
                        <Check className="w-4 h-4 text-[#ccff00]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="text-xs font-mono text-[#ccff00]">{token.role}</div>
                  <p className="text-xs text-zinc-400 leading-normal">{token.description}</p>
                  
                  {token.contrastRatio && (
                    <div className="pt-2 mt-2 border-t border-white/10 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                      <span>Contrast:</span>
                      <span className="text-zinc-200">{token.contrastRatio}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: INTERACTIVE TYPE TESTER */}
        {activeTab === 'typography' && (
          <div className="space-y-8 bg-[#12131c] border border-white/15 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white">Live Font Hierarchy Playground</h3>
                <p className="text-xs text-zinc-400">Type below to preview how Ganga’s typographic pairing responds in real-time.</p>
              </div>
              <div className="w-full sm:w-auto flex-1 max-w-md">
                <input
                  type="text"
                  value={customPreviewText}
                  onChange={(e) => setCustomPreviewText(e.target.value)}
                  placeholder="Enter sample headline text..."
                  className="w-full px-4 py-2 bg-black border border-white/20 text-white text-sm focus:border-[#ccff00] focus:outline-none font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Syne Display */}
              <div className="space-y-2 p-5 bg-black/60 border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-[#ccff00] font-bold">01. Syne Display (Bold 800)</span>
                  <span>Hero & Section Headings</span>
                </div>
                <div className="text-3xl font-extrabold font-['Syne',sans-serif] text-white tracking-tight leading-tight py-2">
                  {customPreviewText || 'Where Growth Science Meets Surrealism'}
                </div>
                <p className="text-xs text-zinc-400">
                  Used for high-impact avant-garde declarations that seize eye attention in sub-100ms.
                </p>
              </div>

              {/* Fraunces Editorial Serif */}
              <div className="space-y-2 p-5 bg-black/60 border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-[#ff2a85] font-bold">02. Fraunces Italic Serif</span>
                  <span>Surrealist Contrast & Academic Honors</span>
                </div>
                <div className="text-3xl font-normal font-['Fraunces',serif] italic text-[#f4f4f5] leading-tight py-2">
                  {customPreviewText || 'Where Growth Science Meets Surrealism'}
                </div>
                <p className="text-xs text-zinc-400">
                  Infuses intellectual prestige and organic human warmth into university marketing narratives.
                </p>
              </div>

              {/* Plus Jakarta Sans */}
              <div className="space-y-2 p-5 bg-black/60 border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-white font-bold">03. Plus Jakarta Sans</span>
                  <span>Body Copy & High-Density UI</span>
                </div>
                <div className="text-base font-normal font-['Plus_Jakarta_Sans',sans-serif] text-zinc-300 leading-relaxed py-2">
                  {customPreviewText || 'Scaling admissions across 42 cohorts with mathematical precision and uncompromising clarity.'}
                </div>
                <p className="text-xs text-zinc-400">
                  Flawless legibility at 14px–16px across desktop and mobile screens.
                </p>
              </div>

              {/* JetBrains Mono */}
              <div className="space-y-2 p-5 bg-black/60 border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-[#00f5a0] font-bold">04. JetBrains Mono (Tabular)</span>
                  <span>Data, ROAS, Budgets & Codes</span>
                </div>
                <div className="text-xl font-bold font-mono text-[#ccff00] tabular-nums py-2">
                  ROAS: 7.42x | CPA: $14.20 | LTV: $18,400 | N=24,800
                </div>
                <p className="text-xs text-zinc-400">
                  Guarantees perfect vertical column alignment in admissions reporting matrices.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MAXIMALIST CONSTITUTION */}
        {activeTab === 'manifesto' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#12131c] border border-white/15 p-6 space-y-3">
              <div className="text-xs font-mono text-[#ccff00] font-bold uppercase">Principle 01</div>
              <h4 className="text-lg font-bold font-['Syne',sans-serif] text-white">Zero-Pill Metadata</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                We never enclose tags, dates, or credentials in candy-colored pill badges. Clean unboxed typography separated by <code className="text-[#ccff00]">/</code> or <code className="text-[#ccff00]">·</code> maintains elite editorial dignity.
              </p>
            </div>

            <div className="bg-[#12131c] border border-white/15 p-6 space-y-3">
              <div className="text-xs font-mono text-[#1833ff] font-bold uppercase">Principle 02</div>
              <h4 className="text-lg font-bold font-['Syne',sans-serif] text-white">60-30-10 Surreal Balance</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                60% cosmic obsidian canvas provides zero ocular fatigue. 30% structured borders frame complex marketing matrices. 10% high-voltage acid accent drives immediate conversion action.
              </p>
            </div>

            <div className="bg-[#12131c] border border-white/15 p-6 space-y-3">
              <div className="text-xs font-mono text-[#ff2a85] font-bold uppercase">Principle 03</div>
              <h4 className="text-lg font-bold font-['Syne',sans-serif] text-white">Mathematical Rigor</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Maximalism is never arbitrary decoration. Every graphic anchor reflects a quantitative reality: funnel drop-offs, ROAS lift curves, and attributable student admissions metrics.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
