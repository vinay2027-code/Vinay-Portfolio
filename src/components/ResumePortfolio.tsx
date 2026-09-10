import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Mail, 
  Phone, 
  Linkedin, 
  ChevronRight, 
  Flame, 
  Zap, 
  Timer, 
  TrendingUp,
  Boxes,
  HeartHandshake,
  FileSpreadsheet
} from 'lucide-react';
import { 
  ProjectItem, 
  ExperienceItem, 
  UserProfile 
} from '../types';
import { 
  EDUCATION_DATA, 
  ATHLETIC_HONORS, 
  CERTIFICATIONS, 
  TECHNICAL_SKILLS 
} from '../data/portfolioData';

interface ResumePortfolioProps {
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  profile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
}

export const ResumePortfolio: React.FC<ResumePortfolioProps> = ({
  projects,
  experiences,
  profile,
  onUpdateProfile
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'projects' | 'athletics' | 'education'>('all');

  return (
    <section 
      id="portfolio-resume-section"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#F6F5F0]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/15 mb-10">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] font-mono-code uppercase tracking-[0.25em] text-[#DE9B26] font-bold mb-2">
            <span className="w-2.5 h-2.5 bg-[#DE9B26] inline-block rotate-45" />
            <span>EXECUTIVE DOSSIER & RECORD // {profile.name}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight font-display text-white">
            OPERATIONS, RESEARCH & ATHLETIC HONORS
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-3xl leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto shrink-0">
          <a
            href={`mailto:${profile.contactEmail}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono-code bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#DE9B26]" />
            <span>{profile.contactEmail}</span>
          </a>

          {profile.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono-code bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{profile.phone}</span>
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono-code bg-[#DE9B26] text-[#121417] font-bold hover:bg-[#eab03e] transition-transform active:scale-95 shadow-md"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* High-Impact Metric Blocks (4 Pillars) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        <div className="bg-[#181A1F] border border-white/10 rounded-2xl p-5 hover:border-[#DE9B26]/50 transition-colors">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#DE9B26]">CATALOGUE OPS</span>
            <Boxes className="w-4 h-4 text-[#DE9B26]" />
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono-code text-white">20,000+</div>
          <p className="text-xs text-neutral-400 mt-1">SKUs Managed with 95% Accuracy across 20+ leading brands</p>
        </div>

        <div className="bg-[#181A1F] border border-white/10 rounded-2xl p-5 hover:border-[#DE9B26]/50 transition-colors">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-emerald-400">QUICK COMMERCE</span>
            <Timer className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono-code text-white">30-MIN</div>
          <p className="text-xs text-neutral-400 mt-1">Bengaluru Instant Delivery launch lead for 3,000+ active SKUs</p>
        </div>

        <div className="bg-[#181A1F] border border-white/10 rounded-2xl p-5 hover:border-[#DE9B26]/50 transition-colors">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#C84E29]">MARKET RESEARCH</span>
            <TrendingUp className="w-4 h-4 text-[#C84E29]" />
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono-code text-white">$1.93B</div>
          <p className="text-xs text-neutral-400 mt-1">Sports merchandise market projected growth by 2029 (500+ respondents)</p>
        </div>

        <div className="bg-[#181A1F] border border-white/10 rounded-2xl p-5 hover:border-[#DE9B26]/50 transition-colors">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-amber-300">ATHLETICS</span>
            <Trophy className="w-4 h-4 text-amber-300" />
          </div>
          <div className="text-2xl sm:text-3xl font-black font-mono-code text-white">1ST / 70+</div>
          <p className="text-xs text-neutral-400 mt-1">District 200m & 100m Gold Medalist & Khelo India Qualifier</p>
        </div>
      </div>

      {/* Main Dossier Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column (8 Cols): Experience & Projects */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-[#DE9B26]" />
              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white">
                WORK EXPERIENCE & OPERATIONS LEADERSHIP
              </h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div 
                  key={exp.id}
                  className="bg-[#181A1F] border border-white/10 rounded-2xl p-6 sm:p-7 relative transition-colors hover:border-white/20"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10 mb-4">
                    <div>
                      <h4 className="text-lg font-bold font-display uppercase text-white">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-sm font-bold text-[#DE9B26]">{exp.company}</span>
                        <span className="text-neutral-500">•</span>
                        <span className="text-xs font-mono-code text-neutral-400">CATEGORY MANAGEMENT & SUPPLY CHAIN</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono-code text-neutral-300 px-2.5 py-1 rounded bg-white/5 border border-white/10 self-start sm:self-center">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-sm text-neutral-300">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DE9B26] mt-2 shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects & Research Papers */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-[#DE9B26]" />
              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white">
                RESEARCH PAPERS & STRATEGIC PROJECTS
              </h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="bg-[#181A1F] border border-white/10 hover:border-[#DE9B26]/40 rounded-2xl p-6 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono-code text-neutral-400 mb-2">
                      <span className="text-[#DE9B26] font-bold">{proj.category}</span>
                      <span>[{proj.year}]</span>
                    </div>

                    <h4 className="text-base font-bold font-display uppercase text-white leading-snug">
                      {proj.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-300 mt-2.5 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono-code">
                      <span className="text-[#DE9B26] font-bold">{proj.metric}</span>
                      <span className="text-neutral-400 text-[11px]">CASE // 0{idx + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Athletic Honors & Track Record */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white">
                TRACK & FIELD ATHLETIC RECORD (100M / 200M / 400M)
              </h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ATHLETIC_HONORS.map((ath) => (
                <div 
                  key={ath.id}
                  className="bg-[#181A1F] border border-white/10 rounded-2xl p-5 relative overflow-hidden group hover:border-amber-400/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 mb-1.5">
                    <span className="text-amber-400 font-bold">{ath.event}</span>
                    <span className="px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 text-[10px]">PODIUM</span>
                  </div>

                  <div className="text-lg font-bold font-display uppercase text-white">
                    {ath.result}
                  </div>

                  <p className="text-xs font-mono-code text-neutral-300 mt-2 font-semibold">
                    {ath.scope}
                  </p>

                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {ath.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (4 Cols): Education, Certifications & Skills */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Education Block */}
          <div className="bg-[#181A1F] border border-white/10 rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <GraduationCap className="w-4 h-4 text-[#DE9B26]" />
              <span className="text-xs font-mono-code uppercase text-white font-bold tracking-wider">
                EDUCATION & SCHOLARSHIPS
              </span>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between text-[11px] font-mono-code text-neutral-400">
                    <span className="text-[#DE9B26] font-bold">{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  <h4 className="text-sm font-bold font-display uppercase text-white mt-1">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5">{edu.degree}</p>
                  {edu.grade && (
                    <p className="text-[11px] font-mono-code text-emerald-400 mt-1">{edu.grade}</p>
                  )}
                  {edu.honors && (
                    <p className="text-[11px] font-mono-code text-amber-300/90 mt-1 bg-amber-400/5 p-1.5 rounded border border-amber-400/10">
                      ★ {edu.honors}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div className="bg-[#181A1F] border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono-code uppercase text-white font-bold tracking-wider">
                CERTIFICATIONS & ACCREDITATION
              </span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-black/30 p-3.5 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between text-[10px] font-mono-code text-neutral-400">
                    <span className="text-emerald-400 font-semibold">{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <h5 className="text-xs font-bold text-white uppercase mt-1">
                    {cert.title}
                  </h5>
                  <p className="text-[11px] font-mono-code text-neutral-300 mt-1.5">
                    Skills: {cert.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="bg-[#181A1F] border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <FileSpreadsheet className="w-4 h-4 text-[#DE9B26]" />
              <span className="text-xs font-mono-code uppercase text-white font-bold tracking-wider">
                COMPETENCIES & TOOLKIT
              </span>
            </div>

            <div className="space-y-4">
              {TECHNICAL_SKILLS.map((grp) => (
                <div key={grp.category}>
                  <span className="text-[10px] font-mono-code text-neutral-400 uppercase tracking-wider block mb-2">
                    {grp.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {grp.items.map((it) => (
                      <span 
                        key={it}
                        className="text-[10px] font-mono-code px-2 py-1 rounded bg-white/5 text-neutral-200 border border-white/5"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Impact & Leadership */}
          <div className="bg-[#181A1F] border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-mono-code uppercase text-white font-bold tracking-wider">
                LEADERSHIP & SOCIAL IMPACT
              </span>
            </div>

            <div className="space-y-3 text-xs text-neutral-300">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-[10px] font-mono-code text-rose-400 block font-bold">SUPERTAILS INITIATIVES (AUG–SEP 2024)</span>
                <p className="mt-1">
                  Volunteered in Supertails’ Feed a Streetie Campaign and Reflective Collar initiatives, supporting stray animal welfare through feeding drives and road safety awareness.
                </p>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-[10px] font-mono-code text-[#DE9B26] block font-bold">JAIN UNIVERSITY INTERNATIONAL BUSINESS CLUB</span>
                <p className="mt-1">
                  Class Representative & Student Coordinator organizing global trade seminars, quizzes, and case study competitions.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
