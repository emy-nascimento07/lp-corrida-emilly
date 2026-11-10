function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 bg-noturno text-white shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
    <a
      href="#conteudo"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-destaque focus:text-blue-900 focus:font-bold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-md focus:z-50"
    >
      Pular para o conteúdo
    </a>

      <a href="#" className="text-xl font-extrabold tracking-wider hover:text-destaque transition-colors flex items-center gap-2">
        <span aria-hidden="true">🏃‍♂️</span> Corrida Noturna OC
      </a>

      <nav>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-semibold text-sm sm:text-base">
          <li>
            <a 
              href="#percursos" 
              className="hover:text-destaque transition-colors min-h-11 flex items-center"
            >
              Percursos
            </a>
          </li>
          <li>
            <a 
              href="#programacao" 
              className="hover:text-destaque transition-colors min-h-11 flex items-center"
            >
              Programação
            </a>
          </li>
          <li>
            <a 
              href="#inscricao" 
              className="hover:text-destaque transition-colors min-h-11 flex items-center"
            >
              Inscrição
            </a>
          </li>
          <li>
            <a 
              href="#perguntas" 
              className="hover:text-destaque transition-colors min-h-11 flex items-center"
            >
              Dúvidas
            </a>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Cabecalho
