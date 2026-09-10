export interface InfoBadge {
  id: string;
  icon: 'flame' | 'zap' | 'heart' | 'timer' | 'activity' | 'wind';
  category: string;
  value: string;
  subtext?: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  tileColor: 'burnt-orange' | 'forest-green' | 'mustard' | 'off-white';
}

export interface ColorwayBand {
  id: string;
  name: string;
  bandTopBg: string;
  bandTopText: string;
  bandBottomBg: string;
  bandBottomText: string;
  accentColor: string;
  ruleColor: string;
  description: string;
}

export interface AthletePhoto {
  id: string;
  title: string;
  sport: string;
  imageSrc: string;
  alt: string;
  credit: string;
  isCustom?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  metric?: string;
  link?: string;
  achievement?: string;
  imageSrc?: string;
  gallery?: string[];
  location?: string;
  brand?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  badgeColor?: 'burnt-orange' | 'forest-green' | 'mustard' | 'off-white';
}

export interface UserProfile {
  name: string;
  tagline: string;
  title: string;
  location: string;
  bio: string;
  contactEmail: string;
  phone?: string;
  linkedin?: string;
  heroDisplayWord: string;
  captionText: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  honors?: string;
}

export interface AthleticAchievement {
  id: string;
  event: string;
  result: string;
  scope: string;
  detail: string;
  icon?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string;
}

