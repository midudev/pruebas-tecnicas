import { render } from "@testing-library/react";
import { BookCard } from "../../src/components/BookCard";
import { Provider } from "react-redux";
import { store } from "../../src/store";

describe('Pruebas en <BookCard/>', ()=> {

    test('Debe hacer match con el snapshot', ()=> {

        const component = render(

            <Provider store={store}>

                <BookCard/>

            </Provider>

        );

        expect(component).toMatchSnapshot();

    }); 

});