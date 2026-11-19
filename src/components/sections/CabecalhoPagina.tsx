import type { ReactNode } from 'react'
import TituloMascara from './TituloMascara'

type Props = { kicker: string; titulo: string; texto?: ReactNode; children?: ReactNode }

/** Abertura editorial das páginas internas (contém o único h1 da página). */
export default function CabecalhoPagina({ kicker, titulo, texto, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-blush pb-16 pt-36 sm:pb-20 sm:pt-44">
      <svg aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-ouro/50" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="0.6" />
      </svg>
      <div className="container-site relative grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="kicker mb-6">{kicker}</p>
          <TituloMascara as="h1" texto={titulo} imediato className="titulo-xl" />
        </div>
        {texto && <div className="texto-corpo max-w-md lg:col-span-4 lg:pb-3">{texto}</div>}
      </div>
      {children}
    </section>
  )
}
