// Recriação do BlurText (reactbits.dev) em React + GSAP.
import { useRef, type ElementType } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'

type Props = {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
}
// Use "|" para quebrar linhas e *palavra* para destacar em itálico dourado.

export default function BlurText({ text, as: Tag = 'p', className = '', delay = 0, stagger = 0.06 }: Props) {
  const ref = useRef<HTMLElement>(null)
  const linhas = text.split('|')

  useGSAP(
    () => {
      const palavras = ref.current?.querySelectorAll('[data-palavra]')
      if (!palavras?.length) return
      if (prefersReducedMotion()) {
        gsap.from(palavras, { opacity: 0, duration: 0.6, delay })
        return
      }
      gsap.fromTo(
        palavras,
        { opacity: 0, filter: 'blur(12px)', yPercent: 35 },
        { opacity: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.9, stagger, delay, ease: 'expo.out' },
      )
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref} className={className} aria-label={text.replace(/\|/g, ' ').replace(/\*/g, '')}>
      {linhas.map((linha, i) => (
        <span key={i} className="block" aria-hidden="true">
          {linha.trim().split(' ').map((p, j) => (
            <span key={j} data-palavra className={`inline-block will-change-transform ${p.startsWith('*') ? 'italic text-ouro-texto' : ''}`}>
              {p.replace(/\*/g, '')}
              {' '}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  )
}
