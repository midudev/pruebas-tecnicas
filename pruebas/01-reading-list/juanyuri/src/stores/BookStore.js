import { defineStore } from 'pinia';
import { ref, watch } from 'vue'
import { useBooks } from '@/composables/books.js'

export const useStore = defineStore('storeBooks', () => {
    // Define the state
    const { books } = useBooks()
    const catalogue = ref(books)
    const readlist = ref([])

    // Load the readlist from LocalStorage when the store is initialized
    const savedReadList = localStorage.getItem("readlist")
    if(savedReadList){
        console.log("Found readlist in localStorage")
        readlist.value = JSON.parse(savedReadList)
        /* los que están en books, mas no en readlist */
        catalogue.value = books.value.filter(book => !readlist.value.some(e => e.title === book.title))
    }

    // Define the actions
    const addToReadList = (item) => {
        // Remove from catalogue
        catalogue.value = catalogue.value.filter(e => e.title !== item.title)

        // Check if book is not already in ReadList
        const isInReadList = readlist.value.some(e => e.title === item.title)
        if (!isInReadList)
            readlist.value.push(item)
    }

    const addToCatalogue = (item) => {
        // Remove from ReadList
        readlist.value = readlist.value.filter(e => e.title !== item.title)

        // Check if book is not already in Catalogue
        const isInCatalogue = catalogue.value.some(e => e.title === item.title)
        if (!isInCatalogue)
            catalogue.value.push(item)
    }

    // Save the readlist to LocalStorage whenever it changes
    watch(readlist, (newReadList) => {
        console.log("Changes in readlist")
        localStorage.setItem("readlist", JSON.stringify(newReadList))
    }, { deep: true }) // Add the deep option to watch for changes within the array

    // Return the state and actions
    return { books, catalogue, readlist, addToReadList, addToCatalogue }
})
