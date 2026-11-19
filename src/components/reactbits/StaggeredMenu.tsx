// Recriação do StaggeredMenu (reactbits.dev) para o menu mobile em tela cheia.
import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'

type Item = { rotulo: string; href: string }
type Props = { aberto: boolean; itens: Item[]; ativo: string; aoFechar: () => void; rodape?: ReactNode; id: string }

export default function StaggeredMenu({ aberto, itens, ativo, aoFechar, rodape, id }: Props) {
  const raiz = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useGSAP(
    () => {
      const reduzido = prefersReducedMotion()
      gsap.set(raiz.current, { autoAlpha: 0 })
      tl.current = gsap
        .timeline({ paused: true })
        .set(raiz.current, { autoAlpha: 1 })
        .fromTo('[data-camada]', { xPercent: 100 }, { xPercent: 0, duration: reduzido ? 0.01 : 0.55, stagger: 0.08, ease: 'expo.out' })
        .fromTo('[data-item]', { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: reduzido ? 0.01 : 0.7, stagger: 0.06, ease: 'expo.out' }, '-=0.3')
        .fromTo('[data-rodape]', { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.4')
    },
    { scope: raiz },
  )

  useEffect(() => {
    if (!tl.current) return
    if (aberto) tl.current.timeScale(1).play()
    else tl.current.timeScale(1.8).reverse()
  }, [aberto])

  useEffect(() => {
    if (!aberto) return
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && aoFechar()
    document.addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    raiz.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    return () => {
      document.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [aberto, aoFechar])

  return (
    <div ref={raiz} id={id} className="fixed inset-0 z-40 lg:hidden" aria-hidden={!aberto} role="dialog" aria-modal="true" aria-label="Menu">
      <div data-camada className="absolute inset-0 bg-rose" />
      <div data-camada className="absolute inset-0 bg-ouro" />
      <div data-camada className="absolute inset-0 flex flex-col bg-cacau px-6 pb-8 pt-28 text-marfim">
        <nav aria-label="Menu principal">
          <ul className="space-y-1">
            {itens.map((it) => (
              <li key={it.href} className="overflow-hidden">
                <Link
                  data-item
                  to={it.href}
                  onClick={aoFechar}
                  tabIndex={aberto ? 0 : -1}
                  aria-current={ativo === it.href ? 'page' : undefined}
                  className={`block font-display text-[2.7rem] leading-[1.15] ${ativo === it.href ? 'italic text-ouro-claro' : 'text-marfim'}`}
                >
                  {it.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div data-rodape className="mt-auto border-t border-marfim/15 pt-6 text-sm text-marfim/80">
          {rodape}
        </div>
      </div>
    </div>
  )
}
