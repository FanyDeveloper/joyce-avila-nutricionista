// Link de contorno com sublinhado animado (referência Uiverse).
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Props = { children: ReactNode; to?: string; href?: string; className?: string; claro?: boolean }

export default function BotaoSecundario({ children, to, href, className = '', claro }: Props) {
  const cls = `group inline-flex items-center gap-2 py-2 text-[0.95rem] font-medium ${claro ? 'text-marfim' : 'text-cacau'} ${className}`
  const inner = (
    <>
      <span className="relative">
        {children}
        <span aria-hidden className={`absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-100 transition-transform duration-500 ease-[var(--ease-suave)] group-hover:origin-left group-hover:animate-[sublinha_.7s_var(--ease-suave)] ${claro ? 'bg-marfim/60' : 'bg-cacau/40'}`} />
      </span>
      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
      <style>{`@keyframes sublinha{0%{transform:scaleX(1);transform-origin:right}45%{transform:scaleX(0);transform-origin:right}46%{transform-origin:left}100%{transform:scaleX(1);transform-origin:left}}`}</style>
    </>
  )
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  return <a href={href} className={cls} target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a>
}
