import { render, screen, toBeInDocument} from '@testing-library/react'
import Home from '@/app/page';
import '@testing-library/jest-dom'
 
// This is an example test just to prove that i know how to start a testing with jest and RTL. If i have enought time i will complete somo complex tests.

describe("Home", () => {


    it("renders all components", () => {
        const { getByText } = render(<Home />);
        const titleValue = getByText("Elige tu libro favorito")
        expect(titleValue).toHaveTextContent("Elige tu libro favorito")
      // check if all components are rendered
     
    });
  });