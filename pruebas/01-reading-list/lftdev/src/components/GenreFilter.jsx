export default function GenreFilter (props) {
  const { id, className, genres, onItemClick } = props
  return (
    <select id={id} className={className} onChange={event => onItemClick(event.target.value)}>
      <option value='Todos'>Todos</option>
      {genres &&
        genres.map((genre, index) => {
          return <option key={index} value={genre}>{genre}</option>
        })}
    </select>
  )
}
