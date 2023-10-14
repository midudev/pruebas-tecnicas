export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/_item__895f2530.mjs').then(n => n._);

export { page };
