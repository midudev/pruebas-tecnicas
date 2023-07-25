<script lang='ts' context='module'>

  import "../app.css";

  import { Modal } from '$features/modal'
  import { overrideItemIdKeyNameBeforeInitialisingDndZones } from "svelte-dnd-action";

  import Sidebar from "$components/sidebar.svelte";
  import { BookList } from "$features/booklist";

  // We will only be dragging book objects, which 'ID' is their ISBN.
  overrideItemIdKeyNameBeforeInitialisingDndZones('ISBN');

</script>

<header class='sticky top-0 row-start-1 w-full h-header bg-white z-10 border-b-2 p-4'>
  My Books
</header>


<main class="grid grid-cols-main row-start-2 w-full">

  <Sidebar />

  <section class='col-start-2 overflow-y-auto p-6'>
    <slot />
  </section>

  <aside class='sticky top-header w-96 h-sidebar col-start-3 border-l-2'>
    <BookList name='To Read' />
  </aside>

</main>


<Modal show={true} >
  <p>Hello World!</p>
</Modal>
