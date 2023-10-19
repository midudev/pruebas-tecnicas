import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { getRating } from '~/helpers/getRating';
import { type Product } from '~/interfaces/products-response.interface';

interface Props {
  product: Product;
}

export const ResultItem = component$<Props>(({ product }) => {
  const navigate = useNavigate();

  return (
    <article
      class="grid gap-4 grid-cols-[96px_1fr] md:grid-cols-1 justify-center items-center p-2 md:p-4 bg-neutral text-neutral-content shadow-xl"
      onClick$={() => {
        navigate(`/items/${product.id}`);
        if (!(document as any).startViewTransition) {
          return;
        }

        (document as any).startViewTransition(() => {
          navigate(`/items/${product.id}`);
        });
      }}
    >
      <figure class="md:flex md:justify-center">
        <img
          class="rounded-full object-cover w-24 h-24 md:w-32 md:h-32"
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
          style={{ 'view-transition-name': `product-${product.id}` }}
        />
      </figure>
      <div>
        <h2
          class="font-bold"
          style={{ 'view-transition-name': `product-title-${product.id}` }}
        >
          {product.title}
        </h2>
        <p>{product.description.slice(0, 50) + '...'}</p>
        <p class="flex gap-2 justify-between items-center">
          <span
            class="font-bold"
            style={{ 'view-transition-name': `product-price-${product.id}` }}
          >
            {product.price}$
          </span>
          <span
            class="text-sm"
            style={{ 'view-transition-name': `product-rating-${product.id}` }}
          >
            {getRating({ rating: product.rating })}
          </span>
        </p>
      </div>
    </article>
  );
});
