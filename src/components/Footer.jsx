import { GitFork, Link2, Mail, Heart } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-dark-900/50 backdrop-blur-sm">
      <div className="section-wrapper py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <span className="font-display text-lg font-bold gradient-text">TMR.</span>
            <p className="text-text-muted text-xs mt-1">
              Thanya M R · CS Engineer · Bengaluru, India
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-accent-500/20 text-text-secondary hover:text-accent-400 transition-all border border-white/5 hover:border-accent-500/30"
              aria-label="LinkedIn"
            >
              <Link2 size={18} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-accent-500/20 text-text-secondary hover:text-accent-400 transition-all border border-white/5 hover:border-accent-500/30"
              aria-label="GitHub"
            >
              <GitFork size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-accent-500/20 text-text-secondary hover:text-accent-400 transition-all border border-white/5 hover:border-accent-500/30"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-xs flex items-center gap-1">
            © {year} Thanya M R · Made with <Heart size={12} className="text-red-400" /> in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
