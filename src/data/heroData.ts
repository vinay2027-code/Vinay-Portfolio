import { InfoBadge, ColorwayBand, AthletePhoto } from '../types';

import vinayExecutive from '../assets/images/P1054355.JPG';
import vinay1 from '../assets/images/vinay_hero_portrait_1789032472927.jpg';
import vinay2 from '../assets/images/vinay_locker_room_1789032504110.jpg';
import vinay3 from '../assets/images/vinay_pitch_walk_1789032528483.jpg';

export const ATHLETE_PHOTOS: AthletePhoto[] = [
  {
    id: 'vinay-executive-suit',
    title: 'Vinay G // Category Operations Executive',
    sport: 'Operations Leader // Masters\' Union',
    imageSrc: vinayExecutive,
    alt: 'Vinay G in tailored dark suit with crossed arms (P1054355)',
    credit: 'P1054355 // 2026'
  },
  {
    id: 'vinay-hero-stadium',
    title: 'Vinay G // Old Trafford Stride (1980s Retro Kit)',
    sport: 'State Athlete // Sprint & Operations',
    imageSrc: vinay1,
    alt: 'Vinay G in vintage 1980s Manchester United kit with sunglasses at stadium',
    credit: 'Campaign Archive // Vinay G'
  },
  {
    id: 'vinay-locker-room',
    title: 'Vinay G // Locker Room Heritage ("United Always")',
    sport: 'PGP Sports Management & Gaming // Master\'s Union',
    imageSrc: vinay2,
    alt: 'Vinay G in retro 1980s dressing room with teammates on wooden bench',
    credit: 'Campaign Archive // Locker Room 1985 Series'
  },
  {
    id: 'vinay-pitch-walk',
    title: 'Vinay G // Pitch Tunnel Walk ("More Than A Club")',
    sport: 'Gold Medalist Track & Operations Leader',
    imageSrc: vinay3,
    alt: 'Vinay G walking across stadium pitch in retro red football kit',
    credit: 'Campaign Archive // Oct 26 1985 Series'
  }
];

export const INFO_BADGES: InfoBadge[] = [
  {
    id: 'badge-skus',
    icon: 'activity',
    category: 'SKU OPERATIONS',
    value: '20,000+ SKUs',
    subtext: '95% Accuracy // Supertails',
    position: {
      top: '18%',
      right: '10%'
    },
    tileColor: 'burnt-orange'
  },
  {
    id: 'badge-gold',
    icon: 'zap',
    category: 'TRACK ATHLETICS',
    value: 'GOLD // 1ST / 70+',
    subtext: '200m & 100m District Medalist',
    position: {
      top: '38%',
      left: '7%'
    },
    tileColor: 'forest-green'
  },
  {
    id: 'badge-quickcomm',
    icon: 'timer',
    category: 'QUICK COMMERCE',
    value: '30-MIN LAUNCH',
    subtext: 'Bengaluru 3,000+ Live SKUs',
    position: {
      bottom: '22%',
      right: '12%'
    },
    tileColor: 'mustard'
  },
  {
    id: 'badge-warehouses',
    icon: 'flame',
    category: 'SUPPLY NETWORK',
    value: '40+ WAREHOUSES',
    subtext: '6–7 Daily Inbound Shipments',
    position: {
      bottom: '12%',
      left: '12%'
    },
    tileColor: 'off-white'
  }
];

export const COLORWAY_PRESETS: ColorwayBand[] = [
  {
    id: 'gray-mustard',
    name: 'Industrial Slate + Mustard Yellow',
    bandTopBg: '#2A2D34', // Refined cool slate gray
    bandTopText: '#F6F5F0',
    bandBottomBg: '#DE9B26', // Rich muted mustard yellow
    bandBottomText: '#1B3B2B', // Contrast forest green on mustard
    accentColor: '#C84E29', // Burnt orange accent
    ruleColor: '#F6F5F0',
    description: 'Classic editorial sports campaign blocking: technical cool gray anchored by high-energy mustard yellow.'
  },
  {
    id: 'forest-mustard',
    name: 'Forest Green + Mustard Yellow',
    bandTopBg: '#193426', // Deep forest green
    bandTopText: '#F6F5F0',
    bandBottomBg: '#DE9B26',
    bandBottomText: '#193426',
    accentColor: '#C84E29',
    ruleColor: '#E5A93C',
    description: 'Heritage outdoor athletics pairing deep pine forest green with vibrant track mustard.'
  },
  {
    id: 'slate-burntorange',
    name: 'Charcoal Gray + Burnt Orange',
    bandTopBg: '#1E2024',
    bandTopText: '#F6F5F0',
    bandBottomBg: '#C84E29', // Burnt orange
    bandBottomText: '#F6F5F0',
    accentColor: '#DE9B26',
    ruleColor: '#F6F5F0',
    description: 'High-contrast nocturnal tone with explosive terracotta burnt orange foundation.'
  },
  {
    id: 'offwhite-forest',
    name: 'Off-White + Deep Forest Green',
    bandTopBg: '#F3F1EA',
    bandTopText: '#193426',
    bandBottomBg: '#193426',
    bandBottomText: '#F6F5F0',
    accentColor: '#DE9B26',
    ruleColor: '#193426',
    description: 'Modernist Swiss poster styling with clean off-white field contrasting rich evergreen.'
  }
];

export const TYPOGRAPHY_WORDS = [
  { id: 'relentless', display: 'RELENTLESS', tag: 'ATHLETIC DRIVE 01' },
  { id: 'velocity', display: 'VELOCITY', tag: 'TRACK & COMMERCE 02' },
  { id: 'operations', display: 'OPERATIONS', tag: 'SUPPLY NETWORK 03' },
  { id: 'discipline', display: 'DISCIPLINE', tag: 'CHAMPIONSHIP 04' }
];
