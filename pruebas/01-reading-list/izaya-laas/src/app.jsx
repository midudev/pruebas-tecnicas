import { Header } from './components/header/Header';
import DataBooks from './components/main/DataBooks';
import Aside from './components/main/aside/Aside';
import Navbar from './components/main/navbar/Navbar';
import Pages from './components/main/routes/Routes.jsx';
import { isDark } from './signals/store';

export function App() {
  return (
    <div
      className={`bg-white selection:bg-black selection:text-white ${
        isDark.value ? 'invert' : ''
      }`}
    >
      <div className="mx-auto max-w-[1366px]">
        <Header />
        <main
          className={`flex h-screen flex-col-reverse justify-between bg-white font-tilt text-black sm:relative sm:grid sm:grid-cols-[200px_1fr] sm:grid-rows-[1fr] sm:justify-start`}
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
      </div>
    </div>
  );
}
