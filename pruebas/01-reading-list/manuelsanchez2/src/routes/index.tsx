import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { css } from '~/styled-system/css'

interface BookProps {
  title: string
}
export const Book = component$<BookProps>(({ title }) => {
  const bookStyles = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1rem',
    bg: 'blue.400',
    width: '150px',
    height: '200px',
  })
  return <div class={bookStyles}>{title}</div>
})

export const Logo = component$(() => {
  return (
    <h1
      class={css({
        fontSize: { base: 'lg', md: '3xl' },
        my: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
      })}
    >
      <img
        class={css({
          display: 'inline-block',
          mr: '1rem',
          borderRadius: '50%',
        })}
        width={75}
        height={75}
        src="./1.webp"
        alt="Logo Lista de Lectura"
      />
      Lista de lectura
    </h1>
  )
})

export default component$(() => {
  const wrapperStyles = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minH: '75vh',
    px: '20px',
  })

  return (
    <>
      <Logo />

      <div class={wrapperStyles}>
        <div
          class={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem',
            width: '100%',
          })}
        >
          <ul
            class={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              width: '50%',
            })}
          >
            <Book title="Libro 1" />
            <Book title="Libro 2" />
            <Book title="Libro 3" />
            <Book title="Libro 4" />
            <Book title="Libro 5" />
            <Book title="Libro 6" />
          </ul>
          <ul
            class={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              width: '30%',
            })}
          >
            <Book title="Libro 7" />
            <Book title="Libro 8" />
            <Book title="Libro 9" />
            <Book title="Libro 10" />
          </ul>
        </div>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Lista de lectura',
  meta: [
    {
      name: 'description',
      content:
        'Gestiona tu lista de lectura con Qwik. Añade filtros, ordena y busca.',
    },
  ],
}
