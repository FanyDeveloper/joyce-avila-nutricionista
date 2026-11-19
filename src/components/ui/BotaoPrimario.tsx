// Inspirado nos botões de preenchimento deslizante do Uiverse, nas cores da marca.
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import ClickSpark from '../reactbits/ClickSpark'

type Props = {
  children: ReactNode
  href?: string
  externo?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
  icone?: ReactNode
  variante?: 'escuro' | 'claro'
  className?: string
  onClick?: () => void
}

export default function BotaoPrimario({ children, href, externo, type = 'button', disabled, icone, variante = 'escuro', className = '', onClick }: Props) {
  const cores =
    variante === 'escuro'
      ? 'bg-cacau text-marfim [--fill:var(--color-ouro-claro)] hover:text-cacau'
      : 'bg-marfim text-cacau [--fill:var(--color-ouro-claro)]'
  const base = `group relative inline-flex items-center gap-3 overflow-hidden rounded-full py-3.5 pl-6 pr-3 text-[0.95rem] font-medium transition-colors duration-500 disabled:opacity-60 ${cores} ${className}`
  const conteudo = (
    <>
      <span aria-hidden className="absolute inset-0 -translate-x-[101%] rounded-full bg-[var(--fill)] transition-transform duration-500 ease-[var(--ease-suave)] group-hover:translate-x-0" />
      <span className="relative">{children}</span>
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-marfim/15 group-hover:bg-cacau/10">
        <span className="flex transition-transform duration-500 ease-[var(--ease-suave)] group-hover:translate-x-[150%]">
          {icone ?? <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />}
        </span>
        <span className="absolute flex -translate-x-[150%] transition-transform duration-500 ease-[var(--ease-suave)] group-hover:translate-x-0">
          {icone ?? <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />}
        </span>
      </span>
    </>
  )

  return (
    <ClickSpark>
      {href ? (
        <a href={href} className={base} onClick={onClick} {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {conteudo}
        </a>
      ) : (
        <button type={type} className={base} disabled={disabled} onClick={onClick}>
          {conteudo}
        </button>
      )}
    </ClickSpark>
  )
}
