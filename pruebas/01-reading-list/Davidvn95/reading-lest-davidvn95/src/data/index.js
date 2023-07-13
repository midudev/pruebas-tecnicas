import {library} from './books.json'

export default {
    list: () => library,
    getById: (id) => library.find(book => book.id === id),
}