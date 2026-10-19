import { useState } from 'react';
import { Trophy, Code2, Users, Star, Shield, Eye, GitBranch, Cpu, BookOpen, Award } from 'lucide-react';
import { achievements, certifications, education } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

const iconMap = {
  Trophy, Code2, Users, Star, Shield, Eye, GitBranch, Cpu, BookOpen, Award,
};

export default function Achievements() {
  const ref = useReveal();

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-dark-900/30" ref={ref}>
      <div className="section-wrapper">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-accent-400 font-mono text-sm mb-3">06. Recognition</p>
          <h2 className="section-title">Achievements & Education</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Academic excellence, competitive recognition, and certified technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="reveal lg:col-span-2 space-y-4">
            <h3 className="text-white font-display text-xl font-bold mb-5 flex items-center gap-2">
              <Trophy size={18} className="text-amber-400" /> Achievements
            </h3>
            {achievements.map(({ title, description, icon, accent }) => {
              const Icon = iconMap[icon] || Trophy;
              return (
                <div key={title} className="glass-card-hover p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: `${accent}15` }}>
                    <Icon size={18} style={{ color: accent }} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{title}</h4>
                    <p className="text-text-secondary text-xs mt-1 leading-relaxed">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Education + Certifications */}
          <div className="reveal space-y-6">
            {/* Education */}
            <div>
              <h3 className="text-white font-display text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-accent-400" /> Education
              </h3>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.institution} className="glass-card p-4">
                    <p className="text-white font-semibold text-sm">{edu.institution}</p>
                    <p className="text-accent-400 text-xs mt-0.5">{edu.degree}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-text-muted text-xs">{edu.period}</span>
                      {edu.cgpa && <span className="text-teal-400 text-xs font-semibold">CGPA {edu.cgpa}</span>}
                      {edu.score && <span className="text-teal-400 text-xs font-semibold">{edu.score}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-white font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Award size={18} className="text-violet-400" /> Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map(({ title, issuer, year, icon }) => {
                  const Icon = iconMap[icon] || Award;
                  return (
                    <div key={title} className="glass-card-hover p-4 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 flex-shrink-0">
                        <Icon size={14} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white text-xs font-semibold leading-snug">{title}</p>
                        <p className="text-text-muted text-xs mt-0.5">{issuer} · {year}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
