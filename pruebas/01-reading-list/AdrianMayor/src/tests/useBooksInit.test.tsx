import useBooksInit from "@/hooks/useBooksInit";
import useLocalStorage from "@/hooks/useLocalStorage";
import { store } from "@/redux/store";
import { act, renderHook, waitFor } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

const initialBooks = [
	{
		title: "El Señor de los Anillos",
		pages: 1200,
		genre: "Fantasía",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
		synopsis: "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
		year: 1954,
		ISBN: "978-0618640157",
		author: {
			name: "J.R.R. Tolkien",
			otherBooks: ["El Hobbit", "El Silmarillion"],
		},
		availability: true,
	},
	{
		title: "Juego de Tronos",
		pages: 694,
		genre: "Fantasía",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
		synopsis: "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
		year: 1996,
		ISBN: "978-0553103540",
		author: {
			name: "George R. R. Martin",
			otherBooks: ["Choque de Reyes", "Tormenta de Espadas", "Festín de Cuervos"],
		},
		availability: true,
	},
	{
		title: "La llamada de Cthulhu",
		pages: 43,
		genre: "Terror",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
		synopsis: "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
		year: 1928,
		ISBN: "978-1542461690",
		author: {
			name: "H.P. Lovecraft",
			otherBooks: ["El horror de Dunwich", "En las montañas de la locura"],
		},
		availability: true,
	},
	{
		title: "Drácula",
		pages: 418,
		genre: "Terror",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
		synopsis: "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
		year: 1897,
		ISBN: "978-0486411095",
		author: {
			name: "Bram Stoker",
			otherBooks: ["La joya de las siete estrellas", "La madriguera del gusano blanco"],
		},
		availability: true,
	},
];
const localStorageValue = [
	{
		title: "El Señor de los Anillos",
		pages: 1200,
		genre: "Fantasía",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
		synopsis: "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
		year: 1954,
		ISBN: "978-0618640157",
		author: {
			name: "J.R.R. Tolkien",
			otherBooks: ["El Hobbit", "El Silmarillion"],
		},
		availability: false,
	},
	{
		title: "La llamada de Cthulhu",
		pages: 43,
		genre: "Terror",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
		synopsis: "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
		year: 1928,
		ISBN: "978-1542461690",
		author: {
			name: "H.P. Lovecraft",
			otherBooks: ["El horror de Dunwich", "En las montañas de la locura"],
		},
		availability: false,
	},
];
const booksToDisplayExpected = [
	{
		title: "Juego de Tronos",
		pages: 694,
		genre: "Fantasía",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
		synopsis: "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
		year: 1996,
		ISBN: "978-0553103540",
		author: {
			name: "George R. R. Martin",
			otherBooks: ["Choque de Reyes", "Tormenta de Espadas", "Festín de Cuervos"],
		},
		availability: true,
	},
	{
		title: "Drácula",
		pages: 418,
		genre: "Terror",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
		synopsis: "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
		year: 1897,
		ISBN: "978-0486411095",
		author: {
			name: "Bram Stoker",
			otherBooks: ["La joya de las siete estrellas", "La madriguera del gusano blanco"],
		},
		availability: true,
	},
	{
		title: "El Señor de los Anillos",
		pages: 1200,
		genre: "Fantasía",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
		synopsis: "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
		year: 1954,
		ISBN: "978-0618640157",
		author: {
			name: "J.R.R. Tolkien",
			otherBooks: ["El Hobbit", "El Silmarillion"],
		},
		availability: false,
	},
	{
		title: "La llamada de Cthulhu",
		pages: 43,
		genre: "Terror",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
		synopsis: "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
		year: 1928,
		ISBN: "978-1542461690",
		author: {
			name: "H.P. Lovecraft",
			otherBooks: ["El horror de Dunwich", "En las montañas de la locura"],
		},
		availability: false,
	},
];
const newFilteredBooks = [
	{
		title: "La llamada de Cthulhu",
		pages: 43,
		genre: "Terror",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
		synopsis: "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
		year: 1928,
		ISBN: "978-1542461690",
		author: {
			name: "H.P. Lovecraft",
			otherBooks: ["El horror de Dunwich", "En las montañas de la locura"],
		},
		availability: true,
	},
	{
		title: "Drácula",
		pages: 418,
		genre: "Terror",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
		synopsis: "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
		year: 1897,
		ISBN: "978-0486411095",
		author: {
			name: "Bram Stoker",
			otherBooks: ["La joya de las siete estrellas", "La madriguera del gusano blanco"],
		},
		availability: true,
	},
];
const newFilteredBooksExpected = [
	{
		title: "Drácula",
		pages: 418,
		genre: "Terror",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
		synopsis: "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
		year: 1897,
		ISBN: "978-0486411095",
		author: {
			name: "Bram Stoker",
			otherBooks: ["La joya de las siete estrellas", "La madriguera del gusano blanco"],
		},
		availability: true,
	},
	{
		title: "La llamada de Cthulhu",
		pages: 43,
		genre: "Terror",
		cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
		synopsis: "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
		year: 1928,
		ISBN: "978-1542461690",
		author: {
			name: "H.P. Lovecraft",
			otherBooks: ["El horror de Dunwich", "En las montañas de la locura"],
		},
		availability: false,
	},
];

jest.mock("../hooks/useLocalStorage.ts", () => ({
	__esModule: true,
	default: jest.fn((key) => {
		if (key === "readingList") {
			return [localStorageValue, jest.fn()];
		}
		return [null, jest.fn()];
	}),
}));

describe("useBooksInit", () => {
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return <Provider store={store}>{children}</Provider>;
	}

	it("Check load data from localStorage", async () => {
		//Mocking redux custom hook
		jest.mock("../hooks/useManageRedux", () => ({
			__esModule: true,
			default: jest.fn(() => ({
				setGenresAvailableReduxState: jest.fn(),
				setListReduxState: jest.fn(),
			})),
		}));

		// Mocking localStorage custom hook
		(useLocalStorage as jest.Mock).mockReturnValue([null, jest.fn()]);

		// Rendering hook to run test
		const { result } = renderHook(() => useBooksInit({ initialBooks: initialBooks }), {
			wrapper: Wrapper,
		});

		(useLocalStorage as jest.Mock).mockReturnValue([localStorageValue, jest.fn()]);

		const { booksToDisplay, genres, reduxListState } = result.current;

		waitFor(() => {
			expect(booksToDisplay).toEqual(booksToDisplayExpected);
			expect(genres).toEqual([
				{ genre: "All", available: 2 },
				{ genre: "Fantasía", available: 1 },
				{ genre: "Terror", available: 1 },
			]);
			expect(reduxListState).toEqual(localStorageValue);
		});
	});

	it("Re-set bookstodisplay when filtered", () => {
		jest.mock("../hooks/useManageRedux", () => ({
			__esModule: true,
			default: jest.fn(() => ({
				setGenresAvailableReduxState: jest.fn(),
				setListReduxState: jest.fn(),
			})),
		}));

		(useLocalStorage as jest.Mock).mockReturnValue([localStorageValue, jest.fn()]);

		const { result } = renderHook(() => useBooksInit({ initialBooks }), {
			wrapper: Wrapper,
		});

		(useLocalStorage as jest.Mock).mockReturnValue([localStorageValue, jest.fn()]);

		const { setFilteredBooks } = result.current;

		// Use act() to be able to interact with hook (or components) states
		act(() => {
			setFilteredBooks(newFilteredBooks);
		});

		const { booksToDisplay } = result.current;

		waitFor(() => {
			expect(booksToDisplay).toEqual(newFilteredBooksExpected);
		});
	});

	it("Check when localStorage is empty it load initialBooks", () => {
		//Mocking redux custom hook
		jest.mock("../hooks/useManageRedux", () => ({
			__esModule: true,
			default: jest.fn(() => ({
				setGenresAvailableReduxState: jest.fn(),
				setListReduxState: jest.fn(),
			})),
		}));

		(useLocalStorage as jest.Mock).mockReturnValue([null, jest.fn()]);

		const { result, rerender } = renderHook(() => useBooksInit({ initialBooks: initialBooks }), {
			wrapper: Wrapper,
		});

		const { booksToDisplay, genres, reduxListState, setBooksToDisplay } = result.current;

		expect(useLocalStorage).toHaveBeenCalledWith("readingList");
		expect(reduxListState).toEqual([]);
		expect(booksToDisplay).toEqual(initialBooks);

		expect(genres).toEqual([
			{ genre: "All", available: 4 },
			{ genre: "Fantasía", available: 2 },
			{ genre: "Terror", available: 2 },
		]);

		(useLocalStorage as jest.Mock).mockReturnValueOnce([null, jest.fn()]);
		rerender({ initialBooks });

		act(() => {
			setBooksToDisplay(initialBooks);
		});
		const { booksToDisplay: updatedBooksToDisplay } = result.current;

		expect(updatedBooksToDisplay).toEqual(initialBooks);
	});
});
function waitForNextUpdate() {
	throw new Error("Function not implemented.");
}
