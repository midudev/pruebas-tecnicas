export function conseguirListaFiltrada() {
    const booksFiltersString = localStorage.getItem("booksFilters");
    const booksFilters = JSON.parse(booksFiltersString);
    return booksFilters;
}