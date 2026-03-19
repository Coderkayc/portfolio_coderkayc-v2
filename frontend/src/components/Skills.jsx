'use client'
import { useScrollReveal } from '../lib/useScrollReveal'

const skillGroups = [
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js',         pct: 90 },
      { name: 'Express.js',      pct: 88 },
      { name: 'REST API Design', pct: 92 },
      { name: 'WebSockets',      pct: 75 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB',      pct: 87 },
      { name: 'Mongoose ODM', pct: 85 },
      { name: 'Redis',        pct: 70 },
      { name: 'PostgreSQL',   pct: 65 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js',     pct: 78 },
      { name: 'React',       pct: 75 },
      { name: 'TailwindCSS', pct: 80 },
      { name: 'TypeScript',  pct: 70 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker',              pct: 72 },
      { name: 'Git & GitHub',        pct: 90 },
      { name: 'Linux / Bash',        pct: 78 },
      { name: 'CI/CD (GH Actions)',  pct: 68 },
    ],
  },
]

function SkillGroup({ group }) {
  const ref = useScrollReveal({ threshold: 0.2 })
  return (
    <div className="skill-group reveal" ref={ref}>
      <div className="skill-group-title">{group.title}</div>
      {group.skills.map((s) => (
        <div className="skill-item" key={s.name}>
          <div className="skill-row">
            <span className="skill-name">{s.name}</span>
            <span className="skill-pct">{s.pct}%</span>
          </div>
          <div className="skill-track">
            <div
              className="skill-fill"
              style={{ '--skill-w': `${s.pct}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  const headerRef = useScrollReveal()

  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-eyebrow">Tech stack</div>
          <h2 className="section-title">Skills &amp; tools</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
