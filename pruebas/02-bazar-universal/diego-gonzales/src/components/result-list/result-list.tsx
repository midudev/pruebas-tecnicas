import { component$ } from '@builder.io/qwik';
import { ResultItem } from '../result-item/result-item';
import { type Product } from '~/interfaces/products-response.interface';

interface Props {
  products: Product[];
}

export const ResultList = component$<Props>(({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ResultItem product={product} />
        </li>
      ))}
    </ul>
  );
});
