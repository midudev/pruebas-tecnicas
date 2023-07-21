<script lang="ts">
  import { setBookwishList, getBookWishList } from "$lib/contexts/booksContext";
  import type { Book } from "$lib/types/Book";
  import BookWishList from "./BookWishList.svelte";
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };
  export let open = false;
  const wishListBooks = getBookWishList();
  export let removeBookFromWishList: Function;
  export let toggleSideBar: Function;
</script>

<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={open}
  id="sidebar1"
>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
  >
    <svg
      class="w-4 h-4 mr-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
      />
    </svg>Info
  </h5>
  <button
    type="button"
    on:click={() => {
      toggleSideBar();
    }}
    data-drawer-hide="drawer-example"
    aria-controls="drawer-example"
    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
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
    <span class="sr-only">Close menu</span>
  </button>

  <h3>Lista de libros para leer</h3>
  <ul role="listbox" class="ul-books">
    {#each $wishListBooks as book}
      <li role="listitem">
        <BookWishList {book} {removeBookFromWishList} />
      </li>
    {/each}
  </ul>
</Drawer>

<style>
  .list-wish-books {
    width: 25%;
    padding: 16px;
    background-color: #f2f2f2;
  }

  .ul-books {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0;
  }

  h3 {
    margin-top: 0;
    color: #333;
    font-size: 1.3rem;
  }
</style>
