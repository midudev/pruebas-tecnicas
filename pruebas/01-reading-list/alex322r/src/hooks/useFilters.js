import { useGlobalContext } from "../context/globalContext"


export default function useFilters() {

    const { filters, changeFilters } = useGlobalContext()

    const filterLibrary = (library) => {
        return library.filter(book => {
            return filters.category === 'all' ||
                book.genre === filters.category
        })
    }

    return { filters, changeFilters, filterLibrary }

}