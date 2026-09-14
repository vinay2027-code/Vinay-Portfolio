import React from 'react';
import { InteractiveMark } from './InteractiveMark';
import { MapPin, Award, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { AthletePhoto, UserProfile } from '../../types';

interface AboutChapterProps {
  profile: UserProfile;
  photos: AthletePhoto[];
  activePhotoId: string;
  customPhotoSrc?: string | null;
  onOpenResumeModal: () => void;
}

export const AboutChapter: React.FC<AboutChapterProps> = ({
  profile,
  photos,
  activePhotoId,
  customPhotoSrc,
  onOpenResumeModal,
}) => {
  const [imgLoadError, setImgLoadError] = React.useState(false);
  const currentPhoto = photos.find(p => p.id === activePhotoId) || photos[0];
  const primarySrc = customPhotoSrc || currentPhoto.imageSrc || (currentPhoto as any).url || '';
  const displaySrc = imgLoadError ? (photos.find(p => p.id !== activePhotoId)?.imageSrc || primarySrc) : primarySrc;

  return (
    <section id="about" className="py-8 sm:py-12 px-4 sm:px-8 lg:px-12 border-b border-white/10 relative">
      
      {/* Chapter Label */}
      <div className="flex items-center gap-3 text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-widest mb-4 sm:mb-6">
        <span className="w-2 h-2 bg-[#ffe600] rounded-sm" />
        <span>//ABOUT</span>
        <span className="text-white/30 hidden sm:inline">——— 01 // OPERATOR & ATHLETE DOSSIER</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Editorial Narrative Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase leading-[1.05]">
            Hello, <br />
            <span className="text-[#ffe600]">I’m Vinay G.</span>
          </h1>

          <div className="space-y-3 text-sm sm:text-base text-white/90 leading-relaxed font-sans">
            <p>
              I build and scale high-velocity{' '}
              <InteractiveMark 
                text="Supply Chain & Category Operations" 
                note="Orchestrating 40+ warehouse inbound logistics with 6–7 daily shipments" 
                badge="LOGISTICS ARCHITECTURE"
              />
              . At Supertails, I governed{' '}
              <InteractiveMark 
                text="20,000+ active SKUs" 
                note="Sustained 95% catalogue accuracy across Mars, Nestlé, Royal Canin, and 20+ top brands" 
                badge="FMCG CATEGORY"
              />
              {' '}across 40+ fulfillment warehouses and spearheaded the catalogue launch for our{' '}
              <InteractiveMark 
                text="30-minute quick commerce delivery" 
                note="Instant delivery rollout across Bengaluru hubs with zero downtime" 
                badge="QUICK COMMERCE"
              />
              .
            </p>

            <p>
              Outside operations, I am a competitive track athlete—
              <InteractiveMark 
                text="District Gold Medalist in 100m & 200m" 
                note="1st out of 70+ sprinters; 4-time consecutive individual champion" 
                badge="PODIUM FINISH"
              />
              ,{' '}
              <InteractiveMark 
                text="State-Level Silver Medalist in 400m" 
                note="Karnataka State School Olympics; 2nd place among 52+ elite sprinters" 
                badge="STATE PODIUM"
              />
              , and{' '}
              <InteractiveMark 
                text="Khelo India Qualifier" 
                note="Represented state at national university selections" 
                badge="NATIONAL ATHLETE"
              />
              . Currently pursuing my PGP in Sports Management & Gaming at{' '}
              <InteractiveMark 
                text="Masters’ Union" 
                note="Recipient of 20% Pankaj Bansal Scholarship for Young Leaders (Class of 2026)" 
                badge="ACADEMIC MERIT"
              />
              .
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="px-4 py-2 rounded-full bg-[#ffe600] hover:bg-[#ffea33] text-black font-mono-code font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105 shadow-md flex items-center gap-1.5"
            >
              <span>READ RESUME (PDF)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#brands"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono-code text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <span>EXPERIENCE & BRANDS</span>
            </a>

            <div className="flex items-center gap-1 text-[11px] font-mono-code text-emerald-400 pl-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>BENGALURU & GURUGRAM</span>
            </div>
          </div>

        </div>

        {/* Right Studio Photo & Cutting Mat Polaroid (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          
          {/* Main Taped Polaroid on the cutting mat */}
          <div className="relative group w-full max-w-sm sm:max-w-md transform rotate-1 hover:rotate-0 transition-all duration-300">
            
            {/* Masking tape graphic on top of the photo */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#f3e7be]/95 border border-black/10 shadow-sm transform -rotate-2 z-20 pointer-events-none text-[8px] font-mono-code text-black/60 flex items-center justify-center font-bold tracking-wider">
              AUTHENTIC DOSSIER ARCHIVE
            </div>

            {/* Photo frame */}
            <div className="bg-[#fbf9f5] p-3 sm:p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-black border border-black/10">
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-900 shadow-inner">
                <img
                  src={displaySrc}
                  alt={currentPhoto.alt || currentPhoto.title}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={() => setImgLoadError(true)}
                />

                {/* Sub-label badge */}
                <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md text-white px-2.5 py-1.5 rounded text-[10px] font-mono-code flex items-center justify-between border border-white/10">
                  <span className="truncate">{currentPhoto.sport || (currentPhoto as any).badge || 'OPERATIONS LEADER'}</span>
                  <span className="text-[#ffe600] font-bold shrink-0">{currentPhoto.credit || (currentPhoto as any).year || '2026'}</span>
                </div>
              </div>

              {/* Bottom polaroid caption */}
              <div className="pt-3 pb-1">
                <div className="text-xs font-black font-display uppercase tracking-wide text-neutral-900">
                  VINAY G // CATEGORY OPERATIONS
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
