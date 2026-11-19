// Recriação do LogoLoop (reactbits.dev) como faixa contínua de palavras.
import { useRef, Fragment } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'

export default function LogoLoop({ itens, velocidade = 40, className = '' }: { itens: string[]; velocidade?: number; className?: string }) {
  const trilho = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const el = trilho.current!
      const largura = el.scrollWidth / 2
      const tween = gsap.to(el, { x: -largura, duration: largura / velocidade, ease: 'none', repeat: -1 })
      const pausar = () => gsap.to(tween, { timeScale: 0.25, duration: 0.5 })
      const voltar = () => gsap.to(tween, { timeScale: 1, duration: 0.5 })
      el.addEventListener('pointerenter', pausar)
      el.addEventListener('pointerleave', voltar)
      return () => {
        el.removeEventListener('pointerenter', pausar)
        el.removeEventListener('pointerleave', voltar)
      }
    },
    { scope: trilho },
  )

  const lista = (sufixo: string) =>
    itens.map((t, i) => (
      <Fragment key={sufixo + i}>
        <span className="whitespace-nowrap">{t}</span>
        <span aria-hidden className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-ouro-claro" />
      </Fragment>
    ))

  return (
    <div className={`overflow-hidden ${className}`} aria-label={itens.join(', ')}>
      <div ref={trilho} className="flex w-max items-center" aria-hidden>
        {lista('a')}
        {lista('b')}
      </div>
    </div>
  )
}
