import React from 'react';
import { GraduationCap, Award, FileSpreadsheet, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS, TECHNICAL_SKILLS } from '../data/portfolioData';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="education-skills" className="py-16 sm:py-20 bg-[#0A0C10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono-code uppercase tracking-[0.2em] text-[#DE9B26] font-bold mb-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION & TECHNICAL PROFICIENCY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
              EDUCATION, CERTIFICATIONS & SKILLS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans">
            Rigorous business management scholarship combined with professional quantitative analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (7 Cols): Education & Scholarships */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono-code uppercase tracking-wider text-[#DE9B26] font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC INSTITUTIONS & SCHOLARSHIPS</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div 
                  key={edu.id}
                  className="bg-[#14171F] border border-white/10 hover:border-white/20 rounded-2xl p-5 sm:p-6 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className="text-base sm:text-lg font-bold font-display uppercase tracking-wide text-white">
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-mono-code text-[#DE9B26]">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-sm text-neutral-300 font-medium">
                    {edu.degree}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-neutral-400 mt-2">
                    <span>{edu.location}</span>
                    {edu.grade && (
                      <>
                        <span>•</span>
                        <span className="text-emerald-400 font-bold">{edu.grade}</span>
                      </>
                    )}
                  </div>

                  {edu.honors && (
                    <div className="mt-3 p-2.5 rounded-xl bg-amber-400/5 border border-amber-400/15 text-xs text-amber-200/90 flex items-start gap-2">
                      <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{edu.honors}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Impact & Volunteering */}
            <div className="bg-[#14171F] border border-white/10 rounded-2xl p-6 space-y-3 mt-6">
              <h4 className="text-xs font-mono-code text-rose-400 uppercase tracking-wider font-bold flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" />
                <span>COMMUNITY & LEADERSHIP INITIATIVES</span>
              </h4>

              <div className="space-y-3 text-xs text-neutral-300">
                <div className="bg-black/30 p-3.5 rounded-xl border border-white/5">
                  <strong className="text-white block text-sm">Supertails Feed a Streetie & Reflective Collar Campaign</strong>
                  <span className="text-[10px] font-mono-code text-rose-300 block mb-1">AUG 2024 — SEP 2024</span>
                  <p className="text-neutral-400 leading-relaxed">
                    Volunteered in street animal safety drives, distributing reflective safety collars to prevent vehicle collisions at night and participating in stray nourishment initiatives.
                  </p>
                </div>

                <div className="bg-black/30 p-3.5 rounded-xl border border-white/5">
                  <strong className="text-white block text-sm">Jain University International Business Club</strong>
                  <span className="text-[10px] font-mono-code text-[#DE9B26] block mb-1">STUDENT COORDINATOR & CLASS REPRESENTATIVE</span>
                  <p className="text-neutral-400 leading-relaxed">
                    Organized cross-cultural global business symposia, case competitions, and industry guest lectures.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 Cols): Certifications & Technical Skills */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Certifications */}
            <div>
              <h3 className="text-sm font-mono-code uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2 mb-4">
                <Award className="w-4 h-4" />
                <span>PROFESSIONAL CERTIFICATIONS</span>
              </h3>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="bg-[#14171F] border border-white/10 rounded-2xl p-4 sm:p-5">
                    <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 mb-1">
                      <span className="text-emerald-400 font-bold">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                    <h5 className="text-sm font-bold text-white uppercase">
                      {cert.title}
                    </h5>
                    <div className="text-xs text-neutral-400 font-mono-code mt-2 bg-black/40 p-2 rounded-lg border border-white/5">
                      Core: {cert.skills}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Stack */}
            <div>
              <h3 className="text-sm font-mono-code uppercase tracking-wider text-[#DE9B26] font-bold flex items-center gap-2 mb-4">
                <FileSpreadsheet className="w-4 h-4" />
                <span>CORE COMPETENCY MATRIX</span>
              </h3>

              <div className="bg-[#14171F] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-5">
                {TECHNICAL_SKILLS.map((grp) => (
                  <div key={grp.category}>
                    <div className="text-[11px] font-mono-code text-[#DE9B26] uppercase font-bold tracking-wider mb-2">
                      {grp.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {grp.items.map((item) => (
                        <span 
                          key={item}
                          className="text-xs font-mono-code px-2.5 py-1 rounded-lg bg-white/5 text-neutral-200 border border-white/10 hover:border-white/20 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
