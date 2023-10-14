import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_3d269f4f.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_b406c3d0.mjs';
import './chunks/pages/generic_51b63812.mjs';
import './chunks/astro-assets-services_513c1900.mjs';

const _page0  = () => import('./chunks/generic_347ad438.mjs');
const _page1  = () => import('./chunks/index_039e3011.mjs');
const _page2  = () => import('./chunks/items_6e0fb2df.mjs');
const _page3  = () => import('./chunks/_item__8a7bbdbc.mjs');
const _page4  = () => import('./chunks/_item__2928c2fa.mjs');
const _page5  = () => import('./chunks/items_fa4e7e32.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.3.0_@types+node@20.8.6/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/items.astro", _page2],["src/pages/item/[item].astro", _page3],["src/pages/api/items/[item].ts", _page4],["src/pages/api/items.ts", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
