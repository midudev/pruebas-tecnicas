'use client'

import { useContext } from 'react'
import { ReadingListContext } from '../context/readingList'

export const useReadingList = () => {
    const context = useContext(ReadingListContext)

    if (!context) throw new Error('useReadingList must be used within a ReadingListProvider')

    return context
}