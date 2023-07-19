//COMPONENTS
import Filters from './filters'

//LIB
import { getGenres } from '../lib/helpers'

//TYPES
import ReadingList from './reading-list'

export default function Aside() {
  const genres = getGenres()

  return (
    <aside className='fixed left-0  top-0 z-40 mt-4 flex h-screen w-96 -translate-x-full flex-col gap-4 overflow-y-auto bg-white  px-12 py-20 font-light shadow-md shadow-neutral-200 transition-transform md:translate-x-0 '>
      <section className='flex items-center justify-start gap-8 pb-8'>
        <div>
          <img
            src='https://c.files.bbci.co.uk/7727/production/_103330503_musk3.jpg'
            className='h-28 w-28 rounded-full object-cover object-center  drop-shadow'
          />
        </div>
        <div className='flex flex-col'>
          <span className=' text-xl font-normal text-zinc-950  '>
            Elon Musk
          </span>
          <span className='text-sm  font-normal text-orange-400'>@Elon</span>
          <span className='text-sm font-light text-neutral-400 '>
            Sevilla, España
          </span>
        </div>
      </section>

      {/* <nav className='flex flex-col gap-4 border-y-2 border-neutral-100 py-8'>
        <span className='text-lg  font-light text-orange-400'>Recommendations</span>
        <ul className='flex flex-col gap-2 text-[#353535] font-light'>
          <li>My books</li>
          <li>Want to read (35)</li>
          <li>My books</li>

        </ul>
      </nav> */}

      <div className='max-h-96 overflow-y-auto border-t-2 border-neutral-100 py-5'>
        <ReadingList />
      </div>

      <div className=' border-t-2 border-neutral-100 py-5'>
        <Filters genres={genres} />
      </div>
    </aside>
  )
}
