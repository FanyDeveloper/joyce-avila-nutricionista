// Título revelado por linha com máscara. Use "|" para quebrar as linhas.
import { useRef, type ElementType } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'

type Props = { texto: string; as?: ElementType; className?: string; imediato?: boolean }

export default function TituloMascara({ texto, as: Tag = 'h2', className = '', imediato = false }: Props) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const linhas = ref.current!.querySelectorAll('[data-linha]')
      if (prefersReducedMotion()) {
        gsap.from(linhas, { opacity: 0, duration: 0.6 })
        return
      }
      gsap.from(linhas, {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.09,
        ease: 'expo.out',
        delay: imediato ? 0.35 : 0,
        scrollTrigger: imediato ? undefined : { trigger: ref.current, start: 'top 86%' },
      })
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className} aria-label={texto.replace(/\|/g, ' ')}>
      {texto.split('|').map((l, i) => (
        <span key={i} className="linha-mascara" aria-hidden>
          <span data-linha className="block will-change-transform">{l.trim()}</span>
        </span>
      ))}
    </Tag>
  )
}
