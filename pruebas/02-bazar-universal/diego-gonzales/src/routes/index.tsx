import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { SearchBox } from '~/components/search-box/search-box';
import CarImage from '~/media/courier_car.png?jsx';

export default component$(() => {
  return (
    <main class="px-5 flex flex-col gap-5 justify-center items-center min-h-screen text-center">
      <section class="flex flex-col justify-center items-center">
        <CarImage class="w-36" alt="Car image" />
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
      content: 'Bazar online home page',
    },
    {
      name: 'keywords',
      content: 'bazar, online, shopping, ecommerce, store, products, buy, sell',
    },
  ],
};
