import { Header } from './components/header/Header';
import Aside from './components/main/aside/Aside';
import Navbar from './components/main/navbar/Navbar';
import Pages from './components/main/routes/Routes.jsx';
import { isDark, myReadingListLength, totalFreeBooks } from './signals/store';

export function App() {
	return (
		<>
			<Header />
			<main
				className={`relative font-tilt text-black h-screen flex flex-col-reverse sm:grid sm:grid-cols-[200px_1fr] sm:grid-rows-[1fr] bg-white ${
					isDark.value ? 'invert' : ''
				}`}
			>
				<Aside />
				<article className="w-full p-4 overflow-y-scroll">
					<div className="flex items-end max-w-5xl">
						<h2 className="text-3xl border-b border-white">Books</h2>
						<div className="flex justify-end gap-x-4 w-full ">
							<p>My books {myReadingListLength}</p>
							<p>Free books {totalFreeBooks.value}</p>
							<p></p>
						</div>
					</div>
					<Navbar />
					<section className="flex flex-wrap gap-4 mt-6 pb-20 max-w-5xl">
						<Pages />
					</section>
				</article>
			</main>
		</>
	);
}
