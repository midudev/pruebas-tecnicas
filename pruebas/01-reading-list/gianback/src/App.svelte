<script lang="ts">
  import "./app.css";
  import { bookList } from "./store/books.store";
  import { filter } from "./store/filter.store";
  import Aside from "./lib/Aside.svelte";
  import Card from "./lib/Card.svelte";
  import Form from "./lib/Form.svelte";
  import type { Library } from "./models/book.model";

  let filteredBooks: Library[] = [];
  $: {
    filteredBooks = $bookList.filter(({ book }) => book.genre !== $filter);
  }
</script>

<main class="main">
  <Aside />
  <div>
    <Form />
    <section class="bg-[#F3F3F7] min-h-screen p-[44px]">
      <ul class="Book-list">
        {#each filteredBooks as book (book.book.title)}
          <Card
            name={book.book.title}
            image={book.book.cover}
            description={book.book.synopsis}
            author={book.book.author.name}
            genre={book.book.genre}
          />
        {/each}
        <!-- {$fileteredBooks} -->
      </ul>
    </section>
  </div>
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
