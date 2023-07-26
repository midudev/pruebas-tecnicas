import { test } from 'vitest'
import { render } from '@testing-library/react'

// Comprobamos que la aplicacion se renderiza correctamente
import App from "./App"; 

test("renders content", async () => {
    const app = render(<App />)
    app.getByText("Filtrar por:");
})