import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Copy, Check, ArrowUpRight, FileText, ArrowUp } from 'lucide-react';
import { UserProfile } from '../../types';
import { playMechanicalClick } from '../../utils/audioEffects';

interface ContactChapterProps {
  profile: UserProfile;
  onOpenResumeModal: () => void;
}

export const ContactChapter: React.FC<ContactChapterProps> = ({ profile, onOpenResumeModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    playMechanicalClick(1200, 0.03);
    navigator.clipboard.writeText(profile.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    playMechanicalClick(800, 0.02);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 relative">
      
      {/* Chapter Label */}
      <div className="flex items-center gap-3 text-xs font-mono-code text-[#ffe600] font-bold uppercase tracking-widest mb-3">
        <span className="w-2 h-2 bg-[#ffe600] rounded-sm" />
        <span>//CONTACT</span>
        <span className="text-white/30 hidden sm:inline">——— 05 // GET IN TOUCH</span>
      </div>

      <div className="max-w-4xl space-y-6 mb-12">
        <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
          HAVE A HIGH-VELOCITY CATEGORY TO SCALE OR A SPORTS BUSINESS TO BUILD?
        </h2>
        
        <p className="text-base sm:text-xl text-white/80 leading-relaxed font-sans">
          I’m actively looking to connect with founders, category heads, and sports organizations building bold products. Let’s talk supply chain, quick commerce, retail ventures, or sports business operations.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        
        {/* Email Card with Copy Button */}
        <div className="bg-[#0b2418] border border-white/10 hover:border-[#ffe600]/40 rounded-2xl p-5 flex flex-col justify-between transition-colors shadow-lg">
          <div>
            <div className="text-[10px] font-mono-code text-[#ffe600] uppercase font-bold mb-1">
              DIRECT EMAIL
            </div>
            <div className="text-sm sm:text-base font-bold text-white truncate mb-1">
              {profile.contactEmail}
            </div>
            <div className="text-xs text-white/50 font-mono-code">
              Primary inbox (checked daily)
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
            <button
              onClick={handleCopyEmail}
              className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono-code flex items-center justify-center gap-1.5 transition-colors font-bold"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#ffe600]" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
            </button>

            <a
              href={`mailto:${profile.contactEmail}`}
              className="p-2 rounded-xl bg-[#ffe600] hover:bg-[#ffea33] text-black transition-colors"
              title="Compose Email"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="bg-[#0b2418] border border-white/10 hover:border-emerald-400/40 rounded-2xl p-5 flex flex-col justify-between transition-colors shadow-lg">
          <div>
            <div className="text-[10px] font-mono-code text-emerald-400 uppercase font-bold mb-1">
              PHONE / WHATSAPP
            </div>
            <div className="text-sm sm:text-base font-bold text-white mb-1">
              {profile.phone || '+91 98450 XXXXX'}
            </div>
            <div className="text-xs text-white/50 font-mono-code">
              Indian mobile & WhatsApp
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            {profile.phone ? (
              <a
                href={`tel:${profile.phone}`}
                className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono-code flex items-center justify-center gap-1.5 transition-colors font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>CALL DIRECTLY</span>
              </a>
            ) : (
              <span className="text-xs text-white/40 font-mono-code block text-center py-2">Available on request</span>
            )}
          </div>
        </div>

        {/* LinkedIn & Resume Card */}
        <div className="bg-[#0b2418] border border-white/10 hover:border-blue-400/40 rounded-2xl p-5 flex flex-col justify-between transition-colors shadow-lg">
          <div>
            <div className="text-[10px] font-mono-code text-blue-300 uppercase font-bold mb-1">
              PROFESSIONAL NETWORK
            </div>
            <div className="text-sm sm:text-base font-bold text-white mb-1">
              LinkedIn & Verified Resume
            </div>
            <div className="text-xs text-white/50 font-mono-code">
              Bengaluru & Gurugram, India
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
            {profile.linkedin && (
              <a
                href={profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono-code flex items-center justify-center gap-1.5 transition-colors font-bold"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LINKEDIN</span>
              </a>
            )}

            <button
              onClick={onOpenResumeModal}
              className="py-2 px-3 rounded-xl bg-[#ffe600] hover:bg-[#ffea33] text-black text-xs font-mono-code flex items-center justify-center gap-1 transition-colors font-bold"
              title="Official Printable Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>
          </div>
        </div>

      </div>

      {/* Colophon & Back to Top */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-white/40">
        <div>
          <span>© {new Date().getFullYear()} VINAY G</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-white/60 hover:text-[#ffe600] transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
};
