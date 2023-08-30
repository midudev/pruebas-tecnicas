<script>
	import { onMount } from 'svelte';
	import {KEY_STORAGE_DATA} from '$lib/constants.js'
    import storageService from '$lib/services/storageService.js'
	
	import ListOfBookToRead from "$lib/components/ListOfBookToRead.svelte";
	import CounterBooks from '../lib/components/CounterBooks.svelte';
	import ListOfBooks from '$lib/components/ListOfBooks.svelte';

    export let data

    let books = {
        base     : [],
        filtered : [],
        toRead   : []
    }
       
    let filters = {
        gender : '',
        pages  : 0,
        search : ''
    }

    onMount(()=>{
        if(storageService.validateIfExistDataStorage()){
            const storageDataApp = storageService.getStoreData()
            books   = storageDataApp.books
            filters = storageDataApp.filters

        } else {
            books = {
                base     : data.streamed.books ,
                filtered : [...data.streamed.books],
                toRead   : []
            }

            filters = {
                gender : '',
                pages  : data.catalogs.maxPages,
                search : ''
            }
        }   
    }) 

    function handleRemoveBookFromListToRead(event){
        const {book} = event.detail
        
        const newListOfBooksToRead = books.toRead.filter(bookInList => {
            return bookInList.ISBN != book.ISBN
        })

        books.base     = [book, ...books.base]
        books.filtered = [book, ...books.filtered] 
        books.toRead   = [...newListOfBooksToRead]

        storageService.storageDataApp(books, filters)
    }

    function handleCheckChangesStorage(event){
        if(event.key == KEY_STORAGE_DATA){
           const data = storageService.getStoreData()
            books.base     = data.books.base     ?? []  
            books.filtered = data.books.filtered ?? []
            books.toRead   = data.books.toRead   ?? [] 
        }
    }
</script>


<svelte:window on:storage={ handleCheckChangesStorage } />

<CounterBooks books={books} />

<section class="grid grid-cols-12 gap-2 mt-4 mb-4">
    <ListOfBooks 
        bind:filters={ filters }
        bind:books={books}
        catalogs={data.catalogs}
    />

    <ListOfBookToRead 
        listOfBooksToRead={ books.toRead }   
        on:removeBookFromListToRead={handleRemoveBookFromListToRead}  
    />
</section>