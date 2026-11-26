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
      <section id="inscricao" className="py-10 sm:py-12 px-4">
        <div className="max-w-md mx-auto p-5 sm:p-6 bg-green-50 border border-green-200 text-green-800 rounded-xl text-center shadow-sm">
          <p
            role="status"
            className="font-semibold text-base sm:text-lg leading-relaxed"
          >
            Pronto! Vamos avisar{" "}
            <span className="underline break-all">{email}</span> sobre a próxima
            corrida. <span aria-hidden="true">👟</span>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="py-10 sm:py-14 px-4 bg-white">
      <div className="max-w-md mx-auto bg-white p-5 sm:p-8 rounded-2xl shadow-md border border-gray-100">
        <h3 className="text-xl sm:text-2xl font-bold text-noturno text-center mb-2">
          Fique por dentro!
        </h3>
        <p className="text-texto-mutado text-sm text-center mb-6">
          Receba avisos de lotes, mapas e fotos do evento.
        </p>

        <form onSubmit={enviar} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm font-semibold text-noturno">
            Email
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="seu-email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-primaria transition-all font-normal"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-energia text-white font-bold py-3.5 rounded-xl shadow-md hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
          >
            Quero receber
          </button>
        </form>
      </div>
    </section>
  );
}

export default Inscricao;
