import { Link } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo'
import { servicos } from '../data/empresa'
import BlurText from '../components/reactbits/BlurText'
import BotaoPrimario from '../components/ui/BotaoPrimario'

export default function NaoEncontrada() {
  useSeo({ title: 'Página não encontrada | Joyce Avila Nutricionista', description: 'Esta página não existe. Volte para o início ou conheça os tratamentos.', path: '/404' })

  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-blush pt-32">
      <p aria-hidden className="pointer-events-none absolute -right-6 bottom-0 select-none font-display italic leading-[0.75] text-cacau/[0.06]" style={{ fontSize: 'clamp(12rem, 38vw, 34rem)' }}>
        404
      </p>
      <div className="container-site relative pb-24">
        <BlurText as="h1" text="Essa página|saiu do *plano*." className="titulo-xl" />
        <p className="texto-corpo mt-6 max-w-lg">O endereço que você abriu não existe ou mudou de lugar. Acontece, e dá para voltar ao caminho sem culpa.</p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <BotaoPrimario href="/">Voltar ao início</BotaoPrimario>
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {servicos.map((s) => (
            <li key={s.slug}><Link to={`/servicos/${s.slug}`} className="underline-offset-4 hover:text-cacau hover:underline">{s.nome}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
