export default function GenreFilter (props) {
  const { genres } = props
  return (
    <select>
      <option>Todos</option>
      {genres &&
        genres.map((genre, index) => {
          return <option key={index}>{genre}</option>
        })}
    </select>
  )
}
