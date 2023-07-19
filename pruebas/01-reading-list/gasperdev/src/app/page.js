import Header from './components/Header';
import ListOfBooks from './components/ListOfBooks';
import Nav from './components/Nav';
import ScrollToTopButton from './components/ScrollToTopButton';
export default function Home() {
  return (
    <section className="max-w-4xl min-h-screen mx-auto bg-white md:mx-auto dark:bg-slate-800">
      <Header />
      <Nav />
      <ScrollToTopButton />
      <ListOfBooks />
    </section>
  );
}
