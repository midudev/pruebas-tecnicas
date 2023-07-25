import { FiltersIcon, MenuIcon } from '../../icons'
import './footer.css'

interface Props {
  toggleReadList: () => void
  toggleFilters: () => void
}

export const Footer: React.FC<Props> = ({ toggleReadList, toggleFilters }) => {
  return (
    <footer className='app-footer'>
        <label onClick={toggleReadList}>
          <MenuIcon />
        </label>
        <label onClick={toggleFilters}>
          <FiltersIcon />
        </label>
      </footer>
  )
}
