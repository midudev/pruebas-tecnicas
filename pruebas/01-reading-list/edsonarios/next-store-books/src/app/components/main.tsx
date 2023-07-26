'use client'
import { useEffect } from 'react'
import { LibraryData } from '@/types/library'
import data from '../../../../../books.json'
import { SelectedBooks } from './selectedBooks'
import { AvailableBooks } from './availableBooks'
import { GenreFilter } from './genreFilter'
import { useStore } from '../store/store'
import { useSyncedLocalStorage } from '../hooks/useSyncedLocalStorage'

export const Main = () => {
    const libraryData = data as LibraryData
    const { library, setLibrary, selectedBooks, setListGenres, setFilteredBooks, filteredBooks, setSelectedGenre } = useStore(state => state)

    useSyncedLocalStorage()

    useEffect(() => {
        if (library.length === 0) {
            setLibrary(libraryData.library.map(book => book))
            setFilteredBooks(libraryData.library.map(book => book))

            const allGenres = libraryData.library.map(book => book.book.genre)
            const uniqueGenres = Array.from(new Set(allGenres))
            setListGenres(['Todos', ...uniqueGenres])

            setSelectedGenre('Todos')
        }
    }, [])

    return (
        <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${selectedBooks.length > 0 ? 'pr-72' : ''}`}>
            <div className='flex flex-col items-center'>
                <h1>Lista de Libros</h1>
                <h2>Libros Disponibles: {filteredBooks.length}</h2>
                <GenreFilter />
            </div>

            <AvailableBooks />
            <SelectedBooks />
        </div>
    )
}
