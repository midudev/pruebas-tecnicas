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
      class="grid gap-4 grid-cols-[96px_1fr] justify-center items-center p-2 bg-neutral text-neutral-content shadow-xl"
      onClick$={() => navigate(`/items/${product.id}`)}
    >
      <figure>
        <img
          class="rounded-full object-cover w-24 h-24"
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
        />
      </figure>
      <div>
        <h2 class="font-bold">{product.title}</h2>
        <p>{product.description.slice(0, 50) + '...'}</p>
        <p class="flex gap-2 justify-between items-center">
          <span class="font-bold">{product.price}$</span>
          <span class="text-sm">{getRating({ rating: product.rating })}</span>
        </p>
      </div>
    </article>
  );
});
