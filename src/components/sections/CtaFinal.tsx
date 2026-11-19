import { empresa } from '../../data/empresa'
import { linkWhatsApp } from '../../lib/whatsapp'
import TituloMascara from './TituloMascara'
import Magnet from '../reactbits/Magnet'
import BotaoPrimario from '../ui/BotaoPrimario'
import { IconeWhatsApp } from '../ui/Icones'

type Props = { titulo?: string; texto?: string; mensagem?: string }

export default function CtaFinal({
  titulo = 'Serei sua|última nutricionista.',
  texto = 'Chega de começar de novo toda segunda. Mande uma mensagem e marque sua primeira consulta no Centro de Balneário Camboriú.',
  mensagem,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-blush py-28 sm:py-36">
      <svg aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[520px] w-[520px] text-ouro/45" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <div className="container-site relative text-center">
        <TituloMascara texto={titulo} className="titulo-xl mx-auto max-w-5xl italic" />
        <p className="texto-corpo mx-auto mt-8 max-w-xl">{texto}</p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Magnet>
            <BotaoPrimario href={linkWhatsApp(mensagem)} externo icone={<IconeWhatsApp className="h-4 w-4" />}>
              Agendar pelo WhatsApp
            </BotaoPrimario>
          </Magnet>
          <a href={empresa.telefoneLink} className="text-sm text-texto underline-offset-4 hover:underline">ou ligue {empresa.telefone}</a>
        </div>
      </div>
    </section>
  )
}
