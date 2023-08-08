import { BookInterface } from "../types"

type Props = {
  book: BookInterface
}

function DetailComponent({book}:Props) {
  return (
    <section className="flex flex-1 h-full rounded-xl bg-primary p-6 overflow-y-auto gap-6">
      <img src={`${book.cover}`} className="w-auto object-cover" alt={book.title} />
      <div className="flex flex-col gap-4">
        <article className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-quaternary ">{book.title}</h2>
        </article>
        <article className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-quaternary ">Descripción</h3>
          <p className="text-tertiary">{book.synopsis}</p>
        </article>
        <article className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-quaternary">Sinopsis</h3>
          <p className="text-tertiary">{book.synopsis}</p>
        </article>
        <article className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-quaternary">N° Paginas</h3>
          <p className="text-tertiary">{book.pages}</p>
        </article>
        <article className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-quaternary">Año</h3>
          <p className="text-tertiary">{book.year}</p>
        </article>
        <article className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-quaternary">
            Autor
          </h3>
          <p className="text-tertiary">{book.author.name}</p>
          <div>
            <p className="font-bold text-tertiary">Otras Obras:
              {book.author.otherBooks.map((bookOther) => (
                <span key={bookOther} className="text-secondary ml-2">- {bookOther}</span>
              ))}
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default DetailComponent