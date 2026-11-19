import { Star } from 'lucide-react'

export default function Estrelas({ nota = 5, className = 'h-3.5 w-3.5' }: { nota?: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-ouro" role="img" aria-label={`Nota ${nota} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={className} strokeWidth={1.4} fill={i < nota ? 'currentColor' : 'none'} />
      ))}
    </span>
  )
}
