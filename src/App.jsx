import Hero from "./components/Hero";
import Percurso from "./components/Percurso";
import Rodape from "./components/Rodape";
import Programacao from "./components/Programacao";
import Cabecalho from "./components/Cabecalho";
import Inscricao from "./components/Inscricao";
import Sobre from "./components/Sobre";       
import Perguntas from "./components/Perguntas"; 

function App() {
  return (
    <main className="bg-fundo min-h-screen">
      <Cabecalho />

      <Hero />

      <Sobre />

      <div className="text-center my-12">
        <a
          href="#percursos"
          className="bg-destaque text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 active:scale-[0.98] inline-block transition-all tracking-wide"
        >
          Conhecer Nossos Percursos
        </a>
      </div>

      <Percurso />

      <Programacao />

      <Inscricao />

      <Perguntas />

      <Rodape />
    </main>
  );
}

export default App;
