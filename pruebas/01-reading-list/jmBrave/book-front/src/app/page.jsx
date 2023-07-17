import Card from '../components/card/Card'
import BookList from '../components/bookList/BookList'
import books from '../mocks/books.js'

export default function Home() {
    const { library } = books
    return (
        <main className="flex min-h-screen justify-evenly flex-wrap pt-20">
            <div className="flex items-center flex-col p-2">
                <h2 className="pb-4">Libros</h2>
                {library.map((book) => {
                    return (
                        <div className="pb-4" key={book.ISBN}>
                            <Card>{book}</Card>
                        </div>
                    )
                })}
            </div>
            <BookList />
        </main>
    )
}
