import { Slot, component$ } from '@builder.io/qwik';
import { CarIcon } from '~/components/icons/icons';
import { SearchBox } from '~/components/search-box/search-box';

export default component$(() => {
  return (
    <>
      <header class="p-4 flex gap-4  items-center">
        <CarIcon width={40} height={40} />
        <SearchBox />
      </header>

      <main class="px-4">
        <Slot />
      </main>
    </>
  );
});
