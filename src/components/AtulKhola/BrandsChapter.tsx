import React from 'react';
import { InteractiveMark } from './InteractiveMark';
import { Building2, Calendar, MapPin, CheckCircle, Flame, Layers } from 'lucide-react';
import { ExperienceItem } from '../../types';

interface BrandsChapterProps {
  experiences: ExperienceItem[];
}

export const BrandsChapter: React.FC<BrandsChapterProps> = ({ experiences }) => {
  return (
    <section id="brands" className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 border-b border-white/10 relative">
      
      {/* Chapter Label */}
      <div className="flex items-center gap-3 text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-widest mb-3">
        <span className="w-2 h-2 bg-[#ffe600] rounded-sm" />
        <span>//BRANDS & OPERATIONS</span>
        <span className="text-white/30 hidden sm:inline">——— 02 // WHERE I HAVE OPERATED & BUILT</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-10 pb-4 border-b border-white/10">
        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-display tracking-tight text-white">
          EXPERIENCE & OPERATIONS TRACK RECORD
        </h2>
        <p className="text-xs sm:text-sm font-mono-code text-white/60 max-w-md">
          Leading category catalogue operations, instant quick-commerce launches, and emergency logistics across top FMCG conglomerates.
        </p>
      </div>

      {/* Brands Cards Stack */}
      <div className="space-y-8">
        
        {/* Brand 1: Supertails */}
        <div className="bg-[#0b2418] border border-white/15 hover:border-[#ffe600]/40 rounded-2xl p-6 sm:p-8 transition-all shadow-xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white">
                  SUPERTAILS
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-[#ffe600] text-black font-bold">
                  FULL-TIME
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                  FEB 2025 — MAR 2026
                </span>
              </div>
              <h4 className="text-base font-bold text-white/90">
                Catalogue & Merchandising Executive (Category Operations Lead)
              </h4>
              <div className="flex items-center gap-3 text-xs font-mono-code text-white/50 mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#ffe600]" />
                  Bengaluru, India
                </span>
                <span>•</span>
                <span>Category: Pet Care FMCG & Quick Commerce</span>
              </div>
            </div>

            {/* Top Brand Partnerships */}
            <div className="flex flex-wrap items-center gap-1.5 max-w-sm">
              <span className="text-[10px] font-mono-code text-[#ffe600] block w-full mb-0.5 font-bold">
                PORTFOLIO BRANDS MANAGED:
              </span>
              {['Mars India', 'Nestlé India', 'Royal Canin', 'Drools', 'Farmina', '20+ Top Brands'].map((b) => (
                <span key={b} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-black/40 border border-white/10 text-white/80">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Body Narrative with Interactive Marks */}
          <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed font-sans mb-6">
            <p>
              I joined Supertails to lead catalogue operations across{' '}
              <InteractiveMark 
                text="20,000+ active SKUs" 
                note="Maintained 95% accuracy across product attributes, ingredients, dimensions, and barcode mappings" 
                badge="CATALOGUE GOVERNANCE"
              />
              . I structured and mapped inventory across{' '}
              <InteractiveMark 
                text="40+ fulfillment warehouses" 
                note="Coordinated 6–7 daily inbound consignments with warehouse teams to prevent stockouts" 
                badge="INBOUND LOGISTICS"
              />
              , processing over 50 Purchase Orders each month.
            </p>

            <p>
              When Supertails greenlit instant delivery, I orchestrated the end-to-end catalogue rollout for{' '}
              <InteractiveMark 
                text="30-minute quick commerce delivery" 
                note="Dark store inventory mapping across Bengaluru with real-time stock sync" 
                badge="QUICK COMMERCE"
              />
              , staging 3,000+ essential SKUs for immediate dispatch.
            </p>

          </div>

          {/* Quantified Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs font-mono-code">
            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] text-white/50 block">ACCURACY RATE</span>
              <span className="text-base font-bold text-[#ffe600]">95% SLA</span>
            </div>
            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] text-white/50 block">LIVE SKUs</span>
              <span className="text-base font-bold text-white">20,000+</span>
            </div>
            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] text-white/50 block">FULFILLMENT HUBS</span>
              <span className="text-base font-bold text-emerald-400">40+ WAREHOUSES</span>
            </div>
            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] text-white/50 block">MONTHLY POs</span>
              <span className="text-base font-bold text-emerald-400">50+ ORDERS</span>
            </div>
          </div>

        </div>

        {/* Brand 2: Printo */}
        <div className="bg-[#0b2418] border border-white/15 hover:border-white/30 rounded-2xl p-6 sm:p-8 transition-all shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white">
                  PRINTO
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-blue-500/20 text-blue-300 font-bold border border-blue-400/20">
                  INTERNSHIP
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-white/5 text-white/60">
                  AUG 2023 — DEC 2023
                </span>
              </div>
              <h4 className="text-base font-bold text-white/90">
                Cataloging Intern (Bespoke Corporate Merchandising & Gifting)
              </h4>
              <div className="flex items-center gap-3 text-xs font-mono-code text-white/50 mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#ffe600]" />
                  Bengaluru, India
                </span>
                <span>•</span>
                <span>Clients: Google, Meta & Enterprise Accounts</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 max-w-sm">
              <span className="text-[10px] font-mono-code text-[#ffe600] block w-full mb-0.5 font-bold">
                KEY ENTERPRISE ACCOUNTS:
              </span>
              {['Google', 'Meta', 'Fortune-500 Clients', '10+ Vetted Sourcing Vendors'].map((c) => (
                <span key={c} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-black/40 border border-white/10 text-white/80">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed font-sans mb-6">
            <p>
              At Printo, I specialized in high-touch corporate procurement and merchandise cataloging for premier technology accounts like{' '}
              <InteractiveMark 
                text="Google and Meta" 
                note="Delivered bespoke customized kits adhering to strict global corporate brand guidelines" 
                badge="KEY CLIENTS"
              />
              .
            </p>

            <p>
              I managed end-to-end logistics for the high-volume 2023 Diwali gifting campaign:{' '}
              <InteractiveMark 
                text="10,000+ orders executed" 
                note="Sourced 20–30 unique SKUs, created 40+ personalized solution bundles, and sustained 100% on-time dispatch" 
                badge="SEASONAL CAMPAIGN"
              />
              {' '}while coordinating pricing, proofing, and SLA commitments with 10+ external fabrication vendors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs font-mono-code">
            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] text-white/50 block">CAMPAIGN VOLUME</span>
              <span className="text-base font-bold text-white">10,000+ ORDERS</span>
            </div>
            <div className="bg-black/30 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] text-white/50 block">BESPOKE PACKAGES</span>
              <span className="text-base font-bold text-[#ffe600]">40+ SOLUTIONS</span>
            </div>
            <div className="bg-black/30 p-3 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-white/50 block">SOURCING NETWORK</span>
              <span className="text-base font-bold text-blue-300">10+ VENDORS</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
