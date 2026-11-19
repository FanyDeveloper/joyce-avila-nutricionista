// Recriação do ScrollReveal (reactbits.dev): palavras ganham opacidade conforme a rolagem.
import { useRef, type ElementType } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'

type Props = { children: string; as?: ElementType; className?: string; baseOpacity?: number }

export default function ScrollReveal({ children, as: Tag = 'p', className = '', baseOpacity = 0.14 }: Props) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const palavras = ref.current!.querySelectorAll('[data-p]')
      gsap.fromTo(
        palavras,
        { opacity: baseOpacity },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: 'top 82%', end: 'bottom 45%', scrub: true },
        },
      )
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className}>
      {children.split(' ').map((p, i) => (
        <span key={i} data-p className="inline">
          {p}{' '}
        </span>
      ))}
    </Tag>
  )
}
