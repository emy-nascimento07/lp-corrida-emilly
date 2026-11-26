function CartaoPercurso({ nome, nivel, preco }) {
  return (
    <article className="rounded-xl bg-white p-5 sm:p-6 shadow border border-gray-100 flex flex-col justify-between min-h-36 sm:min-h-40">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-primaria">{nome}</h3>
        <p className="text-texto-mutado text-sm font-medium mt-1">{nivel}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
          Inscrição
        </span>
        <span className="text-lg sm:text-xl font-black text-energia">{preco}</span>
      </div>
    </article>
  );
}

export default CartaoPercurso;
