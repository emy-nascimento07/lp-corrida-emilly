import { useState } from "react";

function Inscricao() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  function enviar(e) {
    e.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-green-50 border border-green-200 text-green-800 rounded-xl text-center shadow-sm">
        <p role="status" className="font-semibold text-lg">
          Pronto! Vamos avisar <span className="underline">{email}</span> sobre a próxima corrida. 👟
        </p>
      </div>
    );
  }

  return (
    <section id="inscricao" className="py-12 px-4 bg-cinza-fundo">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-noturno text-center mb-2">Fique por dentro!</h3>
        <p className="text-texto-mutated text-sm text-center mb-6">Receba avisos de lotes, mapas e fotos do evento.</p>
        
        <form onSubmit={enviar} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm font-semibold text-noturno">
            Email
            <input
              type="email"
              required
              placeholder="seu-email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primaria transition-all font-normal"
            />
          </label>
          <button 
            type="submit"
            className="bg-energia text-white font-bold py-3 rounded-xl shadow-md hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Quero receber
          </button>
        </form>
      </div>
    </section>
  );
}

export default Inscricao;
