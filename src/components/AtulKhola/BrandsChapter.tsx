import React from 'react';
import { InteractiveMark } from './InteractiveMark';
import { Building2, Calendar, MapPin, CheckCircle, Flame, Layers } from 'lucide-react';
import { ExperienceItem } from '../../types';

interface BrandsChapterProps {
  experiences: ExperienceItem[];
}

export const BrandsChapter: React.FC<BrandsChapterProps> = ({ experiences }) => {
  return (
    <section id="brands" className="py-8 sm:py-12 px-4 sm:px-8 lg:px-12 border-b border-white/10 relative">
      
      {/* Chapter Label */}
      <div className="flex items-center gap-3 text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-widest mb-3">
        <span className="w-2 h-2 bg-[#ffe600] rounded-sm" />
        <span>//BRANDS & OPERATIONS</span>
        <span className="text-white/30 hidden sm:inline">——— 02 // WHERE I HAVE OPERATED & BUILT</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6 pb-3 border-b border-white/10">
        <h2 className="text-xl sm:text-3xl font-extrabold uppercase font-display tracking-tight text-white">
          OPERATIONS & EXPERIENCE TRACK RECORD
        </h2>
        <p className="text-xs font-mono-code text-white/60">
          Quick-commerce rollouts, 20,000+ SKUs, and enterprise procurement for Fortune-500 accounts.
        </p>
      </div>

      {/* 2-Column Responsive Grid to keep vertical scroll tight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Brand 1: Supertails */}
        <div className="bg-[#0b2418] border border-white/15 hover:border-[#ffe600]/40 rounded-2xl p-5 sm:p-6 transition-all shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">
                SUPERTAILS
              </h3>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-[#ffe600] text-black font-bold">
                  FULL-TIME
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                  2025 — 2026
                </span>
              </div>
            </div>

            <div className="text-sm font-bold text-white/90 mb-1">
              Catalogue & Merchandising Executive (Category Lead)
            </div>
            <div className="text-xs font-mono-code text-white/50 mb-4">
              Bengaluru, India • Pet Care FMCG & Quick Commerce
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
              Governed <strong className="text-white">20,000+ active SKUs</strong> maintaining 95% catalogue accuracy across Mars India, Nestlé, and Royal Canin. Orchestrated inventory mapping for 40+ fulfillment warehouses and staged 3,000+ priority SKUs for Bengaluru's <strong className="text-[#ffe600]">30-minute quick commerce delivery</strong> launch with zero downtime.
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {['Mars India', 'Nestlé', 'Royal Canin', 'Drools', '40+ Warehouses'].map((b) => (
                <span key={b} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-black/40 border border-white/10 text-white/70">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center font-mono-code">
            <div className="bg-black/30 p-2 rounded-lg border border-white/5">
              <div className="text-[9px] text-white/40">ACCURACY</div>
              <div className="text-sm font-bold text-[#ffe600]">95% SLA</div>
            </div>
            <div className="bg-black/30 p-2 rounded-lg border border-white/5">
              <div className="text-[9px] text-white/40">CATALOGUE</div>
              <div className="text-sm font-bold text-white">20K+ SKUs</div>
            </div>
            <div className="bg-black/30 p-2 rounded-lg border border-white/5">
              <div className="text-[9px] text-white/40">Q-COMMERCE</div>
              <div className="text-sm font-bold text-emerald-400">30-MIN</div>
            </div>
          </div>
        </div>

        {/* Brand 2: Printo */}
        <div className="bg-[#0b2418] border border-white/15 hover:border-white/30 rounded-2xl p-5 sm:p-6 transition-all shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">
                PRINTO
              </h3>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-blue-500/20 text-blue-300 font-bold border border-blue-400/20">
                  INTERNSHIP
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-white/5 text-white/60">
                  AUG — DEC 2023
                </span>
              </div>
            </div>

            <div className="text-sm font-bold text-white/90 mb-1">
              Cataloging Executive (Corporate Merchandising)
            </div>
            <div className="text-xs font-mono-code text-white/50 mb-4">
              Bengaluru, India • Enterprise Accounts
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
              Managed bespoke corporate procurement and custom catalogue execution for premier technology accounts including <strong className="text-white">Google and Meta</strong>. Executed the 2023 festive gifting campaign of <strong className="text-[#ffe600]">10,000+ orders</strong> across 40+ personalized solution packages with 100% on-time dispatch SLA.
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {['Google', 'Meta', '10K+ Orders', '40+ Packages', '10+ Vetted Vendors'].map((c) => (
                <span key={c} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-black/40 border border-white/10 text-white/70">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center font-mono-code">
            <div className="bg-black/30 p-2 rounded-lg border border-white/5">
              <div className="text-[9px] text-white/40">ORDERS</div>
              <div className="text-sm font-bold text-white">10K+</div>
            </div>
            <div className="bg-black/30 p-2 rounded-lg border border-white/5">
              <div className="text-[9px] text-white/40">SOLUTIONS</div>
              <div className="text-sm font-bold text-[#ffe600]">40+ PKGS</div>
            </div>
            <div className="bg-black/30 p-2 rounded-lg border border-white/5">
              <div className="text-[9px] text-white/40">CLIENTS</div>
              <div className="text-sm font-bold text-blue-300">GOOGLE/META</div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
