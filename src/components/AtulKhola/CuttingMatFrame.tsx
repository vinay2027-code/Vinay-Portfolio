import React from 'react';

interface CuttingMatFrameProps {
  children: React.ReactNode;
}

export const CuttingMatFrame: React.FC<CuttingMatFrameProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#060807] p-2 sm:p-4 lg:p-6 flex flex-col items-center">
      
      {/* Screen container: rounded, clipped bounds matching atulkhola.com #screen */}
      <div 
        id="screen" 
        className="w-full max-w-[1440px] bg-[#0e3121] border-2 sm:border-4 border-[#071911] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)] relative cutting-mat-bg text-white flex flex-col"
      >
        
        {/* Top Ruler Bar with inch marks */}
        <div className="h-6 sm:h-7 bg-[#0b2619]/90 border-b border-white/10 flex items-center justify-between px-4 text-[10px] font-mono-code text-white/50 select-none overflow-hidden">
          <div className="flex items-center gap-6 sm:gap-12">
            <span className="text-[#ffe600] font-bold">0" [START]</span>
            <span>3"</span>
            <span className="hidden sm:inline">6"</span>
            <span>9"</span>
            <span className="hidden md:inline">12"</span>
            <span>15"</span>
            <span className="hidden lg:inline">18"</span>
            <span>21"</span>
            <span className="hidden sm:inline">24"</span>
            <span className="hidden xl:inline">27"</span>
            <span>30"</span>
            <span className="hidden md:inline">33"</span>
            <span>36"</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#ffe600]/80">45° // 60° MAT GUIDES</span>
            <span className="text-white/30 hidden sm:inline">PRO SERIES A1</span>
          </div>
        </div>

        {/* Content area with side rulers */}
        <div className="relative flex-1 flex">
          
          {/* Left vertical inch tick marks (desktop only) */}
          <div className="w-6 sm:w-7 bg-[#0b2619]/60 border-r border-white/10 hidden md:flex flex-col justify-between py-8 items-center text-[9px] font-mono-code text-white/40 select-none shrink-0">
            <span>0"</span>
            <span>2"</span>
            <span>4"</span>
            <span>6"</span>
            <span>8"</span>
            <span>10"</span>
            <span>12"</span>
            <span>14"</span>
            <span>16"</span>
            <span>18"</span>
            <span>20"</span>
            <span>22"</span>
            <span>24"</span>
          </div>

          {/* Main workspace chapters */}
          <div className="flex-1 overflow-x-hidden relative">
            {children}
          </div>

        </div>

        {/* Bottom Mat Status Bar */}
        <div className="h-6 bg-[#091f14] border-t border-white/10 flex items-center justify-between px-4 text-[9px] font-mono-code text-white/40 select-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>VINAY G // SUPPLY CHAIN & CATEGORY MANAGEMENT DOSSIER</span>
          </div>
          <div>
            <span>GRID: 20mm x 20mm</span>
          </div>
        </div>

      </div>

    </div>
  );
};
