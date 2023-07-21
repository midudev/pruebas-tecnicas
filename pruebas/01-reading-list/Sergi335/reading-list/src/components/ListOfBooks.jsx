import Book from './book'

export default function ListOfBooks ({ books }) {
  return (
    <section className='listOfBooks w-[90%] mb-12 my-0 mx-auto'>
      <ul className='flex flex-wrap gap-36 p-0 min-h-[100vh] w-[100%] pl-[275px]'>
        {books.map((item) => (
          <Book key={item.book.ISBN} item={item} />
        ))}
      </ul>
    </section>
  )
}
