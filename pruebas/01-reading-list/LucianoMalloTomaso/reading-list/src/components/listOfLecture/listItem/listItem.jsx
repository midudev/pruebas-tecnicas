import './listItem.css'
export default function ListItem ({ cover, title, pages, removeFromList }) {
  return (
    <li>
      <img
        src={cover}
        alt={title}
      />
      <div>
        <strong>{title}</strong>
        <p> {pages} Pages</p>
      </div>
      <footer>
        <button onClick={removeFromList}>
          Remove
        </button>
      </footer>
    </li>
  )
}
