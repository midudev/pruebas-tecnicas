import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { type ErrorResponse } from '~/interfaces/error-response.interface';
import type { Product } from '~/interfaces/products-response.interface';

export const useProductLoader = routeLoader$(async ({ params, fail }) => {
  const { id } = params;
  const url = `http://localhost:5173/api/items/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    const { statusCode, message } = (await response.json()) as ErrorResponse;
    return fail(statusCode, { message });
  }

  const data = (await response.json()) as Product;
  return data;
});

export default component$(() => {
  const product: any = useProductLoader();
  // console.log(product.value);

  if (product.value.message) {
    return (
      <div>
        <h3>{product.value.message}</h3>
      </div>
    );
  }

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
