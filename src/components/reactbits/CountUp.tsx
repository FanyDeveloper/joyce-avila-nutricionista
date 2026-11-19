// Recriação do CountUp (reactbits.dev). Usar só com números reais.
import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'

type Props = { to: number; decimals?: number; className?: string; duration?: number }

export default function CountUp({ to, decimals = 0, className = '', duration = 1.6 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const formatar = (n: number) => n.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

  useGSAP(() => {
    const el = ref.current!
    if (prefersReducedMotion()) {
      el.textContent = formatar(to)
      return
    }
    const obj = { v: 0 }
    gsap.to(obj, {
      v: to,
      duration,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => (el.textContent = formatar(obj.v)),
    })
  })

  return (
    <span ref={ref} className={className}>
      {formatar(to)}
    </span>
  )
}
