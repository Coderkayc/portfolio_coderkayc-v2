'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12)
      ringY = lerp(ringY, mouseY, 0.12)
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      raf = requestAnimationFrame(animate)
    }

    // Grow ring on hoverable elements
    const onEnter = () => ring.classList.add('cursor-hover')
    const onLeave = () => ring.classList.remove('cursor-hover')

    const targets = 'a, button, [role="button"], input, textarea, .project-card, .stat-card, .skill-group'

    const attachListeners = () => {
      document.querySelectorAll(targets).forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    // Hide default cursor
    document.body.style.cursor = 'none'

    window.addEventListener('mousemove', onMove)
    attachListeners()
    raf = requestAnimationFrame(animate)

    // Re-attach on any DOM changes (Next.js route transitions)
    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
