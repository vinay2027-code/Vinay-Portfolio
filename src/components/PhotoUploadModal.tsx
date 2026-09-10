import React, { useState, useRef } from 'react';
import { X, Upload, Image, Check, RefreshCw, Sparkles, AlertCircle } from 'lucide-react';
import { AthletePhoto } from '../types';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: AthletePhoto[];
  activePhotoId: string;
  onSelectPhoto: (id: string) => void;
  onAddCustomPhoto: (newPhoto: AthletePhoto) => void;
  onResetPhotos: () => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  photos,
  activePhotoId,
  onSelectPhoto,
  onAddCustomPhoto,
  onResetPhotos
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [photoTitle, setPhotoTitle] = useState('Vinay G // Original High-Res Portrait');
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewSrc(result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSaveUploadedPhoto = () => {
    if (!previewSrc) return;
    const newId = `custom-photo-${Date.now()}`;
    const newPhoto: AthletePhoto = {
      id: newId,
      title: photoTitle || 'Vinay G // Custom Upload',
      sport: 'Executive & Athlete Portfolio',
      imageSrc: previewSrc,
      alt: 'Vinay G executive portrait',
      credit: 'User Uploaded High-Res Archive'
    };

    onAddCustomPhoto(newPhoto);
    onSelectPhoto(newId);
    setPreviewSrc(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#14171F] border border-white/15 text-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E1015]">
          <div>
            <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#DE9B26]">
              MEDIA ASSETS // PHOTO GALLERY & UPLOAD
            </div>
            <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white mt-0.5">
              Select or Upload High-Resolution Photo
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Active Photos Gallery */}
          <div>
            <label className="block text-xs font-mono-code text-neutral-400 uppercase tracking-wider mb-2.5">
              1. Choose From Existing Gallery Shots
            </label>
            <div className="grid grid-cols-3 gap-3">
              {photos.map((photo) => {
                const isActive = photo.id === activePhotoId;
                return (
                  <button
                    key={photo.id}
                    onClick={() => {
                      onSelectPhoto(photo.id);
                      onClose();
                    }}
                    className={`relative rounded-xl overflow-hidden border-2 text-left group transition-all aspect-[4/5] bg-black/40 ${
                      isActive 
                        ? 'border-[#DE9B26] shadow-lg shadow-[#DE9B26]/20' 
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img 
                      src={photo.imageSrc} 
                      alt={photo.alt}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2">
                      <span className="text-[10px] font-bold text-white leading-tight truncate">
                        {photo.title.split('//')[1] || photo.title}
                      </span>
                    </div>
                    {isActive && (
                      <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#DE9B26] text-black flex items-center justify-center shadow">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Upload New File Section */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider">
                2. Or Upload Your Exact High-Res Photo File
              </label>
              <span className="text-[10px] font-mono-code text-[#DE9B26]">
                PNG, JPG, WEBP (No Compression)
              </span>
            </div>

            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
                dragActive
                  ? 'border-[#DE9B26] bg-[#DE9B26]/10'
                  : 'border-white/15 hover:border-white/30 bg-white/[0.02]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFile(e.target.files[0]);
                  }
                }}
              />
              <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-white">
                Drag and drop your original image here, or click to browse
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Drop your original photoshoot image directly for maximum sharpness and clarity
              </p>
            </div>

            {/* Preview & Save Form */}
            {previewSrc && (
              <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <img
                  src={previewSrc}
                  alt="Upload preview"
                  className="w-20 h-24 object-cover rounded-lg border border-white/20 shrink-0"
                />
                <div className="flex-1 w-full space-y-2">
                  <input
                    type="text"
                    value={photoTitle}
                    onChange={(e) => setPhotoTitle(e.target.value)}
                    placeholder="Enter photo title or note"
                    className="w-full px-3 py-1.5 rounded-lg bg-black/40 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DE9B26]"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSaveUploadedPhoto}
                      className="px-4 py-1.5 rounded-lg bg-[#DE9B26] text-black font-bold text-xs hover:bg-[#eab03e] transition-colors"
                    >
                      Set As Active Portrait
                    </button>
                    <button
                      onClick={() => setPreviewSrc(null)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-neutral-300 text-xs hover:bg-white/15 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Reset to Factory Defaults */}
          <div className="pt-2 flex justify-between items-center text-xs text-neutral-400 border-t border-white/10">
            <span>Uploaded images persist in browser storage.</span>
            <button
              onClick={() => {
                if (confirm('Reset gallery to default photoshoot archive?')) {
                  onResetPhotos();
                  onClose();
                }
              }}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
