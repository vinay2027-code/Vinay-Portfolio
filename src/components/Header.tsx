import React from 'react';
import { 
  FileText, 
  Upload, 
  Mail, 
  Phone, 
  Linkedin, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  profile: UserProfile;
  onOpenResumeModal: () => void;
  onOpenPhotoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  onOpenResumeModal,
  onOpenPhotoModal
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0E1015]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Executive Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DE9B26] to-[#b45309] text-black font-black flex items-center justify-center text-sm tracking-tight shadow-md shadow-[#DE9B26]/10">
            VG
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold tracking-wide uppercase text-white font-display">
                {profile.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                MASTERS' UNION '26
              </span>
            </div>
            <div className="text-[11px] font-mono-code text-neutral-400 hidden sm:block truncate max-w-xs">
              SUPPLY CHAIN & OPERATIONS LEAD
            </div>
          </div>
        </div>

        {/* Center: Navigation Anchors (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono-code tracking-wider text-neutral-300">
          <a href="#executive-overview" className="hover:text-[#DE9B26] transition-colors">
            OVERVIEW
          </a>
          <a href="#executive-experience" className="hover:text-[#DE9B26] transition-colors">
            EXPERIENCE
          </a>
          <a href="#strategic-projects" className="hover:text-[#DE9B26] transition-colors">
            RESEARCH
          </a>
          <a href="#athletics-record" className="hover:text-[#DE9B26] transition-colors">
            ATHLETICS
          </a>
          <a href="#education-skills" className="hover:text-[#DE9B26] transition-colors">
            EDUCATION
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          {/* Photo Uploader Trigger */}
          <button
            onClick={onOpenPhotoModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 transition-colors"
            title="Upload or change photos"
          >
            <Upload className="w-3.5 h-3.5 text-[#DE9B26]" />
            <span>CHANGE PHOTO</span>
          </button>

          {/* Official Resume View Modal Trigger */}
          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono-code bg-[#DE9B26] hover:bg-[#eab03e] text-black font-bold transition-all shadow-md shadow-[#DE9B26]/20 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>VIEW RESUME (PDF)</span>
          </button>
        </div>

      </div>
    </header>
  );
};
