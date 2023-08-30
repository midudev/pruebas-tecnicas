<script>
   export let books
</script>

<section >
    <hgroup>
        <h3 class="text-xl font-bold inline mr-5">Libros Filtrados  : {books.filtered.length}</h3>
        <h3 class="text-xl font-bold inline mr-5">Libros Disponibles: {books.base.length}</h3>
    </hgroup>
</section>