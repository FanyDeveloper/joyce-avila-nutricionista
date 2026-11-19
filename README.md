# Joyce Avila Nutricionista — site institucional

React + Vite + TypeScript + Tailwind CSS 4 + React Router + GSAP/ScrollTrigger (useGSAP) + Lenis.

## Rodar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera /dist
npm run preview   # testa o build
```

Deploy na Vercel: importe o repositório. O `vercel.json` já redireciona as rotas para o `index.html`.

## Onde editar

- **Todos os dados da empresa:** `src/data/empresa.ts` (telefone, endereço, horários, serviços, avaliações, FAQ)
- **Domínio:** `empresa.dominio` + `index.html` + `public/sitemap.xml` + `public/robots.txt`
- **Fotos:** `public/img/` (WebP)
- **Cores e fontes:** `src/index.css` (`@theme`)

## Estrutura

- `src/pages`: Início, Sobre, Serviços, 4 páginas de tratamento, Agendamento, Perguntas Frequentes, Contato, Política de Privacidade, 404
- `src/components/reactbits`: BlurText, ScrollReveal, CountUp, ShinyText, Magnet, ClickSpark, SpotlightCard, LogoLoop, ScrollStack, StaggeredMenu (recriados em React + GSAP)
- `src/components/ui`: botões, input com label flutuante, checkbox LGPD, loader (referência Uiverse)
- `src/components/layout`: Header (pílula flutuante), Footer, WhatsApp flutuante, banner de cookies
- `src/components/sections`: blocos reutilizáveis (avaliações, localização, FAQ, formulário, CTA)

## Pendências [CONFIRMAR]

Procure por `[CONFIRMAR` no projeto. Principais: lista de serviços, horários, CRN, valores/convênios/pagamento,
estacionamento, atendimento online e Joinville, duração da consulta e dos retornos, formação, e-mail, CPF/CNPJ
(política de privacidade), coordenadas, logo vetorial, domínio e ferramenta de analytics.
