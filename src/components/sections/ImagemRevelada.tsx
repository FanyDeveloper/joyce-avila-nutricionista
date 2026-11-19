// Imagem com revelação por clip-path e parallax leve (até ~12%).
import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../../lib/gsap'

type Props = {
  src: string
  alt: string
  largura: number
  altura: number
  className?: string
  imgClassName?: string
  prioridade?: boolean
  srcSet?: string
  sizes?: string
  parallax?: boolean
}

export default function ImagemRevelada({ src, alt, largura, altura, className = '', imgClassName = '', prioridade, srcSet, sizes, parallax = true }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const img = ref.current!.querySelector('img')
      gsap.fromTo(
        ref.current,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.3,
          ease: 'expo.out',
          delay: prioridade ? 0.5 : 0,
          scrollTrigger: prioridade ? undefined : { trigger: ref.current, start: 'top 85%' },
        },
      )
      if (parallax && window.innerWidth >= 768) {
        gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true } })
      }
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={largura}
        height={altura}
        loading={prioridade ? 'eager' : 'lazy'}
        {...((prioridade ? { fetchpriority: 'high' } : {}) as Record<string, string>)}
        decoding="async"
        className={`h-full w-full scale-[1.14] object-cover ${imgClassName}`}
      />
    </div>
  )
}
