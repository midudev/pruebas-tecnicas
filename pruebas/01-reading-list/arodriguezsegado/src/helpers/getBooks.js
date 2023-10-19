export const getBooks = async() => {
    const response = await fetch('books.json');
    const data = await response.json();
    return data.library.map(element => element.book)
}