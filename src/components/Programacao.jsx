import { programacao } from "../data/evento";

function Programacao() {
  return (
    <section id="programacao" className="py-10 sm:py-14 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-primaria">
        Programação do Evento
      </h2>

      <ul className="space-y-3 sm:space-y-4">
        {programacao.map((item) => (
          <li
            key={item.horario}
            className="flex items-start sm:items-center gap-3 sm:gap-4 bg-white p-4 rounded-xl shadow border-l-4 border-energia"
          >
            <span className="text-base sm:text-lg font-extrabold text-primaria min-w-[4.25rem] sm:min-w-[4.75rem] shrink-0">
              {item.horario}
            </span>

            <p className="text-gray-700 text-sm sm:text-base font-medium leading-snug">
              {item.atividade}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Programacao;
