import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "5 km", valor: 650 },
  { rotulo: "10 km", valor: 520 },
  { rotulo: "Caminhada", valor: 330 },
];

function Grafico() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const desenharGrafico = () => {
      const dpr = window.devicePixelRatio || 1;
      const larguraLogica = Math.min(container.clientWidth - 24, 600);
      const alturaLogica = 170;

      if (larguraLogica <= 0) return;

      canvas.width = larguraLogica * dpr;
      canvas.height = alturaLogica * dpr;
      canvas.style.width = `${larguraLogica}px`;
      canvas.style.height = `${alturaLogica}px`;

      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, larguraLogica, alturaLogica);

      const maior = Math.max(...dados.map((d) => d.valor));
      const inicioBarraX = larguraLogica < 340 ? 88 : 105;
      const margemDireita = 48;
      const larguraMaximaBarra = Math.max(larguraLogica - inicioBarraX - margemDireita, 60);

      ctx.font = larguraLogica < 340 ? "bold 12px sans-serif" : "bold 14px sans-serif";
      ctx.textBaseline = "middle";

      dados.forEach((item, i) => {
        const largura = (item.valor / maior) * larguraMaximaBarra;
        const y = 20 + i * 50;
        const alturaBarra = 24;
        const meioBarraY = y + alturaBarra / 2;

        ctx.fillStyle = "#1e3a8a";
        ctx.fillRect(inicioBarraX, y, largura, alturaBarra);

        ctx.fillStyle = "#0f172a";
        ctx.fillText(item.rotulo, 8, meioBarraY);
        ctx.fillText(item.valor.toString(), inicioBarraX + largura + 8, meioBarraY);
      });
    };

    desenharGrafico();

    const observer = new ResizeObserver(desenharGrafico);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 py-12 sm:py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900">
        Inscrições por Percurso
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mt-2">
        Confira a distribuição dos 1.500 atletas inscritos nas categorias do
        evento.
      </p>

      <div
        ref={containerRef}
        className="mt-6 w-full bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-slate-100 overflow-hidden"
      >
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Gráfico de barras mostrando as inscrições: 5 km com 650 inscritos, 10 km com 520 inscritos e Caminhada com 330 inscritos, totalizando 1.500 participantes."
          className="block mx-auto"
        />
      </div>
    </section>
  );
}

export default Grafico;
