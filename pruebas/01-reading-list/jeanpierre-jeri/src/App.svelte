<script lang="ts">
  import booksLibrary from '../../books.json'

  let books = booksLibrary.library
</script>


<main>
  <div class="flex justify-center gap-6 p-3 my-6 text-5xl uppercase text-amber-400 bg-amber-300 [&_span]:select-none [&_span]:flex-shrink-0 ">
    <span>All Books</span>
    <span>All Books</span>
    <span>All Books</span>
    <span>All Books</span>
    <h1 class="flex-shrink-0 text-zinc-800">All Books</h1>
    <span>All Books</span>
    <span>All Books</span>
    <span>All Books</span>
    <span>All Books</span>
  </div>
  <div class="container grid grid-cols-12 px-6 mx-auto">
    <aside class="col-span-3">
      <h2>Categories</h2>
    </aside>
    <section class="grid col-span-9 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {#each books as {book} (book.ISBN)}
      <article class="flex flex-col p-6 bg-white rounded-2xl" >
        <header>
          <img src={book.cover} alt={book.title} class="object-cover w-full aspect-[246/357] rounded-xl">
        </header>
        <div class="flex flex-col flex-1">

          <h3 class="mt-4 text-xl text-black/[.87]">{book.title}</h3>
          <p class="mt-2 mb-4 text-base text-black/60">{book.synopsis}</p>
          
          <div class="mt-auto text-sm text-black/60">
            <h4>Autor: <strong>{book.author.name}</strong></h4>
            <h5>Año: <strong>{book.year}</strong></h5>
          </div>
        </div>
      </article>
      {/each}
    </section>
  </div>
  </main>