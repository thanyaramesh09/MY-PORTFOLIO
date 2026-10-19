import { useState } from 'react';
import { Heart, Users, Globe } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import ImageWithFallback from './ui/ImageWithFallback';
import Lightbox from './ui/Lightbox';

// ── Social activities images (Images 13 & 14) ────────────────────────────────
import social1Image from '../assets/social1.png';
import social2Image from '../assets/social2.png';

// ── Team collaboration images (Images 15–18) ─────────────────────────────────
import team1Image from '../assets/team1.jpg';
import team2Image from '../assets/team2.jpg';
import team3Image from '../assets/team3.jpg';
import team4Image from '../assets/team4.jpg';

// ── Hackathon images (Images 19–22) ──────────────────────────────────────────
import hackathon1Image from '../assets/hackathon1.jpg';
import hackathon2Image from '../assets/hackathon2.jpg';
import hackathon3Image from '../assets/hackathon3.jpg';
import hackathon4Image from '../assets/hackathon4.jpg';

// ── Sports images (Images 23–26) ─────────────────────────────────────────────
import sports1Image from '../assets/sports1.png';
import sports2Image from '../assets/sports2.png';
import sports3Image from '../assets/sports3.png';
import sports4Image from '../assets/sports4.png';

// ── Static data (now using imported images) ───────────────────────────────────
const socialActivities = [
  {
    title: 'AICTE Social Impact Initiative',
    role: 'Team Leader',
    description:
      'Led a team to develop a community-focused technology solution. Coordinated research, ideation, development, and presentation to drive real-world social impact through technology.',
    image: social1Image,
  },
  {
    title: 'Inspiring Young Minds',
    role: 'Participant & Contributor',
    description:
      'Engaged in educational outreach and mentoring activities to inspire the next generation of technologists. Shared knowledge, experiences, and guidance with younger students.',
    image: social2Image,
  },
];

const teamCollaboration = [
  { image: team1Image, caption: 'Team collaboration and peer learning' },
  { image: team2Image, caption: 'Professional networking and workshops' },
  { image: team3Image, caption: 'Building connections across disciplines' },
  { image: team4Image, caption: 'Collaborative problem-solving sessions' },
];

const hackathons = [
  {
    title: 'CODE NEURAL State-Level Hackathon',
    description:
      'Competed among 200+ teams, reaching the Top 20. Developed a technically strong solution under time pressure.',
    result: 'Top 20 Finalist',
    image: hackathon1Image,
  },
  {
    title: 'Innovation Challenge',
    description:
      'Collaborated with a cross-functional team to ideate, prototype, and present a technology-driven solution.',
    result: 'Participant',
    image: hackathon2Image,
  },
  {
    title: 'Technical Competition',
    description:
      'Engaged in rapid problem-solving and technical development with peers in a competitive environment.',
    result: 'Participant',
    image: hackathon3Image,
  },
  {
    title: 'Team Hackathon',
    description:
      'Built a prototype addressing a real-world problem, demonstrating teamwork and fast-paced delivery.',
    result: 'Participant',
    image: hackathon4Image,
  },
];

const sports = [
  {
    title: 'College Basketball Club',
    role: 'Team Captain',
    description:
      'Led the college basketball team as captain, building team cohesion, coordinating training schedules, and representing the college in inter-college competitions.',
    image: sports1Image,
  },
  {
    title: 'Basketball Competitions',
    role: 'Player',
    description:
      'Competed in inter-college basketball tournaments, developing teamwork, discipline, and competitive sporting skills.',
    image: sports2Image,
  },
  {
    title: 'Sports Events',
    role: 'Participant',
    description:
      'Active participant in college sports events, balancing athletics with academics and technical pursuits.',
    image: sports3Image,
  },
  {
    title: 'Club Management',
    role: 'Club Organizer',
    description:
      'Contributed to sports club management activities, including event coordination, member engagement, and logistics.',
    image: sports4Image,
  },
];



// ── Social Activities ──────────────────────────────────────────────────────────
function SocialActivitiesSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-pink-400 font-mono text-sm mb-3">Social Impact</p>
        <h2 className="font-display text-3xl sm:text-4xl font-800 text-text-primary mb-4" style={{ fontWeight: 800 }}>
          Inspiring Young Minds
        </h2>
        <p className="section-subtitle max-w-xl mx-auto">
          Contributing to community impact through leadership, educational outreach, and technology-driven social initiatives.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {socialActivities.map((activity, i) => (
          <div key={i} className="glass-card-hover overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <ImageWithFallback
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                placeholderText={`${activity.title} photo`}
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
              />
            </div>
            <div className="p-5">
              <div className="flex items-start gap-2 mb-2">
                <Heart size={14} className="text-pink-400 mt-0.5 flex-shrink-0" />
                <span className="text-pink-400 text-xs font-semibold">{activity.role}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{activity.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={socialActivities.map(a => ({ image: a.image, caption: a.title }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((p) => (p - 1 + socialActivities.length) % socialActivities.length)}
          onNext={() => setLightboxIndex((p) => (p + 1) % socialActivities.length)}
        />
      )}
    </div>
  );
}

// ── Team Collaboration ─────────────────────────────────────────────────────────
function TeamCollaborationSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-accent-400 font-mono text-sm mb-3">Collaboration</p>
        <h2 className="font-display text-3xl sm:text-4xl font-800 text-text-primary mb-4" style={{ fontWeight: 800 }}>
          Building Networks
        </h2>
        <p className="section-subtitle max-w-xl mx-auto">
          Technical work is rarely solitary. These moments capture the collaborative spirit that drives growth, knowledge-sharing, and meaningful projects.
        </p>
      </div>

      {/* Editorial layout */}
      <div className="grid grid-cols-12 gap-3">
        {/* Large image */}
        <div className="col-span-12 sm:col-span-7 relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
          onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}>
          <ImageWithFallback
            src={teamCollaboration[0]?.image}
            alt={teamCollaboration[0]?.caption}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            placeholderText="Team collaboration photo 1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent flex items-end p-4">
            <p className="text-white text-sm font-medium">{teamCollaboration[0]?.caption}</p>
          </div>
        </div>

        {/* Stack of 3 smaller images */}
        <div className="col-span-12 sm:col-span-5 grid grid-rows-3 gap-3">
          {teamCollaboration.slice(1).map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl cursor-pointer"
              onClick={() => { setLightboxIndex(i + 1); setLightboxOpen(true); }}>
              <ImageWithFallback
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[80px]"
                style={{ height: '80px' }}
                placeholderText={`Team photo ${i + 2}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <p className="text-white text-xs">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration values */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { title: 'Cross-functional Teamwork', desc: 'Combining diverse skill sets to deliver technical projects with higher impact.' },
          { title: 'Knowledge Sharing', desc: 'Workshops, bootcamps, and peer learning sessions accelerate individual and collective growth.' },
          { title: 'Professional Networking', desc: 'Building lasting connections across institutions, industries, and international programs.' },
        ].map(({ title, desc }) => (
          <div key={title} className="glass-card p-4">
            <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-accent-500 to-violet-500 mb-3" />
            <p className="text-white font-semibold text-sm mb-1">{title}</p>
            <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={teamCollaboration.map(t => ({ image: t.image, caption: t.caption }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((p) => (p - 1 + teamCollaboration.length) % teamCollaboration.length)}
          onNext={() => setLightboxIndex((p) => (p + 1) % teamCollaboration.length)}
        />
      )}
    </div>
  );
}

// ── Hackathons ─────────────────────────────────────────────────────────────────
function HackathonsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-violet-400 font-mono text-sm mb-3">Innovation</p>
        <h2 className="font-display text-3xl sm:text-4xl font-800 text-text-primary mb-4" style={{ fontWeight: 800 }}>
          Hackathons & Competitions
        </h2>
        <p className="section-subtitle max-w-xl mx-auto">
          High-pressure, rapid problem-solving events that test creativity, technical skill, and teamwork under real constraints.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {hackathons.map((h, i) => (
          <div key={i} className="glass-card-hover overflow-hidden group cursor-pointer"
            onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}>
            <div className="relative overflow-hidden aspect-video">
              <ImageWithFallback
                src={h.image}
                alt={h.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                placeholderText={`${h.title} photo`}
              />
              {h.result && h.result !== 'Participant' && (
                <div className="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-sm text-dark-950 text-xs font-bold px-2.5 py-1 rounded-full">
                  🏆 {h.result}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-white font-bold text-base mb-1">{h.title}</h3>
              <p className="text-text-secondary text-xs leading-relaxed">{h.description}</p>
              {h.result && (
                <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  {h.result}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={hackathons.map(h => ({ image: h.image, caption: h.title }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((p) => (p - 1 + hackathons.length) % hackathons.length)}
          onNext={() => setLightboxIndex((p) => (p + 1) % hackathons.length)}
        />
      )}
    </div>
  );
}

// ── Sports ─────────────────────────────────────────────────────────────────────
function SportsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-orange-400 font-mono text-sm mb-3">Leadership & Sport</p>
        <h2 className="font-display text-3xl sm:text-4xl font-800 text-text-primary mb-4" style={{ fontWeight: 800 }}>
          Sports & Club Management
        </h2>
        <p className="section-subtitle max-w-xl mx-auto">
          Leadership, discipline, and teamwork don't exist only in code — they show up on the court and in every team I've led.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {sports.map((s, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
            onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}>
            <ImageWithFallback
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              placeholderText={`${s.title} photo`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
              <p className="text-white text-xs font-bold">{s.role}</p>
              <p className="text-text-muted text-xs">{s.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Transferable skills */}
      <div className="glass-card p-6">
        <h3 className="text-white font-semibold text-sm mb-4">Transferable Skills from Sport</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            'Team Leadership', 'Event Coordination', 'Communication',
            'Discipline & Focus', 'Competitive Mindset', 'Peer Motivation',
          ].map((skill) => (
            <div key={skill} className="flex items-center gap-2 text-sm text-text-secondary">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
              {skill}
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={sports.map(s => ({ image: s.image, caption: `${s.role} · ${s.title}` }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((p) => (p - 1 + sports.length) % sports.length)}
          onNext={() => setLightboxIndex((p) => (p + 1) % sports.length)}
        />
      )}
    </div>
  );
}

// ── Main Activities Section ────────────────────────────────────────────────────
export default function Activities() {
  const ref = useReveal();

  return (
    <section id="activities" className="py-24 lg:py-32 bg-dark-950" ref={ref}>
      <div className="section-wrapper space-y-24">
        <div className="reveal"><SocialActivitiesSection /></div>
        <div className="reveal"><TeamCollaborationSection /></div>
        <div className="reveal"><HackathonsSection /></div>
        <div className="reveal"><SportsSection /></div>
      </div>
    </section>
  );
}
