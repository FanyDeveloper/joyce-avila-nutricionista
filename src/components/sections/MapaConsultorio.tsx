import { empresa } from '../../data/empresa'

/**
 * Mapa do consultório.
 * Produção: Google Maps incorporado.
 * Prévia (VITE_PREVIEW): o ambiente bloqueia iframes do Google, então mostra um mapa ilustrado
 * com o endereço e o botão para abrir a rota no Google Maps.
 */
export default function MapaConsultorio({ className = '' }: { className?: string }) {
  if (!import.meta.env.VITE_PREVIEW) {
    return (
      <iframe
        title={`Mapa: ${empresa.nomeCompleto}, ${empresa.endereco.completo}`}
        src={empresa.mapsEmbed}
        className={`w-full ${className}`}
        style={{ border: 0, filter: 'grayscale(0.35) sepia(0.15)' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  const ruas = [120, 200, 280, 360, 440, 520]
  return (
    <a
      href={empresa.mapsLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${empresa.endereco.completo} no Google Maps`}
      className={`group relative block w-full overflow-hidden bg-[#efe4dc] ${className}`}
    >
      <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        {/* quarteirões */}
        <rect width="800" height="520" fill="#efe4dc" />
        {ruas.map((y) => (
          <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="#fbf7f3" strokeWidth="10" />
        ))}
        {[90, 230, 380].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="520" stroke="#fbf7f3" strokeWidth="10" />
        ))}
        {/* Av. Brasil e Av. Atlântica */}
        <line x1="500" y1="0" x2="500" y2="520" stroke="#fbf7f3" strokeWidth="18" />
        <line x1="620" y1="0" x2="620" y2="520" stroke="#fbf7f3" strokeWidth="18" />
        {/* areia e mar */}
        <rect x="632" y="0" width="60" height="520" fill="#f3e6cf" />
        <rect x="692" y="0" width="108" height="520" fill="#d7e1e0" />
        <path d="M692 0 C 704 120, 684 260, 700 520" fill="none" stroke="#c4d3d2" strokeWidth="2" />
        {/* R. 700 em destaque */}
        <line x1="0" y1="280" x2="640" y2="280" stroke="#ddbfb4" strokeWidth="12" />
        <text x="24" y="270" fontSize="15" fill="#5a3a2f" fontFamily="Hanken Grotesk, sans-serif">R. 700</text>
        <text x="508" y="40" fontSize="13" fill="#7e5a2c" fontFamily="Hanken Grotesk, sans-serif" transform="rotate(90 508 40)">Av. Brasil</text>
        <text x="628" y="40" fontSize="13" fill="#7e5a2c" fontFamily="Hanken Grotesk, sans-serif" transform="rotate(90 628 40)">Av. Atlântica</text>
        <text x="760" y="200" fontSize="14" fill="#6f8584" fontStyle="italic" fontFamily="Cormorant Garamond, serif" transform="rotate(90 760 200)">Praia Central</text>
        {/* pino */}
        <ellipse cx="352" cy="282" rx="16" ry="5" fill="#3b241d" opacity=".2" />
        <path d="M352 282 C 340 262, 330 252, 330 238 a22 22 0 1 1 44 0 c0 14 -10 24 -22 44z" fill="#3b241d" />
        <circle cx="352" cy="238" r="8" fill="#c9a26b" />
      </svg>

      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 rounded-2xl bg-marfim/95 p-4 shadow-[0_18px_40px_-24px_rgba(59,36,29,0.55)] sm:right-auto sm:max-w-sm">
        <div>
          <p className="font-display text-[1.35rem] leading-tight text-cacau">{empresa.nomeCompleto}</p>
          <p className="mt-1 text-sm text-texto">{empresa.endereco.completo}</p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cacau px-4 py-2 text-sm font-medium text-marfim transition-colors group-hover:bg-cacau-700">
          Abrir rota no Google Maps
        </span>
      </div>
      <span className="absolute right-3 top-3 rounded-full bg-marfim/80 px-2.5 py-1 text-[0.7rem] text-texto">Mapa ilustrativo</span>
    </a>
  )
}
