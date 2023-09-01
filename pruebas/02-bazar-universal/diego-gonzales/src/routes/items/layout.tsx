import { Slot, component$ } from '@builder.io/qwik';
import { CarIcon } from '~/components/icons/icons';
import { SearchBox } from '~/components/search-box/search-box';

export default component$(() => {
  return (
    <>
      <header class="p-4 flex gap-4 justify-center items-center">
        <CarIcon width={35} height={35} />
        <SearchBox />
      </header>

      <main>
        <Slot />
      </main>
    </>
  );
});
