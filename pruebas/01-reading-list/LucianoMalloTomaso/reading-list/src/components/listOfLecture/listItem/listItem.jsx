import './listItem.css'
export default function ListItem ({ cover, title, pages, removeFromList }) {
  return (
    <li data-testid='book-added'>
      <img
        src={cover}
        alt={title}
      />
      <div>
        <strong data-testid='book-added-title'>{title}</strong>
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
