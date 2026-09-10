import React, { useState, useRef, useEffect } from 'react';
import { InteractiveMark } from './InteractiveMark';
import { TrendingUp, Users, ShoppingBag, Sparkles, Upload, Image as ImageIcon, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

interface DropshippingMelaShowcaseProps {
  onOpenPhotoModal?: () => void;
}

export const DropshippingMelaShowcase: React.FC<DropshippingMelaShowcaseProps> = () => {
  // Stored photos state from localStorage
  const [photos, setPhotos] = useState<{ stallPhoto: string | null; teamPhoto: string | null }>(() => {
    try {
      const saved = localStorage.getItem('vinay_dropshipping_mela_photos');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read mela photos from storage', e);
    }
    return { stallPhoto: null, teamPhoto: null };
  });

  const [activeSlot, setActiveSlot] = useState<'stall' | 'team' | null>(null);
  const stallInputRef = useRef<HTMLInputElement>(null);
  const teamInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (file: File, slot: 'stall' | 'team') => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      const updated = {
        ...photos,
        [slot === 'stall' ? 'stallPhoto' : 'teamPhoto']: result
      };
      setPhotos(updated);
      try {
        localStorage.setItem('vinay_dropshipping_mela_photos', JSON.stringify(updated));
      } catch (err) {
        console.warn('Storage quota error', err);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-[#081b12] border-2 border-[#ffe600]/40 rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl relative overflow-hidden">
      
      {/* Hidden file inputs for direct drop or click */}
      <input 
        ref={stallInputRef} 
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={(e) => {
          if (e.target.files?.[0]) handleUpload(e.target.files[0], 'stall');
        }} 
      />
      <input 
        ref={teamInputRef} 
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={(e) => {
          if (e.target.files?.[0]) handleUpload(e.target.files[0], 'team');
        }} 
      />

      {/* Decorative Bunting Header Stripe */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 flex-wrap gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono-code bg-[#ffe600] text-black font-bold uppercase tracking-wider">
            VENTURE CREATION // ON-GROUND RETAIL
          </span>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-code bg-white/10 text-white/80">
            MASTERS' UNION
          </span>
          <span className="text-xs font-mono-code text-[#ffe600]">
            DLF CYBERHUB // GURUGRAM // 1-DAY POP-UP
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>TAARA LIVE ACTIVATION</span>
        </div>
      </div>

      {/* Main Title & Brand Tagline */}
      <div className="mb-8">
        <div className="text-xs font-mono-code text-[#DE9B26] uppercase tracking-wider font-bold mb-1">
          RETAIL INNOVATION & LIVE COMMERCE
        </div>
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
          Dropshipping Mela | Sales & Entrepreneurship
        </h3>
        <p className="text-sm sm:text-base text-white/80 font-sans mt-3 max-w-4xl leading-relaxed">
          Led the on-ground sales and marketing of a crystal & gemstone brand at DLF CyberHub, generating{' '}
          <strong className="text-[#ffe600] font-bold">₹97,000 in revenue in a single day</strong>. The experience strengthened my skills in{' '}
          <strong className="text-white font-semibold">sales, customer engagement, marketing, teamwork, and real-time business decision-making</strong>.
        </p>
      </div>

      {/* Key Achievements Metric Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        
        {/* Metric 1: Revenue */}
        <div className="bg-black/50 border border-[#ffe600]/30 rounded-2xl p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffe600]/10 rounded-full blur-2xl pointer-events-none" />
          <span className="text-[10px] font-mono-code text-[#ffe600] block uppercase font-bold tracking-wider">
            KEY ACHIEVEMENT // 1-DAY REVENUE
          </span>
          <div className="text-3xl sm:text-4xl font-black font-mono-code text-[#ffe600] mt-1.5 flex items-baseline gap-1">
            ₹97,000
          </div>
          <span className="text-xs text-white/70 mt-1 block font-mono-code">
            Single-day on-ground sales record
          </span>
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono-code text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>High-Velocity Conversion Rate</span>
          </div>
        </div>

        {/* Metric 2: High Footfall */}
        <div className="bg-black/50 border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] font-mono-code text-emerald-400 block uppercase font-bold tracking-wider">
            RETAIL ENVIRONMENT
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono-code text-white mt-1.5">
            HIGH-FOOTFALL
          </div>
          <span className="text-xs text-white/70 mt-1 block font-mono-code">
            DLF CyberHub Central Corridor
          </span>
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono-code text-white/60">
            <Users className="w-3.5 h-3.5 text-[#ffe600]" />
            <span>Corporate & Retail Shopper Density</span>
          </div>
        </div>

        {/* Metric 3: End to End */}
        <div className="bg-black/50 border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] font-mono-code text-amber-300 block uppercase font-bold tracking-wider">
            EXECUTION SCOPE
          </span>
          <div className="text-2xl sm:text-3xl font-black font-mono-code text-white mt-1.5">
            END-TO-END
          </div>
          <span className="text-xs text-white/70 mt-1 block font-mono-code">
            Sales, Marketing & Live Inventory
          </span>
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono-code text-[#ffe600]">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Booth Styling, Pitch & UPI Checkout</span>
          </div>
        </div>

      </div>

      {/* Two Polaroid Photo Showcase Cards for the Event */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>ON-GROUND EVENT ARCHIVE // DLF CYBERHUB BOOTH & TEAM</span>
          </div>
          <span className="text-[10px] font-mono-code text-white/50">
            Click any frame to upload or view original photo
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Photo Slot 1: Stall Photo */}
          <div 
            onClick={() => stallInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.dataTransfer.files?.[0]) handleUpload(e.dataTransfer.files[0], 'stall');
            }}
            className="group relative bg-[#06120b] border border-white/15 hover:border-[#ffe600] rounded-2xl p-4 transition-all cursor-pointer shadow-lg"
          >
            {/* Masking tape graphic */}
            <div className="absolute -top-2.5 left-8 w-24 h-5 bg-[#f3e7be]/90 border border-black/10 shadow-sm transform -rotate-2 z-10 text-[8px] font-mono-code text-black/60 flex items-center justify-center font-bold">
              BOOTH #INTHEUNION
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-3 flex items-center justify-center">
              {photos.stallPhoto ? (
                <img 
                  src={photos.stallPhoto} 
                  alt="Vinay at Dropshipping Mela booth at DLF CyberHub" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#ffe600]/10 border border-[#ffe600]/30 flex items-center justify-center text-[#ffe600] mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono-code font-bold text-white uppercase tracking-wide">
                    Add Pop-Up Booth Photo
                  </span>
                  <span className="text-[11px] text-white/60 font-mono-code mt-1 max-w-xs">
                    Click or drop WhatsApp Image (Stall photo with bunting & gemstone counter)
                  </span>
                </div>
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono-code font-bold">
                <span className="bg-black/80 px-3 py-1.5 rounded-lg border border-white/20">
                  {photos.stallPhoto ? 'Click to Change Photo' : 'Click to Upload Photo'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono-code">
              <div>
                <span className="font-bold text-white block">POP-UP BOOTH ACTIVATION</span>
                <span className="text-[10px] text-white/50">TAARA // Masters' Union Bunting</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-[#ffe600] font-bold">
                DLF CYBERHUB
              </span>
            </div>
          </div>

          {/* Photo Slot 2: Team Photo */}
          <div 
            onClick={() => teamInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.dataTransfer.files?.[0]) handleUpload(e.dataTransfer.files[0], 'team');
            }}
            className="group relative bg-[#06120b] border border-white/15 hover:border-[#ffe600] rounded-2xl p-4 transition-all cursor-pointer shadow-lg"
          >
            {/* Masking tape graphic */}
            <div className="absolute -top-2.5 right-8 w-24 h-5 bg-[#f3e7be]/90 border border-black/10 shadow-sm transform rotate-1 z-10 text-[8px] font-mono-code text-black/60 flex items-center justify-center font-bold">
              TEAM TAARA ✨
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-3 flex items-center justify-center">
              {photos.teamPhoto ? (
                <img 
                  src={photos.teamPhoto} 
                  alt="Vinay with Team TAARA at DLF CyberHub" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono-code font-bold text-white uppercase tracking-wide">
                    Add Team TAARA Group Photo
                  </span>
                  <span className="text-[11px] text-white/60 font-mono-code mt-1 max-w-xs">
                    Click or drop WhatsApp Image (Evening team celebration & jewelry collage)
                  </span>
                </div>
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono-code font-bold">
                <span className="bg-black/80 px-3 py-1.5 rounded-lg border border-white/20">
                  {photos.teamPhoto ? 'Click to Change Photo' : 'Click to Upload Photo'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono-code">
              <div>
                <span className="font-bold text-white block">TEAM TAARA CELEBRATION</span>
                <span className="text-[10px] text-white/50">Night Operations & Customer Engagement</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-emerald-400 font-bold">
                ₹97K CLOSING
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 5 Core Competencies Developed */}
      <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
        <div className="text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-[#ffe600]" />
          <span>ENTREPRENEURIAL SKILLS DEVELOPED</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
          
          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5">
            <span className="text-[10px] font-mono-code text-[#ffe600] font-bold block uppercase">01 // DIRECT SALES</span>
            <strong className="text-white text-sm block mt-1">High-Footfall Pitch & Conversion</strong>
            <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
              Pitched crystal healing properties, handcrafted gemstone bracelets, and wellness essentials directly to corporate walk-ins, overcoming skepticism and driving high basket sizes.
            </p>
          </div>

          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5">
            <span className="text-[10px] font-mono-code text-emerald-400 font-bold block uppercase">02 // CUSTOMER ENGAGEMENT</span>
            <strong className="text-white text-sm block mt-1">Real-Time Consultative Dialogue</strong>
            <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
              Created conversational warmth in a busy corridor, understanding customer preferences on gifting, personal energy stones, and premium packaging to ensure repeat word-of-mouth.
            </p>
          </div>

          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5">
            <span className="text-[10px] font-mono-code text-amber-300 font-bold block uppercase">03 // MARKETING & MERCHANDISING</span>
            <strong className="text-white text-sm block mt-1">Pop-Up Booth & Visual Storytelling</strong>
            <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
              Curated the physical stall layout under the Masters' Union bunting, pairing crystal trees with handcrafted gemstone bracelets and dynamic QR codes for instant Instagram following and UPI payment for TAARA.
            </p>
          </div>

          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5">
            <span className="text-[10px] font-mono-code text-blue-300 font-bold block uppercase">04 // TEAMWORK & ORCHESTRATION</span>
            <strong className="text-white text-sm block mt-1">Team TAARA Dynamic Roles</strong>
            <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
              Collaborated seamlessly with student founders—sharing crowd pitching duties, real-time stock counts, fast UPI billing, and managing rush-hour queues without sales friction.
            </p>
          </div>

          <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3.5 sm:col-span-2 lg:col-span-2">
            <span className="text-[10px] font-mono-code text-purple-300 font-bold block uppercase">05 // REAL-TIME DECISION MAKING</span>
            <strong className="text-white text-sm block mt-1">Agile Pricing, Bundling & Inventory Flow</strong>
            <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed">
              Continuously monitored hourly sales velocity: introduced value bundles (gemstone bracelet + crystal tree combinations) during peak evening footfall to clear inventory and surpass the ₹97K revenue target.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
