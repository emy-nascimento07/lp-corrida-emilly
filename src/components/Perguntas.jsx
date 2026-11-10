import { useState } from 'react'
import { perguntas } from '../data/evento'

function ItemPergunta({ item, indice }) {
  const [aberta, setAberta] = useState(false)

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <h3>
        <button
          type="button"
          aria-expanded={aberta}
          aria-controls={`resposta-${indice}`}
          onClick={() => setAberta(!aberta)}
          className="text-lg font-bold text-noturno flex items-start gap-2 w-full text-left hover:opacity-80 transition-opacity"
        >
          <span className="text-energia">❓</span>
          {item.pergunta}
        </button>
      </h3>
      
      <p 
        id={`resposta-${indice}`} 
        hidden={!aberta}
        className="text-texto-mutado text-sm mt-2 pl-7 leading-relaxed"
      >
        {item.resposta}
      </p>
    </div>
  )
}

function Perguntas() {
  if (!perguntas || perguntas.length === 0) return null

  return (
    <section id="perguntas" className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-primaria">
        Dúvidas Frequentes
      </h2>

      <div className="flex flex-col gap-4">
        {perguntas.map((item, indice) => (
          <ItemPergunta 
            key={item.pergunta} 
            item={item} 
            indice={indice} 
          />
        ))}
      </div>
    </section>
  )
}

export default Perguntas
