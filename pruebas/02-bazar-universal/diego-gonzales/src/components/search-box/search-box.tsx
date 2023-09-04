import { $, component$, useSignal } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { SearchIcon } from '../icons/icons';

interface Props {
  showSearchButton?: boolean;
}

export const SearchBox = component$<Props>(({ showSearchButton = false }) => {
  const searchTerm = useSignal('');
  const navigation = useNavigate();

  const handleSubmit = $(() => {
    const inputValue = searchTerm.value.trim();
    if (inputValue.length === 0) return;
    navigation(`/items?search=${inputValue}`);
  });

  return (
    <form
      class="w-full max-w-md"
      onSubmit$={() => handleSubmit()}
      preventdefault:submit
    >
      <label class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="laptops, smartphones, etc."
          class="input input-bordered w-full max-w-sm placeholder:italic placeholder:opacity-50 pl-9"
          bind:value={searchTerm}
        />
      </label>

      {showSearchButton && (
        <button type="submit" class="btn btn-primary btn-sm my-4">
          Search
        </button>
      )}
    </form>
  );
});
