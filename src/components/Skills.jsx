import { skills } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

const categoryColors = {
  'Programming Languages':     { bg: 'bg-blue-500/10',   text: 'text-blue-400',   border: 'border-blue-500/20' },
  'Frontend Development':      { bg: 'bg-cyan-500/10',   text: 'text-cyan-400',   border: 'border-cyan-500/20' },
  'Backend Development':       { bg: 'bg-green-500/10',  text: 'text-green-400',  border: 'border-green-500/20' },
  'Databases':                 { bg: 'bg-amber-500/10',  text: 'text-amber-400',  border: 'border-amber-500/20' },
  'AI & Machine Learning':     { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  'Computer Vision':           { bg: 'bg-pink-500/10',   text: 'text-pink-400',   border: 'border-pink-500/20' },
  'Generative AI & NLP':       { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
  'Data Structures & Algorithms': { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/20' },
  'Developer Tools':           { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' },
};

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-24 lg:py-32 bg-dark-900/30" ref={ref}>
      <div className="section-wrapper">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-accent-400 font-mono text-sm mb-3">02. Technical Skills</p>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A broad and growing set of technologies spanning full-stack development, AI/ML, computer vision, and generative AI.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items]) => {
            const color = categoryColors[category] || { bg: 'bg-white/5', text: 'text-text-secondary', border: 'border-white/10' };
            return (
              <div
                key={category}
                className="reveal glass-card-hover p-5 flex flex-col gap-4"
              >
                {/* Category header */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${color.bg} ${color.border} border`}>
                  <span className={`text-xs font-semibold ${color.text}`}>{category}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border
                        bg-dark-800 text-text-secondary border-white/5
                        hover:${color.bg} hover:${color.text} hover:${color.border}
                        transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
