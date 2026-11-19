import { empresa, type Servico } from '../data/empresa'

/** JSON-LD LocalBusiness (MedicalBusiness, especialidade Nutrição). */
export const schemaNegocio = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${empresa.dominio}/#negocio`,
  name: empresa.nomeCompleto,
  description: `${empresa.profissao} com foco em ${empresa.especialidade} em ${empresa.endereco.cidade}. ${empresa.bordao}`,
  medicalSpecialty: 'DietNutrition',
  url: empresa.dominio,
  image: `${empresa.dominio}/og-image.jpg`,
  telephone: '+55-47-99684-8763',
  priceRange: '$$', // [CONFIRMAR]
  address: {
    '@type': 'PostalAddress',
    streetAddress: empresa.endereco.rua,
    addressLocality: empresa.endereco.cidade,
    addressRegion: empresa.endereco.uf,
    postalCode: empresa.endereco.cep,
    addressCountry: 'BR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: empresa.endereco.lat, longitude: empresa.endereco.lng },
  openingHoursSpecification: empresa.horariosSchema.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.dias,
    opens: h.abre,
    closes: h.fecha,
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: empresa.google.nota.toFixed(1),
    reviewCount: empresa.google.avaliacoes,
    bestRating: '5',
  },
  sameAs: [empresa.instagram.url],
}

export const schemaServico = (s: Servico) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.nome,
  description: s.resumo,
  areaServed: empresa.endereco.cidade,
  provider: { '@id': `${empresa.dominio}/#negocio` },
})

export const schemaFaq = (itens: { pergunta: string; resposta: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: itens
    .filter((i) => !i.resposta.startsWith('[CONFIRMAR'))
    .map((i) => ({ '@type': 'Question', name: i.pergunta, acceptedAnswer: { '@type': 'Answer', text: i.resposta } })),
})
