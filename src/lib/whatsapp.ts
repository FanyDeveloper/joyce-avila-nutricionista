import { empresa, servicos, whatsappMensagemPadrao } from '../data/empresa'

export function linkWhatsApp(mensagem: string = whatsappMensagemPadrao) {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

/** Mensagem pré-preenchida que muda conforme a página. */
export function mensagemPorRota(pathname: string): string {
  if (pathname.startsWith('/servicos/')) {
    const s = servicos.find((x) => pathname.endsWith(x.slug))
    if (s) return mensagemServico(s.nome.toLowerCase())
  }
  const mapa: Record<string, string> = {
    '/agendamento': 'Olá, Joyce! Vi no site como funciona o atendimento e quero agendar minha primeira consulta.',
    '/servicos': 'Olá, Joyce! Vi os tratamentos no site e gostaria de saber qual é o ideal para mim.',
    '/sobre': 'Olá, Joyce! Conheci sua história pelo site e gostaria de agendar uma consulta.',
    '/perguntas-frequentes': 'Olá, Joyce! Li as dúvidas frequentes no site e ainda tenho uma pergunta.',
    '/contato': 'Olá, Joyce! Gostaria de agendar uma consulta no consultório do Centro de BC.',
  }
  return mapa[pathname] ?? whatsappMensagemPadrao
}

export const mensagemServico = (nome: string) =>
  `Olá! Vi no site o serviço de ${nome} e gostaria de mais informações.`
