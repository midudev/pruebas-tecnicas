import { AppThunk } from '../..';
import { Book } from '../../../types';
import { setAvailableList, setBooksList } from './booksSlice'

const BASE_URL = 'src/assets/books.json';




export const getAllBooks = (): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(BASE_URL); // Replace this with your API call
    const { library } = await response.json(); // Replace this with your API call
    const booksArray: Book[] = [] 
    library.forEach(({book}: {book:Book}) => {
      booksArray.push(book)
    })
    dispatch(setBooksList(booksArray));
    dispatch(setAvailableList(booksArray));
  } catch (error) {
    console.log('ThunkError: ',error);
  }
};