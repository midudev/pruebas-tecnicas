import { test, expect } from '@playwright/test';
import data from '../books.json';

const booksAvailableCount = data.library.length;
const LONG_PRESS = 600;
const bookTitle = data.library[2].book.title;

const bookGenre = data.library[2].book.genre;
const countBookGenre = data.library.filter(({book}) => book.genre === bookGenre).length;

test.describe('Specific mobile block', () => {
  test('Add to reading list (touch)', async ({ page }) => {
    await page.goto('/');

    // Contador libros disponibles
    await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());

    await page.getByRole('img', { name: bookTitle }).tap()
    await expect(page.getByTestId('books-available-list')).toHaveText(booksAvailableCount.toString());
    
    await page.getByRole('img', { name: bookTitle }).dispatchEvent('touchstart');
    await page.waitForTimeout(LONG_PRESS);
    await page.getByRole('img', { name: bookTitle }).dispatchEvent('touchend');
    await expect(page.getByTestId('books-available-list')).toHaveText((booksAvailableCount - 1).toString());
    await expect(page.getByTestId('books-reading-list')).toHaveText('1');
  });
});  