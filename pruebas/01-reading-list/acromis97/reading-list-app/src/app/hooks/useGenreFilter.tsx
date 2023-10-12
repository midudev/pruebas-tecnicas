'use client'

import { useContext } from 'react'
import { GenreFilterContext } from '../context/genreFilter'

export const useGenreFilter = () => {
    const context = useContext(GenreFilterContext)

    if (!context) throw new Error('useGenreFilter must be used within a GenreFilter')

    return context
}