import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'

interface FiltersProps {
  showFilterByName?: boolean
}

const filterWrapperStyles = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  my: '2rem',
})

const filterInputStyles = css({
  width: '300px',
  height: '2rem',
  color: 'black',
  fontSize: '1rem',
  fontWeight: 'bold',
  border: 'none',
  borderBottom: '1px solid black',
  backgroundColor: 'transparent',
  outline: 'none',
  padding: '0.5rem',
  '&:focus': {
    borderBottom: '1px solid blue',
  },
  '&::placeholder': {
    color: 'gray',
    fontSize: '0.75rem',
    opacity: 0.5,
  },
})

export const Filters = component$<FiltersProps>(
  ({ showFilterByName = true }) => {
    return (
      <div class={filterWrapperStyles}>
        {showFilterByName && (
          <div
            class={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            })}
          >
            <label for="title">Búsqueda concreta:</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Dracula, The Lord of The Rings..."
              class={filterInputStyles}
            />
          </div>
        )}
      </div>
    )
  }
)
