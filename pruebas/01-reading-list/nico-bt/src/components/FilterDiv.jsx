export default function FilterDiv({ filter, setFilter, allGenres, maxPages, minPages }) {
  function handleClickLowest() {
    setFilter((prevFilter) => {
      return { ...prevFilter, sortByPages: "lowest" }
    })
  }

  function handleClickHighest() {
    setFilter((prevFilter) => {
      return { ...prevFilter, sortByPages: "highest" }
    })
  }

  function handleChangeGenre(e) {
    setFilter((prevFilter) => {
      return { ...prevFilter, genre: e.target.value }
    })
  }

  function handleChangeMaxPages(e) {
    setFilter((prevFilter) => {
      return { ...prevFilter, maxPages: e.target.value }
    })
  }

  return (
    <div className="filters-container">
      <div className="filters-btns-container">
        <span>Sort by page count: </span>
        <button onClick={handleClickLowest}>Lowest</button>
        <button onClick={handleClickHighest}>Highest</button>
      </div>

      <div>
        <label htmlFor="category-select">Category: </label>

        <select id="category-select" value={filter.genre} onChange={handleChangeGenre}>
          <option value="" disabled>
            -- Choose an option --
          </option>
          {allGenres.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="maxPages">Maximum Pages</label>
        <input
          id="maxPage"
          type="range"
          max={maxPages}
          min={minPages}
          value={filter.maxPages}
          onChange={handleChangeMaxPages}
        />
        <span>{filter.maxPages}</span>
      </div>
    </div>
  )
}
