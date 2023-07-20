<script lang="ts">
  import type { Book } from "$lib/types/Book";
  import { Rating } from "flowbite-svelte";
  export let book: Book;
  export let addBookToWishList: Function;
</script>

<div
  class="max-w-sm max-h-fitbg-gray-700 rounded border border-gray-600 shadow dark:bg-gray-800 dark:border-gray-700"
>
  <div class="book">
    <img class="cover rounded-t " src={book.cover} alt={book.title} />
    <div class="info md:min-h-[88px]">
      <span class="title text-white text-lg font-bold">{book.title}</span>
      <span class="year text-gray-200 text-sm font-semibold"> Año: {book.year}</span>
    </div>
  </div>
  <div class="flex flex-col px-2 pb-4 gap-[10px]">
    <Rating id="example-1" total={5} size={30} rating={4} />
    <div class="w-full flex flex-col items-center h-[44px]" >
      <button
        type="button"
        class="h-full w-1/2 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 text-lg font-semibold"
        on:click={() => addBookToWishList(book)}
      >
        <span
          class="h-full w-full relative px-5 py-1.5 text-white transition-all ease-in duration-75 bg-gray-700 dark:bg-white rounded-md group-hover:bg-opacity-0 text-lg font-semibold"
        >
          Añadir
        </span>
      </button>
    </div>
  </div>
</div>

<style>
  .container-book {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 200px;
  }

  .add-to-read {
    padding: 12px 24px;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .book {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 200px;
    max-height: fit-content;
  }

  .book * {
    box-sizing: border-box;
  }

  .cover {
    width: 100%;
    max-height: 300px;
    -o-object-fit: cover;
    object-fit: cover;
    aspect-ratio: 317 / 475;
  }

  .info {
    height: 40%;
    width: 100%;
 
    padding: 10px 12px;
    transition: display 1s ease-in 0s;
    display: flex;
    flex-direction: column;
  }

  .info .title {
    line-height: 1.1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    min-height: 35px;
  }

  .info .year {
    
  }
</style>
