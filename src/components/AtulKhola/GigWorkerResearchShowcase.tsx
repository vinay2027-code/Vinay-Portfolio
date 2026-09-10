import React, { useState, useRef } from 'react';
import { Users, Bike, Clock, Compass, FileText, Upload, Sparkles, AlertCircle, ArrowUpRight, Award, ShieldAlert, CheckCircle } from 'lucide-react';

export const GigWorkerResearchShowcase: React.FC = () => {
  // Stored field photos state with localStorage persistence
  const [photos, setPhotos] = useState<{
    blinkitPhoto: string | null;
    autoPhoto: string | null;
    deliveryPhoto: string | null;
  }>(() => {
    try {
      const saved = localStorage.getItem('vinay_gig_worker_research_photos');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not load gig worker photos from storage', e);
    }
    return { blinkitPhoto: null, autoPhoto: null, deliveryPhoto: null };
  });

  const blinkitInputRef = useRef<HTMLInputElement>(null);
  const autoInputRef = useRef<HTMLInputElement>(null);
  const deliveryInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (file: File, slot: 'blinkit' | 'auto' | 'delivery') => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      const updated = {
        ...photos,
        [slot === 'blinkit' ? 'blinkitPhoto' : slot === 'auto' ? 'autoPhoto' : 'deliveryPhoto']: result
      };
      setPhotos(updated);
      try {
        localStorage.setItem('vinay_gig_worker_research_photos', JSON.stringify(updated));
      } catch (err) {
        console.warn('Storage quota exceeded', err);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-[#071911] border-2 border-[#ffe600]/30 rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl relative overflow-hidden">
      
      {/* Hidden file inputs for direct upload / drag & drop */}
      <input 
        ref={blinkitInputRef} 
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={(e) => {
          if (e.target.files?.[0]) handleUpload(e.target.files[0], 'blinkit');
        }} 
      />
      <input 
        ref={autoInputRef} 
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={(e) => {
          if (e.target.files?.[0]) handleUpload(e.target.files[0], 'auto');
        }} 
      />
      <input 
        ref={deliveryInputRef} 
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={(e) => {
          if (e.target.files?.[0]) handleUpload(e.target.files[0], 'delivery');
        }} 
      />

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

      {/* 3 Interactive Photo Slots for Field Photos */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>FIELD RESEARCH ARCHIVE // ON-GROUND WORKER INTERACTIONS</span>
          </div>
          <span className="text-[10px] font-mono-code text-white/50">
            Click or drag photos to upload field artifacts
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Slot 1: Blinkit Night Delivery Interview */}
          <div 
            onClick={() => blinkitInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.dataTransfer.files?.[0]) handleUpload(e.dataTransfer.files[0], 'blinkit');
            }}
            className="group relative bg-[#05140b] border border-white/15 hover:border-[#ffe600] rounded-2xl p-4 transition-all cursor-pointer shadow-lg flex flex-col justify-between"
          >
            <div className="absolute -top-2.5 left-6 px-2.5 py-0.5 bg-[#f3e7be]/95 border border-black/10 shadow-sm text-[8px] font-mono-code text-black font-bold transform -rotate-1 z-10">
              BLINKIT BISTRO // NIGHT LOGS
            </div>

            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-3 flex items-center justify-center">
              {photos.blinkitPhoto ? (
                <img 
                  src={photos.blinkitPhoto} 
                  alt="Vinay interviewing Blinkit delivery partner at night" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#ffe600]/10 border border-[#ffe600]/30 flex items-center justify-center text-[#ffe600] mb-2.5 group-hover:scale-110 transition-transform">
                    <Bike className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono-code font-bold text-white uppercase tracking-wide">
                    Night Rider Interview
                  </span>
                  <span className="text-[10px] text-white/60 font-mono-code mt-1 max-w-xs">
                    Blinkit Bistro partner interaction & field notepad
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono-code font-bold">
                <span className="bg-black/85 px-3 py-1.5 rounded-lg border border-white/20">
                  {photos.blinkitPhoto ? 'Change Photo' : 'Upload Field Photo'}
                </span>
              </div>
            </div>

            <div className="text-xs font-mono-code">
              <span className="font-bold text-white block">NIGHT SHIFT DELIVERY</span>
              <span className="text-[10px] text-white/50">Earnings, fuel burn & night surge incentives</span>
            </div>
          </div>

          {/* Slot 2: E-Mobility Auto Driver Interview */}
          <div 
            onClick={() => autoInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.dataTransfer.files?.[0]) handleUpload(e.dataTransfer.files[0], 'auto');
            }}
            className="group relative bg-[#05140b] border border-white/15 hover:border-[#ffe600] rounded-2xl p-4 transition-all cursor-pointer shadow-lg flex flex-col justify-between"
          >
            <div className="absolute -top-2.5 left-6 px-2.5 py-0.5 bg-[#f3e7be]/95 border border-black/10 shadow-sm text-[8px] font-mono-code text-black font-bold transform rotate-1 z-10">
              E-MOBILITY // COMMUTE FLEET
            </div>

            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-3 flex items-center justify-center">
              {photos.autoPhoto ? (
                <img 
                  src={photos.autoPhoto} 
                  alt="Vinay interviewing electric auto driver" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-2.5 group-hover:scale-110 transition-transform">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono-code font-bold text-white uppercase tracking-wide">
                    Electric Auto Dialogue
                  </span>
                  <span className="text-[10px] text-white/60 font-mono-code mt-1 max-w-xs">
                    In-vehicle ride-along & vehicle leasing insights
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono-code font-bold">
                <span className="bg-black/85 px-3 py-1.5 rounded-lg border border-white/20">
                  {photos.autoPhoto ? 'Change Photo' : 'Upload Field Photo'}
                </span>
              </div>
            </div>

            <div className="text-xs font-mono-code">
              <span className="font-bold text-white block">E-MOBILITY & DAILY COMMUTE</span>
              <span className="text-[10px] text-white/50">Daily shifts, charging downtime & ride hailing</span>
            </div>
          </div>

          {/* Slot 3: Day Quick-Commerce Drop Interview */}
          <div 
            onClick={() => deliveryInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.dataTransfer.files?.[0]) handleUpload(e.dataTransfer.files[0], 'delivery');
            }}
            className="group relative bg-[#05140b] border border-white/15 hover:border-[#ffe600] rounded-2xl p-4 transition-all cursor-pointer shadow-lg flex flex-col justify-between"
          >
            <div className="absolute -top-2.5 left-6 px-2.5 py-0.5 bg-[#f3e7be]/95 border border-black/10 shadow-sm text-[8px] font-mono-code text-black font-bold transform -rotate-1 z-10">
              LAST-MILE DROP // SWIGGY / Q-COMMERCE
            </div>

            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-3 flex items-center justify-center">
              {photos.deliveryPhoto ? (
                <img 
                  src={photos.deliveryPhoto} 
                  alt="Vinay with daytime quick-commerce delivery partner" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-2.5 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono-code font-bold text-white uppercase tracking-wide">
                    Delivery Partner Interaction
                  </span>
                  <span className="text-[10px] text-white/60 font-mono-code mt-1 max-w-xs">
                    Package drop-off, dispatch SLAs & fatigue
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono-code font-bold">
                <span className="bg-black/85 px-3 py-1.5 rounded-lg border border-white/20">
                  {photos.deliveryPhoto ? 'Change Photo' : 'Upload Field Photo'}
                </span>
              </div>
            </div>

            <div className="text-xs font-mono-code">
              <span className="font-bold text-white block">PACKAGE DISPATCH & SLAs</span>
              <span className="text-[10px] text-white/50">Order acceptance speed, returns & customer ratings</span>
            </div>
          </div>

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
