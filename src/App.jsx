import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'

const App = () => {
  return (
    <Router>
        <div className="min-h-screen flex flex-cil justify-between bg-(--color-rosa) p-1">
            <Header/>
            <Routes>
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App
