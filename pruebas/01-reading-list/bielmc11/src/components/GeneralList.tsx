import { GeneralBooks } from './GeneralBooks'
import { FiltersComponent } from './FiltersComponent'

export const GeneralList = (() => {

  return (
    <article id='allBooks' className='list bg-gray-200 pt-10 text-[#242422]'  >

      <div className='list_wrapper  flex flex-col'>

        <div className='list_header flex flex-col gap-4 justify-center max-w-[570px]'>

          <div className=" rounded-3xl self-start bg-green-500  px-3 py-1 text-sm text-gray-50">
            <p>FEATURED BOOKS</p>
          </div>

          <h2 className='font-bold font-[titles] tracking-tighter text-6xl xl:text-5xl'>Explore Our Curated Selection</h2>

          <div className='flex justify-between gap-3'>

            <p className='text-gray-500 md:text-xl'>Discover our hand-picked collection of the latest and greatest books across a variety of genres.</p>

            <FiltersComponent/> 
            
          </div>

        </div>
        {/* TODO AQUI VA UN CONDICIONAL ENTRE GENERALBOOKS Y MIS LIBROS */}
         <GeneralBooks /> 
      </div>
    </article>
  )
})
