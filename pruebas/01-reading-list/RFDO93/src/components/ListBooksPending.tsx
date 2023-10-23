import { useContext } from "react"
import { BookContext } from "../context/BookContext"
import { PropBookContext } from "../types"
import BookItemPending from "../assets/icons/BookItemPending"

function ListBooksPending () {

  const bookCont = useContext(BookContext) as PropBookContext
  const {bookPendingList,numberBookPending} = bookCont

  const isHidden = numberBookPending && numberBookPending > 0 ? "" : "hidden"

  return (
    <aside role="aside-list-pending" className={`w-full md:w-1/5 ${isHidden} h-full bg-slate-400 rounded-xl bg-primary py-6`}>
      <h3 className=" text-quaternary font-semibold text-center text-lg" >
        Libros Pendientes
        {numberBookPending && numberBookPending > 0 ?
          <span className="text-xs inline-flex items-center justify-center font-bold leading-sm uppercase w-6 h-5 ml-2 bg-tertiary text-primary rounded-full">
              {numberBookPending}
          </span>
          : null
        }
      </h3>
      <section className="h-[calc(100%_-_48px)] mt-4 overflow-x-hidden overflow-y-auto px-6">
        <ul role="list-book-pending" className=" grid grid-cols-1 gap-4 auto-rows-[16rem]">
          {bookPendingList?.map((bookPending) => <BookItemPending key={bookPending.ISBN} bookPending={bookPending} />)}
        </ul>
      </section>
      
    </aside>
  )
}


export default ListBooksPending
