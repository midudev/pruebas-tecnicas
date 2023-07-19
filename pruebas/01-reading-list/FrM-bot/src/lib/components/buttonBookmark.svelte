<script lang="ts">
	import BookmarkIcon from "$lib/icons/bookmark.svelte"
	import Button from "./button.svelte";
    import { bookmarks, addRemoveBookmark } from '$lib/store/bookmark'
	import type { Bookmark } from "$lib/store/bookmark"
    export let book: Bookmark

    $: isInBookmark = $bookmarks.find(bookInBookmark => bookInBookmark.id === book.id)
</script>

<button on:click={() => addRemoveBookmark(book)} class="absolute right-2 top-2 z-[2] border border-transparent backdrop-blur-sm rounded bg-dark-v1/50 p-1 hover:bg-dark-v1/90 hover:border-dark-v2 duration-200">
    <BookmarkIcon props={{ color: isInBookmark ? 'white' : 'transparent' }} />
</button>