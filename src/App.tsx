import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import { LenisProvider } from './lib/lenis'
import Layout from './components/layout/Layout'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import ServicoDetalhe from './pages/ServicoDetalhe'
import Agendamento from './pages/Agendamento'
import PerguntasFrequentes from './pages/PerguntasFrequentes'
import Contato from './pages/Contato'
import Privacidade from './pages/Privacidade'
import NaoEncontrada from './pages/NaoEncontrada'

// Prévia hospedada (sem servidor de rotas) usa MemoryRouter; produção usa BrowserRouter.
const Router = import.meta.env.VITE_PREVIEW ? MemoryRouter : BrowserRouter

export default function App() {
  return (
    <LenisProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="servicos" element={<Servicos />} />
            <Route path="servicos/:slug" element={<ServicoDetalhe />} />
            <Route path="agendamento" element={<Agendamento />} />
            <Route path="perguntas-frequentes" element={<PerguntasFrequentes />} />
            <Route path="contato" element={<Contato />} />
            <Route path="politica-de-privacidade" element={<Privacidade />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Route>
        </Routes>
      </Router>
    </LenisProvider>
  )
}
