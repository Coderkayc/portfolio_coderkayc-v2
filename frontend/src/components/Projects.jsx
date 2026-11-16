'use client'
import { useScrollReveal } from '../lib/useScrollReveal'

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
)

const LiveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

// ✏️ Replace these sample projects with your real ones
const projects = [
  {
    tag: 'Web App',
    name: 'Luminest Africa - Energy Expense Tracker',
    desc: 'LUMINEST AFRICA is a web app that helps Nigerian households track and understand what they spend on electricity — across NEPA prepaid tokens, generator diesel, and solar top-ups — all in one place. It provides insights into energy consumption patterns, helps users optimize their electricity usage, and ultimately saves them money.Real-time productivity dashboard with GitHub integrations, custom metrics and live team insights streamed over WebSockets.',
    stack: ['React', 'TypeScript', 'Express', 'WebSockets'],
    perf: 'live updates < 100ms',
    github: 'https://github.com/Coderkayc/LUMINEST-AFRICA',
    live: 'https://luminestafrica.vercel.app',
    featured: true,
  },
  {
    tag: 'Full-stack',
    name: 'Attendance Management System',
    desc: 'A full-stack QR-code based attendance management system built for the University of Nigeria, Nsukka (UNN). The system enables lecturers to generate attendance sessions using QR codes, students to mark attendance securely, and administrators to manage courses and generate attendance reports.',
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'React'],
    perf: '1k+ users',
    github: 'https://github.com/Coderkayc/Attendance-System',
    live: 'https://attendance-system-rho-virid.vercel.app',
  },
  {
    tag: 'Machine Learning',
    name: 'Students Academic Risk Prediction System (SARPS)',
    desc: 'A machine learning-based system for predicting academic risks and providing interventions for students.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'MySQL', 'Flask'],
    perf: 'zero-downtime deploys',
    github: 'https://github.com/Coderkayc/sarp',
    live: 'https://sarps.vercel.app',
  },
  {
    tag: 'Productivity',
    name: 'Teams Task Manager',
    desc: 'Collaborative kanban-style task manager with drag-and-drop boards, comments, notifications and a clean mobile-first interface.',
    stack: ['JavaScript'],
    perf: 'used by 3 teams',
    github: 'https://github.com/Coderkayc/sarps',
    live: 'https://sarps.vercel.app',
  },
  {
    tag: 'DevOps',
    name: 'Deployment Toolkit',
    desc: 'CLI and API layer for service deployment, secrets and environment provisioning using Docker and GitHub Actions. Cut onboarding from days to under an hour.',
    stack: ['Node.js', 'Docker', 'Linux / Bash', 'GitHub Actions'],
    perf: 'days → 1 hour',
    github: 'https://github.com/yourhandle/deploy-toolkit',
    live: 'https://deploy.yourname.dev',
  },
]

export default function Projects() {
  const headerRef = useScrollReveal()
  const gridRef   = useScrollReveal({ threshold: 0.05 })

  return (
    <section id="projects" className="alt-bg">
      <div className="section-wrap">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-eyebrow">What I&apos;ve built</div>
          <h2 className="section-title">Selected <em>projects</em></h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid reveal reveal-stagger" ref={gridRef}>
          {projects.map((p, i) => (
            <div className={`project-card${p.featured ? ' featured' : ''}`} key={p.name}>
              <div className="proj-top">
                <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="proj-tag">{p.tag}</span>
              </div>
              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map((s) => <span className="s-pill" key={s}>{s}</span>)}
              </div>
              <div className="proj-footer">
                <span className="perf-tag">{p.perf}</span>
                <div className="proj-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <GithubIcon /> GitHub
                  </a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link proj-link-live">
                    <LiveIcon /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
