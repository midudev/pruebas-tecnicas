import type { PageLoad } from './$types';

import { getAllBooksMapped } from "$lib/services/books";

export const ssr = false;

export const load = (() => {
  const books = getAllBooksMapped();

  return { books };
}) satisfies PageLoad