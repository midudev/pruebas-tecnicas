<script lang='ts' context='module'>

  import "../app.css";
  import { Modal } from '$features/modal';

</script>

<aside class='h-full border-r-2 hidden lg:block lg:w-80 p-4'>
  Menu
</aside>

<main class="relative h-full w-full overflow-auto">

  <header class='sticky inset-0 border-b-2 h-28 w-full p-4'>
    My Books
  </header>

  <section class='p-6'>
    <slot />
  </section>

</main>

<Modal show={true} >
  <p>Hello World!</p>
</Modal>
