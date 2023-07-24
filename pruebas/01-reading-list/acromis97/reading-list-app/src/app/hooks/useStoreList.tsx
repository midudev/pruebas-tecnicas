'use client'

import { useContext } from 'react'
import { StoreListContext } from '../context/storeList'

export const useStoreList = () => {
    const context = useContext(StoreListContext)

    if (!context) throw new Error('useStoreList must be used within a StoreProvider');

    return context
}