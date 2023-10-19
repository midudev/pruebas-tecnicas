import { NAVIGATION_PATHS } from './Header'
import { Link } from './Link'

export const ACTIONS_MSGS = {
  ADDED_TO: 'añadido a',
  DELETED_FROM: 'eliminado de',
  ADD_TO_SPECIFIC_LIST: 'Añadir a la lista',
  IS_ALREADY_IN_LIST: 'Ya está en la lista',
  DELETE_FROM_LIST: 'Eliminar de la lista'
}

export function BookNotification({
  message,
  book,
  listName,
  Icon
}) {
  return (
    <div className='bookNotification'>
      <img
        src={book.cover}
        alt={`Portada del libro ${book.title} del autor ${book.author}`}
      />
      <p>
        <span>"{book.title}"</span>
        {' '}{message}{' '}
        <span>"{listName}"</span>
      </p>

      <Link
        targetId={NAVIGATION_PATHS.LISTS}
      >
        <Icon />
      </Link>
    </div>
  )
}
