import Hero from "./components/Hero";
import Percurso from "./components/Percurso";
import Rodape from "./components/Rodape";
import Programacao from "./components/Programacao";
import Cabecalho from "./components/Cabecalho";
import Inscricao from "./components/Inscricao";
import Sobre from "./components/Sobre";
import Perguntas from "./components/Perguntas";
import Numeros from "./components/Numeros";
import Grafico from "./components/Grafico";

function App() {
  return (
    <main id="conteudo" className="bg-fundo min-h-screen overflow-x-hidden">
      <Cabecalho />

      <Hero />

      <Sobre />

      <Numeros />

      <div className="text-center my-8 sm:my-12 px-4">
        <a
          href="#percursos"
          className="bg-destaque text-blue-900 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:opacity-90 active:scale-[0.98] inline-block transition-all tracking-wide text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          Conhecer Nossos Percursos
        </a>
      </div>

      <Percurso />

      <Programacao />

      <Grafico />

      <Inscricao />

      <Perguntas />

      <Rodape />
    </main>
  );
}

export default App;
