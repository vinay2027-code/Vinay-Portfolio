import React, { useState } from 'react';
import { playMechanicalClick } from '../../utils/audioEffects';

interface InteractiveMarkProps {
  text: string;
  note: string;
  badge?: string;
}

export const InteractiveMark: React.FC<InteractiveMarkProps> = ({ text, note, badge }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playMechanicalClick(1000, 0.02);
    setIsOpen(prev => !prev);
  };

  return (
    <span className="relative inline-block my-0.5">
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="atul-mark font-semibold text-white cursor-pointer px-1 py-0.5 rounded transition-all select-none text-left"
        aria-expanded={isOpen}
      >
        {text}
      </button>

      {/* Pop-up Sticky Annotation Note (Atul Khola signature aside) */}
      {isOpen && (
        <span 
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-40 w-64 p-2.5 bg-[#fbf8ee] text-[#1a2e22] text-xs font-mono-code rounded-xl shadow-2xl border border-black/10 pointer-events-none transform transition-all animate-in fade-in zoom-in-95 leading-snug"
        >
          {badge && (
            <span className="text-[9px] font-bold text-[#b45309] block uppercase tracking-wider mb-1">
              // {badge}
            </span>
          )}
          <span>{note}</span>
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#fbf8ee]" />
        </span>
      )}
    </span>
  );
};
