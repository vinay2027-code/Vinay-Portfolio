import React, { useState } from 'react';
import { 
  ArrowRight, 
  Flame, 
  Zap, 
  Heart, 
  Timer, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Share2, 
  Download 
} from 'lucide-react';
import { InfoBadge, ColorwayBand } from '../types';

interface CampaignDetailsProps {
  badges: InfoBadge[];
  colorway: ColorwayBand;
}

export const CampaignDetails: React.FC<CampaignDetailsProps> = ({
  badges,
  colorway
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  const mutedPalette = [
    {
      name: 'Forest Green',
      hex: '#193426',
      role: 'Endurance Grounding / Technical Substrate',
      bgClass: 'bg-[#193426]',
      textClass: 'text-[#DE9B26]'
    },
    {
      name: 'Mustard Yellow',
      hex: '#DE9B26',
      role: 'High-Output Velocity Band / Kinetic Impulse',
      bgClass: 'bg-[#DE9B26]',
      textClass: 'text-[#193426]'
    },
    {
      name: 'Burnt Orange',
      hex: '#C84E29',
      role: 'Cardiac Threshold / Maximum Acceleration',
      bgClass: 'bg-[#C84E29]',
      textClass: 'text-white'
    },
    {
      name: 'Off-White',
      hex: '#F6F5F0',
      role: 'Swiss Typographic Clarity / Negative Space',
      bgClass: 'bg-[#F6F5F0]',
      textClass: 'text-[#121417]'
    }
  ];

  return (
    <section 
      id="editorial-manifesto-section"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#F6F5F0]"
    >
      {/* Structural Thin Rule */}
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[10px] font-mono-code tracking-[0.25em] text-[#DE9B26] uppercase font-bold">
          [ 02 // EDITORIAL MANIFESTO ]
        </span>
        <div className="h-px flex-1 bg-white/15" />
        <span className="text-[10px] font-mono-code tracking-widest text-neutral-500 uppercase">
          SS-26 LAB SPECIFICATION
        </span>
      </div>

      {/* Grid: Manifesto Copy & Performance Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14">
        
        {/* Left Col: Bold Editorial Statement */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight font-display text-white leading-[1.05]">
            ENGINEERED FOR <span className="text-[#DE9B26]">UNRESTRICTED</span> KINETIC VELOCITY.
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            Rooted in brutalist Swiss typography and high-performance biomechanics, 
            the <span className="text-white font-semibold">SS-26 Athletic Campaign</span> marries 
            oversized display weight with surgical athletic isolation. We treat human acceleration 
            not merely as sport, but as an uncompromising architectural discipline.
          </p>

          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono-code text-[#DE9B26]">
                0.70H
              </div>
              <p className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-400 mt-1">
                Display Type Ratio
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono-code text-[#C84E29]">
                52 / 48
              </div>
              <p className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-400 mt-1">
                Color Band Split
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-mono-code text-white">
                1000 HZ
              </div>
              <p className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-400 mt-1">
                Telemetry Capture
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Muted Palette Architecture Card */}
        <div className="lg:col-span-5 bg-[#181A1F] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-mono-code uppercase tracking-[0.2em] text-[#DE9B26] font-bold">
                COLOR BLOCK MATRIX
              </span>
              <span className="text-[10px] font-mono-code text-neutral-400">
                MUTED PALETTE 4.0
              </span>
            </div>

            <div className="space-y-3.5">
              {mutedPalette.map((color) => (
                <div 
                  key={color.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span 
                      className={`w-8 h-8 rounded-lg shadow-md shrink-0 border border-black/20 ${color.bgClass}`} 
                    />
                    <div>
                      <div className="text-xs font-bold font-sans text-white uppercase tracking-wide">
                        {color.name}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono-code">
                        {color.role}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono-code text-neutral-300 font-semibold px-2 py-1 rounded bg-black/30">
                    {color.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono-code text-neutral-400 flex items-center justify-between">
            <span>GRID HARMONY: 100% WCAG AA</span>
            <span className="text-emerald-400">OPTIMIZED CONTRAST</span>
          </div>
        </div>

      </div>

      {/* Scattered Telemetry Cards Breakdown */}
      <div className="mt-16 pt-12 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-mono-code tracking-[0.24em] text-[#DE9B26] uppercase font-bold">
              [ TELEMETRY CHIPS ARCHIVE ]
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight font-display text-white mt-1">
              SCATTERED INFO BADGES IN FOCUS
            </h3>
          </div>
          <span className="text-xs font-mono-code text-neutral-400">
            RECORDED DURING 400M VELOCITY TESTS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div 
              key={b.id}
              className="bg-[#181A1F] border border-white/10 hover:border-[#DE9B26]/40 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-mono-code uppercase tracking-wider text-neutral-400">
                  REF: {b.id.toUpperCase()}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#DE9B26] group-hover:scale-125 transition-transform" />
              </div>
              <div className="text-2xl font-black font-mono-code text-white group-hover:text-[#DE9B26] transition-colors">
                {b.value}
              </div>
              <div className="text-xs font-bold text-neutral-300 uppercase tracking-wide mt-1">
                {b.category}
              </div>
              <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
                {b.subtext || 'Dynamic biometric sensor output.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Reservation Banner */}
      <div className="mt-16 bg-gradient-to-r from-[#193426] via-[#1E2024] to-[#2A2D34] border border-white/15 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#DE9B26]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-widest bg-[#DE9B26] text-[#121417] mb-4">
            <Sparkles className="w-3 h-3" />
            LIMITED POSTER RUN & APPAREL DROP
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display uppercase tracking-tight text-white leading-tight">
            CLAIM THE ARCHIVAL POSTER & SS-26 SPEEDSUIT
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base mt-2 leading-relaxed">
            Printed on 320gsm archival cotton rag with dual-layer spot varnish over the color bands. 
            Numbered edition limited to 500 physical pressings worldwide.
          </p>

          <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL FOR EARLY ACCESS..."
              className="bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-sm font-mono-code text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#DE9B26] flex-1"
            />
            <button
              type="submit"
              className="bg-[#DE9B26] hover:bg-[#eab03e] text-[#121417] font-bold font-mono-code px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform active:scale-95 shrink-0"
            >
              <span>RESERVE DROP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {submitted && (
            <div className="mt-3 flex items-center gap-2 text-xs font-mono-code text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>CONFIRMED: VIP ACCESS CODE DISPATCHED.</span>
            </div>
          )}
        </div>
      </div>

      {/* Technical Editorial Colophon */}
      <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-neutral-500">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#DE9B26] inline-block" />
          <span>STRYDE ATHLETICS © 2026</span>
          <span>//</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
        <div className="flex items-center gap-6">
          <span>PRINT RUN: 500 COPIES</span>
          <span>SWISS GRID ARCHITECTURE</span>
          <span>CURATED EDITORIAL</span>
        </div>
      </footer>
    </section>
  );
};
