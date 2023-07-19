import { IconX } from '@tabler/icons-react'

function LiDetails ({ title, info }) {
  return (
    <li>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className='max-w-[240px]'>{info}</p>
    </li>
  )
}

export function BookDetails ({ book, closePopUp }) {
  return (
    <div className="fixed bg-black top-0 left-0 grid place-content-center bg-opacity-50 w-screen h-screen animate-fade animate-once animate-duration-[400ms] animate-ease-in-out z-10">
      <section className="w-[700px] h-80 bg-[#f5ebe0] rounded-md p-5 flex gap-4 relative">
        <IconX className='absolute -top-12 -right-1 bg-white rounded-full p-2 h-10 w-10 text-red-500 hover:text-white hover:bg-red-500 transition-colors cursor-pointer' onClick={closePopUp}/>
        <img src={book.cover} alt="" className="h-full rounded-md" />
        <ul className='flex flex-col flex-wrap gap-x-1'>
            <LiDetails title={'Nombre del libro'} info={book.title}/>
            <LiDetails title={'Sypnosis'} info={book.synopsis}/>
            <LiDetails title={'Genero'} info={book.genre}/>
            <LiDetails title={'Paginas'} info={book.pages}/>
            <LiDetails title={'Lanzamiento'} info={book.year}/>
            <LiDetails title={'Autor'} info={book.author.name}/>
            <li>
                <h4 className="text-lg font-semibold">Mas Obras del autor</h4>
                <div>
                    {book.author.otherBooks.map((data, index) => {
                      return (
                            <p className='max-w-[200px]' key={index}>{data}</p>
                      )
                    })}
                </div>
            </li>
        </ul>
      </section>
    </div>
  )
}
