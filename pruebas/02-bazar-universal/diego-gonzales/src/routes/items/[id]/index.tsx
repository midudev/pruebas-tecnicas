import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <figure>
        <img
          src="https://picsum.photos/1200/630"
          alt="Product"
          width={100}
          height={100}
        />
      </figure>
      <section>
        <h1>Product name</h1>
        <p>Product price</p>
        <p>Product rating</p>
        <p>Product description</p>
      </section>

      <button class="btn btn-primary">Buy</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Product',
  meta: [
    {
      name: 'description',
      content: 'Bazar Online product page',
    },
    {
      name: 'keywords',
      content: 'bazar, online, shopping, ecommerce, store, products, buy, sell',
    },
  ],
};
