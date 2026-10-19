import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { personal } from '../data/portfolioData';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#bootcamp', label: 'Bootcamp' },
  { href: '#activities', label: 'Activities' },
  { href: '#contact', label: 'Contact' },
];

const sectionIds = navLinks.map(l => l.href.slice(1));

export default function Navbar({ darkMode, onToggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setIsOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-dark-950/80 border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-wrapper flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
          className="font-display text-xl font-bold gradient-text select-none"
          aria-label="Thanya M R — Home"
        >
          TMR<span className="text-accent-500">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-all"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={personal.resumeFile}
            download
            className="btn-primary text-sm py-2 px-4"
            aria-label="Download Resume"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg text-text-secondary hover:text-white transition-all"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-white transition-all"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } backdrop-blur-xl bg-dark-900/95 border-b border-white/5`}
      >
        <ul className="section-wrapper py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === href.slice(1)
                    ? 'text-white bg-accent-500/10'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a href={personal.resumeFile} download className="btn-primary w-full justify-center text-sm py-2.5">
              <Download size={15} /> Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
