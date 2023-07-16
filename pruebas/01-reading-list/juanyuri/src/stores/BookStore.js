import { defineStore } from 'pinia';
import { ref } from 'vue'
import { useBooks } from '@/composables/books.js'

export const useStore = defineStore('storeBooks', () => {
    // Define the state
    const { books } = useBooks()
    const catalogue = ref(books)
    const readlist = ref([])

    // Define the actions
    const addToReadList = (item) => {
        // Remove from catalogue
        catalogue.value = catalogue.value.filter(e => e.title !== item.title)

        // Check if book not already in ReadList
        const isInReadList = readlist.value.some(e => e.title === item.title)
        if (!isInReadList)
            readlist.value.push(item)
    }


    const addToCatalogue = (item) => {
        // Remove from ReadList
        readlist.value = readlist.value.filter(e => e.title !== item.title)

        // Check if book not already in Catalogue
        const isInCatalogue = catalogue.value.some(e => e.title === item.title)
        if (!isInCatalogue)
            catalogue.value.push(item)

    }

    // Return the state and actions
    return { books, catalogue, readlist, addToReadList, addToCatalogue }
})
