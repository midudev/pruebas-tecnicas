import { NavSide } from './navSide'
import { render, screen, userEvent, waitFor, fireEvent, within, getByText} from '../utils/test-utils'
import { store } from '../store'
import { Provider } from 'react-redux'
import { vi } from "vitest";

import { getData } from "../mocks"



describe('NavSide', () => {

    it("Should say 'Sin libros en lista de lectura' ", async () => {
        render(
             <Provider store={store}>
                <NavSide books={[]}/>
            </Provider>
        )
        
        expect(await screen.findByText("Sin libros en lista de lectura")).toBeVisible();
        
    })
    
    it("Should been called button 'Leer mas tarde'", async () => {
        // Set result
        const result = await getData().then(res => res.library)
        render(
             <Provider store={store}>
                <NavSide books={result}/>
            </Provider>,
            {
                bookListReducer: {
                    isOpen: false,
                    list: []
                }
            }
        )
        
        const getButtons = screen.getAllByLabelText("book-list-box")
        const firstBox = getButtons[0];

        const btn = within(firstBox).getByText("Eliminar de lista")
        
        const spyBtn = vi.spyOn(btn, "click")
        
        userEvent.click(btn)
        expect(spyBtn).toHaveBeenCalled()
        
    })

})