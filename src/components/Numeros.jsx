import { numeros } from "../data/evento";

function Numeros() {
  if (!numeros || numeros.length === 0) return null;

  return (
    <section className="py-10 sm:py-14 bg-primaria text-white">
      <h2 className="sr-only">Estatísticas do Evento</h2>

      <div className="max-w-5xl mx-auto px-4">
        <ul className="grid gap-6 sm:gap-8 sm:grid-cols-3 text-center">
          {numeros.map((item) => (
            <li key={item.subtitulo} className="flex flex-col gap-1.5 sm:gap-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-destaque tracking-tight">
                {item.numero}
              </span>

              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-200">
                {item.subtitulo}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Numeros;
