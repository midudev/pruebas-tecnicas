import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import type { Product } from '~/interfaces/products-response.interface';

interface Props {
  products: Product[];
}

export const ResultInfo = component$<Props>(({ products }) => {
  const location = useLocation();
  const searchQuery = location.url.searchParams.get('search');

  return (
    <div>
      <p class="text-sm">
        Results for "{searchQuery}":{' '}
        <span class="font-bold">{products.length} items</span>
      </p>
    </div>
  );
});
