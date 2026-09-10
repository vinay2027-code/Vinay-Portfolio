import React from 'react';
import { Trophy, Medal, Award, GraduationCap, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ATHLETIC_HONORS, EDUCATION_DATA, CERTIFICATIONS } from '../../data/portfolioData';

export const InfluenceChapter: React.FC = () => {
  return (
    <section id="influence" className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 border-b border-white/10 relative">
      
      {/* Chapter Label */}
      <div className="flex items-center gap-3 text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-widest mb-3">
        <span className="w-2 h-2 bg-[#ffe600] rounded-sm" />
        <span>//INFLUENCE</span>
        <span className="text-white/30 hidden sm:inline">——— 04 // HONORS, ATHLETICS & ACADEMIC SCHOLARSHIPS</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-10 pb-4 border-b border-white/10">
        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-display tracking-tight text-white">
          HONORS, SPRINT PODIUMS & SCHOLARSHIP
        </h2>
        <p className="text-xs sm:text-sm font-mono-code text-white/60 max-w-md">
          Championship sprint discipline, academic leadership merit, and continuous analytical certifications.
        </p>
      </div>

      {/* Grid of Receipt Paper Cards matching atulkhola.com */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Receipt 1: Athletic Sprint Honors */}
        <div className="receipt-paper rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono-code text-neutral-500 pb-3 border-b border-neutral-300 mb-4">
              <span className="font-bold text-neutral-800">love when we run!</span>
              <span className="px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 font-bold">04 PODIUMS</span>
            </div>

            <h3 className="text-xl font-black font-display uppercase tracking-tight text-neutral-900 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-600" />
              <span>Sprint Championships</span>
            </h3>

            <ol className="space-y-3.5 text-xs font-mono-code text-neutral-700">
              <li className="pb-2.5 border-b border-neutral-200 flex items-start justify-between gap-2">
                <div>
                  <strong className="text-neutral-900 block">District Gold Medal // 200m</strong>
                  <span className="text-[10px] text-neutral-500">1st Place out of 70+ sprinters</span>
                </div>
                <span className="text-amber-600 font-bold">GOLD</span>
              </li>

              <li className="pb-2.5 border-b border-neutral-200 flex items-start justify-between gap-2">
                <div>
                  <strong className="text-neutral-900 block">District Gold Medal // 100m</strong>
                  <span className="text-[10px] text-neutral-500">Individual champion, state track</span>
                </div>
                <span className="text-amber-600 font-bold">GOLD</span>
              </li>

              <li className="pb-2.5 border-b border-neutral-200 flex items-start justify-between gap-2">
                <div>
                  <strong className="text-neutral-900 block">Khelo India University Games</strong>
                  <span className="text-[10px] text-neutral-500">Qualified state sprinter</span>
                </div>
                <span className="text-emerald-700 font-bold">QUAL</span>
              </li>

              <li className="flex items-start justify-between gap-2">
                <div>
                  <strong className="text-neutral-900 block">State 400m Silver Medal</strong>
                  <span className="text-[10px] text-neutral-500">4-year consecutive champion</span>
                </div>
                <span className="text-neutral-600 font-bold">SILVER</span>
              </li>
            </ol>
          </div>

          <div className="pt-4 mt-4 border-t border-dashed border-neutral-300 text-[10px] font-mono-code text-neutral-500 flex items-center justify-between">
            <span>KARNATAKA ATHLETICS</span>
            <span className="font-bold text-neutral-800">STATE RECORD</span>
          </div>
        </div>

        {/* Receipt 2: Academic Degrees & Scholarships */}
        <div className="receipt-paper rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono-code text-neutral-500 pb-3 border-b border-neutral-300 mb-4">
              <span className="font-bold text-neutral-800">academic merit!</span>
              <span className="px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 font-bold">SCHOLAR</span>
            </div>

            <h3 className="text-xl font-black font-display uppercase tracking-tight text-neutral-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-700" />
              <span>Education & Merit</span>
            </h3>

            <ol className="space-y-3.5 text-xs font-mono-code text-neutral-700">
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

          <div className="pt-4 mt-4 border-t border-dashed border-neutral-300 text-[10px] font-mono-code text-neutral-500 flex items-center justify-between">
            <span>VERIFIED CREDENTIALS</span>
            <span className="font-bold text-emerald-800">HONORS</span>
          </div>
        </div>

        {/* Receipt 3: Technical Certifications */}
        <div className="receipt-paper rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono-code text-neutral-500 pb-3 border-b border-neutral-300 mb-4">
              <span className="font-bold text-neutral-800">tools & data!</span>
              <span className="px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 font-bold">CERTIFIED</span>
            </div>

            <h3 className="text-xl font-black font-display uppercase tracking-tight text-neutral-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-700" />
              <span>Certifications & Skills</span>
            </h3>

            <ol className="space-y-3.5 text-xs font-mono-code text-neutral-700">
              <li className="pb-2.5 border-b border-neutral-200">
                <strong className="text-neutral-900 block">Google Data Analytics</strong>
                <span className="text-[10px] text-neutral-600">SQL, Spreadsheets, Data Viz & R Programming</span>
              </li>

              <li className="pb-2.5 border-b border-neutral-200">
                <strong className="text-neutral-900 block">Advanced Excel for Business</strong>
                <span className="text-[10px] text-neutral-600">Macquarie University // VLOOKUP, Power Query, Macros</span>
              </li>

              <li className="pb-2.5 border-b border-neutral-200">
                <strong className="text-neutral-900 block">Supply Chain & WMS Systems</strong>
                <span className="text-[10px] text-neutral-600">40+ Warehouse Inbound, Purchase Orders & Dark Stores</span>
              </li>

              <li>
                <strong className="text-neutral-900 block">Power BI & Business Modeling</strong>
                <span className="text-[10px] text-neutral-600">Executive Dashboards & KPI Monitoring</span>
              </li>
            </ol>
          </div>

          <div className="pt-4 mt-4 border-t border-dashed border-neutral-300 text-[10px] font-mono-code text-neutral-500 flex items-center justify-between">
            <span>DATA-DRIVEN DECISIONS</span>
            <span className="font-bold text-blue-800">ANALYTICS</span>
          </div>
        </div>

      </div>

    </section>
  );
};
