import { AppThunk } from '../..';
import { Book } from '../../../types';
import { setBookList } from './booksSlice'

const BASE_URL = 'src/assets/books.json';

// export const getAllBooks = async () => {
//   return async (dispatch: any, getState: any) => {
//     fetch(BASE_URL)
//       .then((res) => res.json())
//       .then(({ library }) => {
//         dispatch(setBookList(library));
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };
// };


export const getAllBooks = (): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(BASE_URL); // Replace this with your API call
    const { library } = await response.json(); // Replace this with your API call
    const booksArray: Book[] = [] 
    library.forEach(({book}: {book:Book}) => {
      booksArray.push(book)
    })
    dispatch(setBookList(booksArray));
  } catch (error) {
    console.log('ThunkError: ',error);
  }
};