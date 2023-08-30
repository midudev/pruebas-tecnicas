import jsonBooks from '../../../../books.json'

import {removeAccents} from "$lib/utils.js"

export function getBooks(){
    const library = jsonBooks.library ?? []
    const books   = library.map(book => {
        return book.book
    }) 

    return books
}

export function getCatalogs(books){
    let maxPages = 0
    let gendersList = books.map((book) => {
        maxPages = book.pages > maxPages ? book.pages : maxPages
        return book.genre
    })
    const genders = [...new Set(gendersList)]

    return {
        maxPages,
        genders
    }
}

export function getOneBook(isbn){
    const   books = getBooks()
    const   book = books.find((book) => book.ISBN== isbn)
    return  book
}

export function filterBooks( booksForFilter, filters ){
    let booksTmp = booksForFilter
    
    //Filtor por paginas
    booksTmp = booksTmp.filter((book)=>{ return book.pages <= filters.pages })


    // Filtro por genero
    if(filters.gender != '') {
        booksTmp = booksTmp.filter((book)=>{ 
            return book.genre == filters.gender 
        })
    }

    // Filtro por Texto
    if(filters.search.trim() != '') {
        let pattern = new RegExp(removeAccents(filters.search), 'i');
        booksTmp = booksTmp.filter(book =>{
            return pattern.test(removeAccents(book.title)) || pattern.test(removeAccents(book.synopsis))
        });
    }

    return booksTmp
}