export default function GenreFilter (props) {
  const { id, className, genres } = props
  return (
    <select id={id} className={className}>
      <option>Todos</option>
      {genres &&
        genres.map((genre, index) => {
          return <option key={index}>{genre}</option>
        })}
    </select>
  )
}
