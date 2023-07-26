import useBooks from "../hooks/useBooks"

export default function Aside() {
    const { booksRead, removeRead } = useBooks()

    return (
        <aside className='h-full col-span-4 xl:col-span-1 px-4 pb-4 bg-black'>
            <div className="sticky top-0 ">
                <h2 className='text-xl text-white font-bold my-4'>{booksRead.length} Libros leidos</h2>
                <section className='grid gap-2' style={{ gridTemplateColumns: "repeat(2, minmax(150px,1fr))" }}>
                    {booksRead.map(({ book }) => (
                        <article key={book.ISBN} className='group relative overflow-hidden rounded'>
                            <img src={book.cover} className='h-full object-cover' />
                            <span className="absolute top-4 right-4 flex lg:hidden lg:group-hover:flex justify-center align-center rounded-full text-2xl w-9 h-9 text-black hover:cursor-pointer" style={{ background: "#ffd100" }} onClick={() => removeRead(book.ISBN)} >-</span>
                        </article>
                    ))}
                </section>
            </div>
        </aside>
    )
}