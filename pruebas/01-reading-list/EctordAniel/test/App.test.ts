import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import App from "../src/App.svelte";

describe("APP", () => {
  afterEach(cleanup);

  it("Se renderiza correctamente", () => {
    render(App);
  });

  it("La lista de lectura al inicio no debe mostrarse", () => {
    const { queryByTestId } = render(App);

    const readingList = queryByTestId("reading-list");

    expect(readingList).toBeNull();
  });

  it("Se muestra la lista de libros disponibles", () => {
    const { getByTestId } = render(App);

    const booksList = getByTestId("available-list");

    expect(booksList.childNodes.length).toBeGreaterThan(0);
  });

  it("Al hacer click en un libro debe mostrarse el modal lateral", async () => {
    const { getByTestId } = render(App);

    const booksList = getByTestId("available-list");

    const book = booksList.firstElementChild!.getElementsByTagName("button")[0];

    await userEvent.click(book);

    const dialogOpened =
      getByTestId("left-modal").attributes.getNamedItem("open")?.name;

    expect(dialogOpened).toBeDefined();
  });

  it("Agregar un libro a la lista de lectura", async () => {
    const { getByTestId, getByTitle, queryByTestId } = render(App);

    const booksList = getByTestId("available-list");

    const book = booksList.firstElementChild!;

    const bookTitle = book.getElementsByTagName("h4")[0].innerText;

    const bookButton = book.getElementsByTagName("button")[0];

    await userEvent.click(bookButton);

    const dialog = getByTestId("left-modal");

    const button = dialog.getElementsByClassName("primary")[0];

    await userEvent.click(button);

    const dialogOpened =
      getByTitle(bookTitle).attributes.getNamedItem("open")?.name;

    expect(dialogOpened).toBeUndefined();

    const readingList = queryByTestId("reading-list");

    expect(readingList).not.toBeNull();
  });
});
