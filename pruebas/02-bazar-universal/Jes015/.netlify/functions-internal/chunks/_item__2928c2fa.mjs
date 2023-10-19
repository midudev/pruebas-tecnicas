export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/_item__bbe90bd0.mjs').then(n => n._);

export { page };
