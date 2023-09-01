import { type RequestHandler } from '@builder.io/qwik-city';
import { SEARCH_QUERY_KEY } from '~/constants';
import PRODUCTS from '../../../../public/data/products.json';

export const onGet: RequestHandler = async ({ query, json }) => {
  const searchQuery = query.get(SEARCH_QUERY_KEY) ?? '';

  const filteredProducts = PRODUCTS.products.filter((product) => {
    return product.title.toLowerCase().includes(searchQuery!.toLowerCase());
  });

  json(200, filteredProducts);
};
