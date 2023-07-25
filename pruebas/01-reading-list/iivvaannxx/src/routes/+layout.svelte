<script lang='ts' context='module'>

  import "../app.css";

  import { Modal } from '$features/modal'
  import { BookList } from "$features/booklist";
  import Sidebar from '$lib/components/sidebar.svelte'

  import { overrideItemIdKeyNameBeforeInitialisingDndZones } from "svelte-dnd-action";

  // We will only be dragging book objects, which 'ID' is their ISBN.
  overrideItemIdKeyNameBeforeInitialisingDndZones('ISBN');

</script>

<header class='fixed inset-0 bg-white z-10 border-b-2 h-28 w-full p-4'>
  My Books
</header>


<main class="relative h-full w-full mt-28 flex">

  <Sidebar />

  <section class='p-6 bg-red flex-grow'>
    <slot />
  </section>

  <aside class='h-full p-4 border-l-2 hidden lg:block lg:w-96'>

    <BookList name='test' />

  </aside>


</main>

<Modal show={true} >
  <p>Hello World!</p>
</Modal>
