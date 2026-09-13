import React, { useState } from 'react';
import { ProjectItem } from '../../types';
import { DropshippingMelaShowcase } from './DropshippingMelaShowcase';
import { GigWorkerResearchShowcase } from './GigWorkerResearchShowcase';
import { EasyBillShowcase } from './EasyBillShowcase';
import { ShoppingBag, Receipt, Bike, Sparkles } from 'lucide-react';

interface WorkChapterProps {
  projects: ProjectItem[];
}

export const WorkChapter: React.FC<WorkChapterProps> = () => {
  const [activeTab, setActiveTab] = useState<'mela' | 'easybill' | 'research'>('mela');

  return (
    <section id="work" className="py-8 sm:py-12 px-4 sm:px-8 lg:px-12 border-b border-white/10 relative">
      
      {/* Chapter Label */}
      <div className="flex items-center gap-3 text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-widest mb-3">
        <span className="w-2 h-2 bg-[#ffe600] rounded-sm" />
        <span>//WORK</span>
        <span className="text-white/30 hidden sm:inline">——— 03 // VENTURE PROJECTS, PRODUCTS & FIELD STUDIES</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6 pb-3 border-b border-white/10">
        <h2 className="text-xl sm:text-3xl font-extrabold uppercase font-display tracking-tight text-white">
          VENTURE PROJECTS & FIELD RESEARCH
        </h2>
        <p className="text-xs font-mono-code text-white/60">
          Select an initiative below to explore on-ground retail execution, software, or field studies.
        </p>
      </div>

      {/* Interactive Project Switcher (Keeps page height compact & scannable) */}
      <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-black/40 rounded-2xl border border-white/10 w-fit">
        <button
          onClick={() => setActiveTab('mela')}
          className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase transition-all flex items-center gap-2 ${
            activeTab === 'mela'
              ? 'bg-[#ffe600] text-black shadow-md'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>01 // DROPSHIPPING MELA (₹97K RETAIL)</span>
        </button>

        <button
          onClick={() => setActiveTab('easybill')}
          className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase transition-all flex items-center gap-2 ${
            activeTab === 'easybill'
              ? 'bg-[#ffe600] text-black shadow-md'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <Receipt className="w-3.5 h-3.5" />
          <span>02 // EASY BILL (RETAIL-TECH & POS)</span>
        </button>

        <button
          onClick={() => setActiveTab('research')}
          className={`px-4 py-2 rounded-xl text-xs font-mono-code font-bold uppercase transition-all flex items-center gap-2 ${
            activeTab === 'research'
              ? 'bg-[#ffe600] text-black shadow-md'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <Bike className="w-3.5 h-3.5" />
          <span>03 // GIG WORKER FIELD RESEARCH</span>
        </button>
      </div>

      {/* Render Only the Selected Showcase */}
      <div className="transition-all duration-300">
        {activeTab === 'mela' && <DropshippingMelaShowcase />}
        {activeTab === 'easybill' && <EasyBillShowcase />}
        {activeTab === 'research' && <GigWorkerResearchShowcase />}
      </div>

    </section>
  );
};
