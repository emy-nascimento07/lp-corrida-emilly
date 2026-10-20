import { evento } from '../data/evento'

function Rodape() {
    return (
        <footer className="bg-noturno text-white py-8 px-6 text-center text-sm border-t border-gray-800"> 
            <p className="font-semibold">{evento.nome} • {evento.data}</p>
            <p className="text-texto-mutado text-xs mt-2">© 2026 Todos os direitos reservados. {evento.local}.</p>
        </footer>
    )
}

export default Rodape;
