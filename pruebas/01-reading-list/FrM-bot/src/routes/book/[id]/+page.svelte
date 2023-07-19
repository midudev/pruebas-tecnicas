<script lang="ts">
  import Image from '$lib/components/image.svelte'
  import { LocalRotes } from '$lib/utils/routes'
  import type { PageData } from './$types'
  import { onMount } from 'svelte'

  export let data: PageData
  onMount(() => {
    if (location.pathname === LocalRotes.book.details(data.book.ISBN)) {
        const header = document.querySelector('#main-header')
        window.onscroll = (e) => {
          if (window.scrollY >= 10 && !header?.classList.contains('main-header')) {
            header?.classList.add('main-header')
          }
          if (window.scrollY === 0 && header?.classList.contains('main-header')) {
            header?.classList.remove('main-header')
          }
        }
    }
  })
</script>

<svelte:head>
  <title>{data.book.title}</title>
</svelte:head>

<div
  class="absolute w-full h-[450px] left-0 top-0 -z-[1] blur-sm"
  style={`background: linear-gradient(to top, rgba(20, 20, 20, 1), rgba(20, 20, 20, .9), rgba(20, 20, 20, .8), rgba(20, 20, 20, .7), rgba(20, 20, 20, .6)), url("${data.book.cover}") no-repeat 0%/0%;background-size: cover;background-position: center 10%;`}
/>
<section class="flex sm:flex-row flex-col sm:items-end items-center">
  <!-- <div class="backdrop-blur [box-shadow:inset_0px_0px_120px_150px_rgba(20_20_20_/_1);]"> -->
  <Image
    src={data.book.cover}
    alt={data.book.title}
    class="max-w-sm shadow-md shadow-black/20 w-96"
  />
  <div class="flex flex-col justify-end w-full">
    <div
      class="mb-10 mt-5 bg-gradient-to-r from-dark-v1 to-transparent p-2 rounded-r-sm w-full border-l"
    >
      <h1 class="text-2xl font-semibold">{data.book.title}</h1>
      <h3>{data.book.author.name}</h3>
    </div>
  </div>
  <!-- </div> -->
</section>
