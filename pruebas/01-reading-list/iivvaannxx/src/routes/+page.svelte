<script lang="ts">

  export let data
  const { library } = data

</script>

<h2>{library.length} libros disponibles</h2>

{#each library as book}

  <h4>{book.title}</h4>
  <p>{book.author.name}</p>
  <p>{book.ISBN}</p>
  <p>{book.synopsis}</p>
  <p>{book.genre}</p>
  <p>{book.year}</p>
  <p>{book.pages}</p>

  <img src={book.cover} width={50} height={150} alt="book" />

{/each}
