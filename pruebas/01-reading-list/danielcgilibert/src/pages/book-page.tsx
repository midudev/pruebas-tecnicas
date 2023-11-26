import { useStore } from '../store/bookStore'

export default function BookPage({ isbn }: { isbn: string }) {
  const { books } = useStore()
  const book = books.find((book) => book.ISBN === isbn)

  if (!book) return <div>Book not found</div>

  return (
    <main className='m-auto grid h-screen w-full  max-w-4xl grid-cols-[45%_auto] gap-12 rounded-3xl bg-white p-12 pt-52 shadow-2xl'>
      <div className='w-full'>
        <img
          className=' relative min-w-full      rounded-md'
          src={book.cover}
          alt={`image of ${book?.title}`}
        />
        {/* <div className='absolute left-0 right-0 top-0 h-[500px] w-[600px] items-center justify-center rounded-full bg-gray-200' /> */}
      </div>

      <div className='flex h-fit flex-col justify-between gap-8'>
        <section className='flex flex-col  gap-8 border-b-2 border-black  pb-24'>
          <header>
            <h1 className='text-5xl'>{book.title}</h1>
            <h2 className='text-xl'>
              Por <span className='font-semibold'> {book.author.name}</span>
            </h2>
          </header>

          <p className='text-lg text-neutral-700'>{book.synopsis}</p>
        </section>

        <section className='flex flex-col'>
          <ul className='flex gap-4'>
            <li className=' h-fit rounded-full bg-gray-100  px-4 py-1'>
              <p className='text-center '>Páginas {book.pages}</p>
            </li>

            <li className=' h-fit rounded-full bg-gray-100  px-4 py-1'>
              <p className='text-center '>Género {book.genre}</p>
            </li>
            <li className='h-fit rounded-full bg-gray-100  px-4 py-1'>
              <p className='text-center'>Año {book.year}</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
