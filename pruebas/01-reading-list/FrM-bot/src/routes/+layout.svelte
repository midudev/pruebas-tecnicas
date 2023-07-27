<script lang="ts">
  import '../app.css'
  import Header from '$lib/components/header.svelte'
  import Footer from '$lib/components/footer.svelte'
  import { bookmarksChannel, type Bookmark, bookmarks, BookmarkStore } from '$lib/store/bookmark'
  import { setLocalStorageValue } from '$lib/utils/localstorage'

  // @ts-ignore
  //   if (globalThis?.window?.document?.startViewTransition) {
  //     // @ts-ignore
  //     globalThis.window?.navigation?.addEventListener('navigate', (event) => {
  //       const toUrl = new URL(event.destination.url)
  //       // si es una pagina externa, cortamos la ejecución
  //       if (toUrl.origin !== location.origin) return
  //       event.intercept({
  //         async handler() {
  //           const response = await fetch(toUrl.pathname)
  //           const htmlRaw = await response.text()
  //           // @ts-ignore
  //           const [_, data] = htmlRaw.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  //           // @ts-ignore
  //           document?.startViewTransition(() => {
  //             const content = document.getElementById('content')
  //             // @ts-ignore
  //             content.innerHTML = data
  //           })
  //         }
  //       })
  //     })
  //   }

  bookmarksChannel?.addEventListener('message', (event) => {
    const { book, id } = event.data as { book?: Bookmark, id: string }

    book ? BookmarkStore.add(book) : BookmarkStore.remove(id)
  })
</script>

<Header />
<!-- <button on:click={sendMsg}>Sync</button> -->
<main class="min-h-[90vh] min-h-[90dvh] my-4 xl:max-w-screen-content max-w-[95vw] m-auto">
  <slot />
</main>
<Footer />
