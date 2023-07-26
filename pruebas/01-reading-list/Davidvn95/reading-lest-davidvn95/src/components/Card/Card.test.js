import { render, screen } from "@testing-library/react"
import Card from './Card'

describe('<Card />', () => { 
    test('mostrar el componente Card', () => { 
        render(<Card cover='https://picsum.photos/200/300' isbn='isbn' readings='true' isReading='true' title='title' synopsis='description'/>)
        expect(screen.getByText('titulo')).toBeDefined()
        // expect(screen.getByText('descripcion')).toBeInTheDocument()
        // expect(screen.getByRole('img')).toHaveAttribute('src', 'https://picsum.photos/200/300')
    })
})