import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'
import { empresa, navegacao, servicos } from '../../data/empresa'
import { linkWhatsApp } from '../../lib/whatsapp'
import Logo from './Logo'
import { IconeInstagram, IconeWhatsApp } from '../ui/Icones'
import { MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('[data-rodape-bloco]', {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      })
      gsap.from('[data-rodape-assinatura]', {
        yPercent: 40,
        opacity: 0,
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: { trigger: '[data-rodape-assinatura]', start: 'top 98%' },
      })
    },
    { scope: ref },
  )

  return (
    <footer ref={ref} className="relative overflow-hidden bg-cacau pt-20 text-marfim/80">
      <div className="container-site">
        <div className="grid gap-12 pb-14 md:grid-cols-12">
          <div data-rodape-bloco className="md:col-span-4">
            <Logo claro />
            <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed">
              Nutricionista com foco em saúde da mulher no Centro de Balneário Camboriú. {empresa.bordao}
            </p>
            <p className="mt-4 text-sm text-marfim/60">CRN: {empresa.crn}</p>
          </div>

          <nav data-rodape-bloco aria-label="Páginas" className="md:col-span-2">
            <h2 className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ouro-claro">Páginas</h2>
            <ul className="space-y-2 text-[0.95rem]">
              {navegacao.map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="transition-colors hover:text-marfim">{n.rotulo}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav data-rodape-bloco aria-label="Tratamentos" className="md:col-span-3">
            <h2 className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ouro-claro">Tratamentos</h2>
            <ul className="space-y-2 text-[0.95rem]">
              {servicos.map((s) => (
                <li key={s.slug}>
                  <Link to={`/servicos/${s.slug}`} className="transition-colors hover:text-marfim">{s.nome}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div data-rodape-bloco className="space-y-3 text-[0.95rem] md:col-span-3">
            <h2 className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ouro-claro">Consultório</h2>
            <a href={empresa.mapsLink} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 hover:text-marfim">
              <MapPin className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} /> {empresa.endereco.completo}
            </a>
            <a href={empresa.telefoneLink} className="flex items-center gap-2.5 hover:text-marfim">
              <Phone className="h-4 w-4" strokeWidth={1.5} /> {empresa.telefone}
            </a>
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-marfim">
              <IconeWhatsApp className="h-4 w-4" /> WhatsApp
            </a>
            <a href={empresa.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-marfim">
              <IconeInstagram className="h-4 w-4" /> {empresa.instagram.usuario}
            </a>
            <ul className="pt-2 text-sm text-marfim/65">
              {empresa.horarios.map((h) => (
                <li key={h.dias}>{h.dias}: {h.horas}</li>
              ))}
            </ul>
          </div>
        </div>

        <p
          data-rodape-assinatura
          aria-hidden
          className="select-none whitespace-nowrap text-center font-display italic leading-[0.8] text-marfim/[0.07]"
          style={{ fontSize: 'clamp(4rem, 15vw, 15rem)' }}
        >
          Joyce Avila
        </p>

        <div className="flex flex-col gap-3 border-t border-marfim/10 py-6 text-[0.82rem] text-marfim/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {empresa.nomeCompleto}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="hover:text-marfim">Política de Privacidade</Link>
            <a href={empresa.desenvolvedor.url} target="_blank" rel="noopener noreferrer" className="hover:text-marfim">
              Site por {empresa.desenvolvedor.nome}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
