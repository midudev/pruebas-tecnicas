export function AvailableBookCard ({ el, handleAddClick, crypto }) {
  return (
    <>
      <article key={crypto.randomUUID()}>
        <li>{el.book.title}</li>
        <button
          onClick={() => handleAddClick(el.book)}
        >
          Add to my list
        </button>
      </article>
    </>
  )
}

export function MyListBookCard ({ el, handleRemoveClick, crypto }) {
  return (
    <>
      <article key={crypto.randomUUID()}>
        <li>{el.title}</li>
        <button
          onClick={() => handleRemoveClick(el)}
        >
          Remove from my list
        </button>
      </article>
    </>
  )
}
