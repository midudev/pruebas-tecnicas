import { describe, it, expect } from "vitest"
import { renderHook } from "@testing-library/react"
import { FiltersContext, FiltersProvider } from "../src/context/filters.jsx"
import { ReadingListContext, ReadingListProvider } from "../src/context/readingList.jsx"

import { useFilters } from '../src/hooks/useFilters.jsx'

/*
describe('useFilters', () => {
    it('should return a default search term and original items', () => { 
        const items = [{ title: 'Star Wars' }];

        const { result } = renderHook(() => useFilters(items));

        expect(result.current.searchTerm).toThrow('useReadingList must be used within a ReadingListProvider');
        expect(result.current.searchTerm).toBe('');
        expect(result.current.filteredItems).toEqual(items);
    });
    
})
*/

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

