import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import BooksDisponibility from "./BooksDisponibility";
import { reducer } from "../redux/reducer";
const store = createStore(reducer, applyMiddleware(thunk));

describe("BooksDisponibility", () => {
	test("muestra el título 'Libros Disponibles'", () => {
		render(
			<Provider store={store}>
				<BooksDisponibility
					books={[]}
				/>
			</Provider>
		);

		const element = screen.getByText(/Libros Disponibles/i);
		expect(element).toBeInTheDocument();
	});

	test("muestra Libros Disponibles", () => {
		render(
			<Provider store={store}>
				<BooksDisponibility
					books={[
						"El Señor de los Anillos",
						"Juego de Tronos",
						"Harry Potter y la piedra filosofal",
					]}
				/>
			</Provider>
		);

		const librosPrueba = [
			"El Señor de los Anillos",
			"Juego de Tronos",
			"Harry Potter y la piedra filosofal",
		];
		librosPrueba.forEach((libro) => {
			const libroElement = screen.getByText(libro);
			expect(libroElement).toBeInTheDocument();
		});
	});
});
