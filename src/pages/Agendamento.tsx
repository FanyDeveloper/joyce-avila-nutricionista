import { useSeo } from '../hooks/useSeo'
import { atendimento, empresa } from '../data/empresa'
import { linkWhatsApp } from '../lib/whatsapp'
import CabecalhoPagina from '../components/sections/CabecalhoPagina'
import TituloMascara from '../components/sections/TituloMascara'
import FormularioContato from '../components/sections/FormularioContato'
import ScrollStack from '../components/reactbits/ScrollStack'
import Magnet from '../components/reactbits/Magnet'
import BotaoPrimario from '../components/ui/BotaoPrimario'
import { IconeWhatsApp } from '../components/ui/Icones'

const levar = [
  'Exames de sangue recentes, se tiver',
  'Lista de medicamentos e suplementos que usa',
  'Sua rotina: horários de trabalho, treino e sono',
  'Roupa confortável para a avaliação física [CONFIRMAR]',
]

const fundos = ['bg-marfim', 'bg-blush', 'bg-linho', 'bg-cacau text-marfim']

export default function Agendamento() {
  const msg = 'Olá, Joyce! Vi no site como funciona o atendimento e quero agendar minha primeira consulta.'
  useSeo({
    title: 'Agendar consulta com nutricionista em Balneário Camboriú | Joyce Avila',
    description: 'Veja como funciona a consulta com a nutricionista Joyce Avila no Centro de Balneário Camboriú e agende pelo WhatsApp em poucos minutos.',
    path: '/agendamento',
  })

  return (
    <>
      <CabecalhoPagina
        kicker="Agendamento · Primeira consulta"
        titulo="Seu tratamento|começa com um oi."
        texto={
          <>
            <p>Agendar leva poucos minutos pelo WhatsApp. Abaixo você vê, sem surpresa, tudo o que acontece do primeiro contato aos retornos.</p>
            <div className="mt-7">
              <Magnet>
                <BotaoPrimario href={linkWhatsApp(msg)} externo icone={<IconeWhatsApp className="h-4 w-4" />}>
                  Agendar agora
                </BotaoPrimario>
              </Magnet>
            </div>
          </>
        }
      />

      <section className="py-24 sm:py-28" aria-labelledby="titulo-etapas">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <TituloMascara texto="Como é o|atendimento" className="titulo-md" />
              <span id="titulo-etapas" className="sr-only">Etapas do atendimento</span>
              <p className="texto-corpo mt-6">Consulta presencial no consultório da R. 700, no Centro de Balneário Camboriú. [CONFIRMAR: atendimento online]</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ScrollStack>
              {atendimento.map((a, i) => (
                <article key={a.titulo} className={`rounded-[var(--radius-suave)] border border-cacau/10 p-8 shadow-[0_24px_50px_-34px_rgba(59,36,29,0.5)] sm:p-12 ${fundos[i]}`}>
                  <h3 className={`font-display text-[2.2rem] leading-tight sm:text-[2.8rem] ${i === 3 ? '!text-marfim' : ''}`}>{a.titulo}</h3>
                  <p className={`mt-4 max-w-lg text-[1.05rem] ${i === 3 ? 'text-marfim/80' : ''}`}>{a.texto}</p>
                </article>
              ))}
            </ScrollStack>
          </div>
        </div>
      </section>

      <section className="bg-linho/50 py-24 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="titulo-md">O que levar na primeira consulta</h2>
            <ul className="mt-8 space-y-4">
              {levar.map((l) => (
                <li key={l} className="flex gap-3 border-b border-cacau/10 pb-4">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-ouro" />
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-texto/80">Duração da primeira consulta: [CONFIRMAR]. Retornos: [CONFIRMAR: intervalo].</p>
          </div>
          <div id="formulario" className="rounded-[var(--radius-suave)] bg-marfim p-7 sm:p-10 lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-[2.2rem]">Prefere deixar seus dados?</h2>
            <p className="mb-8 mt-3">Preencha e a mensagem abre pronta no WhatsApp da Joyce ({empresa.telefone}).</p>
            <FormularioContato />
          </div>
        </div>
      </section>
    </>
  )
}
