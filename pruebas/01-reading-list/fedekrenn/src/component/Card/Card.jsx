export default function Card ({ book, removeBookFromReadingList, addBookToReadingList }) {
  const { ISBN, cover, title } = book.book

  if (addBookToReadingList) {
    return (
      <li key={ISBN}>
        <img
          className='cover-img'
          src={cover}
          alt={title}
          onClick={() => addBookToReadingList(book)}
        />
      </li>
    )
  }

  return (
    <li key={ISBN}>
      <img
        className='cover-img'
        src={cover}
        alt={title}
        onClick={() => removeBookFromReadingList(book)}
      />
    </li>
  )
}
