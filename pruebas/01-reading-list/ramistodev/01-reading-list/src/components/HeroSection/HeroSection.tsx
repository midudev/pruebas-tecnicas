import { useHeroSection } from "./useHeroSection";

export function HeroSection() {
  const { booksSectionRef, handleScrollToBooks } = useHeroSection();

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Bienvenido a tu Lista de Lectura
        </h1>
        <p className="mb-8 text-lg text-slate-400 max-w-xl mx-auto">
          Organiza tus libros favoritos, crea tu lista de lectura y descubre
          nuevas lecturas.
        </p>
        <button
          className="px-8 py-3 bg-slate-950 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-slate-800 transition mb-8"
          onClick={handleScrollToBooks}
        >
          Ver libros
        </button>
        <span
          className="animate-bounce text-3xl text-white cursor-pointer"
          onClick={handleScrollToBooks}
        >
          ↓
        </span>
      </section>
      <div ref={booksSectionRef} />
    </>
  );
}
