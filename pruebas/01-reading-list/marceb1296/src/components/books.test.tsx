import { Books } from './books'
import { render, screen, userEvent, waitFor, fireEvent, within, getByText} from '../utils/test-utils'
import { store } from '../store'
import { Provider } from 'react-redux'

import { getData } from "../mocks"



describe('Books', () => {

    it("Should say 'Sin Resultados' ", async () => {
        render(
             <Provider store={store}>
                <Books books={[]}/>
            </Provider>
        )
        
        expect(await screen.findByText("Sin resultados.")).toBeVisible();
        
    })
    
    it("Should been called button 'Leer mas tarde'", async () => {
        // Set result
        const result = await getData().then(res => res.library)
        render(
             <Provider store={store}>
                <Books books={result}/>
            </Provider>
        )
        
        const getBoxes = screen.getAllByLabelText("book-box")
        const firstBox = getBoxes[0];

        const btn = within(firstBox).getByText("Leer mas tarde")
        
        fireEvent.click(btn)
        expect(firstBox.className).toBe("book-container added")
        
    })

})