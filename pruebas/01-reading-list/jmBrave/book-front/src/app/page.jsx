import Card from '../components/card/Card'
import books from '../mocks/books.js'
export default function Home() {
    const { library } = books
    return (
        <main className="flex min-h-screen items-center justify-evenly flex-wrap pt-20">
            <div className="flex flex-col p-2">
                {library.map((book) => {
                    return (
                        <div className="pb-4" key={book.title}>
                            <Card>{book}</Card>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col p-2">
                {library.map((book) => {
                    return (
                        <div className="pb-4" key={book.title}>
                            <Card>{book}</Card>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
