import { motion } from 'framer-motion';
import { GitFork, Link2, Mail, ArrowDown, Download, Sparkles } from 'lucide-react';
import { personal } from '../data/portfolioData';
import ImageWithFallback from './ui/ImageWithFallback';
import tanyImage from '../assets/portrait.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/3 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '4s' }} />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="section-wrapper w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-8">
              <Sparkles size={14} className="animate-pulse" />
              Open to Internships & Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-900 leading-[1.05] mb-5"
              style={{ fontWeight: 900 }}
            >
              <span className="text-text-primary">Thanya</span>{' '}
              <span className="gradient-text">M R</span>
            </motion.h1>

            {/* Role */}
            <motion.div {...fadeUp(0.3)} className="mb-6">
              <p className="font-display text-xl sm:text-2xl font-600 text-text-secondary" style={{ fontWeight: 600 }}>
                CS Engineer &amp; Full-Stack Developer
              </p>
              <p className="text-accent-400 text-lg font-medium mt-1">
                AI · Computer Vision · Generative AI
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p {...fadeUp(0.4)} className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {personal.bio}
            </motion.p>

            {/* Currently exploring */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              <span className="text-text-muted text-sm">Currently exploring:</span>
              {personal.currentlyExploring.map((item) => (
                <span key={item} className="tech-badge">{item}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <button
                onClick={scrollToAbout}
                className="btn-primary"
              >
                Explore My Work
                <ArrowDown size={16} />
              </button>
              <a href={personal.resumeFile} download className="btn-outline">
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.6)} className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-accent-400 transition-colors text-sm"
                aria-label="LinkedIn"
              >
                <Link2 size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <div className="w-px h-4 bg-white/10" />
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-accent-400 transition-colors text-sm"
                aria-label="GitHub"
              >
                <GitFork size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <div className="w-px h-4 bg-white/10" />
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-text-secondary hover:text-accent-400 transition-colors text-sm"
                aria-label="Email"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-500/30 via-violet-500/20 to-teal-400/20 blur-2xl scale-110" />

              {/* Portrait frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-accent-500/30 shadow-glow-lg animate-float">
                <ImageWithFallback
                  src={tanyImage}
                  alt="Thanya M R - CS Engineer and Developer"
                  className="w-full h-full object-cover"
                  placeholderText="Hero photo placeholder"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-4 top-8 glass-card px-3 py-2 shadow-card"
              >
                <p className="text-xs text-text-muted">CGPA</p>
                <p className="text-lg font-bold text-white">8.2<span className="text-text-muted text-sm">/10</span></p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -right-4 bottom-12 glass-card px-3 py-2 shadow-card"
              >
                <p className="text-xs text-text-muted">LeetCode</p>
                <p className="text-lg font-bold text-white">150<span className="text-accent-400 text-sm">+</span></p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 shadow-card whitespace-nowrap"
              >
                <p className="text-xs text-text-muted text-center">International Bootcamp</p>
                <p className="text-sm font-semibold text-teal-400 text-center">🇲🇾 USIM, Malaysia</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-muted/50 to-transparent" />
        <ArrowDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
