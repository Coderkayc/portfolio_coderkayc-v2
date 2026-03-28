export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="status-badge">
            <span className="status-dot"></span>Available for work
          </div>
          <div className="photo-wrap">
        <div className="photo-circle">
        <span className="photo-initials">kay</span>
          </div>
            <div>
              <div className="hero-tag">// Backend Developer</div>
              <div className="hero-name">Ovaga Casmir Kosi</div>  
            </div>
          </div>
          <h1 className="hero-headline">
            Building the<br />
            <span className="hl">infrastructure</span><br />
            <span className="dim">behind great products.</span>
          </h1>
          <p className="hero-bio">
            I architect and ship backend systems — APIs that scale, databases that perform,
            and pipelines that don&apos;t break at 3am. I care about correctness, reliability,
            and code that other developers actually enjoy working with.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View projects</a>
            <a href="#contact"  className="btn-ghost">Get in touch</a>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <div className="t-dot r"></div>
            <div className="t-dot y"></div>
            <div className="t-dot g"></div>
            <span className="t-title">profile.json</span>
          </div>
          <div className="terminal-body">
            <span className="t-line"><span className="t-prompt">$ </span><span className="t-cmd">cat profile.json</span></span>
            <span className="t-line">&nbsp;</span>
            <span className="t-line"><span className="t-cmd">{'{'}</span></span>
            <span className="t-line"><span className="t-out"><span className="t-key">&quot;role&quot;</span>: <span className="t-str">&quot;Backend Developer&quot;</span>,</span></span>
            <span className="t-line"><span className="t-out"><span className="t-key">&quot;experience&quot;</span>: <span className="t-num">3</span>,</span></span>
            <span className="t-line"><span className="t-out"><span className="t-key">&quot;focus&quot;</span>: [</span></span>
            <span className="t-line"><span className="t-out">&nbsp;&nbsp;<span className="t-str">&quot;Node.js&quot;</span>, <span className="t-str">&quot;REST APIs&quot;</span>,</span></span>
            <span className="t-line"><span className="t-out">&nbsp;&nbsp;<span className="t-str">&quot;MongoDB&quot;</span>, <span className="t-str">&quot;PostgreSQL&quot;</span></span></span>
            <span className="t-line"><span className="t-out">],</span></span>
            <span className="t-line"><span className="t-out"><span className="t-key">&quot;available&quot;</span>: <span className="t-val">true</span>,</span></span>
            <span className="t-line"><span className="t-out"><span className="t-key">&quot;coffee&quot;</span>: <span className="t-str">&quot;required&quot;</span></span></span>
            <span className="t-line"><span className="t-cmd">{'}'}</span></span>
            <span className="t-line">&nbsp;</span>
            <span className="t-line"><span className="t-prompt">$ </span><span className="t-comment">_<span className="t-cursor"></span></span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
