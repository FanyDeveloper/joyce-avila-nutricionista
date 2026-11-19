// Ícones de marca em traço fino (Lucide não traz ícones de marcas).
type P = { className?: string }

export const IconeWhatsApp = ({ className = 'h-5 w-5' }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M3.5 20.5l1.3-4.1A8.5 8.5 0 1 1 8 19.4l-4.5 1.1z" />
    <path d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.5.6c-.1.1-.2.3 0 .5.6 1 1.4 1.8 2.5 2.4.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5v.4c0 .5-.3 1-.8 1.2-.8.3-1.9.3-3.4-.4a9.3 9.3 0 0 1-3.6-3.5c-.6-1.1-.8-2.3-.2-3.7z" />
  </svg>
)

export const IconeInstagram = ({ className = 'h-5 w-5' }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
  </svg>
)
