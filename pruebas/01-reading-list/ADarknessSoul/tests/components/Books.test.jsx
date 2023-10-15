import { Provider } from "react-redux";
import { Books } from "../../src/components/Books";
import { store } from "../../src/store";
import { render } from "@testing-library/react";

describe('Pruebas en <Books/>', ()=> {

    test('Debe hacer match con el snapshot', ()=> {

        const component = render(

            <Provider store={store}>

                <Books/>

            </Provider>

        );

        expect(component).toMatchSnapshot();

    }); 

});