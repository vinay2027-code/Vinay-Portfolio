import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronRight, Layers, Flame } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="executive-experience" className="py-16 sm:py-20 bg-[#0E1015] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono-code uppercase tracking-[0.2em] text-[#DE9B26] font-bold mb-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER HISTORY & OPERATIONS LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
              PROFESSIONAL WORK EXPERIENCE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans">
            Demonstrated excellence across Category Management, Quick Commerce launch operations, emergency crisis logistics, and B2B enterprise procurement.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          
          {/* Card 1: Supertails */}
          <div className="bg-[#14171F] border border-white/10 hover:border-[#DE9B26]/40 rounded-3xl p-6 sm:p-8 transition-colors relative overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-white/10 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white">
                    SUPERTAILS
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-[#DE9B26]/10 text-[#DE9B26] border border-[#DE9B26]/20 font-bold">
                    FULL-TIME
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    FEB 2025 — MAR 2026
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-200 uppercase font-sans">
                  Catalogue & Merchandising Executive (Category Management & Operations)
                </h3>
                <div className="flex items-center gap-3 text-xs font-mono-code text-neutral-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#DE9B26]" />
                    Bengaluru, India
                  </span>
                  <span>•</span>
                  <span>Domain: Pet Care & E-Commerce Quick Commerce</span>
                </div>
              </div>

              {/* Brand chips handled */}
              <div className="flex flex-wrap items-center gap-1.5 self-start lg:self-auto max-w-sm">
                <span className="text-[10px] font-mono-code text-neutral-400 block w-full mb-0.5">BRAND PARTNERSHIPS:</span>
                {['Mars India', 'Nestlé India', 'Royal Canin', '20+ Top Brands'].map((b) => (
                  <span key={b} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-300">
              <li className="flex items-start gap-2.5 bg-black/20 p-3.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#DE9B26] mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  <strong className="text-white">95% Catalogue Accuracy:</strong> Managed 20,000+ SKUs across 20+ leading brands, ensuring granular warehouse mapping and accurate product attributes.
                </span>
              </li>

              <li className="flex items-start gap-2.5 bg-black/20 p-3.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  <strong className="text-white">30-Minute Quick Commerce Launch:</strong> Led end-to-end catalogue operations for 3,000+ active SKUs enabling Bengaluru's instant delivery rollout.
                </span>
              </li>

              <li className="flex items-start gap-2.5 bg-black/20 p-3.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#DE9B26] mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  <strong className="text-white">Catalog Assortment Expansion:</strong> Listed and optimized 15,000+ SKUs across key categories, boosting overall search discoverability and customer conversion.
                </span>
              </li>

              <li className="flex items-start gap-2.5 bg-black/20 p-3.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  <strong className="text-white">Purchase Order Governance:</strong> Processed 50+ Purchase Orders monthly across 15+ vendors, maintaining seamless warehouse stock levels.
                </span>
              </li>

              <li className="flex items-start gap-2.5 bg-black/20 p-3.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  <strong className="text-white">40+ Warehouses Inbound Flow:</strong> Governed inbound logistics coordinating 6–7 daily shipments with a 7-member operations team.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: Printo */}
          <div className="bg-[#14171F] border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-8 transition-colors shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-white/10 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white">
                    PRINTO
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                    INTERNSHIP
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-white/5 text-neutral-300 border border-white/10">
                    AUG 2023 — DEC 2023
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-200 uppercase font-sans">
                  Cataloging Intern (Corporate Procurement & Bespoke Merchandising)
                </h3>
                <div className="flex items-center gap-3 text-xs font-mono-code text-neutral-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#DE9B26]" />
                    Bengaluru, India
                  </span>
                  <span>•</span>
                  <span>Enterprise Gifting & Customized Print Procurement</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 self-start lg:self-auto max-w-sm">
                <span className="text-[10px] font-mono-code text-neutral-400 block w-full mb-0.5">KEY CLIENTS:</span>
                {['Google', 'Meta', 'Fortune-Tier Accounts', '10+ Vendors'].map((c) => (
                  <span key={c} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-300">
              <li className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] font-mono-code text-[#DE9B26] block">ENTERPRISE SOLUTIONS</span>
                <strong className="text-white block text-sm">40+ Bespoke Gifting Packages</strong>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Curated customized merchandise solutions for Google, Meta, and premier corporate accounts.
                </p>
              </li>

              <li className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] font-mono-code text-emerald-400 block">CAMPAIGN SCALE</span>
                <strong className="text-white block text-sm">10,000+ Orders Executed</strong>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Managed 2023 Diwali gifting operations: sourced 20–30 SKUs, assembled 40+ solutions, and fulfilled on-time.
                </p>
              </li>

              <li className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] font-mono-code text-blue-400 block">VENDOR PROCUREMENT</span>
                <strong className="text-white block text-sm">10+ Trusted Sourcing Partners</strong>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Coordinated vendor pricing, quality inspections, and lead times for high-volume enterprise SLAs.
                </p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
