import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { ResultInfo } from '~/components/result-info/result-info';
import { ResultList } from '~/components/result-list/result-list';
import { SEARCH_QUERY_KEY } from '~/constants';
import { type Product } from '~/interfaces/products-response.interface';

export const useResultsLoader = routeLoader$(async ({ query }) => {
  const searchQuery = query.get(SEARCH_QUERY_KEY);
  let url = `http://localhost:5173/api/items`;

  if (searchQuery) url += `?search=${searchQuery}`;

  const response = await fetch(url);
  const data = (await response.json()) as Product[];
  return data;
});

export default component$(() => {
  const results = useResultsLoader();

  return (
    <div class="">
      <section class="mb-5">
        <ResultInfo />
      </section>
      <section>
        {results.value.length > 0 ? (
          <ResultList products={results.value} />
        ) : (
          <p>No results found</p>
        )}
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Search results',
  meta: [
    {
      name: 'description',
      content: 'Bazar Online search results page',
    },
    {
      name: 'keywords',
      content: 'bazar, online, shopping, ecommerce, store, products, buy, sell',
    },
    {
      name: 'og:title',
      content: 'Bazar Online',
    },
    {
      name: 'og:description',
      content: 'Bazar Online search results page',
    },
    {
      name: 'og:image',
      content: 'https://picsum.photos/1200/630',
    },
  ],
};
