import BookList from '../components/bookList/BookList'

export default function Home() {
    return (
        <main className="flex min-h-screen justify-evenly flex-wrap pt-20">
            <BookList title={'Libros'} />
            <BookList title={'Lista de Lectura'} />
        </main>
    )
}
