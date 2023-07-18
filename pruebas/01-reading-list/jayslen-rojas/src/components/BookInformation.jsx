import { Author, Genre, Pages } from './BooksLabelData'
import { BookDetails } from './BookDetails'
import { useActive } from '../hooks/useShow'
import { Functionalities } from './Funcionalities'

export function BookInformation ({ book }) {
  const { toggle, changeToggle } = useActive()
  return (
    <>
      <li className="rounded-b-md ">
        <img src={book.cover} alt="libro" className="rounded-md h-80" />
        <ul className=" rounded-b-md p-1">
          <li className="font-bold">{book.title}</li>
          <Pages pages={book.pages} />
          <Author author={book.author.name} />
          <Genre genre={book.genre} />
        </ul>
        <Functionalities showBook={changeToggle} book={book}/>
      </li>
      {toggle && <BookDetails book={book} closePopUp={changeToggle}/>}
    </>
  )
}
