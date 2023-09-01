import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { ResultInfo } from '~/components/result-info/result-info';
import { ResultList } from '~/components/result-list/result-list';

export default component$(() => {
  return (
    <div>
      <section>
        <ResultInfo />
      </section>
      <section>
        <ResultList />
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
