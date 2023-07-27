import { Provider } from "react-redux";
import { store } from "../../src/store";
import { render } from "@testing-library/react";
import { Navbar } from "../../src/components/Navbar";

describe('Pruebas en <Books/>', ()=> {

    test('Debe hacer match con el snapshot', ()=> {

        const component = render(

            <Provider store={store}>

                <Navbar/>

            </Provider>

        );

        expect(component).toMatchSnapshot();

    }); 

});