/* eslint-disable react/prop-types */
import './BookContainer.css'

export const BookContainer = ({ children, title }) => {
  return (
    <section className="bc-section">
      <h1 className="bc-title">{title}</h1>
      <div className="bc-container">{children}</div>
    </section>
  )
}
