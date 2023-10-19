import { defineStore } from 'pinia';
import { ref, watch, onMounted } from 'vue'
import { useBooks } from '@/composables/books.js'

export const useStore = defineStore('storeBooks', () => {
    // Define the state
    const { books } = useBooks()
    const books_office = [...books.value]
    const catalogue = ref(books)
    const readlist = ref([])
    const STORAGE_KEY = 'readlist'


    // Load the readlist from LocalStorage when the store is initialized
    const savedReadList = localStorage.getItem(STORAGE_KEY)
    if (savedReadList) {
        readlist.value = JSON.parse(savedReadList)

        /* los que están en books, pero no en readlist */
        const catalogueArray = []
        for (let book of books.value) {
            /* Filtra los libros que no están en la readList y los agrega al catálogo */
            if (!readlist.value.some(e => e.title === book.title))
                catalogueArray.push(book)
        }
        catalogue.value = catalogueArray

    }

    // Define the actions
    const addToReadList = (item) => {
        // Remove from catalogue
        catalogue.value = catalogue.value.filter(e => e.title !== item.title)

        // Check if book is not already in ReadList
        const isInReadList = readlist.value.some(e => e.title === item.title)
        if (!isInReadList) {
            readlist.value.push(item)
        }

    }

    const removeFromReadList = (item) => {
        // Remove from ReadList
        readlist.value = readlist.value.filter(e => e.title !== item.title)

        // Check if book is not already in Catalogue
        const isInCatalogue = catalogue.value.some(e => e.title === item.title)
        if (!isInCatalogue) {
            catalogue.value.push(item)
        }
        console.groupEnd()
    }

    // Save the readlist to LocalStorage whenever it changes
    watch(readlist, (newReadList) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newReadList))
    }, { deep: true }) // Add the deep option to watch for changes within the array



    // Listen for changes in LocalStorage
    onMounted(() => {
        window.addEventListener('storage', (event) => {
            if (event.key == STORAGE_KEY) {
                let newReadList = JSON.parse(event.newValue)
                readlist.value = newReadList

                const catalogueArray = []
                for (let book of books_office) {
                    /* Filtra los libros que no están en la readList y los agrega al catálogo */
                    if (!readlist.value.some(e => e.title === book.title))
                        catalogueArray.push(book)
                }
                catalogue.value = catalogueArray
            }
        })
    })

    // Return the state and actions
    return { catalogue, readlist, addToReadList, removeFromReadList }
})
