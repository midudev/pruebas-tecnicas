import { describe, it, expect } from "vitest"
import { renderHook } from "@testing-library/react"
import { FiltersContext, FiltersProvider } from "../src/context/filters.jsx"
import { ReadingListContext, ReadingListProvider } from "../src/context/readingList.jsx"

import { useFilters } from '../src/hooks/useFilters.jsx'

describe('<FiltersProvider />' , () => {
    it('should render children', () => {
        const wrapper = ({ children }) => (
            <ReadingListProvider>
                <FiltersProvider>{children}</FiltersProvider>
            </ReadingListProvider>
        )
        const { result } = renderHook(() => useFilters(), { wrapper })
        expect(result.current.filters).toBeDefined()
        expect(result.current.setFilters).toBeDefined()
        expect(result.current.filterLibrary).toBeDefined()
    })
})

describe('useFilters', () => {
    it('should return a default search term and original items', () => { 
        const wrapper = ({ children }) => (
            <ReadingListProvider>
                <FiltersProvider>{children}</FiltersProvider>
            </ReadingListProvider>
        )
        const { result } = renderHook(() => useFilters(), { wrapper })
        expect(result.current.filters).toBeDefined()
        expect(result.current.setFilters).toBeDefined()
        expect(result.current.filterLibrary).toBeDefined()

        expect(result.current.filters).toEqual({
            page: 1,
            pageSize: 12,        
            genre:'all',
            author:'all',
            year:1800,
            type:'all',
            totalFilterd:0,
            itemsFileterd:[],
            totalPages:0,
            error:null,
            search:'',
            onlyAvailable:false
        })

    })
    
})


describe('ReadingList' , () => {
    it('should render children', () => {
        const wrapper = ({ children }) => (
            <ReadingListProvider>
                <FiltersProvider>{children}</FiltersProvider>
            </ReadingListProvider>
        )
        const { result } = renderHook(() => useFilters(), { wrapper })
        expect(result.current.filters).toBeDefined()
        expect(result.current.setFilters).toBeDefined()
        expect(result.current.filterLibrary).toBeDefined()
    })
})
