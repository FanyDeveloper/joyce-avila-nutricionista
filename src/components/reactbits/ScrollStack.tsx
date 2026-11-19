// Recriação do ScrollStack (reactbits.dev): cartões que se empilham na rolagem.
import { useRef, type ReactNode } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'

export default function ScrollStack({ children, className = '' }: { children: ReactNode[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const cards = gsap.utils.toArray<HTMLElement>('[data-stack-card]')
      cards.forEach((card, i) => {
        const prox = cards[i + 1]
        if (!prox) return
        gsap.to(card.firstElementChild, {
          scale: 0.94,
          opacity: 0.55,
          ease: 'none',
          scrollTrigger: { trigger: prox, start: 'top 85%', end: 'top 20%', scrub: true },
        })
      })
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={className}>
      {children.map((c, i) => (
        <div key={i} data-stack-card className="sticky pb-6" style={{ top: `calc(6.5rem + ${i * 1.1}rem)` }}>
          <div className="origin-top will-change-transform">{c}</div>
        </div>
      ))}
    </div>
  )
}
