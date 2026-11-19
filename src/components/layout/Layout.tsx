import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../../lib/gsap'
import { useLenis } from '../../lib/lenis'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFlutuante from './WhatsAppFlutuante'
import BannerCookies from './BannerCookies'
import { schemaNegocio } from '../../lib/schema'

function SchemaGlobal() {
  useEffect(() => {
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'jsonld-negocio'
    s.textContent = JSON.stringify(schemaNegocio)
    document.head.appendChild(s)
    return () => s.remove()
  }, [])
  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const lenis = useLenis()
  const main = useRef<HTMLElement>(null)
  const cortina = useRef<HTMLDivElement>(null)

  // Volta ao topo a cada troca de página
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo(0, 0)
    const t = setTimeout(() => ScrollTrigger.refresh(), 120)
    return () => clearTimeout(t)
  }, [pathname, lenis])

  // Transição suave entre páginas
  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.fromTo(main.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        return
      }
      gsap
        .timeline()
        .fromTo(cortina.current, { scaleY: 1, transformOrigin: 'top' }, { scaleY: 0, duration: 0.7, ease: 'expo.inOut' })
        .fromTo(
          main.current,
          { opacity: 0, y: 24 },
          // clearProps: um transform no <main> quebraria o pin (position: fixed) do ScrollTrigger
          { opacity: 1, y: 0, duration: 0.7, clearProps: 'transform', onComplete: () => ScrollTrigger.refresh() },
          '-=0.35',
        )
    },
    { dependencies: [pathname] },
  )

  return (
    <>
      <a href="#conteudo" className="sr-only z-[70] rounded-full bg-cacau px-4 py-2 text-marfim focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Pular para o conteúdo
      </a>
      <SchemaGlobal />
      <Header />
      <div ref={cortina} aria-hidden className="pointer-events-none fixed inset-0 z-[55] origin-top bg-blush" style={{ transform: 'scaleY(0)' }} />
      <main id="conteudo" ref={main} key={pathname}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFlutuante />
      <BannerCookies />
    </>
  )
}
