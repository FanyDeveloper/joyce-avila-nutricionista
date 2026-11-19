import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap, useGSAP } from '../../lib/gsap'
import { linkWhatsApp, mensagemPorRota } from '../../lib/whatsapp'
import { IconeWhatsApp } from '../ui/Icones'

export default function WhatsAppFlutuante() {
  const { pathname } = useLocation()
  const ref = useRef<HTMLAnchorElement>(null)

  useGSAP(() => {
    gsap.from(ref.current, { scale: 0.6, opacity: 0, y: 20, duration: 0.8, delay: 1.6, ease: 'expo.out' })
  })

  return (
    <a
      ref={ref}
      href={linkWhatsApp(mensagemPorRota(pathname))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Joyce pelo WhatsApp"
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-0 rounded-full bg-cacau p-3.5 text-marfim shadow-[0_14px_30px_-12px_rgba(59,36,29,0.6)] transition-all duration-500 hover:gap-2 hover:pr-5 sm:bottom-6 sm:right-6"
    >
      <IconeWhatsApp className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 group-hover:max-w-[8rem]">
        Fale comigo
      </span>
    </a>
  )
}
