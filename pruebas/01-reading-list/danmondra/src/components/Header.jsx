import { useRouterScroll } from '../hooks/useRouterScroll'
import styles from '../styles/main.module.css'
import { Link } from './Link'

export const NAVIGATION_PATHS = {
  HOME: '',
  LISTS: 'listas'
}

export function Header() {
  const { currentPath } = useRouterScroll()
  const selectedIfIsPath = (path) =>
    path === currentPath ? 'selected' : false

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href='/'>
          <h2 className={styles.logo}>Lazpe Editorial</h2>
        </a>
        <ul>
          <li>
            <Link
              targetId={NAVIGATION_PATHS.HOME}
              className={`linknav ${selectedIfIsPath(NAVIGATION_PATHS.HOME)}`}
            >
              Explorar
            </Link>
          </li>
          <li>
            <Link
              targetId={NAVIGATION_PATHS.LISTS}
              className={`linknav ${selectedIfIsPath(NAVIGATION_PATHS.LISTS)}`}
            >
              Mis listas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
