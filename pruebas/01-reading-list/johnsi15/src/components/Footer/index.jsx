import IconLinkedin from '../IconLinkedin'

import styles from './Footer.module.css'
export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div>
        Hecho con 💖 por <a href='https://johnserrano.co/' target='_blank' rel="noreferrer">John Serrano</a>
        <a href="https://www.linkedin.com/in/jandreys15/" target='_blank' rel="noreferrer">
          <IconLinkedin />
        </a>
      </div>
    </footer>
  )
}
