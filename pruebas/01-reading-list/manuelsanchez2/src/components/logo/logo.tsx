import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'

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
        width={50}
        height={50}
        src="./1.webp"
        alt="Logo Lista de Lectura"
      />
      Lista de lectura
    </h1>
  )
})
