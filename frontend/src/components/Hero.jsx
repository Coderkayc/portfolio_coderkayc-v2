'use client'
import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  // If /public/profile.jpg is missing, fall back to initials instead of a broken image
  const [imgOk, setImgOk] = useState(true)
  const imgRef = useRef(null)

  // the browser may report the failed load before React attaches onError, so check once on mount
  useEffect(() => {
    const el = imgRef.current
    if (el && el.complete && el.naturalWidth === 0) setImgOk(false)
  }, [])

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="status-badge">
            <span className="status-dot"></span>Available for work
          </div>

          <div className="photo-wrap">
            <div className="photo-circle">
              <div className="photo-inner">
                {imgOk ? (
                  <img
                    ref={imgRef}
                    src="/profile.jpg"
                    alt="Ovaga Casmir Kosi"
                    className="photo-img"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <span className="photo-initials">OK</span>
                )}
              </div>
            </div>
            <div>
              <div className="hero-tag">// Software Developer</div>
              <div className="hero-name">Ovaga Casmir Kosi</div>
            </div>
          </div>

          <h1 className="hero-headline">
            I build software people <em>actually</em> enjoy using.
          </h1>

          <p className="hero-bio">
            Full-stack software developer crafting fast, reliable web applications — from
            polished interfaces to the APIs and databases behind them. I care about clean
            code, thoughtful design, and shipping things that work.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View projects <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>

        <div className="code-card-outer">
          <div className="code-card-wrap">
            <span className="float-chip chip-b"><b>●</b> full-stack</span>
            <div className="code-card">
              <div className="code-bar">
                <span className="c-dot a"></span>
                <span className="c-dot b"></span>
                <span className="c-dot c"></span>
                <span className="code-file">developer.ts</span>
              </div>
              <div className="code-body">
                <span className="code-line"><span className="cm">// who am i</span></span>
                <span className="code-line"><span className="k">const</span> <span className="s">developer</span> <span className="p">=</span> <span className="p">{'{'}</span></span>
                <span className="code-line">  <span className="p">name:</span> <span className="s">&quot;Ovaga Casmir Kosi&quot;</span><span className="p">,</span></span>
                <span className="code-line">  <span className="p">role:</span> <span className="s">&quot;Software Developer&quot;</span><span className="p">,</span></span>
                <span className="code-line">  <span className="p">stack:</span> <span className="p">[</span></span>
                <span className="code-line">    <span className="s">&quot;Next.js&quot;</span><span className="p">,</span> <span className="s">&quot;React&quot;</span><span className="p">,</span></span>
                <span className="code-line">    <span className="s">&quot;Node.js&quot;</span><span className="p">,</span> <span className="s">&quot;MongoDB&quot;</span></span>
                <span className="code-line">  <span className="p">],</span></span>
                <span className="code-line">  <span className="p">available:</span> <span className="n">true</span><span className="p">,</span></span>
                <span className="code-line"><span className="p">{'}'}</span><span className="caret"></span></span>
              </div>
            </div>
            <span className="float-chip chip-a"><b>→</b> open to work</span>
          </div>
        </div>
      </div>
    </div>
  )
}
