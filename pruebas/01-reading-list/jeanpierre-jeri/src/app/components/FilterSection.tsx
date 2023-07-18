'use client'
import { useBooksContext } from '@/context/books.context'

export function FilterSection() {
  const { books, activeGenre, changeGenre, genres } = useBooksContext()

  return (
    <section className="flex justify-end items-center gap-8">
      <div className="flex gap-4 items-center">
        <h2 className="font-bold text-2xl">Filtrado</h2>
        <p className="font-lg font-bold">{books.length} libro(s) disponibles</p>
      </div>

      <div>
        <select
          value={activeGenre}
          onChange={(e) => changeGenre(e.target.value)}
          className="bg-black text-white px-4 py-2 rounded-full"
        >
          <option value="">Todas</option>
          {genres.map((genre) => {
            return (
              <option key={genre} value={genre}>
                {genre}
              </option>
            )
          })}
        </select>
      </div>
    </section>
  )
}
