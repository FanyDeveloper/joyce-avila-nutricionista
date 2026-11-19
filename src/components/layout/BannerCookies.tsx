import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CHAVE = 'ja-cookies'

function lerConsentimento() {
  try {
    return localStorage.getItem(CHAVE)
  } catch {
    return 'indisponivel'
  }
}

export default function BannerCookies() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisivel(!lerConsentimento()), 1200)
    return () => clearTimeout(t)
  }, [])

  const decidir = (valor: 'aceito' | 'recusado') => {
    try {
      localStorage.setItem(CHAVE, valor)
    } catch {
      /* navegação privada */
    }
    setVisivel(false)
  }

  if (!visivel) return null

  return (
    <div role="region" aria-label="Aviso de cookies" className="fixed bottom-4 left-4 right-20 z-40 max-w-md rounded-2xl border border-cacau/10 bg-marfim/95 p-4 text-[0.82rem] sm:p-5 sm:text-[0.9rem] shadow-[0_20px_50px_-24px_rgba(59,36,29,0.5)] backdrop-blur sm:left-6 sm:right-auto">
      <p className="leading-snug text-texto">
        Usamos cookies essenciais e, com a sua permissão, cookies de medição para melhorar o site. Saiba mais na{' '}
        <Link to="/politica-de-privacidade" className="underline underline-offset-2 hover:text-cacau">Política de Privacidade</Link>.
      </p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => decidir('aceito')} className="rounded-full bg-cacau px-4 py-1.5 font-medium text-marfim sm:px-5 sm:py-2 transition-colors hover:bg-cacau-700">Aceitar</button>
        <button onClick={() => decidir('recusado')} className="rounded-full border border-cacau/25 px-4 py-1.5 font-medium text-cacau sm:px-5 sm:py-2 transition-colors hover:border-cacau">Recusar</button>
      </div>
    </div>
  )
}
