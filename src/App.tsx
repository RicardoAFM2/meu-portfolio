import Header from "./components/Header"
import Hero from "./components/Hero"
import Projetos from "./components/Projetos"
import SobreMim from "./components/SobreMim"
import Competencias from "./components/Competencias"
import Educacao from "./components/Educacao"
import Contacto from "./components/Contacto"
import { useState } from "react"

function App() {

  const [idioma, setidioma] = useState<'pt' | 'en'>('pt');
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header idioma={idioma} setIdioma={setidioma} />

      <main className="pt-20 px-6 max-w-6xl mx-auto flex flex-col">
        <Hero idioma={idioma} />
      </main>

      <Projetos idioma={idioma}/>
      <SobreMim idioma={idioma}/>
      <Competencias idioma={idioma}/>
      <Educacao idioma={idioma}/>
      <Contacto idioma={idioma}/>

      <footer className="py-10 text-center text-slate-500 border-t border-slate-800">
        <p>
          {idioma === 'pt'
            ? '© 2024 Ricardo Martins. Construído com React & Tailwind CSS.'
            : '© 2024 Ricardo Martins. Built with React & Tailwind CSS.'
          }
        </p>
      </footer>

    </div>
      


  )
}

export default App