import { test, expect } from '@playwright/test';
import data from '../books.json';

const booksAvailableCount = data.library.length;
const LONG_PRESS = 600;
const bookTitle = data.library[2].book.title;

const bookGenre = data.library[2].book.genre;
const countBookGenre = data.library.filter(({book}) => book.genre === bookGenre).length;

test('Initial render', async ({ page }) => {
  await page.goto('/');

  // Contador libros disponibles
  await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());

  // Contar las portadas mostradas
  await expect(await page.getByRole('listitem').count()).toBe(booksAvailableCount);
  
});

test('Add to reading list', async ({ page }) => {
  await page.goto('/');

  // Contador libros disponibles
  await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());

  await page.getByRole('img', { name: bookTitle }).click();
  await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());
  
  await page.getByRole('img', { name: bookTitle }).click({delay: LONG_PRESS});
  await expect(page.getByTestId('books-available-list')).toHaveText((booksAvailableCount - 1).toString());
  await expect(page.getByTestId('books-reading-list')).toHaveText('1');
});

test('Remove from reading list', async ({ page }) => {
  await page.goto('/');

  // Contador libros disponibles
  await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());

  await page.getByRole('img', { name: bookTitle }).click();
  await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());
  
  // Long press
  await page.getByRole('img', { name: bookTitle }).click({delay: LONG_PRESS});
  await expect(page.getByTestId('books-available-list')).toHaveText((booksAvailableCount - 1).toString());
  await expect(page.getByTestId('books-reading-list')).toHaveText('1');

  await page.getByRole('img', { name: bookTitle }).click({delay: LONG_PRESS});
  await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());
  await expect(page.getByTestId('books-reading-list')).toBeNull;

});

test('Filter by genre', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('combobox', { name: 'Filter by genre' }).selectOption(bookGenre);
  await expect(page.getByTestId('books-available-list')).toHaveText(countBookGenre.toString());
  await expect(await page.getByRole('listitem').count()).toBe(countBookGenre);

});

test('Long press only works with main button', async ({ page }) => {
  await page.goto('/');

  // Contador libros disponibles
  expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());

  await page.getByRole('img', { name: bookTitle }).click();
  await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());
  
  await page.getByRole('img', { name: bookTitle }).click({button: 'right', delay: LONG_PRESS});
  await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());
  await expect(page.getByTestId('books-reading-list')).toBeNull;
});

test('Persist state on reload', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('combobox', { name: 'Filter by genre' }).selectOption(bookGenre);
  await expect(page.getByTestId('books-available-list')).toHaveText(countBookGenre.toString());
  await expect(await page.getByRole('listitem').count()).toBe(countBookGenre);

  await page.reload();

  await expect(page.getByRole('combobox', { name: 'Filter by genre' })).toHaveValue(bookGenre);

});