<script>
  import { asideState } from '../store/aside-store'
</script>

{#if $asideState.readingListIsOpen}
  <aside class="fixed inset-y-0 right-0 z-10 w-2/6 bg-aside">
    <div class="h-full flex flex-col overflow-y-auto bg-white shadow-xl">
      <p>Esto es el aside de reading list</p>
    </div>
  </aside>
{/if}
