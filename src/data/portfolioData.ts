import { 
  ProjectItem, 
  ExperienceItem, 
  UserProfile, 
  EducationItem, 
  AthleticAchievement, 
  CertificationItem 
} from '../types';

export const DEFAULT_PROFILE: UserProfile = {
  name: 'VINAY G',
  tagline: 'SUPPLY CHAIN & OPERATIONS // SPORTS MANAGEMENT & GAMING',
  title: 'Category Management & E-Commerce Operations Executive | State Athlete',
  location: 'BENGALURU // GURUGRAM, INDIA',
  bio: 'Supply Chain & Operations professional specializing in Category Management, Vendor Management, and E-commerce Operations. Managed 20,000+ SKUs with 95% accuracy, spearheaded Bengaluru’s 30-minute Quick Commerce catalogue launch, and state-level track athlete (100m, 200m, 400m). Recipient of the 20% Pankaj Bansal Scholarship for Young Leaders at Masters’ Union.',
  contactEmail: 'vinay2027@mastersunion.org',
  phone: '+91 6360682258',
  linkedin: 'https://linkedin.com/in/vinay-g',
  heroDisplayWord: 'RELENTLESS',
  captionText: 'SPEC // VINAY G — MASTERS\' UNION & ATHLETICS ARCHIVE'
};

export const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-dropshipping-mela',
    title: 'Dropshipping Mela | Sales & Entrepreneurship',
    category: 'VENTURE CREATION // ON-GROUND RETAIL & SALES',
    year: '2026',
    description: 'Led the on-ground sales and marketing of a crystal & gemstone brand at DLF CyberHub, generating ₹97,000 in revenue in a single day. The experience strengthened my skills in sales, customer engagement, marketing, teamwork, and real-time business decision-making.',
    tags: ['On-Ground Sales', 'DLF CyberHub', 'TAARA', 'High-Footfall Retail', 'Real-Time Decision Making', 'Team TAARA'],
    metric: '₹97K REVENUE IN 1 DAY',
    achievement: '₹97K Revenue | High-footfall Retail Experience | End-to-End Sales & Marketing',
    location: 'DLF CyberHub, Gurugram',
    brand: 'TAARA // Masters\' Union',
    link: '#'
  },
  {
    id: 'proj-easybill',
    title: 'EasyBill — Smart GST Invoicing & Merchant Management',
    category: 'SOFTWARE PRODUCT // MERCHANT TECH & SME INVOICING',
    year: '2026',
    description: 'Built EasyBill, a mobile-first billing and merchant management application designed to simplify everyday operations for small retailers, FMCG merchants, and distributors. The app brings GST invoicing, inventory management, customer credit (Khata), payment reminders, and UPI payments into one simple platform.',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Product Builder', 'GST Invoicing', 'Digital Khata', 'Inventory Management', 'UPI Payments'],
    metric: 'MOBILE-FIRST MERCHANT ERP',
    achievement: 'Fast GST Billing, Digital Khata, Dynamic UPI QR & A4/Thermal Invoicing',
    brand: 'Role: Product Builder / Frontend Developer',
    link: '#'
  },
  {
    id: 'proj-gig-worker-research',
    title: 'Gig Worker Research | Field Research & Business Insights',
    category: 'FIELD RESEARCH // WORKFORCE DYNAMICS & QUICK COMMERCE',
    year: '2026',
    description: 'Conducted primary research with gig workers in the quick-commerce ecosystem to understand their day-to-day challenges, working conditions, earnings, incentives, and operational pain points. The project involved field interactions, structured interviews, and analysis of worker experiences to identify key insights around last-mile delivery, platform operations, workforce management, and gig-economy dynamics.',
    tags: ['Primary Research', 'Data Collection', 'Consumer & Worker Insights', 'Operations Analysis', 'Problem Solving', 'Last-Mile Delivery', 'Quick Commerce'],
    metric: 'FIELD ETHNOGRAPHY // PRIMARY INSIGHTS',
    achievement: 'Field Interactions & Structured Interviews with Blinkit, Quick Commerce & E-Mobility Gig Fleets',
    location: 'Gurugram & NCR Urban Hubs',
    link: '#'
  },
  {
    id: 'proj-quickcomm',
    title: 'Bengaluru 30-Minute Quick Commerce Catalog Rollout',
    category: 'SUPPLY CHAIN // E-COMMERCE OPERATIONS',
    year: '2025 — 2026',
    description: 'Spearheaded end-to-end catalogue operations for 3,000+ active SKUs to facilitate Supertails\' high-velocity 30-minute instant delivery rollout across Bengaluru hubs.',
    tags: ['Quick Commerce', 'Catalogue Ops', 'Warehouse Mapping', 'Category Strategy'],
    metric: '3,000+ SKUs LIVE',
    link: '#'
  },
  {
    id: 'proj-warehouse-inbound',
    title: 'Multi-Warehouse Inbound Logistics & Vendor Cadence Architecture',
    category: 'SUPPLY CHAIN // INBOUND LOGISTICS',
    year: '2025',
    description: 'Structured inbound supply workflows across 40+ fulfillment warehouses, scheduling 6–7 daily consignments and processing 50+ monthly purchase orders to sustain 95% catalogue inventory accuracy.',
    tags: ['Warehouse Logistics', 'Vendor Relations', 'Inbound POs', 'Mars', 'Nestlé', 'Royal Canin'],
    metric: '40+ WAREHOUSES',
    link: '#'
  },
  {
    id: 'proj-printo-gifting',
    title: 'Enterprise Bespoke Gifting & Procurement Architecture',
    category: 'CORPORATE PROCUREMENT // B2B CATALOGING',
    year: '2023',
    description: 'Curated 40+ customized enterprise merchandise solutions for Google, Meta, and Fortune-tier clients. Executed 2023 Diwali gifting operations packaging 10,000+ orders flawlessly.',
    tags: ['Enterprise Gifting', 'Google & Meta', 'Sourcing Ops', '10,000+ Orders'],
    metric: '10,000+ ORDERS DELIVERED',
    link: '#'
  }
];

export const DEFAULT_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-supertails',
    role: 'Catalogue & Merchandising Executive (Category Management & Operations)',
    company: 'SUPERTAILS',
    period: 'FEB 2025 — MAR 2026 // BENGALURU',
    highlights: [
      'Achieved 95% catalogue accuracy by managing 20,000+ SKUs across 20+ leading brands and ensuring granular warehouse mapping.',
      'Expanded product assortment and boosted discoverability by listing and optimizing 15,000+ SKUs across high-converting categories.',
      'Enabled Bengaluru’s 30-minute Quick Commerce launch by leading catalogue operations for 3,000+ active SKUs.',
      'Streamlined vendor operations across Mars India, Nestlé India, Royal Canin, and 20+ premium FMCG brands.',
      'Maintained consistent inventory availability by processing 50+ Purchase Orders monthly across 15+ vendors.',
      'Governed inbound inventory flow across 40+ warehouses by coordinating 6–7 daily inbound shipments with a 7-member operations team.'
    ],
    badgeColor: 'mustard'
  },
  {
    id: 'exp-printo',
    role: 'Cataloging Intern',
    company: 'PRINTO',
    period: 'AUG 2023 — DEC 2023 // BENGALURU',
    highlights: [
      'Designed 40+ bespoke corporate gifting solutions for high-profile enterprise accounts, including Google, Meta, and leading organizations.',
      'Streamlined procurement operations by sourcing products and coordinating closely with 10+ trusted vendors for on-time order fulfillment.',
      'Executed high-volume 2023 Diwali gifting campaign by sourcing 20–30 SKUs, building 40+ product solutions, and packaging 10,000+ orders.'
    ],
    badgeColor: 'forest-green'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-mu',
    institution: "MASTERS' UNION",
    degree: 'PGP in Sports Management & Gaming',
    period: '2026 — PRESENT',
    location: 'Gurugram, India',
    honors: 'Recipient of the 20% Pankaj Bansal Scholarship for Young Leaders'
  },
  {
    id: 'edu-jain',
    institution: 'JAIN UNIVERSITY',
    degree: 'Bachelor of Management Studies in International Business',
    period: '2021 — 2024',
    location: 'Bengaluru, India',
    grade: 'CGPA: 8.4 / 10.0',
    honors: 'Class Representative & Student Coordinator, International Business Club'
  },
  {
    id: 'edu-soundarya',
    institution: 'SOUNDARYA HIGH SCHOOL',
    degree: 'Secondary School Examination (Class X)',
    period: '2018',
    location: 'Bengaluru, India',
    grade: 'Score: 86%',
    honors: 'Sports Vice Captain | 4-Time Consecutive Individual Sports Champion'
  }
];

export const ATHLETIC_HONORS: AthleticAchievement[] = [
  {
    id: 'ath-1',
    event: 'Bengaluru District Athletics (200m)',
    result: 'GOLD MEDALIST (1ST PLACE)',
    scope: 'Finished 1st among 70+ sprinters representing Soundarya High School',
    detail: 'Top podium finish with explosive cornering and sprint mechanics.'
  },
  {
    id: 'ath-2',
    event: 'District Athletics Championship (100m)',
    result: 'GOLD MEDALIST & KHELO INDIA QUALIFIER',
    scope: 'Finished 1st among 64+ sprinters; Qualified as a Khelo India Participant',
    detail: 'Earned national qualification honors through sub-second acceleration.'
  },
  {
    id: 'ath-3',
    event: 'Karnataka State School Olympics (400m)',
    result: 'SILVER MEDALIST (2ND PLACE)',
    scope: 'Finished 2nd among 52+ elite runners in Karnataka State Championship',
    detail: 'Demonstrated exceptional lactic threshold pacing and sustained 400m speed.'
  },
  {
    id: 'ath-4',
    event: 'Individual Sports Championship',
    result: '4-YEAR CONSECUTIVE CHAMPION (RECORD)',
    scope: 'Outperformed 120+ student-athletes across 4 consecutive championship years',
    detail: 'All-around athletic superiority across short sprints, relays, and field events.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-google',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera / Udemy',
    date: 'JUL 2024',
    skills: 'Data Cleaning, Visualization, SQL, Tableau, Spreadsheet Modeling'
  },
  {
    id: 'cert-excel',
    title: 'Advanced Microsoft Excel for Business',
    issuer: 'Udemy',
    date: 'JUL 2024',
    skills: 'Pivot Tables, VLOOKUP, INDEX-MATCH, Financial & Operations Dashboards'
  }
];

export const TECHNICAL_SKILLS = [
  { 
    category: 'SUPPLY CHAIN & OPERATIONS', 
    items: [
      'Category Management', 
      'Vendor Relations & SLA Governance', 
      'Procurement & Purchase Orders', 
      'Quick Commerce (30-Min SLA)', 
      'Warehouse Mapping & Inbound Logistics', 
      'Inventory Optimization (20,000+ SKUs)'
    ] 
  },
  { 
    category: 'DATA ANALYTICS & TOOLS', 
    items: [
      'Advanced Microsoft Excel', 
      'Power BI Dashboards', 
      'MySQL & Relational Queries', 
      'Tableau Visualization', 
      'MS Office Suite', 
      'Figma'
    ] 
  },
  { 
    category: 'SPORTS & BUSINESS DOMAIN', 
    items: [
      'Sports Merchandise Market Analysis', 
      'Gaming & Fan Engagement Strategy', 
      'Event Operations & Coordination', 
      'Track & Field Sprint Coaching Dynamics'
    ] 
  }
];
