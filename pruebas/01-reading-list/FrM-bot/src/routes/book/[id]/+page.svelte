<script lang="ts">
  import { fly, slide } from 'svelte/transition';
  import ButtonBookmark from '$lib/components/buttonBookmark.svelte'
  import Image from '$lib/components/image.svelte'
  import SectionSubTitleCard from '$lib/components/sectionSubTitleCard.svelte'
  import SubSection from '$lib/components/subSection.svelte'
  import { LocalRotes } from '$lib/utils/routes'
  import type { PageData } from './$types'
  import { onMount, onDestroy } from 'svelte'

  export let data: PageData
  $: ({ book } = data)
  onMount(() => {
    const header = globalThis.document.querySelector('#main-header')
    if (globalThis?.window?.scrollY === 0 && header?.classList.contains('main-header')) {
      header?.classList.remove('main-header')
    }
    globalThis.window.onscroll = (e) => {
      if (globalThis?.location.pathname === LocalRotes.book.details(data.book.ISBN)) {
        if (globalThis?.window?.scrollY >= 10 && !header?.classList.contains('main-header')) {
          header?.classList.add('main-header')
        }
        if (globalThis?.window?.scrollY === 0 && header?.classList.contains('main-header')) {
          header?.classList.remove('main-header')
        }
      }
    }
  })
  onDestroy(() => {
    const header = globalThis.document?.querySelector('#main-header')
    header?.classList.add('main-header')
  })
</script>

<svelte:head>
  <title>{book.title}</title>
</svelte:head>

<div
  class="absolute w-full h-[450px] left-0 top-0 -z-[1] blur-sm"
  style={`background: linear-gradient(to top, rgba(20, 20, 20, 1), rgba(20, 20, 20, .9), rgba(20, 20, 20, .8), rgba(20, 20, 20, .7), rgba(20, 20, 20, .6)), url("${book.cover}") no-repeat 0%/0%;background-size: cover;background-position: center 10%;`}
  transition:slide={{ duration: 200, delay: 100, axis: 'y' }}
/>
<section
  class="grid sm:grid-cols-[minmax(80px,300px)_1fr] grid-cols-1 sm:items-end items-center"
  transition:fly={{ x: -200, duration: 200 }}
>
  <!-- <div class="backdrop-blur [box-shadow:inset_0px_0px_120px_150px_rgba(20_20_20_/_1);]"> -->
  <div class="[--opacity:0] relative hover:[--opacity:1]">
    <Image src={book.cover} alt={book.title} class="max-w-sm shadow-lg shadow-tertiary/20 w-full" />
    <div
      class="absolute z-[1] rounded inset-1 flex justify-center items-center opacity-[var(--opacity)] duration-200"
    >
      <div class="flex flex-col items-center">
        <ButtonBookmark
          book={{
            id: book.ISBN,
            title: book.title,
            author: book.author.name,
            cover: book.cover,
            genre: book.genre,
            pages: book.pages
          }}
        />
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-end w-full">
    <div
      class="mb-8 mt-5 bg-gradient-to-r from-tertiary/80 to-transparent p-2 border-l rounded-r-sm w-full"
    >
      <h1 class="text-2xl font-semibold">{book.title}</h1>
      <span>{book.genre}</span>
      <h3 class="text-xs">{book.author.name}</h3>
    </div>
  </div>
  <!-- </div> -->
</section>
<section
  class="grid sm:grid-cols-[minmax(80px,300px)_1fr] grid-cols-1 md:mt-8 md:gap-0 gap-4"
  transition:fly={{ y: -200, duration: 200 }}
>
  <div class="flex flex-col gap-4">
    <SubSection title="Páginas" description={book.pages} />
    <SubSection title="Ano" description={book.year} />
    <SubSection title="Género" description={book.genre} />
    <SubSection title="Autor" description={book.author.name} />
    <SubSection title="Libros">
      {#each data?.book.author.otherBooks as book}
        <span class="bg-gradient-to-r from-tertiary to-transparent p-2 border-l">{book}</span>
      {/each}
    </SubSection>
  </div>
  <div class="flex flex-col gap-4">
    <SectionSubTitleCard>Synopsis</SectionSubTitleCard>
    <p>{book.synopsis}</p>
  </div>
</section>
