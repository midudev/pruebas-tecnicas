<script lang="ts">
  import { goto } from '$app/navigation'
  import SearchIcon from '$lib/icons/SearchIcon.svelte'
  import { baseUrl } from '$lib/services/urls'
  import { LocalRotes } from '$lib/utils/routes'
  function handlerSearch(queries: { q: string }) {
    const url = new URL(baseUrl + LocalRotes.books)
    const params = new URLSearchParams(url.search)

    Object.entries(queries).forEach(([key, value]) => {
      if (value) {
        params.append(key, String(value))
      }
    })
    url.search = params.toString()

    const { pathname, search } = url
    goto(pathname + search)
  }

  function onSubmit(
    event: Event & {
      readonly submitter: HTMLElement | null
    } & {
      currentTarget: EventTarget & HTMLFormElement
    }
  ) {

    const formEntries = new FormData(event.currentTarget)
    const fromData = Object.fromEntries(formEntries) as { text: string }

    handlerSearch({ q: fromData.text })
  }
</script>

<form on:submit|preventDefault={onSubmit} class="flex gap-[1px] rounded-md overflow-hidden">
  <input
    placeholder="Dune, 1984..."
    type="search"
    name="text"
    class="bg-tertiary/80 w-full py-1 px-2 outline-none focus:shadow-xl active:shadow-black/20 duration-300"
  />
  <button
    aria-label="search"
    class="bg-tertiary/80 p-1 hover:shadow-xl hover:shadow-black/20 duration-300"
    ><SearchIcon /></button
  >
</form>
