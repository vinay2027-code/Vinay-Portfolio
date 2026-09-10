import React from 'react';
import { Boxes, Timer, TrendingUp, Trophy, ArrowUpRight } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  return (
    <section className="bg-[#0A0C10] border-b border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Metric 1 */}
          <div className="border-l-2 border-[#DE9B26] pl-4 sm:pl-5">
            <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-neutral-400 uppercase">
              <Boxes className="w-3.5 h-3.5 text-[#DE9B26]" />
              <span>CATALOGUE OPERATIONS</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono-code text-white mt-1">
              20,000+
            </div>
            <div className="text-xs font-semibold text-emerald-400 mt-0.5">
              95% ACCURACY RATE
            </div>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              Managed cataloging across 20+ top FMCG brands including Mars, Nestlé, and Royal Canin.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="border-l-2 border-emerald-400 pl-4 sm:pl-5">
            <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-neutral-400 uppercase">
              <Timer className="w-3.5 h-3.5 text-emerald-400" />
              <span>QUICK COMMERCE</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono-code text-white mt-1">
              30-MIN
            </div>
            <div className="text-xs font-semibold text-neutral-300 mt-0.5">
              3,000+ ACTIVE SKUs LIVE
            </div>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              Led catalogue operations for Supertails' instant delivery rollout across Bengaluru hubs.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="border-l-2 border-amber-400 pl-4 sm:pl-5">
            <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-neutral-400 uppercase">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span>SPORTS RESEARCH</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono-code text-white mt-1">
              $1.93B
            </div>
            <div className="text-xs font-semibold text-[#DE9B26] mt-0.5">
              16.2% CAGR BY 2029
            </div>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              Analyzed India's USD 673M sports merchandise sector across 500+ consumer respondents.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="border-l-2 border-rose-400 pl-4 sm:pl-5">
            <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-neutral-400 uppercase">
              <Trophy className="w-3.5 h-3.5 text-rose-400" />
              <span>SPRINT ATHLETICS</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono-code text-white mt-1">
              GOLD
            </div>
            <div className="text-xs font-semibold text-rose-300 mt-0.5">
              1ST OUT OF 70+ SPRINTERS
            </div>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              District Gold in 200m & 100m, Khelo India Qualifier, State Silver in 400m.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
