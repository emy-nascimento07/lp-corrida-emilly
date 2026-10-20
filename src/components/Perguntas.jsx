import { perguntas } from '../data/evento'

function Perguntas() {
  return (
    <section id="perguntas" className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-primaria">
        Dúvidas Frequentes
      </h2>

      <div className="flex flex-col gap-4">
        {perguntas.map((item) => (
          <div 
            key={item.pergunta} 
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-lg font-bold text-noturno flex items-start gap-2">
              <span className="text-energia">❓</span>
              {item.pergunta}
            </h3>
            
            <p className="text-texto-mutated text-sm mt-2 pl-7 leading-relaxed">
              {item.resposta}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Perguntas