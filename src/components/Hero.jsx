import BotaoLembrete from "./BotaoLembrete";

function Hero() {
  return (
    <section className="bg-primaria px-4 py-14 sm:py-20 text-white flex flex-col items-center text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
        Corrida Noturna OC
      </h1>
      <p className="mt-4 max-w-md text-base sm:text-lg text-blue-100">
        Dia 17 de abril, largada às 19:30 na Praça Central.
      </p>
      <BotaoLembrete />
    </section>
  );
}

export default Hero;
