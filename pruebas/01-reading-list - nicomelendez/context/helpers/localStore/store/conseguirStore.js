export function conseguirStore() {
    const storeString = localStorage.getItem("books");
    const store = JSON.parse(storeString);
    return store;
}