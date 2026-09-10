import React from 'react';
import { 
  FileText, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink, 
  Award, 
  Upload, 
  ShieldCheck, 
  Boxes, 
  Timer, 
  Trophy, 
  Flame,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { UserProfile, AthletePhoto } from '../types';

interface ExecutiveHeroProps {
  profile: UserProfile;
  photos: AthletePhoto[];
  activePhotoId: string;
  onSelectPhoto: (id: string) => void;
  onOpenResumeModal: () => void;
  onOpenPhotoModal: () => void;
}

export const ExecutiveHero: React.FC<ExecutiveHeroProps> = ({
  profile,
  photos,
  activePhotoId,
  onSelectPhoto,
  onOpenResumeModal,
  onOpenPhotoModal
}) => {
  const activePhoto = photos.find(p => p.id === activePhotoId) || photos[0];

  return (
    <section 
      id="executive-overview"
      className="relative overflow-hidden bg-gradient-to-b from-[#0E1015] via-[#11141A] to-[#0E1015] border-b border-white/10 py-12 sm:py-16 lg:py-20"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DE9B26]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 Cols): Executive Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badges / Accreditations */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code bg-[#DE9B26]/10 text-[#DE9B26] border border-[#DE9B26]/20 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DE9B26] animate-pulse" />
                MASTERS' UNION PGP '26
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono-code bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                <Award className="w-3.5 h-3.5" />
                20% PANKAJ BANSAL SCHOLAR FOR YOUNG LEADERS
              </span>
            </div>

            {/* Name and Professional Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display">
                {profile.name}
              </h1>
              <div className="text-lg sm:text-xl font-bold text-[#DE9B26] mt-2 font-display uppercase tracking-wide">
                SUPPLY CHAIN & OPERATIONS EXECUTIVE // CATEGORY MANAGEMENT
              </div>
              <p className="text-sm sm:text-base text-neutral-300 mt-3.5 leading-relaxed max-w-2xl font-sans">
                {profile.bio}
              </p>
            </div>

            {/* Key Signature Achievements Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#181C24] border border-white/10 rounded-xl p-3 hover:border-[#DE9B26]/40 transition-colors">
                <div className="flex items-center gap-1 text-[10px] font-mono-code text-neutral-400 uppercase">
                  <Boxes className="w-3 h-3 text-[#DE9B26]" />
                  <span>SKU MANAGEMENT</span>
                </div>
                <div className="text-xl font-bold font-mono-code text-white mt-1">20,000+</div>
                <div className="text-[11px] text-neutral-400">95% Catalogue Accuracy</div>
              </div>

              <div className="bg-[#181C24] border border-white/10 rounded-xl p-3 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-1 text-[10px] font-mono-code text-neutral-400 uppercase">
                  <Timer className="w-3 h-3 text-emerald-400" />
                  <span>QUICK COMMERCE</span>
                </div>
                <div className="text-xl font-bold font-mono-code text-white mt-1">30-MIN</div>
                <div className="text-[11px] text-neutral-400">Bengaluru Rollout Lead</div>
              </div>

              <div className="bg-[#181C24] border border-white/10 rounded-xl p-3 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-1 text-[10px] font-mono-code text-neutral-400 uppercase">
                  <Trophy className="w-3 h-3 text-amber-400" />
                  <span>ATHLETIC HONORS</span>
                </div>
                <div className="text-xl font-bold font-mono-code text-white mt-1">GOLD</div>
                <div className="text-[11px] text-neutral-400">District 100m & 200m</div>
              </div>

              <div className="bg-[#181C24] border border-white/10 rounded-xl p-3 hover:border-rose-400/40 transition-colors">
                <div className="flex items-center gap-1 text-[10px] font-mono-code text-neutral-400 uppercase">
                  <Flame className="w-3 h-3 text-rose-400" />
                  <span>CRISIS RECOVERY</span>
                </div>
                <div className="text-xl font-bold font-mono-code text-white mt-1">7–10 DAYS</div>
                <div className="text-[11px] text-neutral-400">6,000+ SKUs Replenished</div>
              </div>
            </div>

            {/* CTAs and Direct Connect */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DE9B26] hover:bg-[#eab03e] text-black font-bold text-xs font-mono-code tracking-wider uppercase transition-all shadow-lg shadow-[#DE9B26]/20 active:scale-95"
              >
                <FileText className="w-4 h-4 stroke-[2.5]" />
                <span>VIEW FULL RESUME (PDF)</span>
              </button>

              <a
                href={`mailto:${profile.contactEmail}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono-code text-xs border border-white/15 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#DE9B26]" />
                <span>{profile.contactEmail}</span>
              </a>

              {profile.linkedin && (
                <a
                  href={profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono-code text-xs border border-white/15 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LINKEDIN</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              )}

              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono-code text-xs border border-white/15 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{profile.phone}</span>
                </a>
              )}
            </div>

          </div>

          {/* Right Column (5 Cols): Clean Editorial Media Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#14171F] border border-white/15 rounded-3xl p-3.5 shadow-2xl overflow-hidden group">
              
              {/* Studio Metadata Strip */}
              <div className="flex items-center justify-between px-3 py-2 text-[10px] font-mono-code text-neutral-400 border-b border-white/10 mb-3">
                <span className="flex items-center gap-1.5 text-[#DE9B26] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#DE9B26]" />
                  STUDIO ARCHIVE // 1980s HERITAGE
                </span>
                <button
                  onClick={onOpenPhotoModal}
                  className="hover:text-white flex items-center gap-1 text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10"
                >
                  <Upload className="w-3 h-3 text-[#DE9B26]" />
                  <span>UPLOAD FILE</span>
                </button>
              </div>

              {/* High-Fidelity Photo Display */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                <img
                  src={activePhoto.imageSrc}
                  alt={activePhoto.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid Caption Details */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#DE9B26] font-semibold">
                    {activePhoto.sport}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-white mt-0.5">
                    {activePhoto.title}
                  </h3>
                  <div className="flex items-center justify-between text-[10px] font-mono-code text-neutral-400 mt-1">
                    <span>{activePhoto.credit}</span>
                    <span>BENGALURU // GURUGRAM</span>
                  </div>
                </div>
              </div>

              {/* Interactive Thumbnail Strip */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono-code text-neutral-400 mb-2">
                  <span>SELECT ARCHIVE SHOT:</span>
                  <span className="text-[#DE9B26]">{photos.findIndex(p => p.id === activePhoto.id) + 1} OF {photos.length}</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {photos.slice(0, 3).map((photo, idx) => {
                    const isSelected = photo.id === activePhoto.id;
                    return (
                      <button
                        key={photo.id}
                        onClick={() => onSelectPhoto(photo.id)}
                        className={`relative rounded-xl overflow-hidden border-2 text-left transition-all aspect-video bg-black/60 ${
                          isSelected
                            ? 'border-[#DE9B26] ring-2 ring-[#DE9B26]/30'
                            : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={photo.imageSrc}
                          alt={photo.alt}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute bottom-1 left-1.5 text-[9px] font-mono-code font-bold bg-black/70 px-1 rounded text-white">
                          0{idx + 1}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
