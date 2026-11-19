// Recriação do Magnet (reactbits.dev).
import { useRef, type ReactNode } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'

export default function Magnet({ children, strength = 0.35, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current!
      if (prefersReducedMotion() || window.matchMedia('(hover: none)').matches) return
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' })
      const mover = contextSafe!((e: PointerEvent) => {
        const r = el.getBoundingClientRect()
        xTo((e.clientX - (r.left + r.width / 2)) * strength)
        yTo((e.clientY - (r.top + r.height / 2)) * strength)
      })
      const sair = contextSafe!(() => {
        xTo(0)
        yTo(0)
      })
      el.addEventListener('pointermove', mover)
      el.addEventListener('pointerleave', sair)
      return () => {
        el.removeEventListener('pointermove', mover)
        el.removeEventListener('pointerleave', sair)
      }
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  )
}
