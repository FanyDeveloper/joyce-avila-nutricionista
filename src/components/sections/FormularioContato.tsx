import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { servicos } from '../../data/empresa'
import { linkWhatsApp } from '../../lib/whatsapp'
import CampoFlutuante from '../ui/CampoFlutuante'
import CheckboxAnimado from '../ui/CheckboxAnimado'
import BotaoPrimario from '../ui/BotaoPrimario'
import Loader from '../ui/Loader'
import { IconeWhatsApp } from '../ui/Icones'

type Erros = Partial<Record<'nome' | 'telefone' | 'servico' | 'consentimento', string>>

const mascaraTelefone = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function FormularioContato({ servicoInicial = '' }: { servicoInicial?: string }) {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [servico, setServico] = useState(servicoInicial)
  const [mensagem, setMensagem] = useState('')
  const [consentimento, setConsentimento] = useState(false)
  const [erros, setErros] = useState<Erros>({})
  const [enviando, setEnviando] = useState(false)

  const opcoes = [...servicos.map((s) => s.nome), 'Ainda não sei, quero orientação']

  const validar = (): Erros => {
    const e: Erros = {}
    if (nome.trim().length < 2) e.nome = 'Digite seu nome.'
    if (telefone.replace(/\D/g, '').length < 10) e.telefone = 'Digite um telefone com DDD.'
    if (!servico) e.servico = 'Escolha o que você procura.'
    if (!consentimento) e.consentimento = 'Precisamos do seu consentimento para responder.'
    return e
  }

  const enviar = (ev: FormEvent) => {
    ev.preventDefault()
    const e = validar()
    setErros(e)
    if (Object.keys(e).length) {
      document.getElementById(`campo-${Object.keys(e)[0]}`)?.focus()
      return
    }
    setEnviando(true)
    const texto = [
      'Olá, Joyce! Vim pelo formulário do site.',
      '',
      `*Nome:* ${nome.trim()}`,
      `*Telefone:* ${telefone}`,
      `*Interesse:* ${servico}`,
      mensagem.trim() ? `*Mensagem:* ${mensagem.trim()}` : '',
    ]
      .filter((l, i) => l !== '' || i === 1)
      .join('\n')
    setTimeout(() => {
      window.open(linkWhatsApp(texto), '_blank', 'noopener,noreferrer')
      setEnviando(false)
    }, 650)
  }

  return (
    <form onSubmit={enviar} noValidate className="space-y-4" aria-label="Formulário de contato">
      <div className="grid gap-4 sm:grid-cols-2">
        <CampoFlutuante id="campo-nome" tipo="text" label="Seu nome" autoComplete="name" value={nome} onChange={(e) => setNome(e.target.value)} erro={erros.nome} obrigatorio />
        <CampoFlutuante id="campo-telefone" tipo="tel" label="WhatsApp com DDD" autoComplete="tel" value={telefone} onChange={(e) => setTelefone(mascaraTelefone(e.target.value))} erro={erros.telefone} obrigatorio />
      </div>
      <CampoFlutuante id="campo-servico" tipo="select" label="O que você procura" opcoes={opcoes} value={servico} onChange={(e) => setServico(e.target.value)} erro={erros.servico} obrigatorio />
      <CampoFlutuante id="campo-mensagem" tipo="textarea" label="Conte um pouco sobre você (opcional)" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      <CheckboxAnimado id="campo-consentimento" checked={consentimento} onChange={setConsentimento} erro={erros.consentimento}>
        Concordo que meus dados sejam usados apenas para responder este contato, conforme a{' '}
        <Link to="/politica-de-privacidade" className="underline underline-offset-2">Política de Privacidade</Link>.
      </CheckboxAnimado>
      <div className="pt-2">
        <BotaoPrimario type="submit" disabled={enviando} icone={enviando ? <Loader /> : <IconeWhatsApp className="h-4 w-4" />}>
          {enviando ? 'Abrindo o WhatsApp' : 'Enviar pelo WhatsApp'}
        </BotaoPrimario>
        <p className="mt-3 text-sm text-texto/80">A mensagem abre pronta no WhatsApp. Você só confirma o envio.</p>
      </div>
    </form>
  )
}
