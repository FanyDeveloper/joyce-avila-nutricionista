import { Clock, MapPin, Phone } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { empresa } from '../data/empresa'
import { linkWhatsApp } from '../lib/whatsapp'
import MapaConsultorio from '../components/sections/MapaConsultorio'
import TituloMascara from '../components/sections/TituloMascara'
import FormularioContato from '../components/sections/FormularioContato'
import Magnet from '../components/reactbits/Magnet'
import BotaoPrimario from '../components/ui/BotaoPrimario'
import { IconeInstagram, IconeWhatsApp } from '../components/ui/Icones'

export default function Contato() {
  const msg = 'Olá, Joyce! Gostaria de agendar uma consulta no consultório do Centro de BC.'
  useSeo({
    title: 'Contato | Nutricionista Joyce Avila no Centro de Balneário Camboriú',
    description: 'WhatsApp (47) 99684-8763. Consultório na R. 700, 489, Centro de Balneário Camboriú. Veja o mapa, horários e fale com a nutricionista Joyce Avila.',
    path: '/contato',
  })

  const linha = 'flex gap-4 border-b border-cacau/10 py-5'

  return (
    <>
      <section className="bg-blush pb-20 pt-36 sm:pt-44">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker mb-6">Contato</p>
            <TituloMascara as="h1" texto="Vamos|conversar?" imediato className="titulo-xl" />
            <p className="texto-corpo mt-6 max-w-md">O jeito mais rápido é o WhatsApp. Se preferir, deixe seus dados no formulário e a mensagem já sai pronta.</p>
            <div className="mt-8">
              <Magnet>
                <BotaoPrimario href={linkWhatsApp(msg)} externo icone={<IconeWhatsApp className="h-4 w-4" />}>
                  Chamar no WhatsApp
                </BotaoPrimario>
              </Magnet>
            </div>

            <dl className="mt-12 border-t border-cacau/10 text-[1.02rem]">
              <div className={linha}>
                <dt><Phone className="mt-1 h-5 w-5 text-ouro-texto" strokeWidth={1.4} /><span className="sr-only">Telefone e WhatsApp</span></dt>
                <dd><a href={empresa.telefoneLink} className="hover:text-cacau">{empresa.telefone}</a></dd>
              </div>
              <div className={linha}>
                <dt><MapPin className="mt-1 h-5 w-5 text-ouro-texto" strokeWidth={1.4} /><span className="sr-only">Endereço</span></dt>
                <dd><a href={empresa.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-cacau">{empresa.endereco.completo}</a></dd>
              </div>
              <div className={linha}>
                <dt><Clock className="mt-1 h-5 w-5 text-ouro-texto" strokeWidth={1.4} /><span className="sr-only">Horários</span></dt>
                <dd>
                  {empresa.horarios.map((h) => (
                    <p key={h.dias}><span className="text-cacau">{h.dias}</span>: {h.horas}</p>
                  ))}
                </dd>
              </div>
              <div className={linha}>
                <dt><IconeInstagram className="mt-1 h-5 w-5 text-ouro-texto" /><span className="sr-only">Instagram</span></dt>
                <dd><a href={empresa.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-cacau">{empresa.instagram.usuario}</a></dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[var(--radius-suave)] bg-marfim p-7 sm:p-10 lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-[2.2rem]">Envie uma mensagem</h2>
            <p className="mb-8 mt-2">Respondemos pelo WhatsApp em horário de atendimento.</p>
            <FormularioContato />
          </div>
        </div>
      </section>

      <section aria-label="Mapa do consultório">
        <MapaConsultorio className="h-[460px] sm:h-[520px]" />
      </section>
    </>
  )
}
