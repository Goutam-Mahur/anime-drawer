import AnimeCard, { type AnimeProp } from "./components/AnimeCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LoadMore from "./components/LoadMore";
import { data } from "./data";
function App() {
  return (
    <main className="max-w-7xl mx-auto bg-[#0F1117]">
      <Hero />
      <section className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <header>
          <h2 className="text-3xl text-white font-bold">Scroll Anime</h2>
        </header>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center">
          {data.map((item: AnimeProp, index: number) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
        </section>

        <LoadMore />
      </section>
      <Footer />
    </main>
  );
}

export default App;
