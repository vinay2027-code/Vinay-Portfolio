import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Check, Image as ImageIcon, Trash2, Shield, Sparkles } from 'lucide-react';

interface SecretAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPhotosUpdated: () => void;
}

export const SecretAdminModal: React.FC<SecretAdminModalProps> = ({
  isOpen,
  onClose,
  onPhotosUpdated,
}) => {
  const [melaPhotos, setMelaPhotos] = useState<{ stallPhoto: string | null; teamPhoto: string | null }>(() => {
    try {
      const saved = localStorage.getItem('vinay_dropshipping_mela_photos');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return { stallPhoto: null, teamPhoto: null };
  });

  useEffect(() => {
    fetch('/api/mela-photos')
      .then(res => res.json())
      .then(data => {
        setMelaPhotos(prev => ({
          stallPhoto: prev.stallPhoto || data.stall,
          teamPhoto: prev.teamPhoto || data.team,
        }));
      })
      .catch(() => {});
  }, [isOpen]);

  const [gigPhotos, setGigPhotos] = useState<{
    blinkitPhoto: string | null;
    autoPhoto: string | null;
    deliveryPhoto: string | null;
  }>(() => {
    try {
      const saved = localStorage.getItem('vinay_gig_worker_research_photos');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return { blinkitPhoto: null, autoPhoto: null, deliveryPhoto: null };
  });

  const stallInputRef = useRef<HTMLInputElement>(null);
  const teamInputRef = useRef<HTMLInputElement>(null);
  const blinkitInputRef = useRef<HTMLInputElement>(null);
  const autoInputRef = useRef<HTMLInputElement>(null);
  const deliveryInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleMelaUpload = (file: File, slot: 'stallPhoto' | 'teamPhoto') => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const result = e.target?.result as string;
      const updated = { ...melaPhotos, [slot]: result };
      setMelaPhotos(updated);
      try {
        localStorage.setItem('vinay_dropshipping_mela_photos', JSON.stringify(updated));
      } catch (err) {
        console.warn('Storage quota exceeded', err);
      }

      // Backend persistent write
      try {
        await fetch('/api/upload-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            slot: slot === 'stallPhoto' ? 'stall' : 'team',
            dataUrl: result,
          }),
        });
      } catch (err) {
        console.warn(err);
      }

      onPhotosUpdated();
    };
    reader.readAsDataURL(file);
  };

  const removeMelaPhoto = (slot: 'stallPhoto' | 'teamPhoto') => {
    const updated = { ...melaPhotos, [slot]: null };
    setMelaPhotos(updated);
    localStorage.setItem('vinay_dropshipping_mela_photos', JSON.stringify(updated));
    onPhotosUpdated();
  };

  const handleGigUpload = (file: File, slot: 'blinkitPhoto' | 'autoPhoto' | 'deliveryPhoto') => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      const updated = { ...gigPhotos, [slot]: result };
      setGigPhotos(updated);
      try {
        localStorage.setItem('vinay_gig_worker_research_photos', JSON.stringify(updated));
      } catch (err) {
        console.warn('Storage quota exceeded', err);
      }
      onPhotosUpdated();
    };
    reader.readAsDataURL(file);
  };

  const removeGigPhoto = (slot: 'blinkitPhoto' | 'autoPhoto' | 'deliveryPhoto') => {
    const updated = { ...gigPhotos, [slot]: null };
    setGigPhotos(updated);
    localStorage.setItem('vinay_gig_worker_research_photos', JSON.stringify(updated));
    onPhotosUpdated();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b1610] border-2 border-[#ffe600] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 text-white font-mono-code relative">
        
        {/* Hidden inputs */}
        <input ref={stallInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleMelaUpload(e.target.files[0], 'stallPhoto')} />
        <input ref={teamInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleMelaUpload(e.target.files[0], 'teamPhoto')} />
        <input ref={blinkitInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleGigUpload(e.target.files[0], 'blinkitPhoto')} />
        <input ref={autoInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleGigUpload(e.target.files[0], 'autoPhoto')} />
        <input ref={deliveryInputRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleGigUpload(e.target.files[0], 'deliveryPhoto')} />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#ffe600]" />
            <span className="font-bold text-sm tracking-wider text-[#ffe600]">
              OWNER BACKEND // PHOTO ASSET CONSOLE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-white/60 mb-6 font-sans">
          This console is strictly hidden from regular visitors. Any photo you upload here will immediately appear in your showcase cards and persist in this browser.
        </p>

        {/* Section 1: Dropshipping Mela (DLF CyberHub) */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-[#ffe600] uppercase mb-4 tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>1. Dropshipping Mela (DLF CyberHub) Showcase Photos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Slot 1: Stall Photo */}
            <div className="bg-[#050f09] border border-white/15 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-white uppercase">Booth / Stall Photo</span>
                  {melaPhotos.stallPhoto && (
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-3 h-3" /> ACTIVE
                    </span>
                  )}
                </div>

                <div className="w-full h-36 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden mb-3">
                  {melaPhotos.stallPhoto ? (
                    <img src={melaPhotos.stallPhoto} alt="Booth Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center text-white/30 text-xs flex flex-col items-center">
                      <ImageIcon className="w-6 h-6 mb-1" />
                      <span>No photo uploaded</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => stallInputRef.current?.click()}
                  className="flex-1 bg-[#ffe600] text-black font-bold text-xs py-2 px-3 rounded-lg hover:bg-[#ffe600]/90 transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{melaPhotos.stallPhoto ? 'Change Photo' : 'Upload Booth Photo'}</span>
                </button>
                {melaPhotos.stallPhoto && (
                  <button
                    onClick={() => removeMelaPhoto('stallPhoto')}
                    className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors"
                    title="Remove Photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Slot 2: Team Photo */}
            <div className="bg-[#050f09] border border-white/15 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-white uppercase">Team TAARA Photo</span>
                  {melaPhotos.teamPhoto && (
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-3 h-3" /> ACTIVE
                    </span>
                  )}
                </div>

                <div className="w-full h-36 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden mb-3">
                  {melaPhotos.teamPhoto ? (
                    <img src={melaPhotos.teamPhoto} alt="Team Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center text-white/30 text-xs flex flex-col items-center">
                      <ImageIcon className="w-6 h-6 mb-1" />
                      <span>No photo uploaded</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => teamInputRef.current?.click()}
                  className="flex-1 bg-emerald-400 text-black font-bold text-xs py-2 px-3 rounded-lg hover:bg-emerald-300 transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{melaPhotos.teamPhoto ? 'Change Photo' : 'Upload Team Photo'}</span>
                </button>
                {melaPhotos.teamPhoto && (
                  <button
                    onClick={() => removeMelaPhoto('teamPhoto')}
                    className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors"
                    title="Remove Photo"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Field Research Photos (Optional) */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase mb-3 tracking-wider">
            <span>2. Field Research Photos (Blinkit, E-Auto, Swiggy)</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { key: 'blinkitPhoto', label: 'Blinkit Night', ref: blinkitInputRef },
              { key: 'autoPhoto', label: 'E-Mobility Auto', ref: autoInputRef },
              { key: 'deliveryPhoto', label: 'Last-Mile Drop', ref: deliveryInputRef },
            ].map(({ key, label, ref }) => {
              const photo = gigPhotos[key as keyof typeof gigPhotos];
              return (
                <div key={key} className="bg-[#050f09] border border-white/10 rounded-lg p-2.5 flex flex-col justify-between">
                  <span className="text-[10px] text-white/70 uppercase truncate mb-1">{label}</span>
                  <div className="h-16 w-full rounded bg-black/40 mb-2 overflow-hidden flex items-center justify-center">
                    {photo ? (
                      <img src={photo} alt={label} className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-4 h-4 text-white/20" />
                    )}
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => ref.current?.click()}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white text-[10px] py-1 rounded transition-colors"
                    >
                      {photo ? 'Replace' : 'Upload'}
                    </button>
                    {photo && (
                      <button
                        onClick={() => removeGigPhoto(key as any)}
                        className="p-1 bg-red-500/20 text-red-400 rounded text-[10px]"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Access Instructions Footer */}
        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[11px] text-white/50 flex flex-col gap-1">
          <div className="text-white/80 font-bold">How to reopen this console later:</div>
          <div>• Press <kbd className="bg-black px-1.5 py-0.5 rounded border border-white/20 text-white font-mono">Ctrl + Shift + U</kbd> (or <kbd className="bg-black px-1.5 py-0.5 rounded border border-white/20 text-white font-mono">Cmd + Shift + U</kbd>) anywhere on the page.</div>
          <div>• Or add <span className="text-[#ffe600]">#admin</span> to your portfolio URL in the browser bar and press Enter.</div>
        </div>

      </div>
    </div>
  );
};
