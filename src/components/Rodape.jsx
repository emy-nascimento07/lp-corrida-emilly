import { evento } from "../data/evento";

function Rodape() {
  return (
    <footer className="bg-noturno text-white py-8 px-4 sm:px-6 text-center text-sm border-t border-gray-800">
      <p className="font-semibold text-sm sm:text-base">
        {evento.nome} • {evento.data}
      </p>
      <p className="text-gray-400 text-xs mt-2 leading-relaxed">
        © 2026 Todos os direitos reservados. {evento.local}.
      </p>
    </footer>
  );
}

export default Rodape;
