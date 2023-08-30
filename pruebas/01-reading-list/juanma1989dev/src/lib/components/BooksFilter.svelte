<script>
    export let catalogs
</script>


<section class="books-available col-span-9 flex flex-col">
    <section class="grid grid-cols-3 gap-3 col-span-4 my-2">
        <label>
            <span class="block font-bold ">Filtar por páginas({filters.pages})</span>
            <input type="range" name="pages" min="0" 
                max={catalogs.maxPages} 
                value={catalogs.maxPages} 
                on:change={handleChangePages}
                class="block w-full h-2 p-1 mt-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            > 
        </label>
    
        <label>
            <span class="block font-bold ">Filtrar por genero:</span>
            <select on:change={ handleChangeGender } class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value='' >Todos</option>
                {#each catalogs.genders as gender}
                <option value={gender}>{gender}</option>
                {/each}
            </select>
        </label>
    
        <label>
            <span class="block font-bold ">Filtrar por texto:</span>
            <input type="search" class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </label>
    </section>
    
    <section class="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
        {#each books.filtered as book}
            <CardBook book={book} on:addBookToReadingList={ handleAddBookToReadingList } />                
        {/each}
    </section>
</section>