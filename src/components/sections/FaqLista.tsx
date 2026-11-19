import { useState } from 'react'
import { Plus } from 'lucide-react'

type Item = { pergunta: string; resposta: string }

export default function FaqLista({ itens, idBase }: { itens: Item[]; idBase: string }) {
  const [aberto, setAberto] = useState<number | null>(0)
  return (
    <ul className="border-t border-cacau/15">
      {itens.map((it, i) => {
        const open = aberto === i
        return (
          <li key={it.pergunta} className="border-b border-cacau/15">
            <h3 className="font-sans">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`${idBase}-r${i}`}
                id={`${idBase}-p${i}`}
                onClick={() => setAberto(open ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-[1.45rem] leading-snug text-cacau sm:text-[1.7rem]">{it.pergunta}</span>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cacau/20 text-cacau transition-all duration-500 group-hover:border-cacau ${open ? 'rotate-45 bg-cacau text-marfim' : ''}`}>
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </button>
            </h3>
            <div
              id={`${idBase}-r${i}`}
              role="region"
              aria-labelledby={`${idBase}-p${i}`}
              className="grid transition-[grid-template-rows] duration-500 ease-[var(--ease-suave)]"
              style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="texto-corpo max-w-2xl pb-7">{it.resposta}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
