# Sito's Library

@0.13.5

[Public Demo](https://sitos-library.web.app/)

[Source Code](https://github.com/SitoNumbis/pruebas-tecnicas/tree/main/pruebas/01-reading-list/SitoNumbis)

_Note: Buttons will not have a cursor pointer since if there is a hover it is not necessary to put the cursor pointer, but the default one, since in history only the links have been the ones that have had the cursor pointer_

[Ver video](https://www.youtube.com/watch?v=AnTNN_QlFvQ)
[Ver artículo](https://adamsilver.io/blog/buttons-shouldnt-have-a-hand-cursor-part-2/)

## How does it work?

The application works with a simple hierarchy:

LibraryState => App => Other Components

Where the LibraryState context manipulates everything that has to do with books, the user's reading list, what filter is being used, number of books available etc.

Also the app uses a context for the filters, FiltersState, to work with the filters (title, pages and genres)

### LibraryState structure

```

// default value

{
    books: {},
    genres: [],
    readingList: new Map(), // Map because it can be iterable and has size attribute 🙂
    available: 0, // global state to quick access to available books
    showing: 0, // global state to quick access to the showing books
}

```

### LibraryState operations

#### toggle-to-reading-list

To move or remove a book from the reading list

```
    setLibraryState({type:"toggle-to-reading-list", id: bookISBN})
```

_Note: Will increment or decrement the 'available' counter, add or remove from the ISBN Map of the books in the reading list, and update the localStorage reading list_

#### init-books

To initialize the books from Data (API, JSON, anything)

```
    setLibraryState({type:"init-books", books: bookList})
```

_Note: Will initialize the books set and the genres set, also will set as default 'seeing' as 'all' to see all available books_

#### init-reading-list

To initialize the reading list from localStorage

```
    setLibraryState({type:"init-reading-list", stringReadingList: readingListFromLocalStorage})
```

_Note: Will initialize the reading list from localStorage, will validate if the giving value is an array and will create the Map, also will update the 'available' counter_

#### set-showing

Updates showing books in reading list or stock

```
    setLibraryState({type:"set-showing",, showing: newShowingValue})
```

### FiltersState structure

```

// default value

{
    pages: 0, // current pages filter
    genre: "", // current genre filter
    title: "", // current title filter
}

```

#### reset

To clean all filters (set filters to default value)

```
    setFiltersState({type:"reset"})
```

#### set-filter

To update one the filters (title, genre, pages)

```
    setFiltersState({type:"set-filter",filter: filterName, value: newValue})
```
