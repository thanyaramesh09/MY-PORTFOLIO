import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Brain, MessageSquare, Cpu, Zap } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import ImageWithFallback from './ui/ImageWithFallback';
import Lightbox from './ui/Lightbox';

// ── USIM campus (featured banner) ────────────────────────────────────────────
import usimImage from '../assets/usim.jpg';

// ── Bootcamp gallery photos (6 photos) ──────────────────────────────────────
import bootcamp1Image from '../assets/bootcamp1.jpg';
import bootcamp2Image from '../assets/bootcamp2.jpg';
import bootcamp3Image from '../assets/bootcamp3.jpg';
import bootcamp4Image from '../assets/bootcamp4.jpg';
import bootcamp5Image from '../assets/bootcamp5.jpg';
import bootcamp6Image from '../assets/bootcamp6.jpg';

const campusEntry = {
  src: usimImage,
  caption: 'Universiti Sains Islam Malaysia — Nilai, Malaysia',
  isUniversity: true,
};

const galleryEntries = [
  { src: bootcamp1Image, caption: 'International Tech Bootcamp — Day 1' },
  { src: bootcamp2Image, caption: 'Hands-on AI Workshop' },
  { src: bootcamp3Image, caption: 'Collaborative Learning Session' },
  { src: bootcamp4Image, caption: 'LLM & RAG Deep Dive' },
  { src: bootcamp5Image, caption: 'NLP and Prompt Engineering Workshop' },
  { src: bootcamp6Image, caption: 'Team Project Presentation' },
];

// All entries for the lightbox (campus first, then gallery)
const allLightboxImages = [campusEntry, ...galleryEntries];

const learningPillars = [
  {
    icon: Brain,
    title: 'Large Language Models',
    desc: 'Architecture of LLMs, fine-tuning approaches, API integration, and deploying LLM-powered applications.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: MessageSquare,
    title: 'Retrieval-Augmented Generation',
    desc: 'Building RAG pipelines with document retrieval, embeddings, and vector databases using LangChain.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
  },
  {
    icon: Cpu,
    title: 'Generative AI Development',
    desc: 'Developing AI-powered applications using prompt engineering, function calling, and agentic workflows.',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
  },
  {
    icon: Globe,
    title: 'International Collaboration',
    desc: 'Working alongside participants from diverse backgrounds to solve real-world challenges collaboratively.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Zap,
    title: 'NLP & Embeddings',
    desc: 'Text processing, semantic search, embedding models, and natural language understanding techniques.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HoverPhoto — identical behaviour to the Experience gallery:
// Framer Motion scales each image independently on hover without clipping.
// ─────────────────────────────────────────────────────────────────────────────
function HoverPhoto({ src, alt, caption, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={alt}
      className="relative block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
      style={{ aspectRatio: '1 / 1', zIndex: 1 }}
      whileHover={{
        scale: 1.1,
        zIndex: 20,
        boxShadow: '0 12px 40px rgba(20, 184, 166, 0.35), 0 4px 16px rgba(0,0,0,0.6)',
        transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      animate={{ scale: 1, zIndex: 1, boxShadow: '0 0px 0px rgba(0,0,0,0)' }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileTap={{ scale: 0.97 }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover bg-slate-900"
        style={{ borderRadius: '12px', display: 'block' }}
        onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
      />

      {/* Caption overlay — visible on hover */}
      <motion.div
        className="absolute inset-0 flex items-end p-2 pointer-events-none"
        style={{ borderRadius: '12px' }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full bg-gradient-to-t from-dark-950/80 to-transparent rounded-b-xl pt-6 pb-1.5 px-2">
          <p className="text-white text-[11px] leading-snug">{caption}</p>
        </div>
      </motion.div>
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Bootcamp section
// ─────────────────────────────────────────────────────────────────────────────
export default function Bootcamp() {
  const [lightboxOpen, setLightboxOpen]   = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const ref = useReveal();

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true); };

  return (
    <section id="bootcamp" className="py-24 lg:py-32 bg-dark-950" ref={ref}>
      <div className="section-wrapper">

        {/* Section heading */}
        <div className="reveal text-center mb-16">
          <p className="text-teal-400 font-mono text-sm mb-3">
            05. International Experience
          </p>
          <h2 className="section-title">International Tech Bootcamp</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Selected to participate in an international technology bootcamp at{' '}
            <span className="text-teal-400 font-medium">
              Universiti Sains Islam Malaysia (USIM)
            </span>
            , Malaysia — September 2026.
          </p>
        </div>

        <div className="space-y-14">

          {/* ── Featured USIM campus banner ───────────────────────────────── */}
          <div className="reveal">
            <motion.button
              type="button"
              onClick={() => openLightbox(0)}
              aria-label="View USIM campus photo"
              className="relative w-full block overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              whileHover={{
                scale: 1.015,
                boxShadow: '0 20px 60px rgba(20,184,166,0.25)',
                transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              animate={{ scale: 1, boxShadow: '0 0px 0px rgba(0,0,0,0)' }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={usimImage}
                alt={campusEntry.caption}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                style={{ display: 'block' }}
                onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent pointer-events-none rounded-2xl" />
            </motion.button>
            <p className="text-center text-text-muted text-sm mt-3 flex items-center justify-center gap-2">
              <Globe size={13} />
              {campusEntry.caption}
            </p>
          </div>

          {/* ── Bootcamp gallery with hover pop-up ───────────────────────── */}
          <div className="reveal">
            <h3 className="text-white font-semibold text-lg mb-6">
              Bootcamp Gallery
            </h3>
            {/*
             * No overflow-hidden on this grid — scaled images need to
             * pop out freely. The p-3 / -m-3 pattern gives a transparent
             * buffer around each cell so scaled images never look clipped.
             */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 p-3 -m-3"
              style={{ position: 'relative' }}
            >
              {galleryEntries.map((item, i) => (
                <HoverPhoto
                  key={i}
                  src={item.src}
                  alt={item.caption}
                  caption={item.caption}
                  // Lightbox index offset by 1 because campusEntry is index 0
                  onClick={() => openLightbox(i + 1)}
                />
              ))}
            </div>
          </div>

          {/* ── Narrative + Learning pillars ─────────────────────────────── */}
          <div className="reveal grid lg:grid-cols-2 gap-8">
            {/* Narrative card */}
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-white font-display text-xl font-bold">
                The Experience
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Participating in this international bootcamp at USIM in Malaysia
                was a defining technical and personal experience. Alongside
                participants from diverse backgrounds, I immersed myself in the
                rapidly evolving world of Generative AI and modern NLP frameworks.
              </p>
              <p className="text-text-secondary leading-relaxed text-sm">
                The program covered both the theoretical foundations and practical
                implementation of LLMs, RAG pipelines, embeddings, and prompt
                engineering — equipping me to build more intelligent,
                context-aware applications in my own projects and internships.
              </p>
              <p className="text-text-secondary leading-relaxed text-sm">
                Beyond the technical curriculum, the international setting expanded
                my perspective on global collaboration and problem-solving across
                different engineering cultures and backgrounds.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Generative AI', 'LLMs', 'RAG', 'NLP', 'Embeddings', 'Prompt Engineering', 'LangChain'].map(
                  (tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Learning pillars */}
            <div className="space-y-3">
              {learningPillars.map(({ icon: Icon, title, desc, color, bg }) => (
                <div key={title} className="glass-card-hover p-4 flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${bg} ${color} flex-shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-text-muted text-xs mt-0.5 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox (campus image is index 0) ──────────────────────────────── */}
      {lightboxOpen && (
        <Lightbox
          images={allLightboxImages.map((img) => ({
            image: img.src,
            caption: img.caption,
          }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setLightboxIndex(
              (prev) => (prev - 1 + allLightboxImages.length) % allLightboxImages.length
            )
          }
          onNext={() =>
            setLightboxIndex((prev) => (prev + 1) % allLightboxImages.length)
          }
        />
      )}
    </section>
  );
}
