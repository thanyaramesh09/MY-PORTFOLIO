import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Globe, Lightbulb, Users, Code2 } from 'lucide-react';
import { personal, education } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

const highlights = [
  { icon: GraduationCap, label: 'B.E. Computer Science', detail: 'ACS College of Engineering (VTU)', color: 'text-accent-400' },
  { icon: Globe, label: 'International Experience', detail: 'Tech Bootcamp · USIM, Malaysia', color: 'text-teal-400' },
  { icon: Code2, label: 'Full-Stack + AI Projects', detail: 'Web Apps · ML · Computer Vision', color: 'text-violet-400' },
  { icon: Users, label: 'Team Leader', detail: 'AICTE Initiative · Basketball Captain', color: 'text-amber-400' },
];

const timeline = [
  { year: '2022', event: 'Pre-University — Deeksha College, 92%' },
  { year: '2023', event: 'Started B.E. CSE at ACS College of Engineering' },
  { year: '2024', event: 'Earned Google Generative AI & Microsoft AI certifications' },
  { year: '2025', event: 'Full-Stack Developer Intern at Trion Weblore Technologies' },
  { year: '2026', event: 'Machine Learning & Full-Stack Intern at Toyota Kirloskar Motor' },
  { year: '2026', event: 'International Tech Bootcamp · USIM, Malaysia' },
  { year: '2027', event: 'Expected Graduation — B.E. CSE', isFuture: true },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-dark-950" ref={ref}>
      <div className="section-wrapper">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-accent-400 font-mono text-sm mb-3">01. About Me</p>
          <h2 className="section-title">The Developer Behind the Code</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A technically driven engineer with a passion for building things that matter — from AI-powered tools to scalable web systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio text */}
          <div className="reveal space-y-5">
            <p className="text-text-secondary leading-relaxed text-base lg:text-lg">
              I'm <span className="text-white font-semibold">Thanya M R</span>, a Computer Science and Engineering undergraduate at{' '}
              <span className="text-accent-400">ACS College of Engineering (VTU)</span>, Bengaluru, graduating in 2027.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My work spans full-stack web applications, machine learning pipelines, and computer vision systems.
              I've interned at <span className="text-white font-medium">Toyota Kirloskar Motor</span>, building production monitoring systems with OpenCV and Node.js,
              and at <span className="text-white font-medium">Trion Weblore Technologies</span>, shipping React + FastAPI applications with integrated LLM and RAG capabilities.
            </p>
            <p className="text-text-secondary leading-relaxed">
              In September 2026, I participated in an <span className="text-teal-400 font-medium">international technology bootcamp at Universiti Sains Islam Malaysia</span>,
              deepening my expertise in Generative AI, LLMs, RAG pipelines, and NLP — and gaining invaluable global perspective.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Beyond the technical, I led the AICTE Social Impact Initiative team, captained the college basketball team, and competed in state-level hackathons.
              I believe the best engineers are also communicators, collaborators, and leaders.
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Location', value: personal.location },
                { label: 'CGPA', value: '8.2 / 10.0' },
                { label: 'Graduating', value: '2027' },
                { label: 'LeetCode', value: '150+ Problems' },
              ].map(({ label, value }) => (
                <div key={label} className="glass-card px-4 py-3">
                  <p className="text-xs text-text-muted mb-0.5">{label}</p>
                  <p className="text-white font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights + Timeline */}
          <div className="reveal space-y-8">
            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, detail, color }) => (
                <div key={label} className="glass-card-hover p-4 flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-white/5 ${color} flex-shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{label}</p>
                    <p className="text-text-muted text-xs mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div>
              <p className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <Lightbulb size={16} className="text-accent-400" />
                My Journey
              </p>
              <div className="relative pl-6">
                <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/50 via-violet-500/30 to-transparent" />
                <div className="space-y-4">
                  {timeline.map(({ year, event, isFuture }) => (
                    <div key={`${year}-${event}`} className="relative flex items-start gap-3">
                      <div className={`absolute -left-4 w-3 h-3 rounded-full border-2 flex-shrink-0 mt-1 ${
                        isFuture
                          ? 'border-accent-500/40 bg-dark-950'
                          : 'border-accent-500 bg-dark-950 shadow-glow-sm'
                      }`} />
                      <div>
                        <span className={`text-xs font-mono font-semibold ${isFuture ? 'text-text-muted' : 'text-accent-400'}`}>
                          {year}
                        </span>
                        <p className={`text-sm mt-0.5 ${isFuture ? 'text-text-muted italic' : 'text-text-secondary'}`}>
                          {event}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
