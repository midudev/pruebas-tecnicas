import Loading from './loading';
import { getBooks } from './service/api';
import dynamic from "next/dynamic";

const Home = dynamic(() => import('./client'), 
{ ssr: false, loading: Loading})

export default async function IndexPage() {
    const books = await getBooks()
    const genres = Array.from(new Set(books.map(book => book.genre)))

    return <Home books={books} genres={genres}/>
}