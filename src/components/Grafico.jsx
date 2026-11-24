import { useEffect, useRef } from "react";

// Dados baseados nos 1.500 participantes e 3 percursos do evento
const dados = [
  { rotulo: "5 km", valor: 650 },
  { rotulo: "10 km", valor: 520 },
  { rotulo: "Caminhada", valor: 330 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Limpa o canvas para evitar sobreposições em re-renderizações
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maior = Math.max(...dados.map((d) => d.valor));

    // Configuração de fonte e alinhamento vertical padrão
    ctx.font = "bold 14px sans-serif";
    ctx.textBaseline = "middle";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior
      const alturaBarra = 24;
      const meioBarraY = y + alturaBarra / 2; // ponto central para alinhar o texto

      // 1. Cor da barra (cor primária do evento: azul marinho #1e3a8a)
      ctx.fillStyle = "#1e3a8a";

      // 2. Desenhe a barra com fillRect, começando em x = 110
      ctx.fillRect(110, y, largura, alturaBarra);

      // 3. Troque a cor para escuro e escreva o rótulo em x = 10
      ctx.fillStyle = "#0f172a"; // cor noturna/escura
      ctx.fillText(item.rotulo, 10, meioBarraY);
      // 4. Escreva o valor logo depois do fim da barra
      ctx.fillText(item.valor.toString(), 110 + largura + 8, meioBarraY);
    });
  }, []);

  return (
    <section className="px-4 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-blue-900">
        Inscrições por Percurso
      </h2>
      <p className="text-gray-600 mt-2">
        Confira a distribuição dos 1.500 atletas inscritos nas categorias do
        evento.
      </p>

      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Gráfico de barras mostrando as inscrições: 5 km com 650 inscritos, 10 km com 520 inscritos e Caminhada com 330 inscritos, totalizando 1.500 participantes."
        className="mt-6 max-w-full bg-white rounded-xl p-3 shadow-sm border border-slate-100"
      />
    </section>
  );
}

export default Grafico;
