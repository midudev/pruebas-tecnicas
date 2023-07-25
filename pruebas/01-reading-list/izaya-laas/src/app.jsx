import { Header } from './components/header/Header';
import DataBooks from './components/main/DataBooks';
import Aside from './components/main/aside/Aside';
import Navbar from './components/main/navbar/Navbar';
import Pages from './components/main/routes/Routes.jsx';
import { isDark } from './signals/store';

export function App() {
  return (
    <>
      <Header />
      <main
        className={`flex h-screen flex-col-reverse justify-end bg-white font-tilt text-black sm:relative sm:grid sm:grid-cols-[200px_1fr] sm:grid-rows-[1fr] sm:justify-start ${
          isDark.value ? 'invert' : ''
        }`}
      >
        <Aside />
        <article className="w-full overflow-y-scroll p-4">
          <div className="flex max-w-5xl items-end">
            <h2 className="border-b border-white text-3xl">Books</h2>
            <DataBooks />
          </div>
          <Navbar />
          <section className="mt-6 flex max-w-5xl flex-wrap gap-4 pb-20">
            <Pages />
          </section>
        </article>
      </main>
    </>
  );
}
