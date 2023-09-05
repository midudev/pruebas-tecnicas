import { component$, useStore, useTask$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import type { Product } from '~/interfaces/products-response.interface';
import { CATEGORIES, CATEGORIES_BADGE_CLASSES, type Category } from '~/types.d';

interface Props {
  products: Product[];
}

const initialResults = {
  [CATEGORIES.LAPTOPS]: 0,
  [CATEGORIES.SMARTPHONES]: 0,
  [CATEGORIES.HOME_DECORATION]: 0,
  [CATEGORIES.SKINCARE]: 0,
  [CATEGORIES.FRAGRANCES]: 0,
  [CATEGORIES.GROCERIES]: 0,
};

export const ResultInfo = component$<Props>(({ products }) => {
  const resultsForCategory = useStore(initialResults);

  const location = useLocation();
  const searchQuery = location.url.searchParams.get('search');

  useTask$(({ track }) => {
    const value = track(() => products);

    for (const key in resultsForCategory) {
      resultsForCategory[key as Category] = 0;
    }

    value.forEach((product) => {
      resultsForCategory[product.category as Category]++;
    });
  });

  return searchQuery ? (
    <div>
      <p class="text-sm">
        Results for "{searchQuery}":{' '}
        <span class="font-bold">{products.length} items</span>
      </p>

      <section class="flex flex-wrap gap-2 mt-2">
        {Object.keys(resultsForCategory).map((category) => {
          const categoryKey = category as Category;
          const count = resultsForCategory[categoryKey];
          const badgeClass = CATEGORIES_BADGE_CLASSES[categoryKey];

          return count > 0 ? (
            <span key={category} class={`badge ${badgeClass}`}>
              {categoryKey}: {count}
            </span>
          ) : null;
        })}
      </section>
    </div>
  ) : null;
});
