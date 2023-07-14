import './listItem.css'
export default function ListItem ({ cover, title, pages }) {
  return (
    <li>
      <img
        src={cover}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - {pages} Pages
      </div>
      <footer>
        <button>
          Remove
        </button>
      </footer>
    </li>
  )
}
