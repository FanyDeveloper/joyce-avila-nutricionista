// Recriação do SpotlightCard (reactbits.dev), em tons de ouro.
import { useRef, type ReactNode, type PointerEvent } from 'react'

export default function SpotlightCard({ children, className = '', cor = 'rgba(201,162,107,0.22)' }: { children: ReactNode; className?: string; cor?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const mover = (e: PointerEvent) => {
    const r = ref.current!.getBoundingClientRect()
    ref.current!.style.setProperty('--mx', `${e.clientX - r.left}px`)
    ref.current!.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div
      ref={ref}
      onPointerMove={mover}
      className={`group relative overflow-hidden ${className}`}
      style={{ ['--spot' as string]: cor }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(420px circle at var(--mx) var(--my), var(--spot), transparent 60%)' }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}
