import React from 'react';
import { motion } from 'motion/react';
import { Flame, Zap, Heart, Timer, Activity, Wind } from 'lucide-react';
import { InfoBadge } from '../types';

interface InfoChipProps {
  badge: InfoBadge;
  index: number;
  isSelected?: boolean;
  onSelect?: (badge: InfoBadge) => void;
}

export const InfoChip: React.FC<InfoChipProps> = ({
  badge,
  index,
  isSelected = false,
  onSelect
}) => {
  const getIcon = () => {
    const props = { className: "w-4 h-4 shrink-0 stroke-[2.2]" };
    switch (badge.icon) {
      case 'flame':
        return <Flame {...props} />;
      case 'zap':
        return <Zap {...props} />;
      case 'heart':
        return <Heart {...props} />;
      case 'timer':
        return <Timer {...props} />;
      case 'activity':
        return <Activity {...props} />;
      case 'wind':
        return <Wind {...props} />;
      default:
        return <Activity {...props} />;
    }
  };

  const getTileStyle = () => {
    switch (badge.tileColor) {
      case 'burnt-orange':
        return 'bg-[#C84E29] text-[#F6F5F0] shadow-[0_2px_8px_rgba(200,78,41,0.35)]';
      case 'forest-green':
        return 'bg-[#193426] text-[#DE9B26] border border-[#DE9B26]/30 shadow-[0_2px_8px_rgba(25,52,38,0.4)]';
      case 'mustard':
        return 'bg-[#DE9B26] text-[#141618] shadow-[0_2px_8px_rgba(222,155,38,0.35)]';
      case 'off-white':
        return 'bg-[#F3F1EA] text-[#193426] shadow-[0_2px_8px_rgba(0,0,0,0.2)]';
    }
  };

  return (
    <motion.div
      id={`info-chip-${badge.id}`}
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, scale: 1.04 }}
      onClick={() => onSelect?.(badge)}
      className={`group cursor-pointer rounded-full backdrop-blur-md px-3.5 py-2 flex items-center gap-3 transition-all duration-300 shadow-xl border select-none ${
        isSelected
          ? 'bg-[#141619]/95 border-[#DE9B26] ring-2 ring-[#DE9B26]/40 scale-105'
          : 'bg-[#141619]/85 border-white/15 hover:border-white/40 hover:bg-[#141619]/95'
      }`}
      style={{
        ...badge.position
      }}
    >
      {/* Icon Tile */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 ${getTileStyle()}`}
      >
        {getIcon()}
      </div>

      {/* Label and Metric */}
      <div className="flex flex-col text-left leading-none pr-1">
        <span className="text-[9px] uppercase tracking-[0.14em] font-semibold text-neutral-400 group-hover:text-neutral-300 transition-colors">
          {badge.category}
        </span>
        <span className="text-[13px] font-bold text-[#F6F5F0] tracking-tight mt-0.5 group-hover:text-white font-mono-code">
          {badge.value}
        </span>
      </div>

      {/* Interactive indicator dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-[#DE9B26] opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
