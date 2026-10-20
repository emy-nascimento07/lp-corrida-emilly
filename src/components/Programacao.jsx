import { programacao } from "../data/evento";

function Programacao() {
  return (
    <section id="programacao" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-primaria">
        Programação do Evento
      </h2>

      <div className="space-y-4">
        {" "}
        {/* Vertical */}
        {programacao.map((item) => (
          <div
            key={item.horario}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow border-l-4 border-energia"
          >
            <span className="text-lg font-extrabold text-primaria min-w-70px">
              {item.horario}
            </span>

            <p className="text-gray-700 font-medium">{item.atividade}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programacao;
