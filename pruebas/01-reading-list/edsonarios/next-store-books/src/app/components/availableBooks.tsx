import { Library } from '@/types/library'
import { useStore } from '../store/store'

export const AvailableBooks = () => {
    const { library, setLibrary, selectedBooks, setSelectedBooks, filteredBooks, setFilteredBooks } = useStore(state => state)

    const selectBook = (selectedBook: Library) => {
        setSelectedBooks([...selectedBooks, selectedBook])
        setLibrary(library.filter(book => book !== selectedBook))
        setFilteredBooks(library.filter(book => book !== selectedBook))
    }

    if (filteredBooks.length === 0) {
        return <h2>No hay mas libros disponibles para este Genero</h2>
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {filteredBooks.map((item, index) => (
                <div key={index} className='m-4 cursor-pointer' onClick={() => selectBook(item)}>
                    <h2>{item.book.title}</h2>
                    <img
                        className='w-64 h-96 rounded-xl'
                        src={item.book.cover} alt={item.book.title}
                    />
                </div>
            ))}
        </div>
    )
}
