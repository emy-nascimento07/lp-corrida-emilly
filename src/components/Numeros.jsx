import { numeros } from "../data/evento";

function Numeros() {
  if (!numeros || numeros.length === 0) return null;

  return (
    <section className="py-12 bg-primaria text-white">
      {/* Título invisível na tela, mas lido por leitores de tela para dar contexto */}
      <h2 className="sr-only">Estatísticas do Evento</h2>

      <div className="max-w-5xl mx-auto px-4">
        {/* ✅ Lista semântica para os números */}
        <ul className="grid gap-8 sm:grid-cols-3 text-center">
          {numeros.map((item) => (
            <li key={item.subtitulo} className="flex flex-col gap-2">
              {/* O número em destaque usando a cor amarela do tema */}
              <span className="text-4xl sm:text-5xl font-black text-destaque tracking-tight">
                {item.numero}
              </span>
              
              {/* O texto descritivo abaixo do número */}
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-200">
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
