import React, { useState, useEffect } from 'react';
import { FileText, Camera, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { playMechanicalClick, isSoundEnabled, setSoundEnabled } from '../../utils/audioEffects';

interface AtulNavPillProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
  onOpenPhotoModal?: () => void;
}

export const AtulNavPill: React.FC<AtulNavPillProps> = ({
  activeSection,
  onNavigate,
  onOpenResumeModal,
}) => {
  const [soundOn, setSoundOn] = useState<boolean>(isSoundEnabled());

  const navItems = [
    { id: 'about', label: '//about' },
    { id: 'brands', label: '//brands' },
    { id: 'work', label: '//work' },
    { id: 'influence', label: '//influence' },
    { id: 'contact', label: '//contact' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    playMechanicalClick(900, 0.025);
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const newState = !soundOn;
    setSoundOn(newState);
    setSoundEnabled(newState);
    if (newState) {
      playMechanicalClick(1200, 0.03);
    }
  };

  return (
    <nav 
      id="pill" 
      aria-label="Primary"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-[#0c1f15]/95 backdrop-blur-md border-2 border-emerald-500/30 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-xs font-mono-code text-neutral-300 max-w-[95vw] sm:max-w-max"
    >
      {/* Chapter links */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(item.id, e)}
              className={`px-2 sm:px-3 py-1.5 rounded-full transition-all text-[11px] sm:text-xs font-semibold whitespace-nowrap ${
                isActive 
                  ? 'bg-[#ffe600] text-black font-bold shadow-sm' 
                  : 'hover:text-white hover:bg-white/10 text-neutral-400'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Divider */}
      <span className="w-px h-4 bg-emerald-500/30 mx-1 hidden sm:inline-block" />

      {/* Quick Action Tools */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => {
            playMechanicalClick(1100, 0.02);
            onOpenResumeModal();
          }}
          className="px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center gap-1 text-[11px] transition-all"
          title="View & Print Official PDF Resume"
        >
          <FileText className="w-3 h-3 text-[#ffe600]" />
          <span className="hidden md:inline">RESUME</span>
        </button>

        {/* Sound toggle like Atul Khola's */}
        <button
          onClick={toggleSound}
          className={`p-1.5 rounded-full transition-colors ${
            soundOn ? 'text-[#ffe600] hover:bg-white/10' : 'text-neutral-500 hover:text-neutral-300'
          }`}
          title={soundOn ? 'Sound On — click to mute' : 'Sound Muted — click to enable'}
          aria-label="Toggle haptic sounds"
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>
      </div>
    </nav>
  );
};
