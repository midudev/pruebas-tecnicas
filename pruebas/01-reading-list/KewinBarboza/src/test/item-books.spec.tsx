import { createDOM } from '@builder.io/qwik/testing'
import { describe, expect, test } from 'vitest'
import { ItemBooks } from '~/components/ui'

describe('Test component ItemBooks', () => {
  test("Render items books", async () => {
    const { render } = await createDOM()
    await render(
      <ItemBooks
        cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
        genre="Fantasía"
        name="J.R.R. Tolkien"
        pages={1200}
        synopsis="Una aventura épica en un mundo de fantasía llamado la Tierra Media."
        title="El Señor de los Anillos"
        year={1954}
        onClick$={() => { }}
      />
    )
  })

  test("Render title item book", async () => {
    const { render, screen } = await createDOM()
    await render(
      <ItemBooks
        cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
        genre="Fantasía"
        name="J.R.R. Tolkien"
        pages={1200}
        synopsis="Una aventura épica en un mundo de fantasía llamado la Tierra Media."
        title="El Señor de los Anillos"
        year={1954}
        onClick$={() => { }}
      />
    )

    const titleBook = screen.querySelector('h3')
    expect(titleBook?.outerHTML).toContain('El Señor de los Anillos')
  })

  test("Render cover item book", async () => {
    const { render, screen } = await createDOM()
    await render(
      <ItemBooks
        cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
        genre="Fantasía"
        name="J.R.R. Tolkien"
        pages={1200}
        synopsis="Una aventura épica en un mundo de fantasía llamado la Tierra Media."
        title="El Señor de los Anillos"
        year={1954}
        onClick$={() => { }}
      />
    )

    const srcImage = screen.querySelector('img')?.src
    expect(srcImage).toBe("https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg")
  })

  test("Render buttons actions", async () => {
    const { render, screen } = await createDOM()
    await render(
      <ItemBooks
        cover="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
        genre="Fantasía"
        name="J.R.R. Tolkien"
        pages={1200}
        synopsis="Una aventura épica en un mundo de fantasía llamado la Tierra Media."
        title="El Señor de los Anillos"
        year={1954}
        onClick$={() => { }}
      />
    )

    const btnAddToList = screen.querySelector('button')
    expect(btnAddToList?.outerHTML).toContain("Agregar a la lista")

    const linkShowAdd = screen.querySelector('a')
    expect(linkShowAdd?.innerHTML).toBe("Ver mas")
  })
})
