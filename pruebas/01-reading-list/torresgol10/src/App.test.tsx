import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Comprobamos que la aplicacion se renderiza correctamente
import App from "./App"; 

test("renders content", async () => {
    const user = userEvent.setup()
    const app = render(<App />)

    // Comprobamos que se renderiza el titulo del buscador
    app.getByText("Filtrar por:");

    //Optenemos el numero de libros que hay en la lista de pendientes solo dentros del main
    const numberBooksBeforeClick = screen.getAllByRole("article").filter(el => el.closest("main")).length;
    const titleFirtsBookBeforeClick = screen.getAllByRole("article")[0].querySelector("h2")?.textContent;

    // Hacemos click en el primer libro de la lista
    await user.click(screen.getAllByText("+")[0]);

    //Obtenemos el numero de libros que hay en la lista de pendientes solo dentros del main despues del click
    const numberBooksAfterClick = screen.getAllByRole("article").filter(el => el.closest("main")).length;
    const titleFirtsBookAfterClick = screen.getAllByRole("article")[0].querySelector("h2")?.textContent;

    // Comprobamos que el primer numero de libros es mayor que el segundo
    expect(numberBooksBeforeClick).toBeGreaterThan(numberBooksAfterClick);

    // Comprobamos que los titulos del primer articulo son distintos
    expect(titleFirtsBookBeforeClick).not.toBeNull()
    expect(titleFirtsBookAfterClick).not.toBeNull()
    expect(titleFirtsBookBeforeClick).not.toBe(titleFirtsBookAfterClick);
  
    // Comprobamos que se ha añadido a la lista de leidos
    app.getByText("1 Libros leidos"); 
    const titleBookListRead = screen.getAllByRole("article").filter(el => el.closest("aside"))[0].querySelector("h2")?.textContent;

    expect(titleFirtsBookBeforeClick).not.toBe(titleBookListRead);

})