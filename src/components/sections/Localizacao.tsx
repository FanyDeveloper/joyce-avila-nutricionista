import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { empresa } from '../../data/empresa'
import TituloMascara from './TituloMascara'
import BotaoSecundario from '../ui/BotaoSecundario'
import MapaConsultorio from './MapaConsultorio'

export default function Localizacao({ titulo = 'No Centro de|Balneário Camboriú', comoH1 = false }: { titulo?: string; comoH1?: boolean }) {
  return (
    <section className="bg-linho/50 py-24 sm:py-28" aria-label="Localização e horários">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <TituloMascara as={comoH1 ? 'h1' : 'h2'} texto={titulo} className="titulo-lg" />
          <dl className="mt-10 space-y-6 text-[1.02rem]">
            <div className="flex gap-4">
              <dt><MapPin className="mt-1 h-5 w-5 text-ouro-texto" strokeWidth={1.4} /><span className="sr-only">Endereço</span></dt>
              <dd>
                <a href={empresa.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-cacau">
                  {empresa.endereco.rua} – {empresa.endereco.bairro}<br />
                  {empresa.endereco.cidade} – {empresa.endereco.uf}, {empresa.endereco.cep}
                </a>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt><Clock className="mt-1 h-5 w-5 text-ouro-texto" strokeWidth={1.4} /><span className="sr-only">Horários</span></dt>
              <dd>
                <ul>
                  {empresa.horarios.map((h) => (
                    <li key={h.dias}><span className="text-cacau">{h.dias}</span>: {h.horas}</li>
                  ))}
                </ul>
                <p className="mt-1 text-sm text-texto/80">Atendimento com hora marcada.</p>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt><Phone className="mt-1 h-5 w-5 text-ouro-texto" strokeWidth={1.4} /><span className="sr-only">Telefone</span></dt>
              <dd><a href={empresa.telefoneLink} className="hover:text-cacau">{empresa.telefone}</a> · WhatsApp</dd>
            </div>
          </dl>
          <div className="mt-8 flex items-center gap-2">
            <Navigation className="h-4 w-4 text-cacau" strokeWidth={1.5} />
            <BotaoSecundario href={empresa.mapsLink}>Como chegar pelo Google Maps</BotaoSecundario>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[var(--radius-suave)] border border-cacau/10 bg-blush">
            <MapaConsultorio className="h-[440px] sm:h-[460px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
