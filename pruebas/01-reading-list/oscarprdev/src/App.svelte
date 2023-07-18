<script lang="ts">
  import BookModal from './core/components/BookModal.svelte'
  import Header from './core/components/Header.svelte'
  import Library from './core/components/Library.svelte'
  import ReadingList from './core/components/ReadingList.svelte'
  import RemoveModal from './core/components/RemoveModal.svelte'
</script>

<main class="relative h-screen overflow-y-hidden flex bg-light">
  <Header />
  <Library />
  <ReadingList />
  <BookModal />
  <RemoveModal />
</main>
