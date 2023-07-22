<script lang='ts' context='module'>

  import Book from '$lib/components/book.svelte'
  import Gallery from "$lib/layouts/gallery.svelte";

</script>

<script lang="ts">


  export let data
  const { library } = data

  let index = 0

  function handleIndex() {

    index = (index + 1) % library.length
  }

</script>

<h2>{library.length} libros disponibles</h2>

<Gallery>

</Gallery>

<!-- {#each library as bookData}

  <Book {...bookData} />

{/each} -->
