import books from '$lib/books.json'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return books
}
