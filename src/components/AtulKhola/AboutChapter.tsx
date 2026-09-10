import React, { useState, useRef } from 'react';
import { InteractiveMark } from './InteractiveMark';
import { Camera, MapPin, Award, ExternalLink, ArrowRight, ShieldCheck, Upload } from 'lucide-react';
import { AthletePhoto, UserProfile } from '../../types';

interface AboutChapterProps {
  profile: UserProfile;
  photos: AthletePhoto[];
  activePhotoId: string;
  onSelectPhoto: (id: string) => void;
  onOpenPhotoModal: () => void;
  onOpenResumeModal: () => void;
  onAddCustomPhoto?: (newPhoto: AthletePhoto) => void;
}

export const AboutChapter: React.FC<AboutChapterProps> = ({
  profile,
  photos,
  activePhotoId,
  onSelectPhoto,
  onOpenPhotoModal,
  onOpenResumeModal,
  onAddCustomPhoto,
}) => {
  const currentPhoto = photos.find(p => p.id === activePhotoId) || photos[0];
  const [dragOver, setDragOver] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(currentPhoto.imageSrc || (currentPhoto as any).url || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setImgSrc(currentPhoto.imageSrc || (currentPhoto as any).url || '');
  }, [currentPhoto]);

  const handleFileDrop = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const newId = `original-photo-${Date.now()}`;
      const newPhoto: AthletePhoto = {
        id: newId,
        title: file.name ? `Vinay G // Original (${file.name})` : 'Vinay G // Original Photograph',
        sport: 'Operations Leader // Masters\' Union',
        imageSrc: dataUrl,
        alt: 'Vinay G original photograph',
        credit: 'Original Studio Archive // 2026',
        isCustom: true,
      };
      if (onAddCustomPhoto) {
        onAddCustomPhoto(newPhoto);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 border-b border-white/10 relative">
      
      {/* Chapter Label */}
      <div className="flex items-center gap-3 text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-widest mb-6 sm:mb-8">
        <span className="w-2 h-2 bg-[#ffe600] rounded-sm" />
        <span>//ABOUT</span>
        <span className="text-white/30 hidden sm:inline">——— 01 // OPERATOR & ATHLETE DOSSIER</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Editorial Narrative Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase leading-[1.05]">
            Hello, <br />
            <span className="text-[#ffe600]">I’m Vinay G.</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-sans">
            <p>
              I build and scale high-velocity{' '}
              <InteractiveMark 
                text="Supply Chain & Category Operations" 
                note="Orchestrating 40+ warehouse inbound logistics with 6–7 daily shipments" 
                badge="LOGISTICS ARCHITECTURE"
              />
              , specializing in Quick Commerce cataloging, enterprise procurement, and sports business analytics.
            </p>

            <p>
              At Supertails, I governed{' '}
              <InteractiveMark 
                text="20,000+ active SKUs" 
                note="Sustained 95% catalogue accuracy across Mars, Nestlé, Royal Canin, and 20+ top brands" 
                badge="FMCG CATEGORY"
              />
              {' '}and spearheaded the operations that brought our{' '}
              <InteractiveMark 
                text="30-minute quick commerce delivery" 
                note="Instant delivery rollout across Bengaluru hubs with zero downtime" 
                badge="QUICK COMMERCE"
              />
              {' '}to life.
            </p>

            <p>
              Outside operations, I am a competitive sprinter—
              <InteractiveMark 
                text="District Gold Medalist in 100m & 200m" 
                note="1st out of 70+ sprinters; 4-time consecutive individual champion" 
                badge="PODIUM FINISH"
              />
              {' '}and{' '}
              <InteractiveMark 
                text="Khelo India Qualifier" 
                note="Represented state at national university selections; State Silver in 400m" 
                badge="NATIONAL ATHLETE"
              />
              .
            </p>

            <p>
              Currently pursuing my PGP in Sports Management & Gaming at{' '}
              <InteractiveMark 
                text="Masters’ Union" 
                note="Recipient of 20% Pankaj Bansal Scholarship for Young Leaders (Class of 2026)" 
                badge="ACADEMIC MERIT"
              />
              , synthesizing high-growth category management, live retail venture execution, and modern e-commerce operations.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="px-5 py-2.5 rounded-full bg-[#ffe600] hover:bg-[#ffea33] text-black font-mono-code font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>READ RESUME (PDF)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#brands"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono-code text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <span>VIEW EXPERIENCE & BRANDS</span>
            </a>

            <div className="flex items-center gap-1 text-xs font-mono-code text-emerald-400 pl-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>AVAILABLE FOR ROLES // BENGALURU & GURUGRAM</span>
            </div>
          </div>

        </div>

        {/* Right Studio Photo & Cutting Mat Polaroids (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileDrop(e.target.files[0]);
              }
            }}
          />

          {/* Main Taped Polaroid on the cutting mat */}
          <div 
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragOver(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragOver(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDragOver(false);
              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleFileDrop(e.dataTransfer.files[0]);
              }
            }}
            className={`relative group w-full max-w-sm sm:max-w-md transform rotate-1 hover:rotate-0 transition-all duration-300 ${
              dragOver ? 'scale-105 ring-4 ring-[#ffe600] rounded-2xl' : ''
            }`}
          >
            
            {/* Masking tape graphic on top of the photo */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#f3e7be]/95 border border-black/10 shadow-sm transform -rotate-2 z-20 pointer-events-none text-[8px] font-mono-code text-black/60 flex items-center justify-center font-bold tracking-wider">
              {dragOver ? 'DROP ORIGINAL PHOTO HERE' : 'AUTHENTIC DOSSIER ARCHIVE'}
            </div>

            {/* Photo frame */}
            <div className="bg-[#fbf9f5] p-3 sm:p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-black border border-black/10">
              
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-900 shadow-inner cursor-pointer group/img"
                title="Click to select and display your original photo file directly"
              >
                <img
                  src={imgSrc}
                  alt={currentPhoto.alt || currentPhoto.title}
                  className="w-full h-full object-cover object-top filter contrast-105 transition-transform duration-300 group-hover/img:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                  <Upload className="w-8 h-8 text-[#ffe600] mb-2 drop-shadow" />
                  <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-white">
                    Click or Drop Original File
                  </span>
                  <span className="text-[10px] text-white/80 mt-1">
                    Direct 100% Uncompressed File Display
                  </span>
                </div>

                {/* Sub-label badge */}
                <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md text-white px-2.5 py-1.5 rounded text-[10px] font-mono-code flex items-center justify-between border border-white/10">
                  <span className="truncate">{currentPhoto.sport || (currentPhoto as any).badge || 'OPERATIONS LEADER'}</span>
                  <span className="text-[#ffe600] font-bold shrink-0">{currentPhoto.credit || (currentPhoto as any).year || '2026'}</span>
                </div>
              </div>

              {/* Bottom polaroid caption */}
              <div className="pt-3 pb-1 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black font-display uppercase tracking-wide text-neutral-900">
                    VINAY G // EXECUTIVE & ATHLETE DOSSIER
                  </div>
                  <div className="text-[10px] font-mono-code text-neutral-500 truncate max-w-[180px] sm:max-w-xs">
                    {currentPhoto.title || (currentPhoto as any).caption}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-2.5 py-1 rounded bg-[#0b2619] text-[#ffe600] text-[10px] font-mono-code hover:bg-[#0e3121] transition-colors flex items-center gap-1 font-bold border border-white/10 shadow-sm"
                    title="Load original photoshoot image file directly"
                  >
                    <Upload className="w-3 h-3" />
                    <span>ADD ORIGINAL</span>
                  </button>

                  <button
                    onClick={onOpenPhotoModal}
                    className="px-2.5 py-1 rounded bg-black text-white text-[10px] font-mono-code hover:bg-neutral-800 transition-colors flex items-center gap-1 font-bold"
                    title="Open gallery or change shot"
                  >
                    <Camera className="w-3 h-3 text-[#ffe600]" />
                    <span>GALLERY</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Small Photo Switcher Pills */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {photos.slice(0, 4).map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => onSelectPhoto(p.id)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono-code transition-all ${
                    activePhotoId === p.id 
                      ? 'bg-[#ffe600] text-black font-bold scale-105 shadow' 
                      : 'bg-black/40 text-white/70 hover:bg-black/60 border border-white/10'
                  }`}
                >
                  SHOT 0{idx + 1}
                </button>
              ))}
            </div>

          </div>

          {/* Quick Metrics Sticker below photo */}
          <div className="w-full max-w-sm sm:max-w-md mt-6 grid grid-cols-2 gap-3 text-xs font-mono-code">
            <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3">
              <span className="text-[9px] text-[#ffe600] block uppercase font-bold">EDUCATION</span>
              <span className="text-white font-bold block mt-0.5">Masters' Union '26</span>
              <span className="text-white/50 text-[10px]">Sports Mgmt & Gaming</span>
            </div>

            <div className="bg-[#0b2418] border border-white/10 rounded-xl p-3">
              <span className="text-[9px] text-emerald-400 block uppercase font-bold">SPRINT BEST</span>
              <span className="text-white font-bold block mt-0.5">Gold // 100m & 200m</span>
              <span className="text-white/50 text-[10px]">District & State Podiums</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
