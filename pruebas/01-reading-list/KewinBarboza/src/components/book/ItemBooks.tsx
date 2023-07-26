import type { PropFunction } from "@builder.io/qwik"
import { component$ } from "@builder.io/qwik"

interface Props {
  title: string,
  cover: string,
  name: string,
  synopsis: string,
  year: number,
  genre: string,
  pages: number,
  onClick$: PropFunction<(title: string) => void>
}

export const ItemBooks = component$(({ title, cover, name, synopsis, year, genre, pages, onClick$ }: Props) => {
  return (
    <li class="rounded-xl hover:bg-indigo-600/10 mb-3 p-4">
      <div class="flex items-center sm:gap-8">
        <div class="hidden sm:grid h-auto w-[115px] rounded-lg overflow-hidden sm:shrink-0 sm:place-content-center" aria-hidden="true">
          <img src={cover} class="h-full w-full object-contain" width={80} height={80} alt={title} />
        </div>

        <section class="h-auto">
          <article>
            <p class="py-1.5 text-[12px] font-bold text-neutral-300">{name}</p>
            <h3 class="mt-2 text-lg font-medium sm:text-xl text-white">{title}</h3>
            <p class="mt-1 text-sm text-neutral-400">{synopsis}</p>

            <div class="mt-4 sm:flex sm:items-center sm:gap-2">
              <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0"><b>Año:</b> {year}</p>
              <span class="hidden sm:block" aria-hidden="true">&middot;</span>
              <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0"> <b>Genero:</b> {genre}</p>
              <span class="hidden sm:block" aria-hidden="true">&middot;</span>
              <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0"> <b>Paginas:</b> {pages}</p>
            </div>
          </article>
          <footer class="flex gap-4 mt-3">
            <button onClick$={() => onClick$(title)} class="inline-block rounded border border-indigo-600 bg-indigo-600 px-7 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
              Agregar a la lista
            </button>
            <a target="_blank" href={`https://www.google.com/search?q=libro de ${title}`} class="inline-block rounded border border-indigo-600 px-7 py-1 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"  >
              Ver mas
            </a>
          </footer>
        </section>
      </div>
    </li>
  )
})
