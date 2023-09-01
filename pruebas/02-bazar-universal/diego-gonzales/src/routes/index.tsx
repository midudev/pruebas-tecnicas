import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { CarIcon } from '~/components/icons/icons';
import { SearchBox } from '~/components/search-box/search-box';

export default component$(() => {
  return (
    <main class="px-5 flex flex-col gap-5 justify-center items-center min-h-screen text-center">
      <section class="flex flex-col justify-center items-center">
        <CarIcon width={60} height={60} />
        <h1 class="text-2xl font-bold">Bazar Online</h1>
      </section>
      <SearchBox showSearchButton={true} />
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Bazar Online home page',
    },
    {
      name: 'keywords',
      content: 'bazar, online, shopping, ecommerce, store, products, buy, sell',
    },
    {
      name: 'og:title', // es el titulo que se va a mostrar en las redes sociales cuando se comparta el link
      content: 'Bazar Online',
    },
    {
      name: 'og:description', // es la descripcion que se va a mostrar en las redes sociales cuando se comparta el link
      content: 'Bazar Online home page',
    },
    {
      name: 'og:image', // es la imagen que se va a mostrar en las redes sociales cuando se comparta el link
      content: '/images/shop.jpg',
    },
  ],
};
