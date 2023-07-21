export function addBook(book) {
    const booksCurrentlist = getBooksCurrentlist()

    if (!booksCurrentlist) {
        localStorage.setItem('bookList', JSON.stringify([book]))
    }
    if (booksCurrentlist) {
        localStorage.setItem(
            'bookList',
            JSON.stringify([...booksCurrentlist, book])
        )
    }
    window.dispatchEvent(new Event('storage'))
}

export function setBooks(books) {
    const localStorage = window.localStorage
    localStorage.setItem('bookList', JSON.stringify(books))
    window.dispatchEvent(new Event('storage'))
}

export function deleteBook(book) {
    const booksCurrentlist = getBooksCurrentlist()
    const filtered = booksCurrentlist.filter(
        (bookSelected) => bookSelected.book.ISBN !== book.book.ISBN
    )

    localStorage.setItem('bookList', JSON.stringify(filtered))
    window.dispatchEvent(new Event('storage'))
}

export function getBooksCurrentlist() {
    const localStorage = window.localStorage
    const bookslistString = localStorage.getItem('bookList')
    const booksCurrentlist = bookslistString ? JSON.parse(bookslistString) : []
    return booksCurrentlist
}
