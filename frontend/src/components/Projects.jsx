  'use client'
import { useScrollReveal } from '../lib/useScrollReveal'

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
  </svg>
)

const LiveIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    tag: 'REST API', tagClass: 'tag-api',
    name: 'Attendance Management System',
    desc: 'A full-stack QR-code based attendance management system built for the University of Nigeria, Nsukka (UNN). The system enables lecturers to generate attendance sessions using QR codes, students to mark attendance securely, and administrators to manage courses and generate attendance reports.',
    stack: ['Node.js','Express','MongoDB','React','Next.js'],
    perf: '5k req/s',
    github: 'https://github.com/Coderkayc/Attendance-System',
    live: 'https://attendance-system-rho-virid.vercel.app/',
  },
  {
    tag: 'full-stack monorepo web app', tagClass: 'tag-sys',
    name: 'Luminest Africa - Energy Expense Tracker',
    desc: 'LUMINEST AFRICA is a web app that helps Nigerian households track and understand what they spend on electricity — across NEPA prepaid tokens, generator diesel, and solar top-ups — all in one place. It provides insights into energy consumption patterns, helps users optimize their electricity usage, and ultimately saves them money.',
    stack: ['Node.js','Express','MongoDB','Mongoose','JWT','Docker'],
    perf: 'zero downtime',
    github: 'https://github.com/Coderkayc/LUMINEST-AFRICA',
    live: 'https://luminestafrica.vercel.app/',
  },
  {
    tag: 'Database', tagClass: 'tag-db',
    name: 'Analytics Pipeline & Data Warehouse',
    desc: 'ETL pipeline ingesting real-time event streams into a queryable data warehouse. Reduced reporting query time from 40s to under 800ms via schema normalization, strategic indexing, and materialized views.',
    stack: ['Node.js','PostgreSQL','Redis','WebSockets','GitHub Actions'],
    perf: '40s → 800ms',
    github: 'https://github.com/yourhandle/analytics-pipeline',
    live: 'https://analytics.yourname.dev',
  },
  {
    tag: 'DevOps', tagClass: 'tag-infra',
    name: 'Internal Developer Platform',
    desc: 'CLI + API layer for internal service deployment, secrets management, and environment provisioning using Docker and GitHub Actions. Slashed developer onboarding from days to under an hour.',
    stack: ['Node.js','Docker','Linux/Bash','GitHub Actions','Next.js'],
    perf: 'days → 1 hr',
    github: 'https://github.com/yourhandle/dev-platform',
    live: 'https://devplatform.yourname.dev',
  },
]

export default function Projects() {
  const headerRef = useScrollReveal()
  const gridRef   = useScrollReveal({ threshold: 0.05 })

  return (
    <section id="projects" className="projects-bg">
      <div className="section-wrap">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-eyebrow">What I&apos;ve built</div>
          <h2 className="section-title">Selected projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid reveal-stagger reveal" ref={gridRef}>
          {projects.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="proj-header">
                <span className={`proj-tag ${p.tagClass}`}>{p.tag}</span>
                <div className="proj-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link proj-link-gh">
                    <GithubIcon /> GitHub
                  </a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link proj-link-live">
                    <LiveIcon /> Live
                  </a>
                </div>
              </div>
              <div className="proj-name">{p.name}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-footer">
                <div className="proj-stack">
                  {p.stack.map((s) => <span className="s-pill" key={s}>{s}</span>)}
                </div>
                <div className="perf-tag">{p.perf}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
