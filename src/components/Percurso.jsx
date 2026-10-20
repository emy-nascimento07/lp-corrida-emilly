import { percursos } from "../data/evento";
import CartaoPercurso from "./CartaoPercurso";

function Percurso() {
  return (
    <section id="percursos">
      <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {percursos.map((percurso) => (
          <CartaoPercurso
            key={percurso.nome}
            nome={percurso.nome}
            nivel={percurso.nivel}
            preco={percurso.preco} 
          />
        ))}
      </div>
    </section>
  );
}
export default Percurso;
