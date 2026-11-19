import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../../lib/gsap'
import { empresa, navegacao } from '../../data/empresa'
import { linkWhatsApp, mensagemPorRota } from '../../lib/whatsapp'
import Logo from './Logo'
import Magnet from '../reactbits/Magnet'
import StaggeredMenu from '../reactbits/StaggeredMenu'
import { IconeInstagram, IconeWhatsApp } from '../ui/Icones'

export default function Header() {
  const { pathname } = useLocation()
  const [menuAberto, setMenuAberto] = useState(false)
  const [compacto, setCompacto] = useState(false)
  const raiz = useRef<HTMLElement>(null)
  const barra = useRef<HTMLDivElement>(null)
  const listaRef = useRef<HTMLUListElement>(null)
  const indicador = useRef<HTMLSpanElement>(null)
  const menuAbertoRef = useRef(false)

  const ativo = navegacao.find((n) => (n.href === '/' ? pathname === '/' : pathname.startsWith(n.href)))?.href ?? ''

  // Pílula flutuante + esconder/mostrar conforme direção da rolagem
  useGSAP(
    () => {
      const st = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const y = self.scroll()
          setCompacto(y > 80)
          if (menuAbertoRef.current) return
          const esconder = self.direction === 1 && y > 260
          gsap.to(raiz.current, { yPercent: esconder ? -140 : 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' })
        },
      })
      return () => st.kill()
    },
    { scope: raiz },
  )

  useEffect(() => {
    menuAbertoRef.current = menuAberto
    if (menuAberto) gsap.to(raiz.current, { yPercent: 0, duration: 0.3 })
  }, [menuAberto])

  useGSAP(
    () => {
      const d = prefersReducedMotion() ? 0 : 0.6
      gsap.to(barra.current, {
        maxWidth: compacto ? 1040 : 1600,
        marginTop: compacto ? 12 : 0,
        paddingTop: compacto ? 10 : 22,
        paddingBottom: compacto ? 10 : 22,
        backgroundColor: compacto ? 'rgba(251,247,243,0.78)' : 'rgba(251,247,243,0)',
        borderColor: compacto ? 'rgba(59,36,29,0.12)' : 'rgba(59,36,29,0)',
        boxShadow: compacto ? '0 12px 40px -18px rgba(59,36,29,0.35)' : '0 0 0 rgba(0,0,0,0)',
        borderRadius: compacto ? 999 : 0,
        duration: d,
        ease: 'power3.out',
      })
    },
    { dependencies: [compacto], scope: raiz },
  )

  // Indicador deslizante
  const moverIndicador = useCallback((alvo: HTMLElement | null) => {
    const ind = indicador.current
    if (!ind) return
    if (!alvo) {
      gsap.to(ind, { opacity: 0, duration: 0.3 })
      return
    }
    const lista = listaRef.current!.getBoundingClientRect()
    const r = alvo.getBoundingClientRect()
    gsap.to(ind, { x: r.left - lista.left, width: r.width, opacity: 1, duration: 0.5, ease: 'power3.out' })
  }, [])

  const voltarAoAtivo = useCallback(() => {
    moverIndicador(listaRef.current?.querySelector<HTMLElement>('[aria-current="page"]') ?? null)
  }, [moverIndicador])

  useEffect(() => {
    const t = setTimeout(voltarAoAtivo, 60)
    window.addEventListener('resize', voltarAoAtivo)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', voltarAoAtivo)
    }
  }, [pathname, compacto, voltarAoAtivo])

  useEffect(() => setMenuAberto(false), [pathname])
  const fechar = useCallback(() => setMenuAberto(false), [])

  return (
    <>
      <header ref={raiz} className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4">
        <div
          ref={barra}
          className="mx-auto flex items-center justify-between gap-4 border px-4 backdrop-blur-md sm:px-6"
          style={{ maxWidth: 1600, paddingTop: 22, paddingBottom: 22, borderColor: 'transparent' }}
        >
          <Logo className="relative z-50" claro={menuAberto && !compacto} />

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul ref={listaRef} className="relative flex items-center gap-1" onMouseLeave={voltarAoAtivo}>
              <span ref={indicador} aria-hidden className="absolute left-0 top-0 h-full rounded-full bg-blush opacity-0" style={{ width: 0 }} />
              {navegacao.map((n) => (
                <li key={n.href} className="relative">
                  <Link
                    to={n.href}
                    aria-current={ativo === n.href ? 'page' : undefined}
                    onMouseEnter={(e) => moverIndicador(e.currentTarget)}
                    onFocus={(e) => moverIndicador(e.currentTarget)}
                    className="group relative block overflow-hidden rounded-full px-4 py-2 text-[0.92rem] font-medium text-cacau"
                  >
                    <span className="block transition-transform duration-500 ease-[var(--ease-suave)] group-hover:-translate-y-full">{n.rotulo}</span>
                    <span aria-hidden className="absolute inset-x-4 top-full block italic transition-transform duration-500 ease-[var(--ease-suave)] group-hover:-translate-y-full font-display text-[1.05rem] leading-[1.45] text-ouro-texto">
                      {n.rotulo}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-50 flex items-center gap-2">
            <div className="hidden sm:block">
            <Magnet>
              <a
                href={linkWhatsApp(mensagemPorRota(pathname))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cacau px-5 py-2.5 text-[0.9rem] font-medium text-marfim transition-colors duration-300 hover:bg-cacau-700"
              >
                <IconeWhatsApp className="h-4 w-4" />
                Agendar consulta
              </a>
            </Magnet>
            </div>

            <button
              type="button"
              onClick={() => setMenuAberto((v) => !v)}
              aria-expanded={menuAberto}
              aria-controls="menu-mobile"
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
              className={`grid h-11 w-11 place-items-center rounded-full transition-colors duration-300 lg:hidden ${menuAberto ? 'bg-marfim text-cacau' : 'bg-cacau text-marfim'}`}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-500 ease-[var(--ease-suave)] ${menuAberto ? 'top-1/2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-500 ease-[var(--ease-suave)] ${menuAberto ? 'top-1/2 -rotate-45' : 'top-full'}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <StaggeredMenu
        id="menu-mobile"
        aberto={menuAberto}
        itens={navegacao}
        ativo={ativo}
        aoFechar={fechar}
        rodape={
          <div className="space-y-3">
            <a href={linkWhatsApp(mensagemPorRota(pathname))} target="_blank" rel="noopener noreferrer" tabIndex={menuAberto ? 0 : -1} className="flex items-center gap-2 text-marfim">
              <IconeWhatsApp className="h-4 w-4" /> {empresa.telefone}
            </a>
            <a href={empresa.instagram.url} target="_blank" rel="noopener noreferrer" tabIndex={menuAberto ? 0 : -1} className="flex items-center gap-2">
              <IconeInstagram className="h-4 w-4" /> {empresa.instagram.usuario}
            </a>
            <p>{empresa.endereco.completo}</p>
          </div>
        }
      />
    </>
  )
}
