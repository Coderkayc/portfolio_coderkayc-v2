'use client'
import { useScrollReveal } from '../lib/useScrollReveal'

const stats = [
  { num: '3+',    label: 'years building production software' },
  { num: '15+',   label: 'projects shipped end-to-end' },
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
          <h2 className="section-title">A developer who cares about <em>the details</em></h2>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-text reveal reveal-left" ref={textRef}>
            <p>I&apos;m a software developer who enjoys the whole journey of building a product — from the first sketch of an idea to a deployed, monitored application real people rely on. I move comfortably between interfaces, APIs and databases.</p>
            <p>My day-to-day is built around Next.js, React, Node.js, Express and MongoDB. I design clean REST APIs, model data thoughtfully, and build interfaces that feel quick and considered on every screen size.</p>
            <p>I believe good software is readable, tested and honest about its trade-offs. When I&apos;m not coding, I&apos;m reading about system design, tinkering with side projects, or contributing to open source.</p>
          </div>

          <div className="about-stats reveal reveal-stagger" ref={statsRef}>
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
