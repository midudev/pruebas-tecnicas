import { describe, it, afterEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Main } from '../src/app/components/main'

describe('Next tests', () => {
    afterEach(cleanup)

    it('E2E - should be render a Main component and select one book', () => {
        render(<Main />)
        screen.getByText('Lista de Libros')

        screen.getByText('Libros Disponibles: 13')

        const availableBook = screen.getByAltText('Juego de Tronos')
        fireEvent.click(availableBook)
        screen.getByText('Libros Disponibles: 12')

        screen.getByText('Libros Seleccionados: 1')
    })
})
