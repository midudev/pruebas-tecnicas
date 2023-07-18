export const Book = ({ book }) => {
    return (
        <>
            <article class="library__books-available__book">
                <img src={ book.cover } alt={`Cover of ${book.title}`} />
                <footer class="library__books-available__book__metadata">
                    <p>{book.genre}</p>
                    <p>{book.title}</p>
                    <p>{book.author.name}</p>
                </footer>
            </article>
        </>
    )
}