import React, { useState } from 'react';
import { Trophy, Zap, Boxes, GraduationCap, Flame, Sparkles } from 'lucide-react';
import { playMechanicalClick } from '../../utils/audioEffects';

export const InteractiveStickers: React.FC = () => {
  const [clickedSticker, setClickedSticker] = useState<string | null>(null);

  const handleStickerClick = (name: string) => {
    playMechanicalClick(1300, 0.03);
    setClickedSticker(name);
    setTimeout(() => setClickedSticker(null), 1800);
  };

  return (
    <div className="hidden xl:block pointer-events-none select-none">
      
      {/* Sticker 1: Sprint Gold Medal */}
      <div 
        onClick={() => handleStickerClick('gold')}
        className="pointer-events-auto absolute top-20 right-8 transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-200 cursor-pointer z-30"
        title="Click me!"
      >
        <div className="bg-[#fbf8ee] text-[#123d29] p-2.5 rounded-2xl shadow-2xl border-2 border-dashed border-amber-500/40 text-[10px] font-mono-code font-bold max-w-[130px] text-center">
          <div className="w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center mx-auto mb-1 shadow-md">
            <Trophy className="w-4 h-4 text-amber-900" />
          </div>
          <span className="block text-amber-700">DISTRICT GOLD</span>
          <span className="text-[8px] text-neutral-600 block">100m & 200m</span>
        </div>
      </div>

      {/* Sticker 2: 30-Min Delivery Lightning */}
      <div 
        onClick={() => handleStickerClick('quick')}
        className="pointer-events-auto absolute top-[520px] left-3 transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-200 cursor-pointer z-30"
        title="Click me!"
      >
        <div className="bg-[#1a3828] text-white p-2.5 rounded-xl shadow-2xl border border-emerald-400/40 text-[10px] font-mono-code font-bold max-w-[125px] text-center">
          <Zap className="w-4 h-4 text-[#ffe600] mx-auto mb-1 animate-pulse" />
          <span className="block text-[#ffe600]">30-MIN SLAS</span>
          <span className="text-[8px] text-emerald-300 block">Quick Commerce</span>
        </div>
      </div>

      {/* Sticker 3: 20k SKUs Barcode Tag */}
      <div 
        onClick={() => handleStickerClick('sku')}
        className="pointer-events-auto absolute top-[1150px] right-6 transform rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-200 cursor-pointer z-30"
        title="Click me!"
      >
        <div className="bg-[#fbf9f5] text-black p-2 rounded-lg shadow-xl border border-black/20 text-[9px] font-mono-code font-bold text-center">
          <Boxes className="w-4 h-4 text-emerald-800 mx-auto mb-0.5" />
          <span>20,000+ SKUs</span>
          <div className="text-[7px] tracking-widest text-neutral-500 font-mono-code mt-0.5">|||||||||||||||||||</div>
        </div>
      </div>

    </div>
  );
};
