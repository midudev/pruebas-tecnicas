import { useFilters } from '../hooks/useFilters'

type Genre = {
    label: string,
    active: boolean
}

const genres: Genre[] = [
  { label: 'Fantasía', active: false },
  { label: 'Ciencia ficción', active: false },
  { label: 'Zombies', active: false },
  { label: 'Terror', active: false }
]

export function Filters () {
  const { filters, setFilters } = useFilters()

  const handleClick = (genre: Genre, index: number) => {
    const newFilter = genre.label

    if (filters.genre === newFilter) {
      genres[index].active = false
      setFilters({ genre: 'all' })
      return
    }

    genres.forEach((genre, i) => {
      if (i === index) {
        genre.active = true
      } else {
        genre.active = false
      }
    })

    setFilters({ genre: newFilter })
  }

  return (
    <ul className='w-1/2 mx-auto mb-5 text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex'>
      {genres.map((genre, index) => {
        const leftRadius = (index === 0) ? 'rounded-l-lg' : ''
        const rightRadius = (index === genres.length - 1) ? 'rounded-r-lg' : ''
        const activeClass = genre.active ? 'bg-[#121421] text-white' : 'hover:text-gray-700 hover:bg-gray-50'

        return (
          <li className='w-full' key={index}>
            <button onClick={() => handleClick(genre, index)} id={genre.label} className={`inline-block w-full p-4 ${leftRadius} ${rightRadius} ${activeClass}`}>{genre.label}</button>
          </li>
        )
      })}
    </ul>
  )
}
