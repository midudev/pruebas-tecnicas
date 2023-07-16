import './Footer.css'
export const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-social">
        <a
          href="mailto:anthonyeca.dev@gmail.com"
          rel="noopener nofollow"
          aria-label="Contact"
        >
          Contacto
        </a>
        <a
          href="https://github.com/anthonyeca"
          target="_blank"
          rel="noopener nofollow"
          aria-label="Github de @anthonyeca"
        >
          GitHub
        </a>
        <a
          href="https://anthonyeca-dev.netlify.app/"
          target="_blank"
          rel="noopener nofollow"
          aria-label="Portafolio"
        >
          Portafolio
        </a>
      </section>
      <span>Made with 💖 by Anthonyeca</span>
    </div>
  )
}
