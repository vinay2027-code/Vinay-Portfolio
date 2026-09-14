/**
 * Utility for image compression, backend synchronization, and photo storage.
 */

export interface DossierPhotoMeta {
  dataUrl: string;
  name?: string;
  timestamp?: number;
}

export async function getStoredDossierPhoto(): Promise<DossierPhotoMeta | null> {
  try {
    const raw = localStorage.getItem('vinay_dossier_custom_photo');
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('Could not read stored dossier photo', e);
  }
  return null;
}

export async function saveDossierPhoto(dataUrl: string, name?: string): Promise<void> {
  try {
    const payload: DossierPhotoMeta = {
      dataUrl,
      name: name || 'dossier_photo',
      timestamp: Date.now(),
    };
    localStorage.setItem('vinay_dossier_custom_photo', JSON.stringify(payload));
    window.dispatchEvent(new CustomEvent('vinay_dossier_photo_updated', { detail: payload }));
  } catch (e) {
    console.warn('Failed to save dossier photo to localStorage', e);
  }
}

export async function clearStoredDossierPhoto(): Promise<void> {
  try {
    localStorage.removeItem('vinay_dossier_custom_photo');
    window.dispatchEvent(new Event('vinay_dossier_photo_cleared'));
  } catch (e) {
    console.warn('Failed to clear dossier photo', e);
  }
}

export async function compressImage(file: File, maxDim = 1400, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => {
        resolve(e.target?.result as string);
      };
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function uploadPhotoToBackend(slot: string, dataUrl: string): Promise<string | null> {
  try {
    const res = await fetch('/api/upload-photo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slot, dataUrl }),
    });
    if (res.ok) {
      const data = await res.json();
      return data.url || null;
    }
  } catch (err) {
    console.warn('Backend photo upload failed', err);
  }
  return null;
}
