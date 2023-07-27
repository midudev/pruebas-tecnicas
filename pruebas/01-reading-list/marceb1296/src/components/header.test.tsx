import { Header } from './header'
import { render, screen, userEvent, waitFor, fireEvent, within, getByText} from '../utils/test-utils'
import { store } from '../store'
import { Provider } from 'react-redux'


describe('Header', () => {

    it("Should change icon theme on click", async () => {
        
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        )
        
        expect(screen.getByLabelText("theme-dark-icon")).toBeVisible();

        const btns = screen.getAllByRole("button");
        const btnTheme = btns[0]

        fireEvent.click(btnTheme)

        expect(screen.getByLabelText("theme-light-icon")).toBeVisible();
    })

})