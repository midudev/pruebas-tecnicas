import { useState, useCallback } from 'react'
import { useStore } from '../store/store'
import { debounce } from 'lodash'

export const NameFilter = () => {
    const { filterName, setFilterName } = useStore(state => state)
    const [inputValue, setInputValue] = useState(filterName)

    const debouncedSetFilterName = useCallback(debounce(setFilterName, 300), [])

    const handleInputChange = (value: string) => {
        setInputValue(value)
        debouncedSetFilterName(value)
    }

    const handleClearFilter = () => {
        setInputValue('')
        setFilterName('')
    }

    return (
        <div className='mb-4'>
            <label>
                Filtro por Nombre:
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className='ml-2 text-zinc-950'
                />
                <button
                    className={`ml-2 rounded p-1 pl-2 pr-2 ${inputValue === '' ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-900 cursor-pointer'}`}
                    onClick={handleClearFilter}
                    disabled={inputValue === ''}
                >
                    Borrar
                </button>
            </label>
        </div>
    )
}
