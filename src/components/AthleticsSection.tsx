import React from 'react';
import { Trophy, Medal, Flame, Zap, Award, CheckCircle2 } from 'lucide-react';
import { ATHLETIC_HONORS } from '../data/portfolioData';

export const AthleticsSection: React.FC = () => {
  return (
    <section id="athletics-record" className="py-16 sm:py-20 bg-[#0E1015] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono-code uppercase tracking-[0.2em] text-amber-400 font-bold mb-1.5">
              <Trophy className="w-3.5 h-3.5" />
              <span>HIGH-PERFORMANCE RECORD // TRACK & FIELD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
              ATHLETIC CHAMPIONSHIP & LEADERSHIP
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans">
            Competitive sprinting instills split-second decision-making, relentless mental resilience, and high-cadence operational execution.
          </p>
        </div>

        {/* 4 Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ATHLETIC_HONORS.map((ath, idx) => (
            <div 
              key={ath.id}
              className="bg-[#14171F] border border-white/10 hover:border-amber-400/40 rounded-2xl p-6 relative overflow-hidden group transition-all flex flex-col justify-between"
            >
              {/* Top Medal Badge */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono-code mb-3">
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Medal className="w-3.5 h-3.5" />
                    PODIUM 0{idx + 1}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/10">
                    SPRINT
                  </span>
                </div>

                <div className="text-sm font-bold text-neutral-400 uppercase tracking-wide">
                  {ath.event}
                </div>

                <div className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white mt-1 text-amber-300">
                  {ath.result}
                </div>

                <div className="text-xs font-semibold text-neutral-200 mt-3 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  {ath.scope}
                </div>

                <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed">
                  {ath.detail}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-neutral-400">
                <span>STATE & DISTRICT</span>
                <span className="text-amber-400 font-bold">VERIFIED PODIUM</span>
              </div>
            </div>
          ))}
        </div>

        {/* Athletic Philosophy Callout */}
        <div className="mt-10 bg-gradient-to-r from-[#181C24] via-[#14171F] to-[#181C24] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#DE9B26] font-bold">
              THE ATHLETE-OPERATOR INTERSECTION
            </span>
            <h4 className="text-lg font-bold font-display uppercase text-white">
              Why Sprint Discipline Drives Quick Commerce Mastery
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Managing 30-minute delivery SLAs, coordinating 40+ warehouse inbound shipments, and resolving disaster recovery in 7 days demands the same intensity, anaerobic focus, and zero-defect precision as accelerating out of the sprint starting blocks.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="text-center px-4 py-2 rounded-xl bg-black/40 border border-white/10">
              <div className="text-lg font-black font-mono-code text-amber-400">100M / 200M</div>
              <div className="text-[10px] font-mono-code text-neutral-400">DISTRICT CHAMP</div>
            </div>
            <div className="text-center px-4 py-2 rounded-xl bg-black/40 border border-white/10">
              <div className="text-lg font-black font-mono-code text-emerald-400">KHELO INDIA</div>
              <div className="text-[10px] font-mono-code text-neutral-400">QUALIFIED RUNNER</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
