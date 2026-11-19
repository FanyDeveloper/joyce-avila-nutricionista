// Checkbox animado (referência Uiverse) para o consentimento LGPD.
import type { ReactNode } from 'react'

type Props = { id: string; checked: boolean; onChange: (v: boolean) => void; children: ReactNode; erro?: string }

export default function CheckboxAnimado({ id, checked, onChange, children, erro }: Props) {
  return (
    <div>
      <label htmlFor={id} className="group flex cursor-pointer items-start gap-3 text-[0.92rem] leading-snug text-texto">
        <span className="relative mt-0.5 shrink-0">
          <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="peer sr-only" aria-invalid={!!erro} aria-describedby={erro ? `${id}-erro` : undefined} />
          <span className="block h-5 w-5 rounded-md border border-cacau/40 bg-marfim transition-all duration-300 peer-checked:border-cacau peer-checked:bg-cacau peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ouro-texto group-hover:border-cacau" />
          <svg viewBox="0 0 20 20" className="pointer-events-none absolute inset-0 h-5 w-5 text-marfim" aria-hidden>
            <path d="M5 10.5l3.2 3L15 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16" strokeDashoffset={checked ? 0 : 16} style={{ transition: 'stroke-dashoffset .35s cubic-bezier(.22,1,.36,1) .05s' }} />
          </svg>
        </span>
        <span>{children}</span>
      </label>
      {erro && (
        <p id={`${id}-erro`} className="mt-1.5 pl-8 text-sm text-red-800">
          {erro}
        </p>
      )}
    </div>
  )
}
