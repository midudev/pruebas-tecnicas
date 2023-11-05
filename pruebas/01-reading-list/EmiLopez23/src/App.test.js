import { fireEvent, render,screen} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { AvailableBooksProvider } from './context/AvailableBooksContext';
import { ReadingListProvider } from './context/ReadingListContext';

test('renders BooksToRead when "Reading List" button is clicked', () => {
  render( <AvailableBooksProvider>
  <ReadingListProvider>
    <App />
  </ReadingListProvider>
</AvailableBooksProvider>);
  //Verifico que el unico elemento con el texto reading list es el boton
  expect(screen.getAllByText('Reading List',{exact:true}).length).toBe(1);

  fireEvent.click(screen.getByText('Reading List',{exact:true}));

  // Verifico que ahora los elementos con el texto 'Reading List' son dos, el boton y el h1 del componente <BooksToRead>
  expect(screen.getAllByText('Reading List',{exact:true}).length).toBe(2);
});

