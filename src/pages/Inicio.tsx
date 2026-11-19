import { useRef, useState, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap'
import { useSeo } from '../hooks/useSeo'
import { atendimento, diferenciais, empresa, servicos, sobre } from '../data/empresa'
import { linkWhatsApp } from '../lib/whatsapp'
import BlurText from '../components/reactbits/BlurText'
import ScrollReveal from '../components/reactbits/ScrollReveal'
import LogoLoop from '../components/reactbits/LogoLoop'
import Magnet from '../components/reactbits/Magnet'
import ShinyText from '../components/reactbits/ShinyText'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import CountUp from '../components/reactbits/CountUp'
import BotaoPrimario from '../components/ui/BotaoPrimario'
import BotaoSecundario from '../components/ui/BotaoSecundario'
import { IconeWhatsApp } from '../components/ui/Icones'
import TituloMascara from '../components/sections/TituloMascara'
import ImagemRevelada from '../components/sections/ImagemRevelada'
import Estrelas from '../components/sections/Estrelas'
import Avaliacoes from '../components/sections/Avaliacoes'
import Localizacao from '../components/sections/Localizacao'
import CtaFinal from '../components/sections/CtaFinal'

export default function Inicio() {
  useSeo({
    title: 'Joyce Avila Nutricionista em Balneário Camboriú | Saúde da Mulher',
    description:
      'Nutricionista no Centro de Balneário Camboriú. Tratamento nutricional para mulheres: emagrecimento, saúde hormonal e performance. 5,0 no Google. Agende pelo WhatsApp.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <div className="bg-cacau py-6 font-display text-[1.7rem] italic text-marfim sm:text-[2.1rem]">
        <LogoLoop
          itens={['Emagrecimento', 'Saúde hormonal', 'Performance e hipertrofia', 'Reeducação alimentar', 'Centro de Balneário Camboriú', empresa.bordao]}
        />
      </div>
      <QuemSou />
      <Tratamentos />
      <Diferenciais />
      <ComoFunciona />
      <Avaliacoes />
      <Localizacao />
      <CtaFinal />
    </>
  )
}

/* ------------------------------------------------------------------ */

function Hero() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduzido = prefersReducedMotion()
      const tl = gsap.timeline({ delay: 0.55 })
      tl.from('[data-hero-sub]', { y: reduzido ? 0 : 24, opacity: 0, duration: 0.7 })
        .from('[data-hero-cta]', { y: reduzido ? 0 : 20, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.45')
        .from('[data-hero-selo]', { y: reduzido ? 0 : 16, opacity: 0, duration: 0.6 }, '-=0.4')
      if (!reduzido) {
        gsap.from('[data-hero-anel]', { scale: 0.85, opacity: 0, duration: 1.4, stagger: 0.15, ease: 'expo.out', delay: 0.3 })
      }
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="relative overflow-hidden bg-blush pt-28 sm:pt-36 lg:min-h-[100svh] lg:pt-32">
      {/* fios dourados, herdados da identidade da marca */}
      <svg data-hero-anel aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] text-ouro/55" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="0.35" />
      </svg>
      <svg data-hero-anel aria-hidden className="pointer-events-none absolute -bottom-52 -left-40 h-[460px] w-[460px] text-ouro/45" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="0.45" />
      </svg>

      <div className="container-site relative grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="pb-6 lg:col-span-7 lg:pb-20">
          <p data-hero-sub className="kicker mb-7">Nutricionista · Saúde da mulher · Centro de BC</p>
          <BlurText
            as="h1"
            text="Nutrição para mulheres que querem um resultado *que *fica."
            className="max-w-[11.5em] text-cacau text-[clamp(2.75rem,5.6vw,5.6rem)]"
            delay={0.35}
          />
          <p data-hero-sub className="texto-corpo mt-8 max-w-xl">
            Sou a Joyce Avila, nutricionista em Balneário Camboriú. Não prescrevo dietas, conduzo tratamentos para emagrecimento,
            saúde hormonal e performance, com uma estratégia que cabe na sua rotina.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <div data-hero-cta>
              <Magnet>
                <BotaoPrimario href={linkWhatsApp()} externo icone={<IconeWhatsApp className="h-4 w-4" />}>
                  Agendar minha consulta
                </BotaoPrimario>
              </Magnet>
            </div>
            <div data-hero-cta>
              <BotaoSecundario to="/servicos">Conhecer os tratamentos</BotaoSecundario>
            </div>
          </div>
          <a
            data-hero-selo
            href={empresa.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 text-sm text-texto hover:text-cacau"
          >
            <Estrelas />
            <span>
              <strong className="font-medium text-cacau">5,0 no Google</strong> · {empresa.google.avaliacoes} avaliações
            </span>
          </a>
        </div>

        <div className="relative lg:col-span-5">
          <ImagemRevelada
            prioridade
            parallax={false}
            src="/img/joyce-retrato-960.webp"
            srcSet="/img/joyce-retrato-480.webp 480w, /img/joyce-retrato-960.webp 960w"
            sizes="(min-width: 1024px) 40vw, 90vw"
            alt="Retrato da nutricionista Joyce Avila com blazer off-white e brincos dourados, mão apoiada no queixo"
            largura={960}
            altura={1186}
            className="mx-auto aspect-[4/5] w-full max-w-[460px] rounded-t-[999px] lg:max-h-[calc(100svh-8rem)] lg:max-w-none"
            imgClassName="!scale-100 object-[50%_20%]"
          />
          <div
            data-hero-selo
            className="absolute -left-2 bottom-8 max-w-[15rem] rounded-2xl border border-cacau/10 bg-marfim/90 px-5 py-4 shadow-[0_18px_40px_-24px_rgba(59,36,29,0.55)] backdrop-blur sm:-left-8"
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em]">
              <ShinyText text="Prêmio 2025" />
            </p>
            <p className="mt-1 font-display text-[1.25rem] leading-tight text-cacau">Eleita melhor nutricionista de Joinville</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function QuemSou() {
  return (
    <section className="py-24 sm:py-36" aria-label="Quem é a Joyce">
      <div className="container-site grid gap-14 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-4 lg:pt-24">
          <ImagemRevelada
            src="/img/joyce-perfil-rosto.webp"
            alt="Joyce Avila olhando por cima do ombro, com brinco dourado e cabelo longo com mechas"
            largura={593}
            altura={938}
            parallax={false}
            className="aspect-[4/5] w-full max-w-sm rounded-[var(--radius-suave)]"
            imgClassName="!scale-100 object-[50%_4%]"
          />
          <p className="mt-4 max-w-sm text-sm text-texto/80">{sobre.resumo}</p>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
          <ScrollReveal className="font-display text-[2.05rem] leading-[1.18] text-cacau sm:text-[2.9rem] lg:text-[3.4rem]">
            Atleta de fisiculturismo, várias vezes campeã, esposa, mãe da Betininha e nutricionista que sabe que o seu dia não tem 48 horas. Disciplina eu aprendi no palco. Leveza, eu ensino no consultório.
          </ScrollReveal>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <BotaoSecundario to="/sobre">Conhecer minha história</BotaoSecundario>
            <a href={empresa.instagram.url} target="_blank" rel="noopener noreferrer" className="text-sm text-texto hover:text-cacau">
              {empresa.instagram.seguidores} seguidoras no Instagram · {empresa.instagram.usuario}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Tratamentos() {
  const ref = useRef<HTMLElement>(null)
  const flutuante = useRef<HTMLDivElement>(null)
  const [ativo, setAtivo] = useState<number | null>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('[data-trat]', { y: 40, opacity: 0, stagger: 0.1, duration: 0.9, scrollTrigger: { trigger: '[data-trat-lista]', start: 'top 80%' } })
    },
    { scope: ref },
  )

  const mover = (e: PointerEvent) => {
    if (!flutuante.current) return
    const r = ref.current!.getBoundingClientRect()
    gsap.to(flutuante.current, { x: e.clientX - r.left, y: e.clientY - r.top, duration: 0.6, ease: 'power3.out' })
  }

  return (
    <section ref={ref} onPointerMove={mover} className="relative bg-marfim pb-24 sm:pb-32" aria-labelledby="titulo-tratamentos">
      <div className="container-site">
        <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
          <TituloMascara texto="Tratamentos para|cada fase da mulher" className="titulo-lg lg:col-span-7" />
          <span id="titulo-tratamentos" className="sr-only">Tratamentos</span>
          <p className="texto-corpo lg:col-span-4 lg:col-start-9">
            Cada tratamento começa pela mesma pergunta: o que você precisa agora? A partir dela, a estratégia é montada para o seu corpo e a sua rotina.
          </p>
        </div>

        <ul data-trat-lista className="border-t border-cacau/15" onPointerLeave={() => setAtivo(null)}>
          {servicos.map((s, i) => (
            <li key={s.slug} data-trat className="border-b border-cacau/15">
              <Link
                to={`/servicos/${s.slug}`}
                onPointerEnter={() => setAtivo(i)}
                onFocus={() => setAtivo(i)}
                className="group grid items-center gap-4 py-7 sm:grid-cols-12 sm:py-9"
              >
                <img
                  src={s.imagem}
                  alt=""
                  loading="lazy"
                  width={800}
                  height={600}
                  className="hidden aspect-[4/3] w-full rounded-2xl object-cover object-[50%_18%] max-sm:block"
                />
                <h3 className="font-display text-[2.1rem] leading-none text-cacau transition-transform duration-500 ease-[var(--ease-suave)] group-hover:translate-x-3 sm:col-span-6 sm:text-[3.2rem]">
                  {s.nome}
                </h3>
                <p className="text-[1rem] text-texto sm:col-span-5">{s.chamada} {s.resumo.split('.')[0]}.</p>
                <span className="hidden justify-self-end sm:col-span-1 sm:flex">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-cacau/20 text-cacau transition-all duration-500 group-hover:rotate-45 group-hover:bg-cacau group-hover:text-marfim">
                    <ArrowUpRight className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <BotaoSecundario to="/servicos">Ver todos os tratamentos</BotaoSecundario>
        </div>
      </div>

      {/* imagem que acompanha o cursor (desktop) */}
      <div
        ref={flutuante}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 hidden lg:block"
        style={{ transform: 'translate(0,0)' }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(59,36,29,0.6)] transition-all duration-500 ease-[var(--ease-suave)]"
          style={{ width: 230, height: 290, opacity: ativo === null ? 0 : 1, transform: `translate(-50%,-50%) scale(${ativo === null ? 0.8 : 1}) rotate(${ativo === null ? -4 : 0}deg)` }}
        >
          {servicos.map((s, i) => (
            <img
              key={s.slug}
              src={s.imagem}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500"
              style={{ opacity: ativo === i ? 1 : 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Diferenciais() {
  const ref = useRef<HTMLElement>(null)
  const [principal, atleta, mulher, nota, premio] = diferenciais

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('[data-bento]', { y: 60, opacity: 0, stagger: 0.09, duration: 1, scrollTrigger: { trigger: ref.current, start: 'top 70%' } })
    },
    { scope: ref },
  )

  const card = 'h-full rounded-[var(--radius-suave)] border border-cacau/10 p-7 sm:p-9'

  return (
    <section ref={ref} className="bg-linho/50 py-24 sm:py-32" aria-labelledby="titulo-diferenciais">
      <div className="container-site">
        <TituloMascara texto="Por que tantas mulheres|param de procurar|depois da Joyce" className="titulo-lg max-w-4xl" />
        <span id="titulo-diferenciais" className="sr-only">Diferenciais</span>

        <div className="mt-14 grid auto-rows-[minmax(190px,auto)] gap-4 md:grid-cols-6">
          <div data-bento className="md:col-span-4 md:row-span-2">
            <SpotlightCard cor="rgba(201,162,107,0.28)" className={`${card} flex flex-col justify-between bg-cacau text-marfim`}>
              <p className="kicker !text-ouro-claro">{empresa.bordao}</p>
              <div>
                <h3 className="font-display text-[2.6rem] leading-[1.02] text-marfim sm:text-[3.8rem]">{principal.titulo}</h3>
                <p className="mt-5 max-w-md text-marfim/80">{principal.texto}</p>
              </div>
            </SpotlightCard>
          </div>
          <div data-bento className="md:col-span-2">
            <SpotlightCard className={`${card} flex flex-col justify-end bg-marfim`}>
              <p className="font-display text-[4.6rem] leading-none text-cacau">
                <CountUp to={empresa.google.nota} decimals={1} />
              </p>
              <h3 className="mt-2 font-sans text-base font-medium text-cacau">{nota.titulo}</h3>
              <p className="mt-1 text-[0.95rem]">{nota.texto}</p>
            </SpotlightCard>
          </div>
          <div data-bento className="md:col-span-2">
            <SpotlightCard className={`${card} bg-blush`}>
              <h3 className="font-display text-[2rem] text-cacau">{premio.titulo}</h3>
              <p className="mt-3 text-[0.95rem]">{premio.texto}</p>
            </SpotlightCard>
          </div>
          <div data-bento className="md:col-span-3">
            <SpotlightCard className={`${card} flex gap-6 bg-marfim`}>
              <img src="/img/joyce-poltrona.webp" alt="Joyce Avila sentada, com conjunto listrado bege" loading="lazy" width={385} height={570} className="hidden h-36 w-28 shrink-0 rounded-xl object-cover object-top sm:block" />
              <div>
                <h3 className="font-display text-[2rem] text-cacau">{atleta.titulo}</h3>
                <p className="mt-3 text-[0.95rem]">{atleta.texto}</p>
              </div>
            </SpotlightCard>
          </div>
          <div data-bento className="md:col-span-3">
            <SpotlightCard className={`${card} bg-rose/50`}>
              <h3 className="font-display text-[2rem] text-cacau">{mulher.titulo}</h3>
              <p className="mt-3 text-[0.95rem]">{mulher.texto}</p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function ComoFunciona() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const passos = gsap.utils.toArray<HTMLElement>('[data-passo]')
        gsap.set(passos.slice(1), { autoAlpha: 0, yPercent: 30 })
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: 'top top', end: `+=${passos.length * 70}%`, pin: true, scrub: 0.8 },
        })
        tl.to('[data-progresso]', { scaleY: 1, ease: 'none', duration: passos.length - 1 }, 0)
        passos.forEach((p, i) => {
          if (i === 0) return
          tl.to(passos[i - 1], { autoAlpha: 0, yPercent: -30, duration: 0.5 }, i - 0.6)
            .to(p, { autoAlpha: 1, yPercent: 0, duration: 0.5 }, i - 0.4)
            .to(`[data-marca="${i}"]`, { color: '#3B241D', duration: 0.2 }, i - 0.4)
        })
      })
      mm.add('(max-width: 1023px), (prefers-reduced-motion: reduce)', () => {
        if (prefersReducedMotion()) return
        gsap.from('[data-passo]', { y: 40, opacity: 0, stagger: 0.12, scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="relative overflow-hidden bg-marfim lg:h-[100svh]" aria-labelledby="titulo-como">
      <div className="container-site grid h-full gap-12 py-24 lg:grid-cols-12 lg:items-center lg:py-0">
        <div className="lg:col-span-5">
          <h2 id="titulo-como" className="titulo-lg">
            Do primeiro <span className="italic text-ouro-texto">oi</span> ao resultado
          </h2>
          <p className="texto-corpo mt-6 max-w-md">
            Sem mistério e sem enrolação. Você sabe desde o começo como vai ser o seu tratamento.
          </p>
          <ul className="mt-10 hidden space-y-3 lg:block" aria-hidden>
            {atendimento.map((a, i) => (
              <li key={a.titulo} data-marca={i} className="font-display text-[1.35rem] text-cacau/30" style={i === 0 ? { color: '#3B241D' } : undefined}>
                {a.titulo}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <BotaoSecundario to="/agendamento">Ver o atendimento em detalhes</BotaoSecundario>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7 lg:h-[420px]">
          <div aria-hidden className="absolute -left-8 top-0 hidden h-full w-px bg-cacau/10 lg:block">
            <div data-progresso className="h-full w-full origin-top scale-y-0 bg-ouro" />
          </div>
          <ol className="space-y-10 lg:space-y-0">
            {atendimento.map((a) => (
              <li key={a.titulo} data-passo className="lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center">
                <h3 className="font-display text-[2.4rem] leading-[1.05] text-cacau sm:text-[3.6rem]">{a.titulo}</h3>
                <p className="texto-corpo mt-5 max-w-lg">{a.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
