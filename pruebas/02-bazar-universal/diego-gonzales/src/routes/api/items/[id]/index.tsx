import type { RequestHandler } from '@builder.io/qwik-city';
import PRODUCTS from '../../../../../public/data/products.json';

export const onGet: RequestHandler = async ({ params, json }) => {
  const { id } = params;
  const product = PRODUCTS.products.find((p) => p.id === +id);

  if (!product) {
    json(404, { statusCode: 404, message: 'Product not found' });
    return;
  }

  json(200, product);
};
