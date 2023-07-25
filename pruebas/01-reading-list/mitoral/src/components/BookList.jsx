import { Books } from './Books'
import { DragDropContext } from 'react-beautiful-dnd'
import { Filters } from './Filters'
import { useBookList } from '../hooks/useBookList'
import { DROPPABLE_IDS } from '../../constants'

export function BookList () {
  const { books, readingList, handleDragEnd } = useBookList()

  return (
    <main className='mt-10 flex flex-col gap-10 max-w-[1280px] mx-auto w-full flex-1 px-5 md:px-10'>
      <Filters />
      <DragDropContext onDragEnd={handleDragEnd}>
        <section className='flex flex-col gap-10 lg:flex-row lg:gap-20'>
          <article className='w-full'>
            <h3 className='text-2xl font-bold mb-5'>Catálogo de libros disponibles {`(${books.length})`}</h3>
            <Books droppableId={DROPPABLE_IDS.CATALOG} books={books} placeholder={<EmptyCatalogPlaceholder />} />
          </article>
          <article className='w-full'>
            <h3 className='text-2xl font-bold mb-5'>Lista de lectura {`(${readingList.length})`}</h3>
            <Books droppableId={DROPPABLE_IDS.READING} books={readingList} placeholder={<EmptyReadingListPlaceholder />} />
          </article>
        </section>
      </DragDropContext>
    </main>
  )
}

function EmptyCatalogPlaceholder () {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' width='80' height='71' fill='none'><path fill='#999' stroke='#fff' strokeWidth='1.5' d='M75.296 61.533V16.668c.241.099.481.2.72.303.552.238 1.088.502 1.608.791.501.303.896.693 1.193 1.173.295.477.433.958.433 1.455v43.874c0 1.137-.457 1.957-1.416 2.547-.946.583-1.89.616-2.936.068a33.633 33.633 0 0 0-7.201-2.884A29.203 29.203 0 0 0 60 62.968c-3.726 0-7.33.653-10.81 1.96a35.556 35.556 0 0 0-9.19 5.12 35.556 35.556 0 0 0-9.19-5.12A30.51 30.51 0 0 0 20 62.967c-2.612 0-5.178.342-7.697 1.027a33.636 33.636 0 0 0-7.201 2.884c-1.047.548-1.99.515-2.936-.068-.959-.59-1.416-1.41-1.416-2.547V20.39c0-.537.132-1.05.407-1.55.251-.457.625-.804 1.154-1.045l.018-.008.018-.01a37.165 37.165 0 0 1 8.556-3.212A38.8 38.8 0 0 1 20 13.494c3.45 0 6.823.446 10.122 1.339a38.344 38.344 0 0 1 9.128 3.803v47.008l1.158-.75c3.033-1.965 6.21-3.436 9.532-4.416A35.38 35.38 0 0 1 60 59.006c2.134 0 4.471.208 7.014.628 2.486.41 4.872 1.259 7.163 2.552l1.118.632v-1.285Zm-41.079.675 1.078.524V21.133l-.383-.214c-2.14-1.198-4.61-2.071-7.401-2.63-2.763-.553-5.268-.834-7.511-.834-2.902 0-5.614.31-8.134.932-2.498.618-4.745 1.409-6.74 2.378l-.421.205V62.733l1.078-.525c2.068-1.006 4.302-1.792 6.707-2.357 2.394-.562 4.912-.845 7.556-.845 2.643 0 5.145.283 7.508.845a32.233 32.233 0 0 1 6.663 2.357Zm34.124-27.323L46.205 54.152V23.977L68.34 1.812v33.073Z' /></svg>
      <p className='text-center text-[#999999] pt-1'>
        No se ha encontrado ningún libro con los filtros seleccionados.
      </p>
    </>
  )
}

function EmptyReadingListPlaceholder () {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' width='72' height='71' fill='none'><path fill='#999' stroke='#fff' strokeWidth='2' d='m60.922 55.36 6.802 11.827-4.218 2.445-6.798-11.818-.641-1.115-.923.896-5.948 5.775-.106-23.696 20.39 11.94-7.967 2.286-1.227.352.636 1.107ZM47.082 14.79v6.896h18.173c.644 0 1.263.257 1.72.715.457.459.714 1.082.714 1.732v12.791H62.82V26.582H26.476V63.06h13.738v4.895H24.04a2.428 2.428 0 0 1-1.72-.715 2.454 2.454 0 0 1-.714-1.732v-18.24h-6.87v-4.895h6.87V24.134c0-.65.257-1.273.714-1.732a2.428 2.428 0 0 1 1.72-.715h18.173V14.79h4.868ZM5.87 42.373v4.896H1v-4.896h4.869Zm0-13.79v4.895H1v-4.896h4.869Zm0-13.792v4.896H1V14.79h4.869ZM5.869 1v4.896H1V1h4.869Zm13.738 0v4.896h-4.87V1h4.87Zm13.738 0v4.896h-4.87V1h4.87Zm13.737 0v4.896h-4.868V1h4.868Z' /></svg>
      <p className='text-center text-[#999999] pt-1'>
        Arrastra aquí los libros que quieras agregar a tu lista de lectura.
      </p>
    </>
  )
}
