import { type RequestHandler } from '@builder.io/qwik-city';
import PRODUCTS from '../../../../public/data/products.json';

export const onGet: RequestHandler = async ({ query, json }) => {
  const searchQuery = query.get('q') ?? '';

  const filteredProducts = PRODUCTS.products.filter(
    ({ title, description, category }) => {
      return (
        title.toLowerCase().includes(searchQuery!.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery!.toLowerCase()) ||
        category.toLowerCase().includes(searchQuery!.toLowerCase())
      );
    }
  );

  json(200, filteredProducts);
};
