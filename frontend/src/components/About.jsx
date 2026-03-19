'use client'
import { useScrollReveal } from '../lib/useScrollReveal'

const stats = [
  { num: '3+',    label: 'years in production systems' },
  { num: '15+',   label: 'APIs designed & deployed' },
  { num: '99.9%', label: 'uptime on core services' },
  { num: '∞',     label: 'cups of coffee consumed' },
]

export default function About() {
  const headerRef = useScrollReveal()
  const textRef   = useScrollReveal({ threshold: 0.1 })
  const statsRef  = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="about">
      <div className="section-wrap">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-eyebrow">Who I am</div>
          <h2 className="section-title">About me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-text reveal-left reveal" ref={textRef}>
            <p>I&apos;m a backend developer who lives in the parts of a system most users never see — but always feel. My work is in the APIs that respond in milliseconds, the databases that hold up under pressure, and the services that keep running when everything else goes sideways.</p>
            <p>I specialise in Node.js ecosystems, RESTful API design, and database architecture across both relational and NoSQL paradigms. I&apos;ve built everything from lean microservices to complex event-driven pipelines.</p>
            <p>I believe clean architecture isn&apos;t a luxury — it&apos;s what separates a codebase you can ship fast from one that buries you in technical debt. When I&apos;m not writing server-side code, I&apos;m reading about distributed systems or contributing to open source.</p>
          </div>
          <div className="about-stats reveal-stagger reveal" ref={statsRef}>
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
