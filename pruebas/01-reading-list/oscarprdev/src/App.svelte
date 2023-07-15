<script lang="ts">
  import BookModal from './core/components/BookModal.svelte'
  import Header from './core/components/Header.svelte'
  import Library from './core/components/Library.svelte'
  import { modalState } from './core/store/modal-store'
</script>

<main class="relative h-screen overflow-y-hidden">
  <Header />
  <Library />
  <BookModal />
</main>
