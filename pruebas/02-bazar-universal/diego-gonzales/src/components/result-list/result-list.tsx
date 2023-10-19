import { component$ } from '@builder.io/qwik';
import { ResultItem } from '../result-item/result-item';
import { type Product } from '~/interfaces/products-response.interface';

interface Props {
  products: Product[];
}

export const ResultList = component$<Props>(({ products }) => {
  return (
    <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id} class="cursor-pointer">
          <ResultItem product={product} />
        </li>
      ))}
    </ul>
  );
});
