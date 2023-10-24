import { defineStore } from 'pinia'

export const library = defineStore('library', {
  state: () => ({
    books: [],    
    genres:[] ,
    filters: { title: "", genre: "Todos", pages: 0  }
  }),
  actions: {
    initialize(data) {    
      this.books = data            
      this.genres = [...new Set(data.map((x) => x.genre))]     
      this.genres.unshift("Todos")
      this.filters.pages = Math.max(...data.map(x => x.pages))      
    },
    updateFromLocalStorage(data) {
      this.$state = JSON.parse(data)
    },
    changeBookState(isbn,priority="") {
      let index = this.books.findIndex(x => x.ISBN == isbn)
      this.books[index].inReadingList = !this.books[index].inReadingList
      this.books[index].priority = priority
    },
  },
  getters: {    
    bookList: (state) => state.books.filter((x) => 
    { return (state.filters.genre == "Todos" ? true : x.genre == state.filters.genre) &&
              x.pages <= state.filters.pages &&
              x.title.toLowerCase().indexOf(state.filters.title.toLowerCase()) > -1
    }).sort((a,b) => (a.pages > b.pages) ? 1 : (a.pages < b.pages) ? -1 : 0),

    
    readingList: (state) => state.books.filter((x) => x.inReadingList)
                            .sort((a,b) => (a.priority > b.priority) ? 1 : (a.priority < b.priority) ? -1 : 0),    
    
    qBookList: (state) => state.bookList.length,    
    qBookListAvailable: (state) => state.bookList.filter((x) => !x.inReadingList).length,    
    qReadingList: (state) => state.readingList.length,   
    maxPages: (state) => Math.max(...state.books.map(x => x.pages)),
    minPages: (state) => Math.min(...state.books.map(x => x.pages))
  },
  persist: true,
}
)