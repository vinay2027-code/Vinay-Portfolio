import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, 
  Layers, 
  Flame, 
  Zap, 
  Heart, 
  Timer, 
  Activity, 
  Sparkles, 
  ChevronRight,
  Crosshair,
  Info,
  Upload,
  Image as ImageIcon,
  Check,
  X,
  Link2
} from 'lucide-react';
import { ColorwayBand, InfoBadge, AthletePhoto, UserProfile } from '../types';
import { InfoChip } from './InfoChip';

interface HeroPosterProps {
  colorway: ColorwayBand;
  badges: InfoBadge[];
  photos: AthletePhoto[];
  activePhoto: AthletePhoto;
  onSelectPhoto: (photo: AthletePhoto) => void;
  onAddCustomPhoto: (photo: AthletePhoto) => void;
  typographyWords: { id: string; display: string; tag: string }[];
  activeWord: string;
  onSelectWord: (word: string) => void;
  onSelectColorway: (colorway: ColorwayBand) => void;
  allColorways: ColorwayBand[];
  profile?: UserProfile;
}

export const HeroPoster: React.FC<HeroPosterProps> = ({
  colorway,
  badges,
  photos,
  activePhoto,
  onSelectPhoto,
  onAddCustomPhoto,
  typographyWords,
  activeWord,
  onSelectWord,
  onSelectColorway,
  allColorways,
  profile
}) => {
  const [selectedBadge, setSelectedBadge] = useState<InfoBadge | null>(null);
  const [showGridOverlay, setShowGridOverlay] = useState<boolean>(true);
  const [photoFilter, setPhotoFilter] = useState<'normal' | 'editorial-contrast' | 'duotone'>('normal');
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);
  const [urlInput, setUrlInput] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadedPreview, setUploadedPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File reader helper for image upload
  const handleFileProcess = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setUploadedPreview(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleApplyCustomImage = () => {
    const finalImageSrc = uploadedPreview || urlInput.trim();
    if (!finalImageSrc) return;

    const newPhoto: AthletePhoto = {
      id: `custom-photo-${Date.now()}`,
      title: 'Custom User / ChatGPT Image',
      sport: 'User Portfolio Hero',
      imageSrc: finalImageSrc,
      alt: 'User custom uploaded hero portrait',
      credit: 'User Uploaded Asset',
      isCustom: true
    };

    onAddCustomPhoto(newPhoto);
    setShowUploadModal(false);
    setUploadedPreview(null);
    setUrlInput('');
  };

  return (
    <section 
      id="hero-poster-section" 
      aria-label="Athletic Campaign Hero Section"
      className="relative w-full overflow-hidden bg-[#121417] py-6 sm:py-8 px-3 sm:px-6 lg:px-8"
    >
      {/* Outer Editorial Poster Container with Precision Framing */}
      <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        
        {/* Poster Main Stage: Split into Two Color-Blocked Bands */}
        <div className="relative w-full h-[620px] sm:h-[720px] md:h-[780px] lg:h-[840px] select-none overflow-hidden">
          
          {/* =========================================================================
              BAND 1: TOP COLOR-BLOCKED BAND (e.g., Gray / Slate / Forest Green)
              Takes ~52% of the frame height
              ========================================================================= */}
          <div 
            className="absolute top-0 left-0 right-0 h-[52%] transition-colors duration-700 ease-in-out z-0 overflow-hidden"
            style={{ backgroundColor: colorway.bandTopBg }}
          >
            {showGridOverlay && (
              <div className="absolute inset-0 opacity-20 pointer-events-none poster-grid-lines" />
            )}

            {/* Top-Right Technical Registry Stamp */}
            <div className="absolute top-5 right-6 sm:right-8 hidden sm:flex items-center gap-3 text-[10px] font-mono-code tracking-[0.24em] text-white/50 z-20">
              <span className="flex items-center gap-1.5">
                <Crosshair className="w-3 h-3 text-[#DE9B26]" />
                ZONE: 01 // UPPER MATRIX
              </span>
              <span>•</span>
              <span>CALIBRATION 99.4%</span>
            </div>
          </div>

          {/* =========================================================================
              BAND 2: BOTTOM COLOR-BLOCKED BAND (e.g., Mustard Yellow)
              Takes ~48% of the frame height
              ========================================================================= */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[48%] transition-colors duration-700 ease-in-out z-0 overflow-hidden"
            style={{ backgroundColor: colorway.bandBottomBg }}
          >
            {showGridOverlay && (
              <div className="absolute inset-0 opacity-10 pointer-events-none poster-grid-lines" />
            )}

            {/* Bottom-Left Technical Stamp */}
            <div className="absolute bottom-4 left-6 sm:left-8 hidden sm:flex items-center gap-4 text-[10px] font-mono-code tracking-[0.22em] text-black/60 font-semibold z-20">
              <span>LATITUDE: 45°31' N</span>
              <span>//</span>
              <span>BAND RATIO: 52/48</span>
              <span>//</span>
              <span>ALL-TERRAIN SPEC</span>
            </div>
          </div>

          {/* =========================================================================
              THIN HORIZONTAL RULE FOR STRUCTURE (Dividing the two color bands)
              Features precision grid coordinates, tick marks, and crosshairs
              ========================================================================= */}
          <div 
            className="absolute top-[52%] left-0 right-0 -translate-y-1/2 z-10 pointer-events-none flex items-center justify-between px-4 sm:px-8"
          >
            {/* Left structural tick & label */}
            <div className="flex items-center gap-2 bg-[#121417] text-white px-2 py-0.5 rounded text-[9px] font-mono-code tracking-widest uppercase border border-white/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE9B26]" />
              <span>DATUM 0.52H</span>
            </div>

            {/* Continuous thin hairline horizontal line */}
            <div className="h-[1px] flex-1 mx-3 bg-white/40 shadow-[0_0_1px_rgba(0,0,0,0.5)]" />

            {/* Center crosshair stamp */}
            <div className="hidden md:flex items-center gap-1.5 text-[9px] font-mono-code text-white/90 bg-[#121417]/80 px-2.5 py-0.5 rounded border border-white/20 backdrop-blur-sm">
              <Crosshair className="w-3 h-3 text-[#C84E29]" />
              <span>AXIS // 0.00</span>
            </div>

            {/* Continuous thin hairline right */}
            <div className="h-[1px] flex-1 mx-3 bg-white/40 shadow-[0_0_1px_rgba(0,0,0,0.5)]" />

            {/* Right structural tick & label */}
            <div className="flex items-center gap-2 bg-[#121417] text-white px-2 py-0.5 rounded text-[9px] font-mono-code tracking-widest uppercase border border-white/20 shadow-sm">
              <span>REF // STRYDE-26</span>
            </div>
          </div>

          {/* Thin Vertical Structural Guidelines (Swiss Poster Grid Alignment) */}
          {showGridOverlay && (
            <>
              <div className="absolute top-0 bottom-0 left-6 sm:left-12 w-[1px] bg-white/15 pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 right-6 sm:right-12 w-[1px] bg-white/15 pointer-events-none z-10" />
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10 pointer-events-none z-10" />
            </>
          )}

          {/* =========================================================================
              SMALL TRACKED-OUT CAPTION BLOCK TOP-LEFT
              Perfectly aligned to the left grid structure
              ========================================================================= */}
          <motion.div 
            id="caption-block-top-left"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute top-6 sm:top-8 left-8 sm:left-14 z-20 max-w-xs sm:max-w-sm text-left pointer-events-auto"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 bg-[#C84E29] inline-block" />
              <p className="text-[10px] sm:text-[11px] font-mono-code tracking-[0.28em] uppercase text-white font-bold">
                [ SPEC // {profile ? profile.name.toUpperCase() : 'PROTOCOL 07'} ]
              </p>
            </div>
            <p className="text-[11px] sm:text-[12px] font-mono-code tracking-[0.22em] uppercase text-white/90 font-semibold leading-relaxed">
              {profile ? profile.title.toUpperCase() : 'AERODYNAMIC PHYSIOLOGY & FORCE DEVELOPMENT'}
            </p>
            <p className="text-[9px] sm:text-[10px] font-mono-code tracking-[0.24em] uppercase text-white/60 mt-1 leading-normal">
              {profile ? profile.captionText.toUpperCase() : 'HIGH-OUTPUT INTERVALS // SS-26 ATHLETIC CAMPAIGN'}
            </p>
            <div className="mt-2 flex items-center gap-2 text-[9px] font-mono-code tracking-[0.18em] text-[#DE9B26]">
              <span className="inline-block w-3 h-[1px] bg-[#DE9B26]" />
              <span>{profile ? profile.location.toUpperCase() : 'COORDINATES: 45°31\'12"N 122°40\'55"W'}</span>
            </div>
          </motion.div>

          {/* =========================================================================
              OVERSIZED CONDENSED DISPLAY TYPE FILLING ~70% OF THE FRAME HEIGHT
              Split across the two color bands with dramatic visual contrast
              ========================================================================= */}
          <div 
            id="oversized-display-typography"
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[5] overflow-hidden"
          >
            <div className="relative w-full h-[70%] flex flex-col items-center justify-center leading-[0.78] tracking-[-0.04em] font-headline text-center">
              <motion.div
                key={activeWord}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col items-center justify-center"
              >
                {/* Upper line / Primary word */}
                <span 
                  className="font-black uppercase tracking-tighter text-[19vw] sm:text-[17vw] md:text-[16vw] lg:text-[14.5vw] text-white/95 select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                  style={{
                    fontFamily: "'Anton', 'Barlow Condensed', sans-serif",
                    lineHeight: 0.8
                  }}
                >
                  {activeWord}
                </span>

                {/* Secondary condensed sub-row filling the 70% height block */}
                <div className="w-full flex items-center justify-between px-6 sm:px-16 mt-1 sm:mt-2 text-black/85 font-headline uppercase tracking-tighter text-[8vw] sm:text-[7vw] md:text-[6.5vw] lg:text-[5.5vw]">
                  <span className="text-[#193426] drop-shadow-sm">
                    {profile ? profile.name.toUpperCase() : 'RELENTLESS'}
                  </span>
                  <span className="text-[#C84E29] drop-shadow-sm">
                    PORTFOLIO
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* =========================================================================
              FULL-BLEED CUTOUT ACTION PHOTO OF AN ATHLETE / USER AGAINST A PLAIN BACKGROUND
              Overlapping the oversized condensed display typography
              ========================================================================= */}
          <motion.div 
            id="athlete-photo-container"
            key={activePhoto.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-[15] overflow-hidden"
          >
            <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
              <img
                src={activePhoto.imageSrc}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-contain sm:object-cover md:object-contain object-center transition-all duration-700 pointer-events-auto cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${
                  photoFilter === 'editorial-contrast' 
                    ? 'contrast-125 saturate-110' 
                    : photoFilter === 'duotone' 
                    ? 'contrast-150 grayscale' 
                    : 'contrast-105'
                }`}
                onClick={() => {
                  const currentIndex = photos.findIndex(p => p.id === activePhoto.id);
                  const nextIndex = (currentIndex + 1) % photos.length;
                  onSelectPhoto(photos[nextIndex]);
                }}
                title="Click image to cycle through available shots, or use 'Change Image' below"
              />

              {/* Dynamic bottom shadow blend */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* =========================================================================
              3–4 ROUNDED "INFO CHIP" BADGES (ICON TILE + LABEL) SCATTERED NEAR THE SUBJECT
              ========================================================================= */}
          <div 
            id="info-chips-layer"
            className="absolute inset-0 pointer-events-none z-30"
          >
            <div className="relative w-full h-full max-w-5xl mx-auto">
              {badges.map((badge, idx) => (
                <div key={badge.id} className="absolute pointer-events-auto">
                  <InfoChip
                    badge={badge}
                    index={idx}
                    isSelected={selectedBadge?.id === badge.id}
                    onSelect={(b) => setSelectedBadge(selectedBadge?.id === b.id ? null : b)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Selected Chip Details Popover */}
          <AnimatePresence>
            {selectedBadge && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className="absolute bottom-6 right-6 z-40 bg-[#121417]/95 border border-[#DE9B26]/40 backdrop-blur-lg rounded-2xl p-4 sm:p-5 shadow-2xl max-w-xs text-left"
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#DE9B26] font-bold">
                    [ METRIC TELEMETRY ]
                  </span>
                  <button 
                    onClick={() => setSelectedBadge(null)}
                    className="text-neutral-400 hover:text-white text-xs px-1.5 py-0.5 rounded bg-white/5"
                  >
                    ✕
                  </button>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                  {selectedBadge.category}
                </h4>
                <div className="text-2xl font-black text-[#DE9B26] font-mono-code my-1">
                  {selectedBadge.value}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {selectedBadge.subtext || 'Calibrated metrics and high-output benchmarks.'}
                </p>
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-neutral-400">
                  <span>SOURCE: PORTFOLIO ARCHIVE</span>
                  <span className="text-emerald-400 font-semibold">VERIFIED</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Action Controls on Poster (Bottom Right) */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2 bg-[#121417]/85 backdrop-blur-md p-1.5 rounded-full border border-white/15 shadow-xl">
            
            {/* Direct Upload / Change Image Button */}
            <button
              id="upload-custom-image-btn"
              onClick={() => setShowUploadModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code bg-[#DE9B26] text-[#121417] font-bold hover:bg-[#e8ac39] transition-transform active:scale-95 shadow-md"
              title="Upload your own image (e.g. from ChatGPT or device)"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>CHANGE IMAGE</span>
            </button>

            {/* Cycle Current Shots */}
            <button
              id="cycle-athlete-btn"
              onClick={() => {
                const currentIndex = photos.findIndex(p => p.id === activePhoto.id);
                const nextIndex = (currentIndex + 1) % photos.length;
                onSelectPhoto(photos[nextIndex]);
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 transition-colors"
              title="Cycle through available images"
            >
              <Layers className="w-3.5 h-3.5 text-[#DE9B26]" />
              <span>SHOT: {photos.findIndex(p => p.id === activePhoto.id) + 1}/{photos.length}</span>
            </button>

            {/* Toggle Grid Overlay */}
            <button
              id="toggle-grid-btn"
              onClick={() => setShowGridOverlay(!showGridOverlay)}
              className={`p-1.5 rounded-full text-xs transition-colors ${
                showGridOverlay ? 'bg-white/20 text-white' : 'bg-white/5 text-neutral-400 hover:text-white'
              }`}
              title="Toggle Swiss Architectural Grid Lines"
            >
              <Crosshair className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* =========================================================================
            POSTER CONTROL STRIP / SUB-BAR
            ========================================================================= */}
        <div className="bg-[#181A1F] border-t border-white/10 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          
          {/* Left: Typography Phrase Switcher */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#DE9B26]" />
              DISPLAY WORD:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {typographyWords.map((item) => (
                <button
                  key={item.id}
                  id={`btn-word-${item.id}`}
                  onClick={() => onSelectWord(item.display)}
                  className={`px-3 py-1 rounded-md text-xs font-mono-code uppercase transition-all ${
                    activeWord === item.display
                      ? 'bg-[#DE9B26] text-[#121417] font-bold shadow'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  {item.display}
                </button>
              ))}
            </div>
          </div>

          {/* Center: Muted Colorway Swatches Preview */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 hidden lg:inline">
              MUTED BANDS:
            </span>
            <div className="flex items-center gap-1.5">
              {allColorways.map((cw) => (
                <button
                  key={cw.id}
                  id={`btn-colorway-${cw.id}`}
                  onClick={() => onSelectColorway(cw)}
                  title={cw.name}
                  className={`group relative p-1 rounded-lg border transition-all ${
                    colorway.id === cw.id
                      ? 'border-[#DE9B26] bg-white/10 ring-1 ring-[#DE9B26]'
                      : 'border-white/10 hover:border-white/30 bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span 
                      className="w-3.5 h-3.5 rounded-sm border border-black/30" 
                      style={{ backgroundColor: cw.bandTopBg }}
                    />
                    <span 
                      className="w-3.5 h-3.5 rounded-sm border border-black/30" 
                      style={{ backgroundColor: cw.bandBottomBg }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Available Cutouts Quick Selector */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 hidden sm:inline">
              IMAGE SELECTOR:
            </span>
            <div className="flex items-center gap-1">
              {photos.map((photo, i) => (
                <button
                  key={photo.id}
                  id={`btn-photo-${photo.id}`}
                  onClick={() => onSelectPhoto(photo)}
                  className={`px-2 py-1 rounded text-xs font-mono-code font-bold transition-all ${
                    activePhoto.id === photo.id
                      ? 'bg-[#C84E29] text-white shadow'
                      : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                  }`}
                  title={photo.title}
                >
                  {photo.isCustom ? 'YOU' : `0${i + 1}`}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          IMAGE UPLOAD MODAL (DRAG & DROP + FILE PICKER + URL)
          ========================================================================= */}
      <AnimatePresence>
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div 
              className="bg-[#181A1F] border border-white/20 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-left"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadedPreview(null);
                }}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono-code uppercase tracking-wider text-[#DE9B26] font-bold mb-1">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>CUSTOM HERO CUTOUT / AVATAR</span>
                </div>
                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white">
                  UPLOAD YOUR CHATGPT OR RESUME PHOTO
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Drag and drop your ChatGPT-generated portrait, athletic cutout, or photo here to place it seamlessly on the poster.
                </p>
              </div>

              {/* Drag and Drop Box */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3 ${
                  isDragging 
                    ? 'border-[#DE9B26] bg-[#DE9B26]/10' 
                    : 'border-white/20 hover:border-white/40 bg-black/30'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                />

                {uploadedPreview ? (
                  <div className="space-y-3">
                    <img 
                      src={uploadedPreview} 
                      alt="Uploaded preview" 
                      className="max-h-44 mx-auto rounded-lg object-contain shadow-md border border-white/20"
                    />
                    <p className="text-xs font-mono-code text-emerald-400">
                      ✓ IMAGE LOADED READY TO APPLY
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#DE9B26]">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Click to browse or drag & drop image here
                      </p>
                      <p className="text-[11px] font-mono-code text-neutral-400 mt-1">
                        PNG, JPG, or WEBP (transparent cutout or solid background works great)
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Alternatively: URL Input */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono-code text-neutral-400">
                  <Link2 className="w-3.5 h-3.5 text-[#DE9B26]" />
                  <span>OR PASTE IMAGE URL:</span>
                </div>
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => {
                    setUrlInput(e.target.value);
                    if (e.target.value.startsWith('http')) {
                      setUploadedPreview(e.target.value);
                    }
                  }}
                  placeholder="https://example.com/my-chatgpt-image.png"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs font-mono-code text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#DE9B26]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setShowUploadModal(false);
                    setUploadedPreview(null);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-mono-code text-neutral-400 hover:text-white"
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  disabled={!uploadedPreview && !urlInput.trim()}
                  onClick={handleApplyCustomImage}
                  className="px-6 py-2.5 rounded-xl text-xs font-mono-code font-bold bg-[#DE9B26] text-[#121417] hover:bg-[#eab03e] disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5 transition-transform active:scale-95 shadow-md"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>APPLY TO POSTER</span>
                </button>
              </div>

              <div className="bg-white/5 p-3 rounded-lg text-[10px] font-mono-code text-neutral-400 leading-relaxed">
                💡 <span className="text-neutral-200 font-semibold">Tip:</span> You can also upload your ChatGPT image file or share its link right here in chat anytime, and I will permanently embed it into the project!
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
