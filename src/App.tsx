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
import { PhotoUploadModal } from './components/PhotoUploadModal';

import { ATHLETE_PHOTOS } from './data/heroData';
import { 
  DEFAULT_PROFILE, 
  DEFAULT_PROJECTS, 
  DEFAULT_EXPERIENCES 
} from './data/portfolioData';
import { AthletePhoto, UserProfile, ProjectItem, ExperienceItem } from './types';

export default function App() {
  // Photos with LocalStorage Persistence
  const [photosList, setPhotosList] = useState<AthletePhoto[]>(() => {
    try {
      const saved = localStorage.getItem('vinay_portfolio_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.some(p => p.id === 'vinay-executive-suit')) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('LocalStorage read error:', e);
    }
    return ATHLETE_PHOTOS;
  });

  const [activePhotoId, setActivePhotoId] = useState<string>('vinay-executive-suit');

  const [activeSection, setActiveSection] = useState<string>('about');
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [projects, setProjects] = useState<ProjectItem[]>(DEFAULT_PROJECTS);
  const [experiences, setExperiences] = useState<ExperienceItem[]>(DEFAULT_EXPERIENCES);

  // Modals state
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);

  // Save custom photos to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vinay_portfolio_photos', JSON.stringify(photosList));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [photosList]);

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

  // Handlers for photos
  const handleSelectPhoto = (id: string) => {
    setActivePhotoId(id);
  };

  const handleAddCustomPhoto = (newPhoto: AthletePhoto) => {
    setPhotosList(prev => [newPhoto, ...prev]);
    setActivePhotoId(newPhoto.id);
  };

  const handleResetPhotos = () => {
    localStorage.removeItem('vinay_portfolio_photos');
    setPhotosList(ATHLETE_PHOTOS);
    setActivePhotoId(ATHLETE_PHOTOS[0].id);
  };

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
          onSelectPhoto={handleSelectPhoto}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onAddCustomPhoto={handleAddCustomPhoto}
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
        onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
      />

      {/* Printable / Downloadable Official 1-Page Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        profile={profile}
        experiences={experiences}
        projects={projects}
      />

      {/* High-Resolution Photo Upload & Gallery Modal */}
      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        photos={photosList}
        activePhotoId={activePhotoId}
        onSelectPhoto={handleSelectPhoto}
        onAddCustomPhoto={handleAddCustomPhoto}
        onResetPhotos={handleResetPhotos}
      />

    </div>
  );
}
