import { $, component$, useSignal } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { SEARCH_QUERY_KEY } from '~/constants';

interface Props {
  showSearchButton?: boolean;
}

export const SearchBox = component$<Props>(({ showSearchButton = false }) => {
  const searchTerm = useSignal('');
  const navigation = useNavigate();

  const handleSubmit = $(() => {
    const inputValue = searchTerm.value.trim();
    if (inputValue.length === 0) return;
    navigation(`/items?${SEARCH_QUERY_KEY}=${inputValue}`);
  });

  return (
    <form onSubmit$={() => handleSubmit()} preventdefault:submit>
      <input
        type="text"
        placeholder="laptops, smartphones, etc."
        class="input input-bordered w-full max-w-xs"
        bind:value={searchTerm}
      />
      {showSearchButton && (
        <button type="submit" class="btn btn-primary btn-sm my-4">
          Search
        </button>
      )}
    </form>
  );
});
