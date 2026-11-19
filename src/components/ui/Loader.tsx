// Loader discreto (referência Uiverse): três pontos em ouro.
export default function Loader({ rotulo = 'Enviando' }: { rotulo?: string }) {
  return (
    <span role="status" className="inline-flex items-center gap-1.5" aria-label={rotulo}>
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-current motion-safe:animate-[pulso_1s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
      <style>{`@keyframes pulso{0%,100%{opacity:.25;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}`}</style>
    </span>
  )
}
