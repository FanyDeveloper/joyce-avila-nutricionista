// Recriação do ShinyText (reactbits.dev). Só para detalhes pequenos.
export default function ShinyText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent motion-safe:animate-[brilho_4.5s_linear_infinite] ${className}`}
      style={{
        backgroundImage: 'linear-gradient(110deg, #7e5a2c 35%, #e3c693 50%, #7e5a2c 65%)',
        backgroundSize: '220% 100%',
      }}
    >
      {text}
      <style>{`@keyframes brilho{from{background-position:120% 0}to{background-position:-120% 0}}`}</style>
    </span>
  )
}
