import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { ResultInfo } from '~/components/result-info/result-info';
import { ResultList } from '~/components/result-list/result-list';
import { type Product } from '~/interfaces/products-response.interface';

export const useResultsLoader = routeLoader$(
  async ({ query, url: { origin } }) => {
    const searchQuery = query.get('search');
    let url = `${origin}/api/items`;

    if (searchQuery) url += `?q=${searchQuery}`;

    const response = await fetch(url);
    const data = (await response.json()) as Product[];
    return data;
  }
);

export default component$(() => {
  const results = useResultsLoader();

  return (
    <div class="mb-5">
      <section class="mb-5">
        <ResultInfo products={results.value} />
      </section>
      <section>
        {results.value.length > 0 ? (
          <ResultList products={results.value} />
        ) : (
          <p class="text-center">No results found</p>
        )}
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Product List',
  meta: [
    {
      name: 'description',
      content: 'Bazar online product list page',
    },
    {
      name: 'keywords',
      content: 'bazar, online, shopping, ecommerce, store, products, buy, sell',
    },
  ],
};
