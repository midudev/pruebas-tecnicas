import { Header } from './components/header/Header';
import Aside from './components/main/Aside';
import Navbar from './components/main/Navbar';
import Pages from './components/Routes/Routes.jsx';

export function App() {
	return (
		<>
			<Header />
			<main className="relative font-tilt text-black h-screen grid grid-cols-[200px_1fr] grid-rows-[1fr]">
				<Aside />
				<article className="w-full p-4 overflow-y-scroll">
					<h2 className="text-3xl border-b border-white">Books</h2>
					<Navbar />
					<section className="flex flex-wrap gap-4 mt-6 pb-20">
						<Pages />
					</section>
				</article>
			</main>
		</>
	);
}
