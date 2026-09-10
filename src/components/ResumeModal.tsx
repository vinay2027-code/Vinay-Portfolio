import React from 'react';
import { X, Printer, Download, Mail, Phone, Linkedin, MapPin, Award, Trophy, GraduationCap, Briefcase, FileSpreadsheet } from 'lucide-react';
import { UserProfile, ProjectItem, ExperienceItem } from '../types';
import { EDUCATION_DATA, ATHLETIC_HONORS, CERTIFICATIONS, TECHNICAL_SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  projects
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white text-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden my-6 border border-neutral-300">
        
        {/* Sticky Control Bar (Hidden during Print) */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-[#12141A] text-white border-b border-white/10 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono-code">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-bold tracking-wider uppercase text-neutral-200">OFFICIAL EXECUTIVE RESUME // {profile.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#D97706] hover:bg-[#b45309] text-white transition-all shadow"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE AS PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div id="printable-resume" className="p-8 sm:p-12 font-sans bg-white leading-relaxed print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-[#12141A] pb-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111827] uppercase">
                {profile.name}
              </h1>
              <span className="text-sm font-semibold tracking-wide text-[#D97706] uppercase">
                Supply Chain & Operations Executive
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600 mt-2 font-medium">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#D97706]" />
                <a href={`mailto:${profile.contactEmail}`} className="hover:underline text-neutral-800">{profile.contactEmail}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#D97706]" />
                <a href={`tel:${profile.phone}`} className="hover:underline text-neutral-800">{profile.phone}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-[#D97706]" />
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-neutral-800">linkedin.com/in/vinay-g</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D97706]" />
                <span>Bengaluru & Gurugram, India</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#111827] border-b border-neutral-300 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed text-justify">
              Supply Chain & Operations professional specializing in Category Management, Vendor Management, and E-commerce Operations. Managed 20,000+ SKUs with 95% accuracy, driving efficient inventory and fulfillment processes while partnering with leading FMCG brands. Strong analytical skills with Excel, Power BI, and MySQL for data-driven decision-making. Recipient of the 20% Pankaj Bansal Scholarship for Young Leaders. State-level track athlete with record-holding sprint titles.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#111827] border-b border-neutral-300 pb-1 mb-2.5">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-semibold text-neutral-900">
                    <span className="font-bold uppercase">{edu.institution}</span>
                    <span className="text-neutral-600 font-mono text-[11px]">{edu.period} | {edu.location}</span>
                  </div>
                  <div className="text-neutral-700">
                    <span>{edu.degree}</span>
                    {edu.grade && <span className="font-medium text-neutral-900"> | {edu.grade}</span>}
                  </div>
                  {edu.honors && (
                    <div className="text-[11px] text-[#b45309] font-medium mt-0.5">
                      • {edu.honors}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#111827] border-b border-neutral-300 pb-1 mb-2.5">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-neutral-900 uppercase">{exp.company}</span>
                    <span className="text-neutral-600 font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <div className="font-semibold text-neutral-800 italic mb-1.5">
                    {exp.role}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-neutral-700 text-[12px]">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-snug">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects & Research */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#111827] border-b border-neutral-300 pb-1 mb-2.5">
              RESEARCH PAPERS & STRATEGIC PROJECTS
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between items-baseline font-bold text-neutral-900">
                  <span>EasyBill — Smart GST Invoicing & Merchant Management (Product Builder / Frontend Dev)</span>
                  <span className="text-neutral-600 font-mono text-[11px]">React · TS · Tailwind · Vite | 2026</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-700 text-[12px] mt-1">
                  <li>Built mobile-first billing & merchant management web app for small retailers, FMCG merchants, and distributors, combining GST invoicing, inventory, customer credit (Khata), and UPI payments.</li>
                  <li>Implemented automated CGST/SGST calculations with HSN categorization, customer credit tracking with WhatsApp payment reminders, dynamic UPI QR settlements, and A4/thermal invoice printing.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-neutral-900">
                  <span>Gig Worker Research | Field Research & Business Insights — Quick-Commerce Ecosystem</span>
                  <span className="text-neutral-600 font-mono text-[11px]">2026</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-700 text-[12px] mt-1">
                  <li>Conducted primary field research & structured interviews with gig workers (Blinkit, Swiggy, E-Mobility fleets) in NCR to analyze working conditions, earnings, incentives, and operational pain points.</li>
                  <li>Derived operational insights on dark-store wait times, last-mile SLAs, platform routing algorithms, and workforce management dynamics.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-neutral-900">
                  <span>Dropshipping Mela | Sales & Entrepreneurship (TAARA) — DLF CyberHub</span>
                  <span className="text-neutral-600 font-mono text-[11px]">2026</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-neutral-700 text-[12px] mt-1">
                  <li>Led on-ground sales & marketing for crystal & gemstone brand TAARA at DLF CyberHub, generating <strong>₹97,000 in revenue in a single day</strong>.</li>
                  <li>Strengthened competencies in high-footfall customer pitch, retail merchandising, dynamic bundle pricing, and real-time business decisions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Athletic Honors */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#111827] border-b border-neutral-300 pb-1 mb-2">
              EXTRA-CURRICULAR & ATHLETIC ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
              <li><strong className="text-neutral-900">Won Bengaluru District Gold Medal (200m)</strong>, finishing 1st among 70+ athletes while representing Soundarya High School.</li>
              <li><strong className="text-neutral-900">Secured District Gold Medal (100m)</strong>, finishing 1st among 64+ athletes, and qualified as a Khelo India Participant.</li>
              <li><strong className="text-neutral-900">Won Karnataka State School Olympics Silver Medal (400m)</strong>, finishing 2nd among 52+ athletes.</li>
              <li><strong className="text-neutral-900">Set a school record</strong> by winning the Individual Sports Championship for four years, outperforming 120+ students.</li>
            </ul>
          </div>

          {/* Certifications & Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-300 text-xs">
            <div>
              <h3 className="font-bold uppercase text-neutral-900 mb-1">Certifications</h3>
              <p className="text-neutral-700"><strong>Google Data Analytics Professional Certificate</strong> | Udemy (Jul'24)</p>
              <p className="text-neutral-700"><strong>Advanced Microsoft Excel for Business</strong> | Udemy (Jul'24)</p>
            </div>
            <div>
              <h3 className="font-bold uppercase text-neutral-900 mb-1">Core Competencies</h3>
              <p className="text-neutral-700"><strong>Business:</strong> Supply Chain Ops, Category Mgmt, Vendor Mgmt, Quick Commerce</p>
              <p className="text-neutral-700"><strong>Technical:</strong> Advanced Excel, Power BI, MySQL, Tableau, Figma</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
