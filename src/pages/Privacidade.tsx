import { useSeo } from '../hooks/useSeo'
import { empresa } from '../data/empresa'
import CabecalhoPagina from '../components/sections/CabecalhoPagina'

const atualizado = '18 de novembro de 2026'

export default function Privacidade() {
  useSeo({
    title: 'Política de Privacidade | Joyce Avila Nutricionista',
    description: 'Como o site da nutricionista Joyce Avila trata seus dados pessoais e cookies, de acordo com a LGPD (Lei 13.709/2018).',
    path: '/politica-de-privacidade',
  })

  const h2 = 'font-display text-[1.9rem] mt-14 mb-4'

  return (
    <>
      <CabecalhoPagina kicker={`Atualizada em ${atualizado}`} titulo="Política de|Privacidade" />
      <section className="py-20">
        <div className="container-site">
          <div className="texto-corpo max-w-3xl [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-6">
            <p>
              Esta política explica como o site de {empresa.nomeCompleto} trata os dados pessoais de quem o visita, em conformidade com a Lei Geral
              de Proteção de Dados (Lei nº 13.709/2018, LGPD).
            </p>

            <h2 className={h2}>Quem é a responsável pelos dados</h2>
            <p>
              Joyce Avila, nutricionista, CRN {empresa.crn}, com consultório na {empresa.endereco.completo}. Contato para assuntos de privacidade:{' '}
              {empresa.telefone} (WhatsApp) ou {empresa.email}. [CONFIRMAR: CPF/CNPJ da responsável]
            </p>

            <h2 className={h2}>Quais dados coletamos</h2>
            <ul>
              <li><strong>Formulário de contato:</strong> nome, telefone, tratamento de interesse e a mensagem que você escrever.</li>
              <li><strong>Navegação:</strong> dados técnicos anônimos, como tipo de navegador e páginas visitadas, apenas se você aceitar os cookies de medição.</li>
            </ul>
            <p className="mt-4">
              O site não pede dados de saúde. Por favor, evite colocar informações sensíveis (diagnósticos, exames) no formulário. Elas são tratadas
              com sigilo na consulta.
            </p>

            <h2 className={h2}>Para que usamos</h2>
            <ul>
              <li>Responder seu contato e agendar consultas (base legal: consentimento e procedimentos preliminares a um contrato).</li>
              <li>Entender, de forma agregada, como o site é usado, para melhorá-lo (base legal: consentimento, via banner de cookies).</li>
            </ul>

            <h2 className={h2}>Como o formulário funciona</h2>
            <p>
              O formulário não grava seus dados em servidor próprio. Ao enviar, ele monta uma mensagem e abre o WhatsApp no seu aparelho. Você
              decide se envia. A partir daí, a conversa segue as políticas do WhatsApp (Meta) e fica guardada no aparelho da Joyce pelo tempo
              necessário ao atendimento.
            </p>

            <h2 className={h2}>Cookies</h2>
            <ul>
              <li><strong>Essenciais:</strong> guardam sua escolha no aviso de cookies. Não identificam você.</li>
              <li><strong>Medição:</strong> [CONFIRMAR: ferramenta, ex. Google Analytics], usados apenas se você clicar em "Aceitar".</li>
              <li><strong>Mapa:</strong> o mapa incorporado é do Google Maps, que pode usar cookies próprios conforme a política do Google.</li>
            </ul>
            <p className="mt-4">Você pode mudar sua escolha a qualquer momento limpando os dados do site no seu navegador.</p>

            <h2 className={h2}>Compartilhamento</h2>
            <p>Seus dados não são vendidos nem cedidos. Podem passar por serviços necessários ao funcionamento do site (hospedagem, WhatsApp, Google Maps).</p>

            <h2 className={h2}>Seus direitos</h2>
            <p>
              Pela LGPD, você pode pedir confirmação, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, além de revogar o
              consentimento. É só pedir pelo WhatsApp {empresa.telefone}. Você também pode recorrer à Autoridade Nacional de Proteção de Dados (ANPD).
            </p>

            <h2 className={h2}>Por quanto tempo guardamos</h2>
            <p>Mensagens de contato são mantidas pelo tempo necessário ao atendimento ou enquanto houver obrigação legal. Dados de prontuário seguem as regras do Conselho Federal de Nutricionistas.</p>

            <h2 className={h2}>Alterações</h2>
            <p>Esta política pode ser atualizada. A data no topo da página indica a versão em vigor.</p>
          </div>
        </div>
      </section>
    </>
  )
}
