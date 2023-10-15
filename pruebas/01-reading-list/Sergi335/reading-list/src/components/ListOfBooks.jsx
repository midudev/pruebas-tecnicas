import Book from './book'

export default function ListOfBooks ({ books }) {
  return (
    <section className='listOfBooks w-[74%] mb-12 my-0 mx-auto'>
      <ul className='flex flex-wrap justify-center gap-36 p-0 min-h-[100vh] w-[100%] 2xl:pl-[184px] 2xl:justify-start'>
        {books.map((item) => (
          <Book key={item.book.ISBN} item={item} />
        ))}
      </ul>
    </section>
  )
}
