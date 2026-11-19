// Input com label flutuante (referência Uiverse).
import type { ChangeEvent } from 'react'

type Base = { id: string; label: string; value: string; erro?: string; obrigatorio?: boolean }
type Props =
  | (Base & { tipo: 'text' | 'tel'; onChange: (e: ChangeEvent<HTMLInputElement>) => void; autoComplete?: string })
  | (Base & { tipo: 'textarea'; onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void })
  | (Base & { tipo: 'select'; opcoes: string[]; onChange: (e: ChangeEvent<HTMLSelectElement>) => void })

export default function CampoFlutuante(props: Props) {
  const { id, label, value, erro, obrigatorio } = props
  const campo =
    'peer w-full rounded-2xl border bg-marfim/70 px-4 pb-2.5 pt-6 text-[1rem] text-tinta outline-none transition-colors duration-300 focus:border-cacau focus:bg-marfim ' +
    (erro ? 'border-red-700/70' : 'border-cacau/20')
  const rotulo =
    'pointer-events-none absolute left-4 top-4 origin-left text-[0.98rem] text-texto/75 transition-all duration-300 ease-[var(--ease-suave)] peer-focus:top-2 peer-focus:text-[0.72rem] peer-focus:tracking-wide peer-focus:text-ouro-texto peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[0.72rem]'
  const aria = { 'aria-invalid': !!erro, 'aria-describedby': erro ? `${id}-erro` : undefined, required: obrigatorio }

  return (
    <div className="relative">
      {props.tipo === 'textarea' ? (
        <textarea id={id} rows={4} placeholder=" " value={value} onChange={props.onChange} className={`${campo} resize-none`} {...aria} />
      ) : props.tipo === 'select' ? (
        <select id={id} value={value} onChange={props.onChange} className={`${campo} appearance-none pt-6`} {...aria}>
          <option value="">Escolha uma opção</option>
          {props.opcoes.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input id={id} type={props.tipo} placeholder=" " value={value} onChange={props.onChange} autoComplete={props.autoComplete} className={campo} {...aria} />
      )}
      <label htmlFor={id} className={props.tipo === 'select' ? 'pointer-events-none absolute left-4 top-2 text-[0.72rem] tracking-wide text-ouro-texto' : rotulo}>
        {label}
        {obrigatorio && <span aria-hidden> *</span>}
      </label>
      {erro && (
        <p id={`${id}-erro`} className="mt-1.5 pl-1 text-sm text-red-800">
          {erro}
        </p>
      )}
    </div>
  )
}
