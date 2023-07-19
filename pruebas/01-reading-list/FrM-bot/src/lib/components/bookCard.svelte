<script lang="ts">
  import ButtonBookmark from './buttonBookmark.svelte'
  import type { Bookmark } from '$lib/store/bookmark'

  import Card from './card.svelte'
  import Link from './link.svelte'
  import { LocalRotes } from '$lib/utils/routes'

  export let book: Bookmark
</script>

<!-- <Link href='/' variant='gradient'> -->
<Card class="[--opacity:0] relative hover:[--opacity:1]">
  <ButtonBookmark {book} />
  <picture class="rounded relative grid overflow-hidden">
    <img
      class="sm:h-80 h-72 aspect-[4/2] w-full flex object-cover duration-200"
      src={book.cover}
      alt={book.title}
      loading="lazy"
    />
    <div
      class="absolute z-[1] w-full h-full backdrop-blur-[2px] inset-0 flex justify-center items-center bg-dark-v1/50 opacity-[var(--opacity)] duration-200 [box-shadow:inset_0px_0px_140px_30px_rgba(0,0,0,1);]"
    >
      <div class="flex flex-col items-center">
        <Link
          variant="text"
          href={LocalRotes.book.details(book.id)}
          class="flex-wrap px-2 flex text-center text-white">{book.title}</Link
        >
        <span class="text-xs opacity-70">{book.author}</span>
      </div>
    </div>
  </picture>
</Card>
<!-- </Link> -->
