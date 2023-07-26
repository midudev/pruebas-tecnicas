import { component$, useSignal, useTask$ } from "@builder.io/qwik"
import { isServer } from "@builder.io/qwik/build"
import type { PropFunction } from "@builder.io/qwik"
import type { Book } from "~/interfaces"

interface Props {
  books: Book[],
  onClickDelete$: PropFunction<(book: Book) => void>
}

export const ReadingList = component$(({ books, onClickDelete$ }: Props) => {
  const bookHeader = useSignal<Book>()

  useTask$(({ track }) => {
    track(() => books)

    if (books.length > 0 && !isServer) {
      bookHeader.value = books[0]
    }
  })

  return (
    <aside class={`sticky top-20 h-[90vh] w-full rounded-lg py-2`}>
      <section class="bg-indigo-400/5 h-full w-full rounded-lg">
        <header class="h-[535px] w-full relative overflow-hidden p-4">
          <div class="rounded-2xl w-full h-full relative overflow-hidden">
            <img width="310" height="464"
              alt="Developer"
              src={`${bookHeader.value?.cover}`}
              class="absolute overflow-hidden inset-0 h-full w-full object-cover opacity-20 blur-sm"
            />
            <div class="relative bg-gradient-to-t from-indigo-950 to-indigo-700/5 h-full">
              <div class="flex flex-col justify-end p-4 items-start h-full">
                <p class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 mb-3 text-[12px] font-medium text-white">
                  {bookHeader.value?.author.name}
                </p>
                <p class="text-3xl font-semibold">{bookHeader.value?.title}</p>
                <p class="font-light text-neutral-300 text-lg">{bookHeader.value?.synopsis}</p>
                <div class="mt-4 w-full flex items-center gap-2 justify-between py-4">
                  <div class="mt-1.5 sm:mt-0">
                    <p class="text-gray-500 mb-1 text-sm">Año</p>
                    <p class="font-medium">{bookHeader.value?.year}</p>
                  </div>
                  <span class="hidden sm:block" aria-hidden="true">&middot;</span>
                  <div class="mt-1.5 sm:mt-0">
                    <p class="text-gray-500 mb-1 text-sm">Genero</p>
                    <p class="font-medium">{bookHeader.value?.genre}</p>
                  </div>
                  <span class="hidden sm:block" aria-hidden="true">&middot;</span>
                  <div class="mt-1.5 sm:mt-0">
                    <p class="text-gray-500 mb-1 text-sm">Paginas</p>
                    <p class="font-medium">{bookHeader.value?.pages}</p>
                  </div>
                  <span class="hidden sm:block" aria-hidden="true">&middot;</span>
                  <div class="mt-1.5 sm:mt-0">
                    <p class="text-gray-500 mb-1 text-sm">ISBN</p>
                    <p class="font-medium">{bookHeader.value?.ISBN}</p>
                  </div>
                </div>
                <div class="mt-2 w-full py-4">
                  <p class="font-semibold text-sm text-neutral-300 block">Otros libros</p>
                  <div class="flex gap-x-3">
                    {
                      bookHeader.value?.author.otherBooks.map(other => <p class="font-semibold text-sm text-white p-1 rounded-lg bg-indigo-600/30" key={other} >{other}</p>)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main class="px-3">
          <ul class="overflow-y-scroll h-[265px]">
            {
              books.map(b => (
                <li key={b.title} onClick$={() => bookHeader.value = b} class="flex p-2 gap-4 border-b border-b-indigo-700/5 hover:hover:bg-indigo-600/10 cursor-pointer rounded-lg">
                  <img class="w-10 h-10 aspect-square rounded-full object-cover" width={32} height={32} src={b.cover} alt={b.title} />
                  <div class="relative w-full">
                    <div class="">
                      <p class="font-medium text-white" data-test="reading-list">{b.title}</p>
                      <p class="mt-1 text-xs font-medium text-gray-300">{b.synopsis}</p>
                    </div>

                    <button
                      onClick$={() => onClickDelete$(b)}
                      class="absolute top-0 right-0 rounded-full border border-red-300 bg-red-300 p-1"
                    >
                      <span class="sr-only">Eliminar</span>
                      <svg
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        </main>
      </section>
    </aside>
  )
})
