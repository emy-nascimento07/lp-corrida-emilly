import { informacoes } from "../data/evento";

function Sobre() {
  return (
    <section id="sobre" className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-primaria">
        Sobre a Corrida
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {informacoes.map((info) => (
          <div
            key={info.titulo}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3"
          >
            <h3 className="text-xl font-bold text-energia">{info.titulo}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {info.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sobre;
