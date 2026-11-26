import { useState } from "react";
import { perguntas } from "../data/evento";

function ItemPergunta({ item, indice }) {
  const [aberta, setAberta] = useState(false);

  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100">
      <h3>
        <button
          type="button"
          aria-expanded={aberta}
          aria-controls={`resposta-${indice}`}
          onClick={() => setAberta(!aberta)}
          className="text-base sm:text-lg font-bold text-noturno flex items-start justify-between gap-3 w-full text-left min-h-11 py-1 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="flex items-start gap-2.5">
            <span className="text-energia shrink-0" aria-hidden="true">
              ❓
            </span>
            <span>{item.pergunta}</span>
          </span>
          <span
            aria-hidden="true"
            className="text-primaria font-extrabold text-xl leading-none shrink-0 mt-0.5"
          >
            {aberta ? "−" : "+"}
          </span>
        </button>
      </h3>

      <p
        id={`resposta-${indice}`}
        hidden={!aberta}
        className="text-texto-mutado text-sm mt-2.5 pl-7 pr-2 leading-relaxed"
      >
        {item.resposta}
      </p>
    </div>
  );
}

function Perguntas() {
  if (!perguntas || perguntas.length === 0) return null;

  return (
    <section id="perguntas" className="py-10 sm:py-14 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-primaria">
        Perguntas Frequentes
      </h2>

      <div className="flex flex-col gap-3 sm:gap-4">
        {perguntas.map((item, indice) => (
          <ItemPergunta key={item.pergunta} item={item} indice={indice} />
        ))}
      </div>
    </section>
  );
}

export default Perguntas;
