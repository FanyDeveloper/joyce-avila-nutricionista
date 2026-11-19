import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap'
import { useSeo } from '../hooks/useSeo'
import { empresa, sobre } from '../data/empresa'
import CabecalhoPagina from '../components/sections/CabecalhoPagina'
import TituloMascara from '../components/sections/TituloMascara'
import ImagemRevelada from '../components/sections/ImagemRevelada'
import ScrollReveal from '../components/reactbits/ScrollReveal'
import CtaFinal from '../components/sections/CtaFinal'
import BotaoSecundario from '../components/ui/BotaoSecundario'

export default function Sobre() {
  useSeo({
    title: 'Sobre Joyce Avila | Nutricionista em Balneário Camboriú',
    description:
      'Conheça Joyce Avila: nutricionista com foco em saúde da mulher, atleta de fisiculturismo campeã e eleita melhor nutricionista de Joinville 2025. Consultório no Centro de BC.',
    path: '/sobre',
  })
  const valoresRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('[data-valor]', { y: 40, opacity: 0, stagger: 0.12, scrollTrigger: { trigger: valoresRef.current, start: 'top 78%' } })
    },
    { scope: valoresRef },
  )

  return (
    <>
      <CabecalhoPagina
        kicker="Nutricionista · Atleta · Mãe"
        titulo="Prazer,|Joyce Avila."
        texto={<p>{sobre.resumo}</p>}
      />

      <section className="py-24 sm:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <ImagemRevelada
                src="/img/joyce-vestido-cacau.webp"
                alt="Joyce Avila de vestido cacau com laço no pescoço, sorrindo, com a mão na cintura"
                largura={620}
                altura={1721}
                className="aspect-[3/4] w-full rounded-[var(--radius-suave)]"
                imgClassName="object-[50%_12%]"
              />
              <p className="mt-4 text-sm text-texto/80">Formação: {sobre.formacao}</p>
              <p className="text-sm text-texto/80">CRN: {empresa.crn}</p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <TituloMascara texto="Disciplina de palco,|cuidado de consultório" className="titulo-md" />
            <div className="texto-corpo mt-8 space-y-6">
              {sobre.historia.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-14 border-l border-ouro pl-6 font-display text-[2rem] italic leading-tight text-cacau sm:text-[2.5rem]">
              “Não entrego dietas. Conduzo evoluções definitivas.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-cacau py-24 text-marfim sm:py-32">
        <div className="container-site">
          <ScrollReveal className="max-w-5xl font-display text-[2.1rem] leading-[1.15] text-marfim sm:text-[3.2rem]" baseOpacity={0.2}>
            Meu propósito é ajudar mulheres a mudarem a relação com o próprio corpo através da estratégia, da disciplina e da inteligência metabólica.
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 sm:py-32" aria-labelledby="titulo-valores">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <TituloMascara texto="O que guia|cada consulta" className="titulo-md" />
            <span id="titulo-valores" className="sr-only">Valores</span>
          </div>
          <div ref={valoresRef} className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {sobre.valores.map((v, i) => (
              <div key={v.titulo} data-valor className={i % 2 === 1 ? 'sm:mt-16' : ''}>
                <div className="fio mb-6" />
                <h3 className="font-display text-[1.9rem] text-cacau">{v.titulo}</h3>
                <p className="mt-3">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-site grid items-center gap-10 rounded-[var(--radius-suave)] bg-blush p-8 sm:p-14 lg:grid-cols-12">
          <img src="/img/joyce-poltrona.webp" alt="Joyce Avila sentada em banqueta de madeira, com conjunto listrado bege" loading="lazy" width={385} height={570} className="h-72 w-full rounded-2xl object-cover object-top lg:col-span-3 lg:h-80" />
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="titulo-md">Além do consultório</h2>
            <p className="texto-corpo mt-5 max-w-2xl">
              Amo viajar, viver novas experiências e construir memórias com quem eu amo. No Instagram eu divido rotina, bastidores e conteúdo de
              nutrição para mais de {empresa.instagram.seguidores} pessoas.
            </p>
            <div className="mt-6">
              <BotaoSecundario href={empresa.instagram.url}>Acompanhar {empresa.instagram.usuario}</BotaoSecundario>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal mensagem="Olá, Joyce! Conheci sua história pelo site e gostaria de agendar uma consulta." />
    </>
  )
}
