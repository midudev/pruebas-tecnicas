import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { changeListedStatus } from "../redux/librarySlice"
import { Link } from "react-router-dom"

const ReadingList = () => {
  
  const [orderByPriority,setOrderbyPriority] = useState(localStorage.getItem('orderByPriorityStorage') ?
  JSON.parse(localStorage.getItem('orderByPriorityStorage')) : 
  false);
  
  const dispatch = useDispatch();

  const library = useSelector(state => state.library);
  const darkMode = useSelector(state => state.darkMode);

  // Calculate the number of books listed from the library
  const booksListed = library.filter(i => i.listed).length;

  return (
    // The ReadingList component is hidden using the conditional class 'hidden' if there are no books listed
    // Apply the dark-mode or light-mode class depending on the darkMode value
    <div className={`${booksListed === 0 && 'hidden'} fixed bottom-0 left-0 sm:left-auto sm:right-0 w-full sm:w-1/3 h-96 sm:h-screen flex flex-col ${darkMode ? 'dark-mode' : 'light-mode'} sm:bg-black/10  shadow-2xl  shadow-black rounded-lg sm:pt-8 z-10`} >
      <h2 className="text-2xl p-5 pb-2 flex items-center gap-2" >Lista de Lectura <i className="bi bi-eyeglasses text-4xl" /></h2>
      <div className="flex justify-between px-5 gap-2">
        <p className="flex items-center gap-2"><i className={`bi bi-list-${orderByPriority?'ol':'ul'} text-3xl`} />{orderByPriority?'Ordenado por Prioridad':'Ordenado por Defecto'}</p>
        <button onClick={()=>setOrderbyPriority(prev=>{localStorage.setItem('orderByPriorityStorage',!prev);return !prev})} title={`${orderByPriority?'Ordenar por Defecto':'Ordenar por Prioridad (Orden en el que fueron agregados)'}`} className={`${darkMode?'light-mode':'dark-mode'} rounded-md pt-2 px-2 hover:scale-110 absolute top-5 right-3 sm:-top-3 sm:right-0 sm:relative`} ><i className={`bi bi-list-${orderByPriority?'ul':'ol'} text-3xl cursor-pointer`} /></button>
      </div>
      {/* Section to dynamically render the books listed in the reading list */}
      {/* Add a scrollbar if necessary: horizontal for mobile version and vertical for desktop version, using the classes overflow-x-auto and overflow-y-auto, respectively. */}
      <section className="flex items-center sm:flex-wrap gap-8 p-5 ml-3 overflow-x-auto sm:overflow-y-auto " >
        {
          library.filter(i => i.listed) // Filter the books that are listed in the reading list.
          .sort((a,b)=>orderByPriority&&a.priority-b.priority) //if the option to sort by priority is enabled (orderByPriority is true), sort the books by their priority.
          .map(i => ( // Map each book to a div element
            <div key={i.book.ISBN} className="w-36 h-52 flex-shrink-0 relative">
              {/* The onClick event change the state of the 'listed' property to false for the clicked book's image (book cover) to remove it from the reading list. */}
              {/* The book title is displayed using the 'title' attribute when hovering over the book image (book cover). */}
              <img
                onClick={() => dispatch(changeListedStatus(i.book.ISBN))}
                className="w-full h-full cursor-pointer rounded-lg cover"
                src={i.book.cover}
                alt={'Portada de ' + i.book.title}
              />
              {/* As in the img tag the onClick event change the state of the 'listed' property to false for the clicked book's remove-icon to remove it from the reading list. */}
              <i
                onClick={() => dispatch(changeListedStatus(i.book.ISBN))}
                className="bi bi-dash-circle-fill text-2xl absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer sm:opacity-0"
              />
              {/* Icon in a Link element for navigating to the route displaying the book details. */}
              {/* The 'title' attribute shows information about the book's genre and number of pages, which are relevant for the available filters. This information is displayed when hovering over the info-icon. */}
              <Link
                to={`/${i.book.title.replaceAll(' ','-')}`}
                className="bi bi-info-square-fill text-2xl absolute top-0 left-0 -translate-x-1/2 -translate-y-1/3 hover:scale-110 cursor-pointer"
                title={'Género: ' + i.book.genre + '\n' + i.book.pages + ' páginas'}
              />
            </div>
          ))
        }
      </section>
    </div>
  );
};

export { ReadingList };