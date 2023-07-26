import { Main } from './main'
import { render, screen, waitFor } from '../utils/test-utils'
import { store } from '../store'
import { Provider } from 'react-redux'

describe('Books', () => {
    
    
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Main />
            </Provider>
        )
    })

    it("Should say 'Cargando...' ", async () => {
        expect(await screen.findByText("Cargando...")).toBeVisible();
    })
    
    
    it('should display images', async () => {
        
            await waitFor(() => {
                expect(screen.getAllByAltText(/cover.*/i)).not.toHaveLength(0);
            }, { timeout: 3000})

        })
        
    })