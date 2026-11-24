import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Para a sequência se o navegador não tiver Notification em window
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Solicita permissão ao usuário
    const permissao = await Notification.requestPermission();

    // 3. Valida se a permissão foi concedida
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    // 4. Aguarda o Service Worker estar pronto
    const registro = await navigator.serviceWorker.ready;

    // 5. Dispara a notificação através do Service Worker
    await registro.showNotification("Corrida Noturna OC", {
      body: "Lembrete: Dia 17 de abril, largada às 19:30 na Praça Central!",
      icon: "/icone-192.png",
    });

    // 6. Exibe a mensagem de sucesso na interface
    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-6">
      <button
        onClick={ativarLembrete}
        className="bg-destaque text-blue-900 font-bold px-6 py-3 rounded-full shadow-md hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
      >
        Ativar Lembrete
      </button>

      {mensagem && (
        <p role="status" className="mt-3 text-sm font-semibold text-gray-700">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
