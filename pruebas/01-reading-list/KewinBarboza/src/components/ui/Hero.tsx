import { component$ } from "@builder.io/qwik"

export default component$(() => {
  return (
    <header class="text-white">
      <div class="mx-auto max-w-screen-2xl px-4 pt-16 pb-36 lg:flex lg:items-center">
        <div class="mx-auto max-w-5xl text-center">
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl">
            Crea tu listas de lectura
          </h1>
          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Crear tu propia lista de lectura es una forma genial de disfrutar más de la lectura y de descubrir nuevos libros y autores.
          </p>
        </div>
      </div>
    </header>
  )
})
