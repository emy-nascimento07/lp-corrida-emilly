import { percursos } from "../data/evento";
import CartaoPercurso from "./CartaoPercurso";

function Percurso() {
  return (
    <section id="percursos" className="py-12 px-4 max-w-7xl mx-auto">
      <ul className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {percursos.map((percurso) => (
          <li key={percurso.nome}>
          <CartaoPercurso
            key={percurso.nome}
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
