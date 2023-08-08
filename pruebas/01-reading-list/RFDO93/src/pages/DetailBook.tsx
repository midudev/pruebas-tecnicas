
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PropBookContext } from '../types';
import {BookContext} from '../context/BookContext';
import DetailComponent from '../components/DetailComponent';
import BookNotFound from '../components/BookNotFound';
import Menu from '../components/Menu';

function DetailBook(): JSX.Element {

  const { idBook } = useParams<{idBook:string}>()
  const bookCont = useContext(BookContext) as PropBookContext 
  const { getBookId } = bookCont

  const book = getBookId(idBook || '')

  if(!book)
    return <BookNotFound />

  return (
    <>
      <Menu canViewFilter={false} />
      <section className=" w-full h-[calc(100vh_-_140px)] flex row mt-6 gap-6" >
        <DetailComponent book={book} />
      </section>
    </>
  )
}

export default DetailBook