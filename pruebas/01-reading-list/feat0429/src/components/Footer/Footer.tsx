import { TEXT_CONTENT } from '../../constants/DOM-text'
import componentClasses from './Footer.module.css'

export function Footer () {
  return (
        <footer
          className={componentClasses.footer}
        >
          <span> {TEXT_CONTENT.MadeBy} <strong>Fredy Amaya</strong></span>
        </footer>
  )
}
