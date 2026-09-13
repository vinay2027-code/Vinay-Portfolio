import React, { useState, useEffect } from 'react';
import { CuttingMatFrame } from './components/AtulKhola/CuttingMatFrame';
import { AtulNavPill } from './components/AtulKhola/AtulNavPill';
import { AboutChapter } from './components/AtulKhola/AboutChapter';
import { BrandsChapter } from './components/AtulKhola/BrandsChapter';
import { WorkChapter } from './components/AtulKhola/WorkChapter';
import { InfluenceChapter } from './components/AtulKhola/InfluenceChapter';
import { ContactChapter } from './components/AtulKhola/ContactChapter';
import { InteractiveStickers } from './components/AtulKhola/InteractiveStickers';

import { ResumeModal } from './components/ResumeModal';
import { SecretAdminModal } from './components/SecretAdminModal';
import { getStoredDossierPhoto } from './utils/photoStorage';

import { ATHLETE_PHOTOS } from './data/heroData';
import { 
  DEFAULT_PROFILE, 
  DEFAULT_PROJECTS, 
  DEFAULT_EXPERIENCES 
} from './data/portfolioData';
import { AthletePhoto, UserProfile, ProjectItem, ExperienceItem } from './types';

export default function App() {
  const [photosList] = useState<AthletePhoto[]>(ATHLETE_PHOTOS);
  const [activePhotoId] = useState<string>('vinay-executive-suit');
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const [activeSection, setActiveSection] = useState<string>('about');
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [projects, setProjects] = useState<ProjectItem[]>(DEFAULT_PROJECTS);
  const [experiences, setExperiences] = useState<ExperienceItem[]>(DEFAULT_EXPERIENCES);

  // Modals state
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isSecretAdminOpen, setIsSecretAdminOpen] = useState<boolean>(false);

  // Hidden admin access: URL hash (#admin) or keyboard shortcut (Ctrl+Shift+U or Cmd+Shift+U)
  useEffect(() => {
    const checkAdminTrigger = () => {
      if (
        window.location.hash.toLowerCase() === '#admin' ||
        window.location.search.includes('admin=true') ||
        window.location.search.includes('admin=1')
      ) {
        setIsSecretAdminOpen(true);
      }
    };

    checkAdminTrigger();
    window.addEventListener('hashchange', checkAdminTrigger);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Shift+U or Cmd+Shift+U (Upload) or Ctrl+Shift+A (Admin)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key.toLowerCase() === 'u' || e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        setIsSecretAdminOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('hashchange', checkAdminTrigger);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Check for custom stored dossier photo on startup
  useEffect(() => {
    getStoredDossierPhoto().then((meta) => {
      if (meta?.dataUrl) {
        setCustomPhotoUrl(meta.dataUrl);
      }
    });

    const handlePhotoUpdated = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.dataUrl) {
        setCustomPhotoUrl(customEvent.detail.dataUrl);
      }
    };

    const handlePhotoCleared = () => {
      setCustomPhotoUrl(null);
    };

    window.addEventListener('vinay_dossier_photo_updated', handlePhotoUpdated);
    window.addEventListener('vinay_dossier_photo_cleared', handlePhotoCleared);

    return () => {
      window.removeEventListener('vinay_dossier_photo_updated', handlePhotoUpdated);
      window.removeEventListener('vinay_dossier_photo_cleared', handlePhotoCleared);
    };
  }, []);

  // ScrollSpy to keep Nav Pill active state in sync
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'brands', 'work', 'influence', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#060807] text-[#F3F4F6] font-sans selection:bg-[#ffe600] selection:text-black antialiased relative">
      
      {/* The Signature Cutting Mat Screen (inspired by atulkhola.com) */}
      <CuttingMatFrame>
        
        {/* Playful set-dressing stickers around the mat */}
        <InteractiveStickers />

        {/* Chapter 01: //about */}
        <AboutChapter
          profile={profile}
          photos={photosList}
          activePhotoId={activePhotoId}
          customPhotoSrc={customPhotoUrl}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* Chapter 02: //brands (//BRANDS & OPERATIONS) */}
        <BrandsChapter experiences={experiences} />

        {/* Chapter 03: //work (//CASE STUDIES & RESEARCH) */}
        <WorkChapter projects={projects} />

        {/* Chapter 04: //influence (//HONORS, ATHLETICS & SCHOLARSHIP RECEIPTS) */}
        <InfluenceChapter />

        {/* Chapter 05: //contact (//GET IN TOUCH) */}
        <ContactChapter
          profile={profile}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

      </CuttingMatFrame>

      {/* Floating Bottom Nav Pill (atulkhola.com #pill) */}
      <AtulNavPill
        activeSection={activeSection}
        onNavigate={setActiveSection}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Printable / Downloadable Official 1-Page Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
        experiences={experiences}
        projects={projects}
      />

      {/* Secret Owner Backend Photo Console (Hidden from public) */}
      <SecretAdminModal
        isOpen={isSecretAdminOpen}
        onClose={() => {
          setIsSecretAdminOpen(false);
          // If hash is #admin, clear it without reload
          if (window.location.hash.toLowerCase() === '#admin') {
            history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }}
        onPhotosUpdated={() => {
          window.dispatchEvent(new Event('vinay_photos_updated'));
        }}
      />

    </div>
  );
}
