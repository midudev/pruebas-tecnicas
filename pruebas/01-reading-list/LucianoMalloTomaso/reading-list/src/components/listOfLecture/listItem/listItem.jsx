import './listItem.css'
export default function ListItem ({ cover, title, pages }) {
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
        <button>
          Remove
        </button>
      </footer>
    </li>
  )
}
