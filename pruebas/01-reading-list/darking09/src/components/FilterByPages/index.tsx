import { FilterByPagesProps } from '@typesFiles/props/filterByPages'
import useFilterByPages from './useFilterByPages'

export default function FilterByPages({ maxPage, minPage } : FilterByPagesProps) {
  const { currentPages, onChange, onMouseUp } = useFilterByPages(maxPage)

  return (
    <div className="col-span-1 row-span-1">
      <label className="label">
        <span className="label-text">Filtro por páginas ({currentPages} Pág.)</span>
      </label>
      <input className="range range-xs" type='range' id="filterByPages" min={minPage} max={maxPage} value={currentPages} onChange={onChange} onMouseUp={onMouseUp} />
    </div>
  )
}
