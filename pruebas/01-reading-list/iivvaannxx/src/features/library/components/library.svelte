<script lang='ts' context='module'>

  import Book from './book.svelte'
  import Gallery from "../layouts/gallery.svelte"

  import { booksData } from '../data';

  // Extract the library information.
  const { library } = booksData

</script>

<h2>{library.length} libros disponibles</h2>


<Gallery>

  {#each library as bookData}

  <Book {...bookData} />

  {/each}

</Gallery>
