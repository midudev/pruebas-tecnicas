import useGenres from '../hooks/useGenres'
import usePages from '../hooks/usePages'
export default function Filters () {
  const { genres } = useGenres()
  const { pages } = usePages()

  const handleRangeChange = (e) => {
    console.log(e.target.value)
  }
  const handleSelectChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
        <form onSubmit={e => e.preventDefault()} className=' h-16'>
            <label htmlFor="">Filter by pages</label>

            <select name="Pages select" defaultValue={'DEFAULT'} onChange={handleRangeChange}>
                <option value="DEFAULT" disabled>Select a range of pages</option>
                {pages && pages.map((page, index) => {
                  if (index % 2 === 0) {
                    const nextPage = pages[index + 1]
                    const pageRange = nextPage !== undefined ? `${page} - ${nextPage}` : `${page}`
                    return (
                        <option key={pageRange} value={pageRange}>
                            {pageRange}
                        </option>
                    )
                  }
                  return null
                })}
            </select>

            <label htmlFor="">Filter by genre</label>
            <select name="Genre Select" defaultValue={'DEFAULT'} onChange={handleSelectChange} >
                <option value="DEFAULT" disabled>Select a genre</option>
                {genres && genres.map(genre => <option key={`${genre}`} value={`${genre}`}>{genre}</option>)}
            </select>
        </form>
    </>
  )
}
