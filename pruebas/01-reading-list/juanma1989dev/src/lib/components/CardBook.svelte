<script>
    import { createEventDispatcher } from "svelte";
    import BadgeBookDetail from "$lib/components/BadgeBookDetail.svelte"

    export let book
    
    let dispatch = createEventDispatcher();

    function handleClickAddBookToReadingList(book) {
        dispatch("addBookToReadingList", {book});
    }
</script>

<article class="flex flex-col sm:flex-row gap-4 rounded-lg border dark:border-none rounded-lg shadow dark:bg-slate-700 " >
    
    <img class="object-cover rounded-t-lg h-full w-[120px] md:w-[100px] md:rounded-none md:rounded-l-lg " 
        src={ book.cover } alt={book.title}
    >

    <div>
        <h5 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
            {book.title}
            <div class="flex flex-row my-4">
                <BadgeBookDetail>Género: {book.genre}</BadgeBookDetail>
                <BadgeBookDetail>Páginas: {book.pages}</BadgeBookDetail>
            </div>
        </h5>
        
        <p class="mb-3 font-normal text-gray-700 dark:text-white">{book.synopsis}</p>

        <button 
            type="button" 
            class="py-1 px-3 mr-1 mb-1 text-gray-900 focus:outline-none bg-white dark:bg-sky-800 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-300 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            on:click={ () => { handleClickAddBookToReadingList(book) }}
        >
            Agregar
        </button>

        <a  
            href={`/book/${book.ISBN}`}
            class="py-1 px-3 mr-1 mb-1 text-gray-900 focus:outline-none bg-whit dark:bg-sky-800 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-300 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
            Ver detalle
        </a>
    </div>
</article>