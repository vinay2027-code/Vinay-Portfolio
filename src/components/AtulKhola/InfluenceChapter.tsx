import React from 'react';
import { Trophy, Medal, Award, GraduationCap, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ATHLETIC_HONORS, EDUCATION_DATA, CERTIFICATIONS } from '../../data/portfolioData';

export const InfluenceChapter: React.FC = () => {
  return (
    <section id="influence" className="py-8 sm:py-12 px-4 sm:px-8 lg:px-12 border-b border-white/10 relative">
      
      {/* Chapter Label */}
      <div className="flex items-center gap-3 text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-widest mb-3">
        <span className="w-2 h-2 bg-[#ffe600] rounded-sm" />
        <span>//INFLUENCE</span>
        <span className="text-white/30 hidden sm:inline">——— 04 // HONORS, ATHLETICS & ACADEMIC SCHOLARSHIPS</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6 pb-3 border-b border-white/10">
        <h2 className="text-xl sm:text-3xl font-extrabold uppercase font-display tracking-tight text-white">
          HONORS, SPRINT PODIUMS & SCHOLARSHIPS
        </h2>
        <p className="text-xs font-mono-code text-white/60">
          Championship sprint discipline, academic leadership merit, and continuous analytical certifications.
        </p>
      </div>

      {/* Grid of Receipt Paper Cards matching atulkhola.com */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Receipt 1: Athletic Sprint Honors */}
        <div className="receipt-paper rounded-lg p-5 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between text-xs font-mono-code text-neutral-500 pb-2 border-b border-neutral-300 mb-3">
              <span className="font-bold text-neutral-800">track honors!</span>
              <span className="px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 font-bold text-[10px]">04 PODIUMS</span>
            </div>

            <h3 className="text-lg font-black font-display uppercase tracking-tight text-neutral-900 mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>Sprint Championships</span>
            </h3>

            <ol className="space-y-2.5 text-xs font-mono-code text-neutral-700">
              <li className="pb-2 border-b border-neutral-200 flex items-start justify-between gap-2">
                <div>
                  <strong className="text-neutral-900 block">District Gold Medal // 200m</strong>
                  <span className="text-[10px] text-neutral-500">1st Place out of 70+ sprinters</span>
                </div>
                <span className="text-amber-600 font-bold">GOLD</span>
              </li>

              <li className="pb-2 border-b border-neutral-200 flex items-start justify-between gap-2">
                <div>
                  <strong className="text-neutral-900 block">District Gold Medal // 100m</strong>
                  <span className="text-[10px] text-neutral-500">Individual champion, state track</span>
                </div>
                <span className="text-amber-600 font-bold">GOLD</span>
              </li>

              <li className="pb-2 border-b border-neutral-200 flex items-start justify-between gap-2">
                <div>
                  <strong className="text-neutral-900 block">Khelo India School Games</strong>
                  <span className="text-[10px] text-neutral-500">Qualified state sprinter</span>
                </div>
                <span className="text-emerald-700 font-bold">QUAL</span>
              </li>

              <li className="flex items-start justify-between gap-2">
                <div>
                  <strong className="text-neutral-900 block">Karnataka State Silver Medal // 400m</strong>
                  <span className="text-[10px] text-neutral-500">Karnataka State School Olympics, 2nd out of 52+ sprinters</span>
                </div>
                <span className="text-slate-600 font-bold">SILVER</span>
              </li>
            </ol>
          </div>

          <div className="pt-3 mt-3 border-t border-dashed border-neutral-300 text-[10px] font-mono-code text-neutral-500 flex items-center justify-between">
            <span>KARNATAKA ATHLETICS</span>
            <span className="font-bold text-neutral-800">STATE RECORD</span>
          </div>
        </div>

        {/* Receipt 2: Academic Degrees & Scholarships */}
        <div className="receipt-paper rounded-lg p-5 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between text-xs font-mono-code text-neutral-500 pb-2 border-b border-neutral-300 mb-3">
              <span className="font-bold text-neutral-800">academic merit!</span>
              <span className="px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 font-bold text-[10px]">SCHOLAR</span>
            </div>

            <h3 className="text-lg font-black font-display uppercase tracking-tight text-neutral-900 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              <span>Education & Merit</span>
            </h3>

            <ol className="space-y-3 text-xs font-mono-code text-neutral-700">
              <li className="pb-2.5 border-b border-neutral-200">
                <strong className="text-neutral-900 block">Masters’ Union</strong>
                <span className="text-[11px] text-emerald-800 font-bold block">PGP in Sports Management & Gaming</span>
                <span className="text-[10px] text-neutral-600">20% Pankaj Bansal Scholarship for Young Leaders (2026)</span>
              </li>

              <li>
                <strong className="text-neutral-900 block">Jain University</strong>
                <span className="text-[11px] text-neutral-800 font-bold block">BMS in International Business</span>
                <span className="text-[10px] text-neutral-600">CGPA 8.5/10 // Class Representative & Club Lead</span>
              </li>
            </ol>
          </div>

          <div className="pt-3 mt-3 border-t border-dashed border-neutral-300 text-[10px] font-mono-code text-neutral-500 flex items-center justify-between">
            <span>VERIFIED CREDENTIALS</span>
            <span className="font-bold text-emerald-800">HONORS</span>
          </div>
        </div>

        {/* Receipt 3: Technical Certifications */}
        <div className="receipt-paper rounded-lg p-5 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between text-xs font-mono-code text-neutral-500 pb-2 border-b border-neutral-300 mb-3">
              <span className="font-bold text-neutral-800">tools & data!</span>
              <span className="px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 font-bold text-[10px]">CERTIFIED</span>
            </div>

            <h3 className="text-lg font-black font-display uppercase tracking-tight text-neutral-900 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-700" />
              <span>Certifications & Skills</span>
            </h3>

            <ol className="space-y-2 text-xs font-mono-code text-neutral-700">
              <li className="pb-1.5 border-b border-neutral-200">
                <strong className="text-neutral-900 block">Google Data Analytics</strong>
                <span className="text-[10px] text-neutral-600">SQL, Spreadsheets, Data Viz & R Programming</span>
              </li>

              <li className="pb-1.5 border-b border-neutral-200">
                <strong className="text-neutral-900 block">Advanced Excel for Business</strong>
                <span className="text-[10px] text-neutral-600">Macquarie University // VLOOKUP, Power Query, Macros</span>
              </li>

              <li className="pb-1.5 border-b border-neutral-200">
                <strong className="text-neutral-900 block">Supply Chain & WMS Systems</strong>
                <span className="text-[10px] text-neutral-600">40+ Warehouse Inbound, POs & Dark Stores</span>
              </li>

              <li>
                <strong className="text-neutral-900 block">Power BI & Business Modeling</strong>
                <span className="text-[10px] text-neutral-600">Executive Dashboards & KPI Monitoring</span>
              </li>
            </ol>
          </div>

          <div className="pt-3 mt-3 border-t border-dashed border-neutral-300 text-[10px] font-mono-code text-neutral-500 flex items-center justify-between">
            <span>DATA-DRIVEN DECISIONS</span>
            <span className="font-bold text-blue-800">ANALYTICS</span>
          </div>
        </div>

      </div>

    </section>
  );
};
