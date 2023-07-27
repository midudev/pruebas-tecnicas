import { Provider } from "react-redux";
import { store } from "../../src/store";
import { render } from "@testing-library/react";
import { Modal } from "../../src/components/Modal";

describe('Pruebas en <Books/>', ()=> {

    test('Debe hacer match con el snapshot', ()=> {

        const component = render(

            <Provider store={store}>

                <Modal/>

            </Provider>

        );

        expect(component).toMatchSnapshot();

    }); 

});