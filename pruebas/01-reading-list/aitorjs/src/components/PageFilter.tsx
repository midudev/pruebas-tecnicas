import { useBooksStore } from '../store/booksStore'

const PageFilter = () => {
  const { filters, filter } = useBooksStore()

  const filterPageBooks = (pages: number) => {
    filter('pages', pages)
  }

  return (
    <>
      <label htmlFor='pageFilter'>Filtrar por páginas</label>
      <input
        type='range'
        min='0'
        max='1400'
        step='200'
        id='pageFilter'
        name='pageFilter'
        onChange={(e) => filterPageBooks(Number(e.target.value))}
      />
      {filters.pages > 0 && <span>PAGES {filters.pages}</span>}
    </>
  )
}

export default PageFilter
