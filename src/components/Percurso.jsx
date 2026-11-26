import { percursos } from "../data/evento";
import CartaoPercurso from "./CartaoPercurso";

function Percurso() {
  return (
    <section id="percursos" className="py-10 sm:py-14 px-4 max-w-7xl mx-auto">
      <ul className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {percursos.map((percurso) => (
          <li key={percurso.nome}>
            <CartaoPercurso
              nome={percurso.nome}
              nivel={percurso.nivel}
              preco={percurso.preco}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Percurso;
