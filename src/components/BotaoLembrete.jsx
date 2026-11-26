import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    const permissao = await Notification.requestPermission();

    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    const registro = await navigator.serviceWorker.ready;

    await registro.showNotification("Corrida Noturna OC", {
      body: "Lembrete: Dia 17 de abril, largada às 19:30 na Praça Central!",
      icon: "/icone-192.png",
    });

    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-6 w-full max-w-xs sm:max-w-none flex flex-col items-center">
      <button
        onClick={ativarLembrete}
        className="w-full sm:w-auto bg-destaque text-blue-900 font-bold px-6 py-3.5 rounded-full shadow-md hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer text-sm sm:text-base"
      >
        Ativar Lembrete
      </button>

      {mensagem && (
        <p role="status" className="mt-3 text-sm font-semibold text-blue-100">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
