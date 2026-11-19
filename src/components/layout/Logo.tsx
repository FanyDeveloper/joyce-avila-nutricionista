import { Link } from 'react-router-dom'

// Wordmark provisório em tipografia. [CONFIRMAR: substituir pelo logo vetorial (SVG) da Joyce]
export default function Logo({ claro = false, className = '' }: { claro?: boolean; className?: string }) {
  return (
    <Link to="/" className={`group inline-flex flex-col leading-none ${className}`} aria-label="Joyce Avila Nutricionista — página inicial">
      <span className={`font-display text-[1.65rem] tracking-[0.02em] ${claro ? 'text-marfim' : 'text-cacau'}`}>
        Joyce <span className="italic text-ouro">Avila</span>
      </span>
      <span className={`mt-1 text-[0.58rem] font-medium uppercase tracking-[0.42em] ${claro ? 'text-marfim/70' : 'text-ouro-texto'}`}>
        Nutricionista
      </span>
    </Link>
  )
}
