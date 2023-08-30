<script>
    export let book
    
    import { createEventDispatcher } from 'svelte'

    let dispatch = createEventDispatcher()

    function removeBookFromReadingList(book){
        dispatch('removeBookFromListToRead', { book })
    }
</script>

<article class="relative card-book-for-reading overflow-hidden transition duration-150">
    <img 
        class="object-fill rounded-t-lg w-full h-full md:rounded-none" 
        src={book.cover} alt={book.title}
    >
    <section class="info-book-for-reading absolute w-full h-full text-white flex flex-col transition ease-in-out delay-30">
        <div class="w-full h-full relative flex flex-col justify-center content-center text-center">
            <h3 class="text-center font-bold" >{book.title}</h3>
            <button 
                class="w-fit p-1 my-1 mx-auto text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"    
                type="button" 
                on:click={ () =>{ removeBookFromReadingList(book) }}
            >
                Quitar
            </button>
        </div>
    </section>
</article>

<style>
    .card-book-for-reading:hover .info-book-for-reading{
        top : 0;
        background: #1f3d4738;
        backdrop-filter: blur(2px);
    }
</style>