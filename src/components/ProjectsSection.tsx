import React from 'react';
import { TrendingUp, FileText, BarChart3, Database, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="strategic-projects" className="py-16 sm:py-20 bg-[#0A0C10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono-code uppercase tracking-[0.2em] text-[#DE9B26] font-bold mb-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>SPORTS BUSINESS RESEARCH & STRATEGIC INITIATIVES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
              RESEARCH PAPERS & CASE STUDIES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans">
            Grounded in empirical consumer analytics, commercial sports economics, and high-velocity supply chain architecture.
          </p>
        </div>

        {/* Featured Research Paper Showcase Card */}
        <div className="bg-gradient-to-br from-[#161922] via-[#14171F] to-[#0E1015] border-2 border-[#DE9B26]/30 rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#DE9B26]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono-code bg-[#DE9B26] text-black font-bold uppercase tracking-wider">
                  FEATURED RESEARCH PUBLICATION
                </span>
                <span className="text-xs font-mono-code text-neutral-400">
                  JUN 2022 — MAR 2024 // 500+ RESPONDENTS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
                A Study on People's Outlook on Sports Merchandise in India
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                Conducted comprehensive primary and secondary quantitative research analyzing India’s <strong>USD 673 Million</strong> sports merchandise sector. Modeled consumer willingness to spend, brand affinity channels, e-commerce adoption, and counterfeit deterrence across 500+ active sports fans and consumers.
              </p>

              {/* Research Metric Callouts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-black/40 border border-white/10 rounded-xl p-3">
                  <div className="text-[10px] font-mono-code text-[#DE9B26] uppercase">MARKET SIZE</div>
                  <div className="text-xl font-bold font-mono-code text-white mt-0.5">$673M</div>
                  <div className="text-[10px] text-neutral-400">Base Valuation</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-xl p-3">
                  <div className="text-[10px] font-mono-code text-emerald-400 uppercase">PROJECTED 2029</div>
                  <div className="text-xl font-bold font-mono-code text-white mt-0.5">$1.93B</div>
                  <div className="text-[10px] text-neutral-400">At 16.2% CAGR</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-xl p-3 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-mono-code text-amber-300 uppercase">SAMPLE SIZE</div>
                  <div className="text-xl font-bold font-mono-code text-white mt-0.5">500+</div>
                  <div className="text-[10px] text-neutral-400">Direct Respondents</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Consumer Behavior', 'Sports Business', 'Licensing Strategy', 'Merchandising Economics', 'Data Modeling'].map((tag) => (
                  <span key={tag} className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 border border-white/10">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Card: Research Key Takeaways */}
            <div className="lg:col-span-4 bg-black/50 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-mono-code text-[#DE9B26] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4" />
                <span>KEY ANALYTICAL FINDINGS</span>
              </div>

              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DE9B26] mt-1.5 shrink-0" />
                  <span><strong>E-Commerce Shift:</strong> Over 68% of young consumers prefer official team merchandise purchase via D2C & quick commerce channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DE9B26] mt-1.5 shrink-0" />
                  <span><strong>Premiumization:</strong> High affinity for official retro football & cricket kits, with willing price elasticity for verified authenticity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DE9B26] mt-1.5 shrink-0" />
                  <span><strong>Gaming Convergence:</strong> Synergies between digital esports merchandise and traditional fan apparel driving 16.2% annual growth.</span>
                </li>
              </ul>

              <div className="pt-2">
                <span className="text-[11px] font-mono-code text-neutral-400 block">
                  Author: Vinay G // Department of International Business & Sports Management
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Operational Strategic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.filter(p => p.id !== 'proj-research').map((proj, idx) => (
            <div 
              key={proj.id}
              className="bg-[#14171F] border border-white/10 hover:border-white/25 rounded-2xl p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono-code text-neutral-400 mb-2">
                  <span className="text-[#DE9B26] font-bold">{proj.category}</span>
                  <span>[{proj.year}]</span>
                </div>

                <h4 className="text-base font-bold font-display uppercase tracking-tight text-white leading-snug">
                  {proj.title}
                </h4>

                <p className="text-xs sm:text-sm text-neutral-300 mt-2.5 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-emerald-400 font-bold">{proj.metric}</span>
                  <span className="text-neutral-400 text-[10px]">CASE 0{idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
