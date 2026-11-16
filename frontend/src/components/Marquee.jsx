const items = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Express',
  'MongoDB', 'MySQL', 'Redis', 'Docker', 'TailwindCSS', 'REST APIs', 'WebSockets',
]

export default function Marquee() {
  // list is rendered twice so the -50% translate loops seamlessly
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t} <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
