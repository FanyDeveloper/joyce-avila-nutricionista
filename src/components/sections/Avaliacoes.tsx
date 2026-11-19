import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'
import { avaliacoes, empresa } from '../../data/empresa'
import TituloMascara from './TituloMascara'
import Estrelas from './Estrelas'
import CountUp from '../reactbits/CountUp'
import BotaoSecundario from '../ui/BotaoSecundario'

export default function Avaliacoes() {
  const ref = useRef<HTMLElement>(null)
  const [destaque, ...outras] = avaliacoes

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('[data-avaliacao]', { y: 50, opacity: 0, stagger: 0.14, duration: 1, scrollTrigger: { trigger: '[data-avaliacoes-grade]', start: 'top 80%' } })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="py-24 sm:py-32" aria-labelledby="titulo-avaliacoes">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <TituloMascara texto="Quem passou pelo|consultório conta" className="titulo-lg" />
            <span id="titulo-avaliacoes" className="sr-only">Avaliações no Google</span>
          </div>
          <div className="flex items-end gap-5 lg:col-span-5 lg:justify-end">
            <p className="font-display text-[5.5rem] leading-[0.8] text-cacau">
              <CountUp to={empresa.google.nota} decimals={1} />
            </p>
            <div className="pb-1">
              <Estrelas className="h-4 w-4" />
              <p className="mt-1.5 text-sm text-texto">
                <CountUp to={empresa.google.avaliacoes} /> avaliações no Google
              </p>
            </div>
          </div>
        </div>

        <div data-avaliacoes-grade className="mt-14 grid gap-5 lg:grid-cols-12">
          <figure data-avaliacao className="relative rounded-[var(--radius-suave)] bg-cacau p-8 text-marfim sm:p-12 lg:col-span-7 lg:row-span-2">
            <span aria-hidden className="absolute right-8 top-2 font-display text-[9rem] leading-none text-ouro/40">“</span>
            <Estrelas nota={destaque.nota} />
            <blockquote className="relative mt-6 font-display text-[1.65rem] leading-[1.3] text-marfim sm:text-[2rem]">
              {destaque.texto}
            </blockquote>
            <figcaption className="mt-8 text-sm text-marfim/70">
              <span className="font-medium text-marfim">{destaque.nome}</span> · Avaliação no Google · {destaque.quando}
            </figcaption>
          </figure>
          {outras.map((a, i) => (
            <figure key={a.nome} data-avaliacao className={`rounded-[var(--radius-suave)] border border-cacau/10 p-8 lg:col-span-5 ${i === 0 ? 'bg-blush lg:ml-10' : 'bg-linho/60'}`}>
              <Estrelas nota={a.nota} />
              <blockquote className="mt-4 text-[1.08rem] leading-relaxed text-tinta">“{a.texto}”</blockquote>
              <figcaption className="mt-5 text-sm text-texto">
                <span className="font-medium text-cacau">{a.nome}</span> · Avaliação no Google · {a.quando}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <BotaoSecundario href={empresa.mapsLink}>Ver todas as avaliações no Google</BotaoSecundario>
        </div>
      </div>
    </section>
  )
}
