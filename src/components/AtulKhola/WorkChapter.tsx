import React from 'react';
import { ProjectItem } from '../../types';
import { DropshippingMelaShowcase } from './DropshippingMelaShowcase';
import { GigWorkerResearchShowcase } from './GigWorkerResearchShowcase';
import { EasyBillShowcase } from './EasyBillShowcase';

interface WorkChapterProps {
  projects: ProjectItem[];
}

export const WorkChapter: React.FC<WorkChapterProps> = ({ projects }) => {
  return (
    <section id="work" className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 border-b border-white/10 relative">
      
      {/* Chapter Label */}
      <div className="flex items-center gap-3 text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-widest mb-3">
        <span className="w-2 h-2 bg-[#ffe600] rounded-sm" />
        <span>//WORK</span>
        <span className="text-white/30 hidden sm:inline">——— 03 // VENTURE PROJECTS, PRODUCTS & FIELD STUDIES</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-10 pb-4 border-b border-white/10">
        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-display tracking-tight text-white">
          VENTURE PROJECTS, APPS & FIELD STUDIES
        </h2>
        <p className="text-xs sm:text-sm font-mono-code text-white/60 max-w-md">
          Live retail commerce, retail-tech software development, gig workforce ethnography, and high-cadence supply chain engineering.
        </p>
      </div>

      {/* Featured Showcase 01: Dropshipping Mela | Sales & Entrepreneurship */}
      <DropshippingMelaShowcase />

      {/* Featured Showcase 02: Easy Bill | Smart Billing, Invoicing & POS Platform */}
      <EasyBillShowcase />

      {/* Featured Showcase 03: Gig Worker Research | Field Research & Business Insights */}
      <GigWorkerResearchShowcase />

      {/* 3 Operational Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Case 1 */}
        <div className="bg-[#0b2418] border border-white/10 hover:border-white/25 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="text-[10px] font-mono-code text-[#ffe600] font-bold uppercase mb-1">
              OPERATIONS CASE 01 // SUPERTAILS
            </div>
            <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
              30-Minute Quick Commerce Rollout
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Mapped and cataloged 3,000+ priority SKUs across dark store fulfillment centers in Bengaluru, executing real-time inventory sync and enabling instant delivery with zero launch downtime.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-code">
            <span className="text-emerald-400 font-bold">3,000+ LIVE SKUs</span>
            <span className="text-white/40">BENGALURU</span>
          </div>
        </div>

        {/* Case 2 */}
        <div className="bg-[#0b2418] border border-white/10 hover:border-white/25 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="text-[10px] font-mono-code text-amber-400 font-bold uppercase mb-1">
              SUPPLY CHAIN 02 // SUPERTAILS
            </div>
            <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
              Multi-Warehouse Inbound Logistics
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Structured inbound supply workflows across 40+ fulfillment warehouses, scheduling 6–7 daily consignments and processing 50+ monthly purchase orders to sustain 95% catalogue inventory accuracy.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-code">
            <span className="text-amber-300 font-bold">40+ WAREHOUSES</span>
            <span className="text-white/40">50+ MONTHLY POs</span>
          </div>
        </div>

        {/* Case 3 */}
        <div className="bg-[#0b2418] border border-white/10 hover:border-white/25 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="text-[10px] font-mono-code text-blue-400 font-bold uppercase mb-1">
              ENTERPRISE PROCUREMENT 03 // PRINTO
            </div>
            <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
              Google & Meta B2B Gifting Execution
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Curated and fulfilled 40+ bespoke merchandise packages for premier tech accounts, sourcing 20–30 SKUs across 10+ vetted manufacturers and completing 10,000+ orders on-schedule.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-code">
            <span className="text-blue-300 font-bold">10,000+ ORDERS</span>
            <span className="text-white/40">40+ PACKAGES</span>
          </div>
        </div>

      </div>

    </section>
  );
};
