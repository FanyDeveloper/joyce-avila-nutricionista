/**
 * Todos os dados da Joyce Avila Nutricionista em um único arquivo.
 * Tudo que estiver marcado com [CONFIRMAR] precisa ser validado com a cliente antes de publicar.
 */

export const empresa = {
  nome: 'Joyce Avila',
  nomeCompleto: 'Joyce Avila Nutricionista',
  profissao: 'Nutricionista',
  especialidade: 'Saúde da Mulher',
  bordao: 'Não prescrevo dietas, conduzo tratamentos.',
  assinatura: 'Serei sua última nutricionista.',
  crn: '[CONFIRMAR: número do CRN-10]',
  premio: 'Eleita melhor nutricionista de Joinville 2025',
  dominio: 'https://joyceavila.com.br', // [CONFIRMAR: domínio final]

  telefone: '(47) 99684-8763',
  telefoneLink: 'tel:+5547996848763',
  whatsapp: '5547996848763',
  email: '[CONFIRMAR: e-mail de contato]',

  endereco: {
    rua: 'R. 700, 489',
    bairro: 'Centro',
    cidade: 'Balneário Camboriú',
    uf: 'SC',
    cep: '88330-620',
    completo: 'R. 700, 489 – Centro, Balneário Camboriú – SC, 88330-620',
    plusCode: '2956+F8 Centro, Balneário Camboriú – SC',
    // [CONFIRMAR: coordenadas exatas — valores aproximados do Centro de BC]
    lat: -26.9906,
    lng: -48.6352,
  },

  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Joyce+Avila+Nutricionista+R.+700,+489+Centro+Balne%C3%A1rio+Cambori%C3%BA',
  mapsEmbed: 'https://www.google.com/maps?q=R.+700,+489+-+Centro,+Balne%C3%A1rio+Cambori%C3%BA+-+SC,+88330-620&output=embed',

  // O Google mostra apenas "Abre qui. às 08:00".
  horarios: [
    { dias: 'Segunda a sexta', horas: '[CONFIRMAR: horário] — a partir das 08:00' },
    { dias: 'Sábado', horas: '[CONFIRMAR]' },
    { dias: 'Domingo', horas: 'Fechado [CONFIRMAR]' },
  ],
  // Usado no JSON-LD. [CONFIRMAR: horários reais]
  horariosSchema: [{ dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '08:00', fecha: '18:00' }],

  google: { nota: 5.0, avaliacoes: 35 },

  instagram: {
    usuario: '@nutricionistajoyceavila',
    url: 'https://www.instagram.com/nutricionistajoyceavila/',
    seguidores: '14,1 mil',
  },

  desenvolvedor: { nome: 'Fany Etylen', url: 'https://github.com/FanyDeveloper' },
} as const

export const whatsappMensagemPadrao =
  'Olá, Joyce! Vi seu site e gostaria de agendar uma consulta.'

/* ------------------------------------------------------------------ */
/* Sobre a Joyce — textos baseados no que ela mesma publica            */
/* ------------------------------------------------------------------ */

export const sobre = {
  resumo:
    'Sou nutricionista com foco em saúde da mulher e atendo no Centro de Balneário Camboriú. Fui eleita a melhor nutricionista de Joinville em 2025 e sou atleta de fisiculturismo, várias vezes campeã. Conheço por dentro o que é disciplina, e também o que é ter uma rotina corrida.',
  historia: [
    'O fisiculturismo me ensinou na prática o que muita gente só aprende na teoria: corpo e resultado são consequência de estratégia, constância e ajuste fino. Levei esse olhar para o consultório, só que com uma diferença importante. Minhas pacientes não estão se preparando para um palco. Elas querem se sentir bem no próprio corpo, ter energia e parar de recomeçar toda segunda-feira.',
    'Por isso eu não entrego uma folha com cardápio e um "boa sorte". Eu conduzo um tratamento: entendo sua história, seus exames, sua rotina e seus objetivos, monto uma estratégia possível de cumprir e acompanho de perto, ajustando o caminho junto com você.',
    'Sou esposa e mãe da Betininha, minha maior motivação diária. Também sou cristã e levo para a profissão os mesmos valores que levo para casa. Amo estudar e me manter atualizada, porque excelência exige evolução contínua.',
  ],
  valores: [
    { titulo: 'Escuta antes de prescrever', texto: 'A primeira consulta é sobre você, não sobre o cardápio. Muitas pacientes chegam apreensivas e saem mais seguras.' },
    { titulo: 'Estratégia que cabe na rotina', texto: 'Orientações claras e práticas, pensadas para o seu dia real: trabalho, filhos, treino, viagens.' },
    { titulo: 'Inteligência metabólica', texto: 'Decisões baseadas no funcionamento do seu corpo, com estudo constante e atualização científica.' },
    { titulo: 'Disciplina com leveza', texto: 'Constância vem de um plano possível, não de sofrimento. Quem já viveu a alta performance sabe disso.' },
  ],
  formacao: '[CONFIRMAR: formação acadêmica, pós-graduações e cursos]',
}

/* ------------------------------------------------------------------ */
/* Serviços — [CONFIRMAR: lista e nomes dos serviços com a Joyce]       */
/* ------------------------------------------------------------------ */

export type Servico = {
  slug: string
  nome: string
  nomeCurto: string
  chamada: string
  resumo: string
  beneficio: string
  paraQuem: string[]
  comoFunciona: { titulo: string; texto: string }[]
  faq: { pergunta: string; resposta: string }[]
  imagem: string
  imagemAlt: string
}

const passosBase = (foco: string) => [
  { titulo: 'Primeira consulta', texto: `Conversa aprofundada sobre sua história, rotina, sono, treino, ciclo e ${foco}. Avaliação física e análise de exames, se você tiver.` },
  { titulo: 'Estratégia personalizada', texto: 'Você recebe um plano alimentar e orientações feitos para a sua vida real. Nada de cardápio copiado.' },
  { titulo: 'Acompanhamento próximo', texto: 'Dúvidas no caminho são tratadas pelo canal de acompanhamento [CONFIRMAR: WhatsApp/app e prazos de resposta].' },
  { titulo: 'Retornos e ajustes', texto: 'Nos retornos [CONFIRMAR: intervalo], reavaliamos medidas e sensação, e ajustamos a estratégia conforme sua evolução.' },
]

export const servicos: Servico[] = [
  {
    slug: 'emagrecimento-e-composicao-corporal',
    nome: 'Emagrecimento e composição corporal',
    nomeCurto: 'Emagrecimento',
    chamada: 'Perder gordura sem perder a cabeça.',
    resumo: 'Tratamento para reduzir gordura e melhorar a forma do corpo, preservando massa magra, energia e uma relação tranquila com a comida.',
    beneficio: 'Você deixa de depender de força de vontade e passa a ter um método. O peso na balança é só um dos números: acompanhamos medidas, composição corporal e como você se sente no dia a dia.',
    paraQuem: [
      'Mulheres que já fizeram várias dietas e sempre voltam ao ponto de partida',
      'Quem quer secar gordura mantendo músculo e disposição para treinar',
      'Quem sente que "come pouco e não emagrece" e quer entender o porquê',
      'Pós-gestação, quando o corpo e a rotina mudaram [CONFIRMAR se atende]',
    ],
    comoFunciona: passosBase('seu histórico com dietas'),
    faq: [
      { pergunta: 'Vou passar fome?', resposta: 'Não é o objetivo. A estratégia é montada para você ter saciedade e energia. Se algo não estiver funcionando, ajustamos nos retornos.' },
      { pergunta: 'Preciso cortar tudo o que eu gosto?', resposta: 'Não. Um plano que proíbe tudo dura pouco. A ideia é encaixar o que faz sentido para você dentro de uma estratégia que traga resultado.' },
      { pergunta: 'Em quanto tempo vejo resultado?', resposta: 'Depende do ponto de partida, da rotina e da constância de cada pessoa. Na primeira consulta conversamos sobre metas realistas para o seu caso.' },
    ],
    imagem: '/img/joyce-vestido-cacau.webp',
    imagemAlt: 'Joyce Avila de vestido cacau, sorrindo, com a mão na cintura',
  },
  {
    slug: 'saude-hormonal-da-mulher',
    nome: 'Saúde hormonal da mulher',
    nomeCurto: 'Saúde hormonal',
    chamada: 'Cada fase do corpo pede uma estratégia.',
    resumo: 'Nutrição para as fases e queixas do corpo feminino: TPM, ciclo irregular, SOP, tireoide, pré-menopausa e menopausa, sempre em conjunto com o seu médico.',
    beneficio: 'Você entende como a alimentação conversa com seus hormônios e ganha uma estratégia para ter mais disposição, menos inchaço e mais estabilidade ao longo do mês e das fases da vida.',
    paraQuem: [
      'Mulheres com TPM intensa, inchaço ou compulsão em fases do ciclo',
      'Quem tem diagnóstico de SOP, resistência à insulina ou alterações de tireoide',
      'Mulheres no climatério ou na menopausa que sentem o corpo mudar',
      'Quem quer cuidar da saúde a longo prazo, não só da estética',
    ],
    comoFunciona: passosBase('seu ciclo e seus sintomas'),
    faq: [
      { pergunta: 'Preciso levar exames?', resposta: 'Se você tiver exames recentes, leve. Ajudam muito. Se não tiver, a Joyce orienta o que pode ser útil conversar com o seu médico.' },
      { pergunta: 'A nutrição substitui o tratamento médico?', resposta: 'Não. O acompanhamento nutricional complementa o tratamento do seu médico e pode trabalhar em conjunto com ele.' },
      { pergunta: 'Atende gestantes?', resposta: '[CONFIRMAR: se a Joyce atende gestação e amamentação]' },
    ],
    imagem: '/img/joyce-perfil.webp',
    imagemAlt: 'Joyce Avila de perfil, olhando por cima do ombro, com blusa branca de ombro a ombro',
  },
  {
    slug: 'performance-e-hipertrofia',
    nome: 'Performance e hipertrofia',
    nomeCurto: 'Performance',
    chamada: 'Treino forte pede prato à altura.',
    resumo: 'Nutrição esportiva para quem treina e quer ganhar massa muscular, melhorar o rendimento ou se preparar para competir, conduzida por quem compete.',
    beneficio: 'Seu treino passa a render de verdade. Você come de acordo com o seu objetivo e a sua carga de treino, com orientação de suplementação quando faz sentido.',
    paraQuem: [
      'Mulheres que treinam musculação e querem ganhar massa magra',
      'Quem treina há tempo e sente que estagnou',
      'Atletas e praticantes de corrida, crossfit e outras modalidades',
      'Quem pensa em competir no fisiculturismo [CONFIRMAR se faz preparação para palco]',
    ],
    comoFunciona: passosBase('sua rotina de treinos'),
    faq: [
      { pergunta: 'Preciso tomar suplemento?', resposta: 'Não necessariamente. Suplementos só entram quando têm motivo claro para o seu objetivo e o seu caso.' },
      { pergunta: 'A Joyce entende de treino pesado?', resposta: 'Sim. Ela é atleta de fisiculturismo, várias vezes campeã, e vive na prática a rotina de alta performance.' },
      { pergunta: 'Posso ajustar a dieta à minha periodização?', resposta: 'Sim. A estratégia acompanha as fases do seu treino e pode conversar com o seu treinador.' },
    ],
    imagem: '/img/joyce-poltrona.webp',
    imagemAlt: 'Joyce Avila sentada em uma banqueta de madeira, com conjunto listrado bege',
  },
  {
    slug: 'reeducacao-alimentar',
    nome: 'Reeducação alimentar',
    nomeCurto: 'Reeducação alimentar',
    chamada: 'Comer bem sem viver de regra.',
    resumo: 'Para quem quer organizar a alimentação da casa e da rotina, sair do ciclo de restrição e exagero e criar hábitos que ficam.',
    beneficio: 'Você aprende a montar refeições, fazer escolhas fora de casa e lidar com fins de semana e viagens, sem depender de cardápio para sempre.',
    paraQuem: [
      'Quem vive no "segunda eu começo"',
      'Mães que querem organizar a alimentação da família',
      'Quem come na rua, viaja muito ou tem rotina imprevisível',
      'Quem quer mais energia, intestino funcionando e sono melhor',
    ],
    comoFunciona: passosBase('sua relação com a comida'),
    faq: [
      { pergunta: 'Serve para quem não quer emagrecer?', resposta: 'Sim. O foco pode ser saúde, disposição, exames ou simplesmente comer melhor com menos esforço.' },
      { pergunta: 'Vou receber receitas?', resposta: '[CONFIRMAR: se a Joyce entrega receitas, lista de compras ou material de apoio]' },
      { pergunta: 'E quando eu sair do plano?', resposta: 'Faz parte. O tratamento prepara você para eventos, viagens e dias fora da rotina, sem culpa e sem recomeçar do zero.' },
    ],
    imagem: '/img/joyce-retrato-960.webp',
    imagemAlt: 'Retrato de Joyce Avila com blazer off-white e brincos dourados, mão apoiada no queixo',
  },
]

/* ------------------------------------------------------------------ */
/* Atendimento: do primeiro contato ao resultado                       */
/* ------------------------------------------------------------------ */

export const atendimento = [
  { titulo: 'Você chama no WhatsApp', texto: 'Conta rapidamente o que te trouxe e escolhe o melhor horário. Sem formulário longo e sem compromisso.' },
  { titulo: 'A consulta é sobre você', texto: 'Uma conversa sem pressa sobre sua história, rotina, exames e objetivos, com avaliação física no consultório, no Centro de BC.' },
  { titulo: 'Sai com uma estratégia', texto: 'Plano alimentar e orientações práticas, feitos para a sua vida real e explicados com clareza.' },
  { titulo: 'Evolução acompanhada', texto: 'Retornos para medir, ajustar e seguir. Você não fica sozinha entre uma consulta e outra.' },
]

/* ------------------------------------------------------------------ */
/* Diferenciais (bento)                                                */
/* ------------------------------------------------------------------ */

export const diferenciais = [
  { titulo: 'Tratamento, não dieta', texto: 'Cada caso é conduzido do diagnóstico ao ajuste. Nada de cardápio pronto entregue e esquecido.', destaque: true },
  { titulo: 'Atleta campeã', texto: 'Várias vezes campeã no fisiculturismo. Disciplina vivida, não só estudada.' },
  { titulo: 'Foco na mulher', texto: 'Ciclo, hormônios, maternidade e rotina feminina no centro de cada estratégia.' },
  { titulo: '5,0 no Google', texto: 'Todas as 35 avaliações no Google têm nota máxima.', nota: true },
  { titulo: 'Prêmio 2025', texto: 'Eleita melhor nutricionista de Joinville em 2025.' },
]

/* ------------------------------------------------------------------ */
/* Avaliações reais do Google (copiadas como estão)                     */
/* ------------------------------------------------------------------ */

export const avaliacoes = [
  {
    nome: 'Camila',
    nota: 5,
    quando: 'há 4 meses',
    texto: 'Quero deixar aqui meu agradecimento pelo excelente atendimento! A Joy é extremamente atenciosa, profissional e realmente se preocupa com o bem-estar dos pacientes. As orientações são claras, práticas e fazem toda a diferença no dia a dia. Estou muito satisfeita com os resultados e recomendo de olhos fechados!',
  },
  {
    nome: 'Dábata',
    nota: 5,
    quando: 'há 4 meses',
    texto: 'Cheguei bem apreensiva, fui muito bem atendida. Joyce uma profissional muito humana e muito linda, me senti muito à vontade e saí mais segura de mim.',
  },
  {
    nome: 'Natalia',
    nota: 5,
    quando: 'há 5 meses',
    texto: 'Não tenho palavras para agradecer tudo o que a Joyce fez por mim nessa jornada.',
  },
]

/* ------------------------------------------------------------------ */
/* Perguntas frequentes                                                */
/* ------------------------------------------------------------------ */

export const faqGeral = [
  { pergunta: 'Quanto custa a consulta?', resposta: '[CONFIRMAR: valor da consulta e dos pacotes de acompanhamento]. Pelo WhatsApp a equipe passa os valores atualizados e as opções disponíveis.' },
  { pergunta: 'Atende por convênio?', resposta: '[CONFIRMAR: atendimento particular e/ou convênios]. Se for particular, é possível pedir recibo para reembolso, conforme as regras do seu plano.' },
  { pergunta: 'Quais as formas de pagamento?', resposta: '[CONFIRMAR: Pix, cartão de crédito/débito, parcelamento].' },
  { pergunta: 'Onde fica o consultório?', resposta: 'Na R. 700, 489, no Centro de Balneário Camboriú (CEP 88330-620). Pelo botão "Como chegar" você abre a rota direto no Google Maps.' },
  { pergunta: 'Tem estacionamento?', resposta: '[CONFIRMAR: estacionamento próprio, conveniado ou vagas na rua].' },
  { pergunta: 'Quanto tempo dura a consulta?', resposta: 'A primeira consulta é mais longa, porque a Joyce precisa entender sua história com calma. [CONFIRMAR: duração média da primeira consulta e dos retornos].' },
  { pergunta: 'Atende online?', resposta: '[CONFIRMAR: se há atendimento online para quem mora fora de Balneário Camboriú, como Joinville e outras cidades].' },
  { pergunta: 'Como faço para agendar?', resposta: 'Chame no WhatsApp (47) 99684-8763 ou preencha o formulário do site. A mensagem já chega pronta e você só confirma o envio.' },
]

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */

export const navegacao = [
  { rotulo: 'Início', href: '/' },
  { rotulo: 'Sobre', href: '/sobre' },
  { rotulo: 'Tratamentos', href: '/servicos' },
  { rotulo: 'Agendamento', href: '/agendamento' },
  { rotulo: 'Dúvidas', href: '/perguntas-frequentes' },
  { rotulo: 'Contato', href: '/contato' },
]
