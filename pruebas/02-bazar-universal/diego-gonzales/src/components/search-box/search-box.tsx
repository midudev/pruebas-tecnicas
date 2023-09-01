import { component$ } from '@builder.io/qwik';

export const SearchBox = component$(() => {
  return (
    <>
      <input
        type="text"
        placeholder="laptops, smartphones, etc."
        class="input input-bordered w-full max-w-xs"
      />
    </>
  );
});
