/* eslint-disable react/prop-types */
import './BookContainer.css'

export const BookContainer = ({
  children,
  totalAvailable,
  categoryAvailable,
  category,
  typeContainer,
  titleContainer,
}) => {
  return (
    <section className="bc-section">
      <h2>{titleContainer}</h2>
      <h2 className="bc-title">{totalAvailable} Libros disponible</h2>
      {category !== '' && typeContainer === 'library' && (
        <p>
          {categoryAvailable} Libros disponibles para la categoría {category}
        </p>
      )}
      {category == '' && typeContainer === 'library' && (
        <p>Todos los libros disponibles</p>
      )}
      <div className="bc-container">{children}</div>
    </section>
  )
}
