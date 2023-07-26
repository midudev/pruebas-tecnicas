import {App} from './index'
import { render, screen, userEvent, waitFor } from '../utils/test-utils'
import { store } from '../store'
import { Provider } from 'react-redux'

describe('App', () => {
    
    
    beforeEach(() => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    })

    it("Should say 'Cargando...' ", async () => {
        expect(await screen.findByText("Cargando...")).toBeVisible();
    })
    
    
    it('should display images', () => {
        
            waitFor(() => {
                expect(screen.getAllByRole("image", {
                    name: /cover ./
                })).toBeVisible();
            })
            
        })
        
    })