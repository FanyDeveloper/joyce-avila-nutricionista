// Recriação do ClickSpark (reactbits.dev), versão sutil.
import { useRef, type ReactNode, type PointerEvent } from 'react'
import { gsap, prefersReducedMotion } from '../../lib/gsap'

export default function ClickSpark({ children, color = '#C9A26B', className = '' }: { children: ReactNode; color?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  const faisca = (e: PointerEvent) => {
    if (prefersReducedMotion() || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    for (let i = 0; i < 8; i++) {
      const s = document.createElement('span')
      const ang = (i / 8) * Math.PI * 2
      Object.assign(s.style, {
        position: 'absolute', left: `${x}px`, top: `${y}px`, width: '9px', height: '1.5px',
        background: color, transformOrigin: '0 50%', pointerEvents: 'none', borderRadius: '2px',
        transform: `rotate(${ang}rad)`,
      })
      ref.current.appendChild(s)
      gsap.fromTo(s, { x: 0, y: 0, opacity: 1, scaleX: 1 }, {
        x: Math.cos(ang) * 22, y: Math.sin(ang) * 22, opacity: 0, scaleX: 0.2, duration: 0.5, ease: 'power2.out',
        onComplete: () => s.remove(),
      })
    }
  }

  return (
    <span ref={ref} onPointerDown={faisca} className={`relative inline-block ${className}`}>
      {children}
    </span>
  )
}
