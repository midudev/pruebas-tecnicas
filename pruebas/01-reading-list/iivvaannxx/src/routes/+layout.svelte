<script>
  import "../app.css";
</script>

<aside class='h-full hidden lg:block lg:w-80 bg-red-200 p-4'>
  Menu
</aside>

<main class="relative h-full w-full bg-green-200 overflow-auto">

  <header class='sticky inset-0 h-28 w-full bg-blue-200 p-4'>
    My Books
  </header>

  <section class='p-6'>
    <slot />
  </section>

</main>
