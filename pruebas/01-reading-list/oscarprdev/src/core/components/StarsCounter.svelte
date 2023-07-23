<script lang="ts">
  import { onMount } from 'svelte'
  import { StarIcon } from 'svelte-feather-icons'
  import type { Book } from '../types'
  import { readingListItemUsecase } from '../../features/reading-list-item'

  export let book: Book
  let hoveredIndex = null
  let stars = []

  const handleStarHover = (index: number) => {
    hoveredIndex = index
  }

  const handleStarLeave = () => {
    hoveredIndex = book.stars
  }

  const setStar = (index: number) => {
    readingListItemUsecase.setStars(index, book)
  }

  console.log(book)

  onMount(() => {
    hoveredIndex = book.stars

    stars = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
    }))
  })
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex gap-1" on:mouseleave={handleStarLeave}>
  {#each stars as star, _ (star.id)}
    <button
      on:mouseenter={() => handleStarHover(star.id)}
      on:click={() => setStar(star.id)}
    >
      <StarIcon
        size="24"
        class={star.id <= hoveredIndex ? 'fill-star text-dark' : 'text-dark'}
      />
    </button>
  {/each}
</div>
