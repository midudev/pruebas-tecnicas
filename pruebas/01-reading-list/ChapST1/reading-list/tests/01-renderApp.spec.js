// Mi primer test :)

import { test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await page.getByRole('heading', { name: 'Biblioteca' }).click()

  await page.getByText('Libros disponibles: 13').click()
  await page.getByText('Libros disponibles: 0').click()

  await page.getByRole('heading', { name: 'Libros' }).click()
  await page.getByRole('heading', { name: 'Lista de lectura' }).click()

  await page.getByText('No hay libros en la lista de lectura 🥲').click()

  await page.getByRole('img', { name: 'cover del libro: El Señor de los Anillos' }).click()
  await page.getByRole('img', { name: 'cover del libro: Juego de Tronos' }).click()
  await page.getByRole('img', { name: 'cover del libro: Harry Potter y la piedra filosofal' }).click()
  await page.getByRole('img', { name: 'cover del libro: 1984' }).click()
  await page.getByRole('img', { name: 'cover del libro: Frankenstein' }).click()
  await page.getByRole('img', { name: 'cover del libro: El Señor de los Anillos' }).click()
  await page.getByRole('img', { name: 'cover del libro: Juego de Tronos' }).click()
  await page.getByRole('img', { name: 'cover del libro: Harry Potter y la piedra filosofal' }).click()
})
