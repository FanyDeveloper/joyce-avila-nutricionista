import { useSeo } from '../hooks/useSeo'
import { faqGeral, servicos } from '../data/empresa'
import { linkWhatsApp } from '../lib/whatsapp'
import { schemaFaq } from '../lib/schema'
import CabecalhoPagina from '../components/sections/CabecalhoPagina'
import FaqLista from '../components/sections/FaqLista'
import BotaoPrimario from '../components/ui/BotaoPrimario'
import { IconeWhatsApp } from '../components/ui/Icones'

export default function PerguntasFrequentes() {
  const todas = [...faqGeral, ...servicos.flatMap((s) => s.faq)]
  useSeo({
    title: 'Perguntas frequentes | Nutricionista Joyce Avila em Balneário Camboriú',
    description: 'Valores, convênio, formas de pagamento, localização no Centro de Balneário Camboriú e como agendar consulta com a nutricionista Joyce Avila.',
    path: '/perguntas-frequentes',
    jsonLd: schemaFaq(todas),
  })

  return (
    <>
      <CabecalhoPagina kicker="Dúvidas frequentes" titulo="Antes de marcar,|você pergunta." texto={<p>Reunimos as perguntas que mais chegam pelo WhatsApp. Se a sua não estiver aqui, é só mandar mensagem.</p>} />

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="rounded-[var(--radius-suave)] bg-cacau p-8 text-marfim lg:sticky lg:top-32">
              <h2 className="font-display text-[2rem] !text-marfim">Ficou alguma dúvida?</h2>
              <p className="mt-3 text-marfim/80">Pergunte direto para a Joyce. A resposta vem pelo WhatsApp.</p>
              <div className="mt-7">
                <BotaoPrimario variante="claro" href={linkWhatsApp('Olá, Joyce! Li as dúvidas frequentes no site e ainda tenho uma pergunta.')} externo icone={<IconeWhatsApp className="h-4 w-4" />}>
                  Perguntar no WhatsApp
                </BotaoPrimario>
              </div>
            </div>
          </aside>
          <div className="space-y-16 lg:col-span-7 lg:col-start-6">
            <div>
              <h2 className="titulo-md mb-6">Consulta, valores e local</h2>
              <FaqLista itens={faqGeral} idBase="faq-geral" />
            </div>
            {servicos.map((s) => (
              <div key={s.slug}>
                <h2 className="titulo-md mb-6">{s.nome}</h2>
                <FaqLista itens={s.faq} idBase={`faq-${s.slug}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
