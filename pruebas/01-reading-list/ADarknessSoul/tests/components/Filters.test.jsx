import { Provider } from "react-redux";
import { store } from "../../src/store";
import { render } from "@testing-library/react";
import { Filters } from "../../src/components/Filters";

describe('Pruebas en <Books/>', ()=> {

    test('Debe hacer match con el snapshot', ()=> {

        const component = render(

            <Provider store={store}>

                <Filters/>

            </Provider>

        );

        expect(component).toMatchSnapshot();

    }); 

});