export default function PagesFilter (props) {
  const { id, booksPages, onChange, value } = props
  return <input id={id} type='range' value={value} min={0} max={booksPages ? Math.max(...booksPages) : 100} onChange={event => onChange(event.target.value)} />
}
