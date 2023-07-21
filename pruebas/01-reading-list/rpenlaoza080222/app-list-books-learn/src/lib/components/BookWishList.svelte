<script lang="ts">
  import type { Book } from "$lib/types/Book";

  export let book: Book;
  export let removeBookFromWishList: Function;
</script>

<div
  class="max-w-sm gap-[10px] flex relative p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
  <div
    class="cover"
    style="
    background-image: url({book.cover})
  "
  />
  <div class="info">
    <p class="title">{book.title}</p>
    <p class="subtitle">{book.author.name}</p>
  </div>
  <button
    type="button"
    on:click={() => removeBookFromWishList(book)}
    class=" danger-button text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <svg
      class="w-3 h-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  </button>
</div>

<style>
  p {
    margin: 0;
  }

  .card-book {
    display: flex;
    padding: 12px;
    gap: 8px;
    border-radius: 6px;
    background-color: white;
    align-items: center;
    height: 70px;
    position: relative;
  }

  .cover {
    width: 50px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 50px;
    height: 70px;
  }

  .card-book .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
  }

  .card-book .info .title {
    color: #333;
    font-weight: 600;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 170px;
  }

  .card-book .info .subtitle {
    color: #484747;
    font-weight: 600;
  }

  .danger-button {
    color: white;
    height: 30px;
    width: 30px;
    outline: none;
    display: flex;
    border-radius: 50%;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: -10px;
    right: 0;
    border: none;
  }
</style>
