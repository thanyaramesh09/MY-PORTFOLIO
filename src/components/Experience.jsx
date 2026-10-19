import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  MapPin,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

import { experience } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import Lightbox from './ui/Lightbox';

// ── Toyota internship photos (4 photos) ──────────────────────────────────────
import toyota1Image from '../assets/toyota1.jpg';
import toyota2Image from '../assets/toyota2.jpg';
import toyota3Image from '../assets/toyota3.jpg';
import toyota4Image from '../assets/toyota4.jpg';

// ── International bootcamp photos (6 photos) ─────────────────────────────────
import bootcamp1Image from '../assets/bootcamp1.jpg';
import bootcamp2Image from '../assets/bootcamp2.jpg';
import bootcamp3Image from '../assets/bootcamp3.jpg';
import bootcamp4Image from '../assets/bootcamp4.jpg';
import bootcamp5Image from '../assets/bootcamp5.jpg';
import bootcamp6Image from '../assets/bootcamp6.jpg';

const toyotaImages = [
  toyota1Image,
  toyota2Image,
  toyota3Image,
  toyota4Image,
];

const bootcampImages = [
  bootcamp1Image,
  bootcamp2Image,
  bootcamp3Image,
  bootcamp4Image,
  bootcamp5Image,
  bootcamp6Image,
];

// ─────────────────────────────────────────────────────────────────────────────
// HoverPhoto — individual image tile with Framer Motion pop-up on hover.
// The parent grid has NO overflow-hidden so the scaled image isn't clipped.
// The inner <img> tag keeps rounded corners via borderRadius.
// ─────────────────────────────────────────────────────────────────────────────
function HoverPhoto({ src, alt, onClick, index }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={alt}
      className="relative block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
      style={{ aspectRatio: '4/3', zIndex: 1 }}
      // Framer Motion hover: scale up, lift z-index, add glow shadow
      whileHover={{
        scale: 1.1,
        zIndex: 20,
        boxShadow: '0 12px 40px rgba(10, 127, 255, 0.35), 0 4px 16px rgba(0,0,0,0.6)',
        transition: {
          duration: 0.28,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      // Animate back on mouse-leave
      animate={{ scale: 1, zIndex: 1, boxShadow: '0 0px 0px rgba(0,0,0,0)' }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      // Reduce motion: skip scale animation for users who prefer it
      whileTap={{ scale: 0.97 }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover bg-slate-900"
        style={{ borderRadius: '12px', display: 'block' }}
        onError={(e) => {
          e.currentTarget.style.visibility = 'hidden';
        }}
      />
      {/* Subtle dark overlay on hover for depth */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{ borderRadius: '12px' }}
        initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
        whileHover={{ backgroundColor: 'rgba(0,0,0,0.08)' }}
        transition={{ duration: 0.28 }}
      />
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HoverPhotoGrid — wraps gallery buttons in a grid WITHOUT overflow-hidden,
// so scaled images can "pop" outside their cells without being clipped.
// A transparent padding buffer (p-3) gives the scaled images breathing room.
// ─────────────────────────────────────────────────────────────────────────────
function HoverPhotoGrid({ images, expId, expCompany, galleryTitle, onOpen }) {
  return (
    /*
     * IMPORTANT: Do NOT add overflow-hidden here — it would clip the scaled images.
     * The visual containment comes from the surrounding section padding instead.
     */
    <div
      className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 -m-3"
      style={{ position: 'relative' }}
    >
      {images.map((src, i) => (
        <HoverPhoto
          key={`${expId || expCompany}-photo-${i}`}
          src={src}
          alt={`${expCompany} ${galleryTitle.toLowerCase()} photo ${i + 1}`}
          onClick={() => onOpen(i)}
          index={i}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ExperienceCard
// ─────────────────────────────────────────────────────────────────────────────
function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Identify section from data
  const textKey = [exp.id, exp.company, exp.role, exp.type]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  const isToyota  = textKey.includes('toyota');
  const isBootcamp =
    textKey.includes('bootcamp') ||
    textKey.includes('usim') ||
    textKey.includes('universiti sains islam');

  const galleryImages = isToyota
    ? toyotaImages
    : isBootcamp
      ? bootcampImages
      : Array.isArray(exp.images)
        ? exp.images
        : [];

  const galleryTitle = isToyota
    ? 'Internship Photos'
    : isBootcamp
      ? 'Bootcamp Photos'
      : 'Photos';

  const openLightbox = (i) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <article
      className="reveal glass-card overflow-visible border-l-4"
      style={{ borderLeftColor: exp.accent || '#0ea5e9' }}
    >
      {/* Header — click anywhere to expand / collapse */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <span
              className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
              style={{
                backgroundColor: `${exp.accent || '#0ea5e9'}15`,
                color: exp.accent || '#0ea5e9',
              }}
            >
              {exp.type}
            </span>

            <h3 className="text-white font-display text-xl font-bold mb-1">
              {exp.company}
            </h3>

            <p className="font-medium" style={{ color: exp.accent || '#0ea5e9' }}>
              {exp.role}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-2 text-text-muted text-sm">
              {exp.period && (
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  {exp.period}
                </span>
              )}
              {exp.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            className="text-text-muted hover:text-white transition-colors mt-1 flex-shrink-0"
            aria-label={expanded ? 'Collapse experience' : 'Expand experience'}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((prev) => !prev);
            }}
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        <p className="text-text-secondary text-sm mt-3 leading-relaxed">
          {exp.description}
        </p>
      </div>

      {/* Expanded body */}
      {expanded && (
        <div className="px-6 pb-8 space-y-6 border-t border-white/5 pt-5">
          {/* Key contributions */}
          {Array.isArray(exp.highlights) && exp.highlights.length > 0 && (
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">
                Key Contributions
              </h4>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-text-secondary"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                      style={{ backgroundColor: exp.accent || '#0ea5e9' }}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((technology) => (
                  <span key={technology} className="skill-badge text-xs py-1">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ── Photo gallery with hover pop-up ─────────────────────────── */}
          {galleryImages.length > 0 && (
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">
                {galleryTitle}
              </h4>
              {/*
               * Extra padding around the grid so scaled images have room to
               * breathe without being visually cut off by the card edge.
               */}
              <div className="px-1 py-2">
                <HoverPhotoGrid
                  images={galleryImages}
                  expId={exp.id}
                  expCompany={exp.company}
                  galleryTitle={galleryTitle}
                  onOpen={openLightbox}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && galleryImages.length > 0 && (
        <Lightbox
          images={galleryImages.map((img, i) => ({
            image: img,
            caption: `${exp.company} — ${galleryTitle} ${i + 1}`,
          }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setLightboxIndex(
              (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
            )
          }
          onNext={() =>
            setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
          }
        />
      )}
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Experience section
// ─────────────────────────────────────────────────────────────────────────────
export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      className="py-24 lg:py-32 bg-dark-950"
      ref={ref}
    >
      <div className="section-wrapper">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <p className="text-accent-400 font-mono text-sm mb-3">
            03. Experience
          </p>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Industry internships and international technology experiences
            spanning full-stack development, machine learning, computer
            vision, and generative AI.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto space-y-5">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id || exp.company || index}
              exp={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
