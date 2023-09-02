import { FiltersIcon, MenuIcon } from '../../icons'
import './footer.css'

interface Props {
  toggleReadList: () => void
  toggleFilters: () => void
}

export const Footer: React.FC<Props> = ({ toggleReadList, toggleFilters }) => {
  return (
    <>
      <div className="mobile-correction"></div>
      <footer className="app-footer">
        <button onClick={toggleReadList}>
          <MenuIcon />
        </button>
        <button onClick={toggleFilters}>
          <FiltersIcon />
        </button>
      </footer>
    </>
  )
}
