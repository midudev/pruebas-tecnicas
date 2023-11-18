import { useStore } from '../store/store'

export const PageFilter = () => {
    const { filterPageCount, setFilterPageCount, maxPageBooksCount } = useStore(state => state)
    const steps = 5
    const stepValue = (maxPageBooksCount / steps) / 10 * 10
    return (
        <div>
            Filtrar por numero de paginas: Menos de {filterPageCount} paginas
            <input
                style={{ width: '80%', height: '25px' }}
                type='range'
                min={stepValue}
                step={stepValue}
                max={maxPageBooksCount}
                value={filterPageCount}
                onChange={(e) => setFilterPageCount(Number(e.target.value))}
            />
        </div>
    )
}
