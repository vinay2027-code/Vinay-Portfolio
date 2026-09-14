import React from 'react';
import { Users, Bike, Clock, Compass, FileText, AlertCircle, ArrowUpRight, Award, ShieldAlert } from 'lucide-react';

export const GigWorkerResearchShowcase: React.FC = () => {
  return (
    <div className="bg-[#071911] border-2 border-[#ffe600]/30 rounded-2xl p-5 sm:p-7 mb-2 shadow-2xl relative overflow-hidden">
      
      {/* Decorative Research Strip */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 flex-wrap gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono-code bg-[#ffe600] text-black font-bold uppercase tracking-wider">
            PRIMARY FIELD RESEARCH // ON-GROUND
          </span>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-code bg-white/10 text-white/80">
            QUICK-COMMERCE ECOSYSTEM
          </span>
          <span className="text-xs font-mono-code text-[#ffe600]">
            DELHI NCR // GURUGRAM // 2026
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono-code text-amber-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>WORKFORCE ETHNOGRAPHY & PLATFORM DYNAMICS</span>
        </div>
      </div>

      {/* Main Title & Executive Description */}
      <div className="mb-8">
        <div className="text-xs font-mono-code text-[#DE9B26] uppercase tracking-wider font-bold mb-1">
          OPERATIONS ANALYSIS & WORKFORCE INSIGHTS
        </div>
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
          Gig Worker Research | Field Research & Business Insights
        </h3>
        
        <p className="text-sm sm:text-base text-white/85 font-sans mt-3 max-w-4xl leading-relaxed">
          Conducted primary research with <strong className="text-[#ffe600] font-semibold">gig workers in the quick-commerce ecosystem</strong> to understand their day-to-day challenges, working conditions, earnings, incentives, and operational pain points.
        </p>
        
        <p className="text-sm sm:text-base text-white/75 font-sans mt-2 max-w-4xl leading-relaxed">
          The project involved <strong className="text-white font-semibold">field interactions, structured interviews, and analysis of worker experiences</strong> to identify key insights around <strong className="text-emerald-400 font-semibold">last-mile delivery, platform operations, workforce management, and gig-economy dynamics</strong>.
        </p>
      </div>

      {/* 3 Metric / Analytical Focus Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        
        <div className="bg-black/40 border border-[#ffe600]/30 rounded-2xl p-5">
          <span className="text-[10px] font-mono-code text-[#ffe600] block uppercase font-bold tracking-wider">
            METHODOLOGY
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono-code text-white mt-1.5">
            PRIMARY INTERVIEWS
          </div>
          <span className="text-xs text-white/60 mt-1 block font-mono-code">
            Qualitative on-road structured dialogues & logs
          </span>
        </div>

        <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] font-mono-code text-emerald-400 block uppercase font-bold tracking-wider">
            SECTORS COVERED
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono-code text-white mt-1.5">
            10-MIN Q-COMMERCE
          </div>
          <span className="text-xs text-white/60 mt-1 block font-mono-code">
            Blinkit, Swiggy Instamart & E-Mobility fleets
          </span>
        </div>

        <div className="bg-black/40 border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] font-mono-code text-amber-300 block uppercase font-bold tracking-wider">
            STRATEGIC FOCUS
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono-code text-white mt-1.5">
            LAST-MILE DYNAMICS
          </div>
          <span className="text-xs text-white/60 mt-1 block font-mono-code">
            Earnings, wait times, dark-store ops & churn
          </span>
        </div>

      </div>

      {/* Key Skills & Analytical Pillars (Exact from user prompt) */}
      <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
        <div className="text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-[#ffe600]" />
          <span>KEY SKILLS & FIELD INSIGHTS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 text-xs">
          
          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-code text-[#ffe600] font-bold block uppercase">SKILL 01</span>
              <strong className="text-white text-sm block mt-1">Primary Research</strong>
              <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
                Conducted unmediated field interactions across day and night operational shifts with delivery riders and e-mobility operators.
              </p>
            </div>
          </div>

          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-code text-emerald-400 font-bold block uppercase">SKILL 02</span>
              <strong className="text-white text-sm block mt-1">Data Collection</strong>
              <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
                Captured granular quantitative and qualitative data on hourly trip frequencies, fuel costs, downtime, and payout delays.
              </p>
            </div>
          </div>

          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-code text-amber-300 font-bold block uppercase">SKILL 03</span>
              <strong className="text-white text-sm block mt-1">Worker Insights</strong>
              <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
                Synthesized first-person perspectives regarding incentive threshold stress, dark-store wait bottlenecks, and safety risks.
              </p>
            </div>
          </div>

          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-code text-blue-300 font-bold block uppercase">SKILL 04</span>
              <strong className="text-white text-sm block mt-1">Operations Analysis</strong>
              <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
                Evaluated platform routing algorithms, dark-store queue congestion, and the trade-offs of hyper-fast 10-minute delivery SLAs.
              </p>
            </div>
          </div>

          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-code text-purple-300 font-bold block uppercase">SKILL 05</span>
              <strong className="text-white text-sm block mt-1">Problem Solving</strong>
              <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
                Developed strategic recommendations on dynamic waiting incentives, partner rest hubs, and balanced dispatch quotas.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
