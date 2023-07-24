import useBooks from "../hooks/useBooks"

export default function Aside() {
    const { booksRead, removeRead } = useBooks()
    
    return (
        <aside className='max-w-sm h-max min-h-screen px-4 pb-4 bg-slate-300'>
            <h2 className='text-lg font-bold text-center lg:mb-8'>{booksRead.length} Libros leidos</h2>
            <section className='grid gap-2' style={{ gridTemplateColumns: "repeat(2, minmax(150px,1fr))" }}>
                {booksRead.map(({ book }) => (
                    <img key={book.ISBN} src={book.cover} className='h-full object-cover hover:cursor-pointer' onClick={() => removeRead(book.ISBN)} />
                ))}
            </section>

        </aside>
    )
}