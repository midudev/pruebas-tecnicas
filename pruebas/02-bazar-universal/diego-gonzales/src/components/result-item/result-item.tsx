import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { type Product } from '~/interfaces/products-response.interface';

interface Props {
  product: Product;
}

export const ResultItem = component$<Props>(({ product }) => {
  const navigate = useNavigate();

  return (
    <article onClick$={() => navigate(`/items/${product.id}`)}>
      <h2>Product</h2>
      <p>Description</p>
    </article>
  );
});
