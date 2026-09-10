import React from 'react';
import { Mail, Phone, Linkedin, ArrowUp, FileText, Heart } from 'lucide-react';
import { UserProfile } from '../types';

interface FooterProps {
  profile: UserProfile;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] border-t border-white/10 py-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Left info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#DE9B26] text-black font-black flex items-center justify-center text-sm shadow-md">
              VG
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase font-display tracking-wide">
                {profile.name} // EXECUTIVE PORTFOLIO & ARCHIVE
              </div>
              <p className="text-xs text-neutral-500 font-mono-code mt-0.5">
                Masters' Union PGP in Sports Management & Gaming (Class of 2026)
              </p>
            </div>
          </div>

          {/* Direct Connections */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.contactEmail}`}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono-code border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#DE9B26]" />
              <span>{profile.contactEmail}</span>
            </a>

            {profile.phone && (
              <a
                href={`tel:${profile.phone}`}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono-code border border-white/10 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profile.phone}</span>
              </a>
            )}

            {profile.linkedin && (
              <a
                href={profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono-code border border-white/10 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LINKEDIN</span>
              </a>
            )}

            <button
              onClick={onOpenResumeModal}
              className="px-3.5 py-1.5 rounded-xl bg-[#DE9B26] hover:bg-[#eab03e] text-black text-xs font-mono-code font-bold transition-all flex items-center gap-1.5 shadow"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME (PDF)</span>
            </button>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono-code text-neutral-500">
          <div>
            © {new Date().getFullYear()} VINAY G. ALL RIGHTS RESERVED. BENGALURU & GURUGRAM, INDIA.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#DE9B26]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
