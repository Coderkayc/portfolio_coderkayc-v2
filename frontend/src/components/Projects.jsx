'use client'
import { useScrollReveal } from '../lib/useScrollReveal'
import './projects.css'

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
)

const LiveIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

// ✏️ Put your real GitHub and live links here.
// Screenshots live in /public/projects/ (swap a file there to change the image).
const projects = [
  {
    kicker: 'Web app',
    name: 'Luminest Africa: Energy Expense Tracker',
    desc: 'A web app that helps Nigerian households track and understand what they spend on electricity across NEPA prepaid tokens, generator diesel and solar top-ups, all in one place. It shows exactly where every naira goes, sends budget alerts before you overspend and delivers weekly summaries on WhatsApp.',
    facts: ['Live in Lagos and Abuja', 'Weekly WhatsApp summaries', 'Budget alerts'],
    stack: ['React', 'TypeScript', 'Express', 'WebSockets'],
    image: '/projects/luminest.jpg',
    alt: 'Luminest Africa home page showing a monthly electricity spend breakdown',
    domain: 'luminest.africa',
    github: 'https://github.com/Coderkayc/LUMINEST-AFRICA',
    live: 'https://luminestafrica.vercel.app',
  },
  {
    kicker: 'Full-stack',
    name: 'Attendance Management System',
    desc: 'A QR-code attendance system built for the Department of Computer Science, University of Nigeria, Nsukka. Lecturers generate a QR session, students mark attendance by scanning the code or pasting it, and admins manage courses and view attendance records.',
    facts: ['Built for UNN Computer Science', 'QR and code check-in', 'Admin, lecturer and student roles'],
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'React', 'JWT'],
    image: '/projects/attendance.jpg',
    alt: 'University of Nigeria Nsukka attendance system home page with a four-step how it works panel',
    domain: 'attendance.unn.edu.ng',
    github: 'https://github.com/Coderkayc/Attendance-System',
    live: 'https://attendance-system-rho-virid.vercel.app',
  },
  {
    kicker: 'Machine learning',
    name: 'Students Academic Risk Prediction System',
    desc: 'SARPS helps University of Nigeria, Nsukka students check their academic risk at any point in the semester, so they can act instead of react. A machine learning model predicts the risk and suggests what to do about it.',
    facts: ['For UNN students', 'Risk check any time in the semester'],
    stack: ['Python', 'scikit-learn', 'Pandas', 'MySQL', 'Flask'],
    image: '/projects/sarps.jpg',
    alt: 'SARPS home page with the headline Know where you stand, early enough to act',
    domain: 'sarps.app',
    github: 'https://github.com/Coderkayc/sarps',
    live: 'https://sarps.vercel.app',
  },
]

function ProjectRow({ p, flip }) {
  const ref = useScrollReveal({ threshold: 0.12 })
  return (
    <article className={`work-row reveal${flip ? ' flip' : ''}`} ref={ref}>
      <a className="work-shot-wrap" href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`}>
        <div className="work-shot">
          <div className="work-bar">
            <i></i><i></i><i></i>
            <span>{p.domain}</span>
          </div>
          <img src={p.image} alt={p.alt} width="1400" height="658" loading="lazy" />
        </div>
      </a>

      <div className="work-text">
        <p className="work-kicker">{p.kicker}</p>
        <h3 className="work-name">{p.name}</h3>
        <p className="work-desc">{p.desc}</p>
        <ul className="work-facts">
          {p.facts.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <ul className="work-stack">
          {p.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <div className="work-links">
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="work-btn">
            <GithubIcon /> GitHub
          </a>
          <a href={p.live} target="_blank" rel="noopener noreferrer" className="work-btn work-btn-live">
            <LiveIcon /> Live site
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const headerRef = useScrollReveal()

  return (
    <section id="projects" className="alt-bg">
      <div className="section-wrap">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-eyebrow">What I&apos;ve built</div>
          <h2 className="section-title">Selected <em>projects</em></h2>
          <div className="section-line"></div>
        </div>

        <div className="work-list">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
