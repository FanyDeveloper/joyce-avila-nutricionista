import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { servicos } from '../data/empresa'
import { linkWhatsApp } from '../lib/whatsapp'
import CabecalhoPagina from '../components/sections/CabecalhoPagina'
import ImagemRevelada from '../components/sections/ImagemRevelada'
import TituloMascara from '../components/sections/TituloMascara'
import CtaFinal from '../components/sections/CtaFinal'
import BotaoSecundario from '../components/ui/BotaoSecundario'

export default function Servicos() {
  useSeo({
    title: 'Tratamentos nutricionais em Balneário Camboriú | Joyce Avila',
    description:
      'Emagrecimento, saúde hormonal da mulher, performance e hipertrofia e reeducação alimentar com a nutricionista Joyce Avila, no Centro de Balneário Camboriú.',
    path: '/servicos',
  })

  return (
    <>
      <CabecalhoPagina
        kicker="Tratamentos · Centro de Balneário Camboriú"
        titulo="Um tratamento,|não um cardápio."
        texto={
          <p>
            Todo atendimento começa por uma consulta completa e segue com acompanhamento e retornos. O que muda é o foco: escolha o que mais
            parece com o seu momento. Se ficar em dúvida, a Joyce te ajuda a decidir.
          </p>
        }
      />

      <section className="py-20 sm:py-28">
        <div className="container-site space-y-24 sm:space-y-36">
          {servicos.map((s, i) => {
            const invertido = i % 2 === 1
            return (
              <article key={s.slug} className="grid items-center gap-10 lg:grid-cols-12">
                <div className={`lg:col-span-5 ${invertido ? 'lg:order-2 lg:col-start-8' : ''} ${i === 2 ? 'lg:mt-20' : ''}`}>
                  <ImagemRevelada
                    src={s.imagem}
                    alt={s.imagemAlt}
                    largura={620}
                    altura={800}
                    className={`w-full rounded-[var(--radius-suave)] ${i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[3/4] lg:max-w-[86%]'} ${invertido ? 'lg:ml-auto' : ''}`}
                    imgClassName="object-[50%_15%]"
                  />
                </div>
                <div className={`lg:col-span-6 ${invertido ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
                  <p className="font-display text-[1.4rem] italic text-ouro-texto">{s.chamada}</p>
                  <TituloMascara texto={s.nome} className="titulo-md mt-3" />
                  <p className="texto-corpo mt-6">{s.resumo}</p>
                  <p className="texto-corpo mt-4 text-texto/90">{s.beneficio}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <Link
                      to={`/servicos/${s.slug}`}
                      className="group inline-flex items-center gap-3 rounded-full border border-cacau/25 py-3 pl-6 pr-3 text-[0.95rem] font-medium text-cacau transition-colors duration-300 hover:border-cacau hover:bg-cacau hover:text-marfim"
                    >
                      Entender o tratamento
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-blush text-cacau transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </Link>
                    <BotaoSecundario href={linkWhatsApp(`Olá! Vi no site o serviço de ${s.nome.toLowerCase()} e gostaria de mais informações.`)}>
                      Perguntar no WhatsApp
                    </BotaoSecundario>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CtaFinal
        titulo="Não sabe por|onde começar?"
        texto="Conte o seu momento em uma mensagem. A Joyce indica o caminho mais adequado antes mesmo da consulta."
        mensagem="Olá, Joyce! Vi os tratamentos no site e gostaria de saber qual é o ideal para mim."
      />
    </>
  )
}
