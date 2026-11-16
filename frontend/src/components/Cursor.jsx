'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Skip the custom cursor entirely on touch devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    let mouseX = -100, mouseY = -100
    let ringX  = -100, ringY  = -100
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.14)
      ringY = lerp(ringY, mouseY, 0.14)
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      raf = requestAnimationFrame(animate)
    }

    // Grow the ring over interactive elements (event delegation — no re-attaching needed)
    const hoverSelector = 'a, button, [role="button"], input, textarea, label, .project-card, .stat-card, .skill-group'
    const onOver = (e) => {
      if (e.target.closest(hoverSelector)) ring.classList.add('cursor-hover')
    }
    const onOut = (e) => {
      if (e.target.closest(hoverSelector)) ring.classList.remove('cursor-hover')
    }

    document.documentElement.classList.add('has-custom-cursor')
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(animate)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
