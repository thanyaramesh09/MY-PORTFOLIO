import { useState, useRef } from 'react';
import { Mail, Link2, GitFork, Send, CheckCircle, AlertCircle, Phone, MapPin } from 'lucide-react';
import { personal } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

const initialForm = { name: '', email: '', subject: '', message: '' };
const initialErrors = { name: '', email: '', subject: '', message: '' };

function validate(form) {
  const errors = { ...initialErrors };
  let valid = true;

  if (!form.name.trim()) { errors.name = 'Name is required.'; valid = false; }
  if (!form.email.trim()) { errors.email = 'Email is required.'; valid = false; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Enter a valid email.'; valid = false; }
  if (!form.subject.trim()) { errors.subject = 'Subject is required.'; valid = false; }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'; valid = false;
  }

  return { errors, valid };
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const ref = useReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors: newErrors, valid } = validate(form);
    setErrors(newErrors);
    if (!valid) return;

    setStatus('sending');

    // ─── EmailJS integration (configure your IDs in .env) ────────────────────
    // To enable: npm install @emailjs/browser, create a .env file:
    //   VITE_EMAILJS_SERVICE_ID=your_service_id
    //   VITE_EMAILJS_TEMPLATE_ID=your_template_id
    //   VITE_EMAILJS_PUBLIC_KEY=your_public_key
    // Then uncomment the block below:
    //
    // import emailjs from '@emailjs/browser';
    // try {
    //   await emailjs.send(
    //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //     { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
    //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    //   );
    //   setStatus('success');
    //   setForm(initialForm);
    // } catch {
    //   setStatus('error');
    // }
    // ─────────────────────────────────────────────────────────────────────────

    // Simulated success for demo (remove once EmailJS is configured)
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 1200);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-dark-800 border text-text-primary text-sm placeholder-text-muted
     focus:outline-none focus:ring-2 focus:ring-accent-500/50 transition-all duration-200
     ${errors[field] ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-accent-500/50 hover:border-white/20'}`;

  const contacts = [
    { icon: Mail, label: personal.email, href: `mailto:${personal.email}`, color: 'text-accent-400' },
    { icon: Link2, label: 'LinkedIn Profile', href: personal.linkedin, color: 'text-blue-400' },
    { icon: GitFork, label: 'GitHub Profile', href: personal.github, color: 'text-white' },
    { icon: MapPin, label: personal.location, href: null, color: 'text-text-muted' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-900/30" ref={ref}>
      <div className="section-wrapper">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-accent-400 font-mono text-sm mb-3">07. Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Whether you have an exciting opportunity, a project idea, or just want to connect — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="reveal space-y-8">
            <div>
              <h3 className="text-white font-display text-2xl font-bold mb-2">Say Hello 👋</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I'm actively looking for internship and full-time opportunities in software engineering, AI/ML,
                and full-stack development. I'm also always open to collaborating on interesting projects.
              </p>
            </div>

            <div className="space-y-3">
              {contacts.map(({ icon: Icon, label, href, color }) => (
                <div key={label} className="glass-card-hover p-4 flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-white/5 ${color}`}>
                    <Icon size={16} />
                  </div>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-white text-sm transition-colors truncate">
                      {label}
                    </a>
                  ) : (
                    <span className="text-text-secondary text-sm">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA note */}
            <div className="glass-card p-5 border-l-4 border-accent-500">
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-white font-semibold">Currently open to</span> — software engineering roles,
                AI/ML internships, full-stack development positions, and interesting research or open-source collaborations.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            {status === 'success' ? (
              <div className="glass-card p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <CheckCircle size={32} className="text-teal-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                <p className="text-text-secondary text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-outline text-sm py-2 px-4 mt-2">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4" noValidate>
                <h3 className="text-white font-semibold text-lg mb-2">Send a Message</h3>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-xs text-text-muted mb-1.5 block">Name *</label>
                    <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Your full name" className={inputClass('name')} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-xs text-text-muted mb-1.5 block">Email *</label>
                    <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" className={inputClass('email')} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="text-xs text-text-muted mb-1.5 block">Subject *</label>
                  <input id="contact-subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                    placeholder="e.g. Internship opportunity at XYZ" className={inputClass('subject')} />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="text-xs text-text-muted mb-1.5 block">Message *</label>
                  <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..." className={`${inputClass('message')} resize-none`} />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Error state */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                    <AlertCircle size={16} />
                    Something went wrong. Please email me directly at {personal.email}.
                  </div>
                )}

                {/* Submit */}
                <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-text-muted text-xs text-center">
                  Or email me directly at{' '}
                  <a href={`mailto:${personal.email}`} className="text-accent-400 hover:underline">{personal.email}</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
