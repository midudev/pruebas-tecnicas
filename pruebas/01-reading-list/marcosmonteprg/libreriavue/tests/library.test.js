import { setActivePinia, createPinia } from 'pinia'
import { library } from '../src/store/library.js'

describe('library Store - Testing ', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Pruebas Acciones y Getters', () => {
    const store = library()
    
    // Inicializo el Store con la accion "initialize"
    let books = [ {"title":"El Señor de los Anillos","pages":1200,"genre":"Fantasía","ISBN":"978-0618640157","inReadingList":false,"priority":""},
                  {"title":"Juego de Tronos","pages":694 ,"genre":"Fantasía","ISBN":"978-0553103540","inReadingList":false,"priority":""},
                  {"title":"Harry Potter","pages":223 ,"genre":"Fantasía","ISBN":"978-0747532699","inReadingList":false,"priority":""},
                  {"title":"1984","pages":328 ,"genre":"Ciencia ficción","ISBN":"978-0451524935","inReadingList":false,"priority":""}]
    store.initialize(books)
    
    // Verifico Cantidad de libros en "Lista de Libros" y "Reading List"
    expect(store.qBookList).toBe(4)
    expect(store.qBookListAvailable).toBe(4)    
    expect(store.qReadingList).toBe(0)
   

    // Verifico Maximo de Paginas y Minimo
    expect(store.maxPages).toBe(1200)
    expect(store.minPages).toBe(223)


    // Verifico Contenido BookList (Objeto Completo)
    expect(store.bookList).toContainEqual(
      expect.objectContaining({ title: "Harry Potter",
                                pages:223, 
                                genre:"Fantasía",
                                ISBN: "978-0747532699",
                                inReadingList:false,
                                priority:"" })
    )


    // Paso un libro de la lista de "Lista de Libros" a "Reading List"
    store.changeBookState("978-0747532699",'1-Alta') 
    expect(store.qBookList).toBe(4)        
    expect(store.qBookListAvailable).toBe(3)
    expect(store.qReadingList).toBe(1)

    
    // Verifico gettter BookList (Debe estar el libro anterior)
    expect(store.readingList).toContainEqual(
      expect.objectContaining({ ISBN: "978-0747532699",
                                inReadingList:true,
                                priority:"1-Alta" })
    )

    
    // Paso un libro de la lista de "Reading List" a"Lista de Libros" 
    store.changeBookState("978-0747532699") 
    expect(store.qBookList).toBe(4)        
    expect(store.qBookListAvailable).toBe(4)
    expect(store.qReadingList).toBe(0)


    //Aplico filtro Genero "Fantasia"
    store.filters.genre="Fantasía"
    expect(store.qBookList).toBe(3)        
    expect(store.qBookListAvailable).toBe(3)
    expect(store.qReadingList).toBe(0)


    //Aplico filtro de Paginas
    store.filters.pages = 1000
    expect(store.qBookList).toBe(2)        
    expect(store.qBookListAvailable).toBe(2)
    expect(store.qReadingList).toBe(0)


    //Aplico filtro Titulo
    store.filters.title="Harry Potter"
    expect(store.qBookList).toBe(1)    
    expect(store.qBookListAvailable).toBe(1)
    expect(store.qReadingList).toBe(0)
        

    //Actualizacion Store desde Storage
    let storage =JSON.stringify({"books":[{"title":"Juego de Tronos","pages":694,"genre":"Fantasía","ISBN":"978-0553103540","inReadingList":false,"priority":""}],
                                 "genres":["Todos","Fantasía","Ciencia ficción","Zombies","Terror"],
                                 "filters":{"title":"","genre":"Todos","pages":1000}})
    store.updateFromLocalStorage(storage)
    expect(store.qBookList).toBe(1)    
    expect(store.qBookListAvailable).toBe(1)
    expect(store.qReadingList).toBe(0)
    expect(store.bookList).toContainEqual( expect.objectContaining({ title: "Juego de Tronos" }))

  })
})