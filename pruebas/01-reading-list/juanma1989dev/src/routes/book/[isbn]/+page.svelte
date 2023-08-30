<script>
	import BadgeBookDetail from '$lib/components/BadgeBookDetail.svelte';

    export let data
    
    const {book} = data
</script>

<section class="grid grid-cols-6 gap-2 h-full">
    <section class="col-span-2 flex flex-col justify-center content-center">
        <img src={ book.cover} alt={book.title} class="h-4/6 object-contain" />
    </section>

    <section class="col-span-4 col-span-2 flex flex-col justify-center content-center">

        <a href="/" class="my-8 w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           
            <svg class="w-5 h-5 mx-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            Regresar
            <span class="sr-only"> Regresar</span>
        </a>
       
        <h2 class="text-4xl  ">{book.title}</h2>

        <div class="flex flex-row my-4">
            <BadgeBookDetail>Género  : {book.genre}</BadgeBookDetail>
            <BadgeBookDetail>Páginas : {book.pages}</BadgeBookDetail>
            <BadgeBookDetail>Año     : {book.year}</BadgeBookDetail>
        </div>
        
        <p class="my-2">{book.synopsis}</p>        

        <div class="my-2">
            <strong>Autor : </strong> {book.author.name}
        </div>

        <div class="my-2">
            <strong>Otros libros del autor</strong>
            <ul class="list-disc list-inside">
                {#each book.author.otherBooks as otherBook}
                    <li>{otherBook}</li>
                {/each}
            </ul>
        </div>
    </section>
</section>
