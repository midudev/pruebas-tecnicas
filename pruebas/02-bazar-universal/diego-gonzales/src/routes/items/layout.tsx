import { Slot, component$ } from '@builder.io/qwik';
import { SearchBox } from '~/components/search-box/search-box';
import CarImage from '~/media/courier_car.png?jsx';

export default component$(() => {
  return (
    <>
      <header class="p-4 flex gap-4 items-center justify-center">
        <CarImage class="w-10" alt="Car image" />
        <SearchBox />
      </header>

      <main class="px-4 min-h-[calc(100vh-80px)] max-w-7xl mx-auto">
        <Slot />
      </main>
    </>
  );
});
