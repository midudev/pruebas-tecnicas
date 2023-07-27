<script>
    export let listOfBooksToRead
   
	import CardBookToRead from '$lib/components/CardBookToRead.svelte';
</script>

<section class="col-span-3 flex- flex-col ">
    <h3 class="text-2xl tracking-tight text-gray-900 text-center px-2 py-6 flex flex-col justify-center content-center dark:text-white">
        Libros por leer ({ listOfBooksToRead.length })
    </h3>

    <section class="border border-gray-200 rounded-lg shadow flex flex-col p-1">
        <section class="grid grid-cols-1 md:grid-cols-2 gap-2 min-h-[100px]">
            {#each listOfBooksToRead as book }
                <CardBookToRead book={book} on:removeBookFromListToRead />
            {:else}
                <div class="w-full flex flex-col justify-center content-center col-span-2">
                    <h4 class="text-center">Agrega libros para leer</h4>
                </div>
            {/each}
        </section>
    </section>
</section>

