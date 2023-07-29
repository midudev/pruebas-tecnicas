import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from "./App"; 

describe("Comprobamos las funcionalidades principales de la aplicacion", async () => {
    const app = render(<App />)
    const user = userEvent.setup()

    it('Comprobamos que se renderiza el titulo del buscador', () =>{
        app.getByText("Filtrar por:");
    })

    //Optenemos el numero de libros que hay en la lista de pendientes solo dentros del main
    const numberBooksBeforeClick = screen.getAllByRole("article").filter(el => el.closest("main")).length;
    const titleFirtsBookBeforeClick = screen.getAllByRole("article")[0].querySelector("h2")?.textContent;

    //Hacemos click en el primer libro de la lista y comprobamos el numero de libros
    await user.click(screen.getAllByText("+")[0]);

    //Obtenemos el numero de libros que hay en la lista de pendientes solo dentros del main despues del click
    const numberBooksAfterClick = screen.getAllByRole("article").filter(el => el.closest("main")).length;
    const titleFirtsBookAfterClick = screen.getAllByRole("article")[0].querySelector("h2")?.textContent;

    it("Comprobamos que el primer numero de libros es mayor que el segundo", () => {
        expect(numberBooksBeforeClick).toBeGreaterThan(numberBooksAfterClick);
    })

    it('Comprobamos que los titulos del primer articulo son distintos', () => {
        expect(titleFirtsBookBeforeClick).not.toBeNull()
        expect(titleFirtsBookAfterClick).not.toBeNull()
        expect(titleFirtsBookBeforeClick).not.toBe(titleFirtsBookAfterClick);    
    })
  
    
    it('Comprobamos que se ha añadido a la lista de leidos', () => {
        app.getByText("1 Libros leídos"); 
    })

    const numberBooksAside = screen.getAllByRole("article").filter(el => el.closest("aside")).length;

    it('Comparamos que algun libro en la lista de leidos' , () => {
        expect(numberBooksAside).toBeGreaterThan(0);
    })
})