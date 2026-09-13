// High-capacity client-side IndexedDB persistence for authentic camera files
const DB_NAME = 'vinay_portfolio_archive_db';
const STORE_NAME = 'dossier_assets';
const KEY_NAME = 'active_portrait_image';

export interface StoredImageMeta {
  dataUrl: string;
  name: string;
  size: number;
  type: string;
  updatedAt: string;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveDossierPhoto(fileDataUrl: string, name: string = 'P1054355.JPG', size: number = 0, type: string = 'image/jpeg'): Promise<StoredImageMeta> {
  const meta: StoredImageMeta = {
    dataUrl: fileDataUrl,
    name,
    size,
    type,
    updatedAt: new Date().toISOString(),
  };

  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.put(meta, KEY_NAME);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });

    // Also notify listeners across windows/tabs
    window.dispatchEvent(new CustomEvent('vinay_dossier_photo_updated', { detail: meta }));
    return meta;
  } catch (err) {
    console.warn('IndexedDB write error, attempting localStorage fallback:', err);
    try {
      localStorage.setItem(KEY_NAME, JSON.stringify(meta));
      window.dispatchEvent(new CustomEvent('vinay_dossier_photo_updated', { detail: meta }));
      return meta;
    } catch (localErr) {
      console.error('Failed to persist photo in localStorage:', localErr);
      throw localErr;
    }
  }
}

export async function getStoredDossierPhoto(): Promise<StoredImageMeta | null> {
  try {
    const db = await openDB();
    const result = await new Promise<StoredImageMeta | null>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.get(KEY_NAME);

      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });

    if (result) return result;
  } catch (err) {
    console.warn('IndexedDB read error, attempting localStorage fallback:', err);
  }

  // Fallback check
  try {
    const local = localStorage.getItem(KEY_NAME);
    if (local) {
      return JSON.parse(local) as StoredImageMeta;
    }
  } catch (e) {
    console.warn('localStorage read error:', e);
  }

  return null;
}

export async function clearStoredDossierPhoto(): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.delete(KEY_NAME);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB delete error:', err);
  }

  try {
    localStorage.removeItem(KEY_NAME);
  } catch (e) {
    console.warn('localStorage delete error:', e);
  }

  window.dispatchEvent(new CustomEvent('vinay_dossier_photo_cleared'));
}
