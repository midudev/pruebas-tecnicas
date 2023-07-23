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

      <section className="w-[300px] h-[550px] bg-[#f5ebe0] rounded-md p-5 flex flex-col gap-4 relative md:w-[720px] md:h-96 md:flex-row">
        <IconX className='absolute -top-12 -right-1 bg-white rounded-full p-2 h-10 w-10 text-red-500 hover:text-white hover:bg-red-500 transition-colors cursor-pointer' onClick={closePopUp}/>

        <img src={book.cover} alt="" className=" h-64 rounded-md md:h-full object-cover" />
        <ul className='flex flex-col md:flex-wrap gap-x-4 w-auto overflow-scroll'>
            <LiDetails title={'Nombre del libro'} info={book.title}/>
            <LiDetails title={'Sypnosis'} info={book.synopsis}/>
            <LiDetails title={'Genero'} info={book.genre}/>
            <LiDetails title={'Paginas'} info={book.pages}/>
            <LiDetails title={'Lanzamiento'} info={book.year}/>
            <LiDetails title={'Autor'} info={book.author}/>
            <li>
                <h4 className="text-lg font-semibold">Mas Obras del autor</h4>
                <div>
                    {book.otherBooks.map((data, index) => {
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
