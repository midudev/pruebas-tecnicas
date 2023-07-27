import { App } from './index'
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved, within } from '../utils/test-utils'
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

    /**
     * Add filter test:
     * change values from inputs
     * verify filters
    */

    it("Books: Should onClick add book to bookList", async () => {

        // verify that book list is empty

        expect(screen.queryAllByLabelText("book-list-box")).toHaveLength(0)

        // simulate add to book list

        await waitForElementToBeRemoved(() => expect(screen.getByText("Cargando...")))
        
        const getBoxes = screen.getAllByLabelText("book-box")
        const firstBox = getBoxes[0];


        const title = within(firstBox).getByLabelText("book-box-title")
        const btn = within(firstBox).getByText("Leer mas tarde")
        
        fireEvent.click(btn)

        // verify book list isnt empty

        const getListBoxes = screen.getAllByLabelText("book-list-box")
        
        expect(getListBoxes).toHaveLength(1)

        const firstListBox = getListBoxes[0];

        const titleList = within(firstListBox).getByLabelText("book-list-box-title")
        expect(titleList.innerHTML).toBe(title.innerHTML)


    })

    it("Header: Should change class in main div", async () => {
        
        expect(screen.getByLabelText("main-book").className).toBe("light")

        const nav = screen.getByRole("navigation");
        const btns = within(nav).getAllByRole("button");
        const btnTheme = btns[0]

        fireEvent.click(btnTheme)

        expect(screen.getByLabelText("main-book").className).toBe("dark")
    })

    it("Header: Should show and hide back list book", async () => {
        
        expect(screen.getByRole("complementary").style.cssText).toBe("right: -100%; color: white;")

        const nav = screen.getByRole("navigation");
        const btns = within(nav).getAllByRole("button");
        const btnTheme = btns[1]

        fireEvent.click(btnTheme)
        
        expect(screen.getByRole("complementary").style.cssText).toBe("right: 20px; color: white;")
        
        // hide again
        fireEvent.click(btnTheme)

        expect(screen.getByRole("complementary").style.cssText).toBe("right: -100%; color: white;")
    })

    /**
     * Add NavSide test:
     * Remove element
    */

})