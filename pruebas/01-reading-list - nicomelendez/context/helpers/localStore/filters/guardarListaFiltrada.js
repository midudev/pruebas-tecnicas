export function guardarListaFiltrada(booksFilters) {
    localStorage.setItem("booksFilters", JSON.stringify(booksFilters));
}