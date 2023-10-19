import '../index.4cf3e048_309127a8.mjs';
import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_b406c3d0.mjs';
import { $ as $$Layout } from './_item__895f2530.mjs';
import 'react/jsx-runtime';
import 'react';
import 'swr';

const $$Astro = createAstro();
const prerender = false;
const $$Items = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Items;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Items" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-3 p-3"><div>${renderComponent($$result2, "DynamicProductsList", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/", "client:component-export": "DynamicProductsList" })}</div></main>` })}`;
}, "/home/jes/.projects/pruebas-tecnicas/pruebas/02-bazar-universal/Jes015/src/pages/items.astro", void 0);

const $$file = "/home/jes/.projects/pruebas-tecnicas/pruebas/02-bazar-universal/Jes015/src/pages/items.astro";
const $$url = "/items.html";

export { $$Items as default, $$file as file, prerender, $$url as url };
