/* eslint-disable react/prop-types */
import './Book.css'

export function Book({ image, title, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <article className="book" onClick={handleClick}>
      <img className="book--cover" src={image} alt="book cover" />
      <h2 className="book--title">{title}</h2>
    </article>
  )
}
