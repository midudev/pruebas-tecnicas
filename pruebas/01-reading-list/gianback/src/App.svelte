<script lang="ts">
  import "./app.css";
  import Aside from "./components/Aside.svelte";
  import books from "../../books.json";

  let library = books.library;
</script>

<main class="main">
  <Aside />
  <section class="bg-[#F3F3F7] min-h-screen p-[44px]">
    <ul class="Book-list">
      {#each library as book (book.book.title)}
        <li>
          <picture>
            <img
              src={book.book.cover}
              alt={book.book.title}
              class="object-cover w-full md:h-[450px]"
            />
          </picture>
          <h2>
            {book.book.title}
          </h2>
          <p>
            {book.book.synopsis}
          </p>
          <p>
            {book.book.genre}
          </p>
          <span>
            {book.book.author.name}
          </span>
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  .main {
    display: grid;
    grid-template-columns: 308px auto;
  }
  .Book-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }
</style>
