import { Link, useParams } from 'react-router-dom'
import { useRef } from 'react'
import { Check } from 'lucide-react'
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap'
import { useSeo } from '../hooks/useSeo'
import { servicos, empresa } from '../data/empresa'
import { linkWhatsApp, mensagemServico } from '../lib/whatsapp'
import { schemaFaq, schemaServico } from '../lib/schema'
import TituloMascara from '../components/sections/TituloMascara'
import ImagemRevelada from '../components/sections/ImagemRevelada'
import FaqLista from '../components/sections/FaqLista'
import CtaFinal from '../components/sections/CtaFinal'
import Estrelas from '../components/sections/Estrelas'
import BotaoPrimario from '../components/ui/BotaoPrimario'
import { IconeWhatsApp } from '../components/ui/Icones'
import Magnet from '../components/reactbits/Magnet'
import NaoEncontrada from './NaoEncontrada'

export default function ServicoDetalhe() {
  const { slug } = useParams()
  const s = servicos.find((x) => x.slug === slug)
  if (!s) return <NaoEncontrada />
  return <Conteudo key={s.slug} slug={s.slug} />
}

function Conteudo({ slug }: { slug: string }) {
  const s = servicos.find((x) => x.slug === slug)!
  const outros = servicos.filter((x) => x.slug !== slug)
  const msg = mensagemServico(s.nome.toLowerCase())
  const ref = useRef<HTMLDivElement>(null)

  useSeo({
    title: `${s.nome} em Balneário Camboriú | Joyce Avila Nutricionista`,
    description: `${s.resumo.slice(0, 120)} Consultório no Centro de Balneário Camboriú.`,
    path: `/servicos/${s.slug}`,
    jsonLd: [schemaServico(s), schemaFaq(s.faq)],
  })

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('[data-hero-item]', { y: 24, opacity: 0, stagger: 0.1, delay: 0.7 })
      gsap.from('[data-lista] li', { y: 30, opacity: 0, stagger: 0.08, scrollTrigger: { trigger: '[data-lista]', start: 'top 80%' } })
      gsap.from('[data-passo-servico]', { x: -30, opacity: 0, stagger: 0.12, scrollTrigger: { trigger: '[data-passos]', start: 'top 75%' } })
    },
    { scope: ref },
  )

  return (
    <div ref={ref}>
      <section className="relative overflow-hidden bg-blush pb-16 pt-36 sm:pt-44">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <nav aria-label="Trilha" className="mb-6 text-sm text-texto">
              <Link to="/servicos" className="hover:text-cacau">Tratamentos</Link> <span aria-hidden>/</span> <span className="text-cacau">{s.nomeCurto}</span>
            </nav>
            <TituloMascara as="h1" texto={s.nome} imediato className="titulo-xl" />
            <p data-hero-item className="mt-6 font-display text-[1.7rem] italic text-ouro-texto">{s.chamada}</p>
            <p data-hero-item className="texto-corpo mt-5 max-w-xl">{s.resumo}</p>
            <div data-hero-item className="mt-8 flex flex-wrap items-center gap-6">
              <Magnet>
                <BotaoPrimario href={linkWhatsApp(msg)} externo icone={<IconeWhatsApp className="h-4 w-4" />}>
                  Quero esse tratamento
                </BotaoPrimario>
              </Magnet>
              <span className="inline-flex items-center gap-2 text-sm"><Estrelas /> 5,0 · {empresa.google.avaliacoes} avaliações no Google</span>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <ImagemRevelada prioridade parallax={false} src={s.imagem} alt={s.imagemAlt} largura={620} altura={800} className="aspect-[4/5] w-full rounded-t-[999px]" imgClassName="!scale-100 object-[65%_18%]" />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <TituloMascara texto="O que muda|para você" className="titulo-md" />
            <p className="texto-corpo mt-6">{s.beneficio}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-[2rem]">Para quem é</h2>
            <ul data-lista className="mt-6 space-y-4">
              {s.paraQuem.map((p) => (
                <li key={p} className="flex gap-4 border-b border-cacau/10 pb-4">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-ouro-texto" strokeWidth={1.4} />
                  <span className="text-[1.05rem] text-tinta">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cacau py-24 text-marfim sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="titulo-md !text-marfim">Como funciona</h2>
            <p className="mt-5 text-marfim/75">O caminho é o mesmo em todos os tratamentos. O que muda é a estratégia.</p>
          </div>
          <ol data-passos className="relative space-y-10 border-l border-marfim/15 pl-8 lg:col-span-7 lg:col-start-6">
            {s.comoFunciona.map((p) => (
              <li key={p.titulo} data-passo-servico className="relative">
                <span aria-hidden className="absolute -left-[37px] top-3 h-2 w-2 rotate-45 bg-ouro-claro" />
                <h3 className="font-display text-[1.9rem] text-marfim">{p.titulo}</h3>
                <p className="mt-2 max-w-xl text-marfim/80">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <TituloMascara texto="Dúvidas sobre|esse tratamento" className="titulo-md" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqLista itens={s.faq} idBase={`faq-${s.slug}`} />
          </div>
        </div>
      </section>

      <section className="pb-24" aria-label="Outros tratamentos">
        <div className="container-site">
          <h2 className="font-display text-[1.6rem]">Outros tratamentos</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {outros.map((o) => (
              <li key={o.slug}>
                <Link to={`/servicos/${o.slug}`} className="group flex items-center justify-between rounded-2xl border border-cacau/15 px-5 py-5 transition-colors hover:border-cacau hover:bg-blush">
                  <span className="font-display text-[1.35rem] text-cacau">{o.nome}</span>
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaFinal titulo={`${s.nomeCurto}:|vamos começar?`} texto={`Mande uma mensagem e conte o que você busca com ${s.nomeCurto.toLowerCase()}. A primeira consulta é no Centro de Balneário Camboriú.`} mensagem={msg} />
    </div>
  )
}
