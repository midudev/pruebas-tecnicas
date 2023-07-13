import './BookContainer.css'

// eslint-disable-next-line react/prop-types
export const BookContainer = ({ children, title }) => {
  return (
    <section className="bc-section">
      <h1 className="bc-title">{title}</h1>
      <div className="bc-container">{children}</div>
    </section>
  )
}
