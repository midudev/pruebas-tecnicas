import './listItem.css'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export default function ListItem ({ uniqueId, cover, title, pages, removeFromList }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: uniqueId })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const handleRemoveClick = () => {
    removeFromList(uniqueId)
  }

  return (
    <li
      data-testid='book-added'
      ref={setNodeRef} style={style} {...attributes} {...listeners}
    >

      <img
        src={cover}
        alt={title}
      />
      <div>
        <strong data-testid='book-added-title'>{title}</strong>
        <p> {pages} Pages</p>
      </div>
      <footer>
        <button onClick={handleRemoveClick}>
          Remove
        </button>
      </footer>
    </li>
  )
}
