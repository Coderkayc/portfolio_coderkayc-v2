'use client'
import { useState } from 'react'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const headerRef = useScrollReveal()
  const linksRef  = useScrollReveal({ threshold: 0.1 })
  const formRef   = useScrollReveal({ threshold: 0.1 })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const btnLabel = {
    idle:    'Send message →',
    sending: 'Sending...',
    success: 'Message sent ✓',
    error:   'Failed — try again',
  }[status]

  return (
    <section id="contact" className="projects-bg">
      <div className="section-wrap">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-eyebrow">Get in touch</div>
          <h2 className="section-title">Let&apos;s work together</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal-left reveal" ref={linksRef}>
            <h3>Open to opportunities</h3>
            <p>Whether you have a project that needs a solid backend foundation, a team that needs an extra engineer, or just want to talk systems architecture — my inbox is open.</p>
            <div className="contact-links revealed">
              <a href="https://github.com/Coderkayc" className="c-link" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                github.com/Coderkayc
              </a>
              <a href="https://linkedin.com/in/kosi-casmir-ovaga-16a58a30b" className="c-link" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                linkedin.com/in/kosi-casmir-ovaga-16a58a30b
              </a>
              <a href="mailto:valentinekosi2@gmail.com" className="c-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                valentinekosi2@gmail.com
              </a>
            </div>
          </div>

          <form className="contact-form reveal-right reveal" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your name</label>
              <input
                type="text" name="name" className="form-input"
                placeholder="John Doe" value={form.name}
                onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your email</label>
              <input
                type="email" name="email" className="form-input"
                placeholder="john@example.com" value={form.email}
                onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message" className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={handleChange}
              />
            </div>
            <button
              type="submit" className="form-submit"
              disabled={status === 'sending'}
              style={status === 'success' ? { background: 'var(--accent)' } : {}}
            >
              {btnLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
