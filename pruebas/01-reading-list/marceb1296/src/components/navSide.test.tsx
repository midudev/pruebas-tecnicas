import { NavSide } from './navSide'
import { render, screen, userEvent, waitFor, fireEvent, within, getByText} from '../utils/test-utils'
import { store } from '../store'
import { Provider } from 'react-redux'

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
    
    it("Should render images", async () => {
        // Set result
        const result = await getData().then(res => res.library)
        render(
             <Provider store={store}>
                <NavSide books={result}/>
            </Provider>
        )
        
        const getListBoxes = screen.getAllByLabelText("book-list-box")
        
        expect(getListBoxes).not.toHaveLength(0)
        
    })

})