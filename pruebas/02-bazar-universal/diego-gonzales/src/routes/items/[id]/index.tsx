import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { getRating } from '~/helpers/getRating';
import { type ErrorResponse } from '~/interfaces/error-response.interface';
import type { Product } from '~/interfaces/products-response.interface';

export const useProductLoader = routeLoader$(
  async ({ params, fail, url: { origin } }) => {
    const { id } = params;
    const url = `${origin}/api/items/${id}`;

    const response = await fetch(url);

    if (!response.ok) {
      const { statusCode, message } = (await response.json()) as ErrorResponse;
      return fail(statusCode, { message });
    }

    const data = (await response.json()) as Product;
    return data;
  }
);

export default component$(() => {
  const product: any = useProductLoader(); // here we typecast to any because there is a Qwik bug (https://github.com/BuilderIO/qwik/pull/3977)

  if (product.value.message) {
    return (
      <div>
        <h3>{product.value.message}</h3>
      </div>
    );
  }

  return (
    <div class="h-[calc(100vh-80px)] relative">
      <div class="grid gap-5 justify-center items-center justify-items-center">
        <section class="grid gap-4 grid-cols-[3fr_1fr] justify-center items-center justify-items-center">
          <img
            class="rounded-full object-cover w-48 h-48"
            src={product.value.thumbnail}
            alt="Product"
            width={200}
            height={200}
          />
          <ul class="grid gap-2">
            {product.value.images
              .slice(0, 3)
              .map((image: string, index: number) => (
                <li key={index}>
                  <img
                    class="rounded-full object-cover w-16 h-16"
                    src={image}
                    alt={`Image ${index + 1} for ${product.title}`}
                    width={64}
                    height={64}
                  />
                </li>
              ))}
          </ul>
        </section>

        <section class="text-center">
          <h3 class="text-2xl font-bold">{product.value.title}</h3>
          <div class="flex justify-center items-center gap-4">
            <p class="flex flex-col">
              <span class="font-bold">{product.value.price}$</span>
              <span class="text-xs">{product.value.stock} disponibles</span>
            </p>
            <p>{getRating({ rating: product.value.rating })}</p>
          </div>
        </section>

        <section class="max-w-md">
          <p>{product.value.description}</p>
        </section>
      </div>

      <div class="absolute bottom-4 md:static md:mt-10 w-full text-center">
        <button class="btn btn-primary w-full max-w-md">Buy</button>
      </div>
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
