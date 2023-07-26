import { component$, useComputed$, useVisibleTask$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { BooksList } from '~/components/books-list/books-list'
import { Filters } from '~/components/filters/filters'
import { Logo } from '~/components/logo/logo'
import { ReadingList } from '~/components/reading-list/reading-list'
import { useGlobalState } from '~/ctx/ctx'
import {
  FooterStyles,
  InnerWrapperStyles,
  OuterWrapperStyles,
  SubHeaderStyles,
} from './styles'
import { css } from '~/styled-system/css'
import { timeline, stagger, type TimelineDefinition } from 'motion'

export default component$(() => {
  const { booksWithUserPreferences } = useGlobalState()

  const readingList = useComputed$(() =>
    booksWithUserPreferences.value.filter((book) => book.isInReadingList)
  )

  useVisibleTask$(() => {
    const sectionBooks = document.querySelector(
      '[data-section="books"]'
    ) as HTMLElement
    const sectionReading = document.querySelector(
      '[data-section="reading"]'
    ) as HTMLElement

    setTimeout(() => {
      const books = sectionBooks.querySelectorAll('li')
      const spines = sectionReading.querySelectorAll('li')

      const sequence: TimelineDefinition = [
        [sectionBooks, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [sectionReading, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          books,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.1) },
        ],
        [
          spines,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
      ]

      timeline(sequence, {})
    }, 200)
  })

  return (
    <>
      <div class={OuterWrapperStyles}>
        <section
          data-section="reading"
          aria-label="Libros en la lista de lectura"
          class={css({
            maxWidth: 'var(--max-width-outer)',
            minWidth: '100%',
          })}
          style={{
            opacity: 0,
          }}
        >
          <header class={InnerWrapperStyles}>
            <Logo />
            <div class={SubHeaderStyles}>
              <span>
                <strong>Libros en la lista de lectura:</strong>{' '}
                {readingList.value.length}
              </span>
              <span>
                <strong>Número total de libros:</strong>{' '}
                {booksWithUserPreferences.value.length}
              </span>
            </div>
          </header>

          <ReadingList />
        </section>

        <section
          data-section="books"
          aria-label="Todos los libros disponibles"
          class={css({
            maxWidth: 'var(--max-width-outer)',
            minWidth: '100%',
          })}
          style={{
            opacity: 0,
          }}
        >
          <BooksList />
        </section>
      </div>

      <footer class={FooterStyles}>
        <p>
          App hecha con 💜 por{' '}
          <a
            class={css({
              color: 'blue',
            })}
            target="_blank"
            rel="nofollow noopener"
            title="Web de manuelsanchezweb"
            href="https://www.manuelsanchezweb.com/"
          >
            manuelsanchezweb
          </a>{' '}
        </p>
      </footer>

      <Filters />
    </>
  )
})

export const head: DocumentHead = {
  title: '🤓 Lista de lectura',
  meta: [
    {
      name: 'description',
      content:
        'Gestiona tu lista de lectura con Qwik. Añade filtros, ordena y busca.',
    },
    {
      name: 'keywords',
      content: 'lista de lectura, libros',
    },
    {
      name: 'author',
      content: 'manuelsanchezweb',
    },
    {
      name: 'og:image',
      content:
        'https://pruebas-tecnicas-lista-lectura-manuelsanchez2.vercel.app/public/thumbnail.png',
    },
    {
      name: 'twitter:image',
      content:
        'https://pruebas-tecnicas-lista-lectura-manuelsanchez2.vercel.app/public/thumbnail.png',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: '🤓 Lista de lectura',
    },
    {
      name: 'twitter:description',
      content:
        'Gestiona tu lista de lectura con Qwik. Añade filtros, ordena y busca.',
    },
  ],
}
