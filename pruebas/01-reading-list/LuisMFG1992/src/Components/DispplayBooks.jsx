const DispplayBooks = ({ booksList }) => {
  return (
    <div className="flex flex-wrap  gap-4 p-4 justify-center items-center">
      {booksList.map((element) => (
        <img
          key={element.book.ISBN}
          src={element.book.cover}
          className="w-[200px] h-[300px] "
        />
      ))}
    </div>
  )
}

export default DispplayBooks
