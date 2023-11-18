export function guardarStore(store) {
    localStorage.setItem("books", JSON.stringify(store));
}