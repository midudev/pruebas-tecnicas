<script>
  import { bookList } from "../store/read.list.store";
</script>

<aside>
  Mi lista de Libros:

  {#each $bookList as book, index (0 + index)}
    <li class="animate-fade-down animate-once animate-ease-linear">
      {book.title}
    </li>
  {/each}
</aside>
