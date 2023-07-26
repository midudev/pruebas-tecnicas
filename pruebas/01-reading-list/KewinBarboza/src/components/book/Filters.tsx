import type { PropFunction } from "@builder.io/qwik"
import { component$, useSignal } from "@builder.io/qwik"
import { Logo } from "../ui"

interface Props {
  genders: string[],
  minPage: number | undefined,
  maxPage: number | undefined,
  bookAvailable: number,
  bookAvailableStorage: number,
  filterForGenre$: PropFunction<(genero: string) => void>
  filterForPages$: PropFunction<(number: number) => void>
  searchBook$: PropFunction<(string: string) => void>
}

export default component$(({ genders, maxPage, bookAvailable, bookAvailableStorage, filterForGenre$, filterForPages$, searchBook$ }: Props) => {
  const selectedGenre = useSignal<string>('')
  const nameBook = useSignal<string>('')
  const page = useSignal<number>(0)

  return (
    <>
      <div class="flex justify-between gap-4 mb-1 border-b border-b-indigo-950 sticky top-0 bg-[#151934] z-10 py-2">
        <Logo />
        <div class="flex items-center w-5/12">
          <label for="simple-search" class="sr-only">Buscar</label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" onChange$={({ target }) => nameBook.value = target.value} id="simple-search" class="bg-gray-50 border border-indigo-900 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5  dark:bg-indigo-700/20 dark:border-indigo-600/dark:bg-indigo-700/20 dark:placeholder-indigo-400/dark:bg-indigo-700/20 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Buscar libro" required />
          </div>

          <button onClick$={() => searchBook$(nameBook.value)} class="p-2.5 ml-2 text-sm font-medium text-white bg-indigo-700 rounded-lg border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
            <svg class="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Buscar</span>
          </button>
        </div>
        <div class="flex justify-end gap-x-4">
          <h5 class="text-lg block" >
            <p class="text-neutral-400 me-2 text-sm">Libros disponibles</p>
            <p class="text-white text-center font-bold" >{bookAvailable}</p>
          </h5>
          <h5 class="text-lg block" >
            <p class="text-neutral-400 me-2 text-sm" >Lista de lectura</p>
            <p class="text-white text-center font-bold">{bookAvailableStorage}</p>
          </h5>
        </div>
      </div>
      <section class="py-1 bg-[#151934]">
        <div class="flex justify-between gap-x-7 items-center px-1 py-1">
          <article class="flex items-center">
            <div class="flex overflow-hidden">
              {
                genders.map(genre => (
                  <button
                    key={genre}
                    class={`whitespace-nowrap rounded-lg me-2 px-4 py-2 text-sm text-white ${selectedGenre.value === genre ? 'bg-indigo-700' : 'bg-indigo-950'}`}
                    onClick$={() => {
                      filterForGenre$(genre)
                      selectedGenre.value = genre
                    }}
                  >
                    {genre}
                  </button>
                ))
              }
            </div>
          </article>
          <article class=" p-1 rounded-lg">
            <label for="default-range" class="me-2 mb-2 flex justify-between text-white">
              <span class="text-sm text-white">Paginas</span> <span class="font-bold rounded-full p-1 bg-indigo-950" >{page.value}</span>
            </label>
            <div class="flex items-center whitespace-nowrap rounded-lg me-2 bg-indigo-950 text-sm text-white">
              <input
                class="w-full h-2 bg-indigo-900 rounded-lg appearance-none cursor-pointer"
                onChange$={(elem) => {
                  filterForPages$(Number(elem.target.value))
                  page.value = Number(elem.target.value)
                }}
                max={maxPage}
                type="range"
                value={0}
              />
            </div>
          </article>
        </div>
      </section>
    </>
  )
})
