import { useState } from 'react';
import { GitFork, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects as projectsData } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import ImageWithFallback from './ui/ImageWithFallback';

// Project screenshots — import real images; Vite handles bundling
import aiFitnessImage      from '../assets/aifitness.png';
import malwareImage        from '../assets/malware-detector.jpg';
import smartDrivingImage   from '../assets/smart-driving.jpg';
import pmspImage           from '../assets/pmsp.jpg';

// Map project IDs to imported images
const projectImageMap = {
  'fitvision':      aiFitnessImage,
  'android-malware': malwareImage,
  'smart-driving':  smartDrivingImage,
  'pmsp':           pmspImage,
};

// Merge local images into the projects array
const projects = projectsData.map((p) =>
  projectImageMap[p.id] ? { ...p, image: projectImageMap[p.id] } : p
);


const allCategories = ['All', ...new Set(projects.flatMap(p => p.category))];

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card-hover overflow-hidden flex flex-col h-full" style={{ borderTop: `2px solid ${project.accent}` }}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-dark-800">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          placeholderText={`${project.title} screenshot`}
        />
        {/* Category badges overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.category.map((cat) => (
            <span key={cat} className="text-xs px-2 py-0.5 rounded-full font-medium bg-dark-950/80 backdrop-blur-sm text-white border border-white/10">
              {cat}
            </span>
          ))}
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-dark-950/80 backdrop-blur-sm text-text-muted border border-white/10">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-display text-lg font-bold mb-0.5">{project.title}</h3>
        <p className="text-sm mb-3" style={{ color: project.accent }}>{project.subtitle}</p>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-400 transition-colors mb-2 mt-auto"
        >
          {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {expanded ? 'Show less' : 'View details'}
        </button>

        {/* Expanded details */}
        <div className={`overflow-hidden transition-all duration-400 ${expanded ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="space-y-3 pt-2 border-t border-white/5">
            <div>
              <p className="text-xs font-semibold text-white mb-1.5">Problem</p>
              <p className="text-xs text-text-secondary leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-white mb-1.5">Solution</p>
              <p className="text-xs text-text-secondary leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-white mb-1.5">Key Features</p>
              <ul className="space-y-1">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="text-accent-400 mt-0.5">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 mt-3">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="btn-outline text-xs py-1.5 px-3">
              <GitFork size={13} /> Code
            </a>
          ) : (
            <span className="text-xs text-text-muted py-1.5 px-3 rounded-xl border border-white/5 bg-dark-800">
              Private Repo
            </span>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="btn-primary text-xs py-1.5 px-3">
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useReveal();

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 lg:py-32 bg-dark-900/30" ref={ref}>
      <div className="section-wrapper">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <p className="text-accent-400 font-mono text-sm mb-3">04. Projects</p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of projects across full-stack development, AI/ML, computer vision, and IoT — built to solve real problems.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 justify-center mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-accent-500 text-white border-accent-500 shadow-glow-sm'
                  : 'bg-white/5 text-text-secondary border-white/10 hover:border-accent-500/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="reveal">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
