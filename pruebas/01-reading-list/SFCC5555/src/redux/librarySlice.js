import { createSlice } from "@reduxjs/toolkit"
import books from '../books.json'

// Set the initial state for the 'library' slice based on the data in localStorage or 'books.json'
const initialState = localStorage.getItem('libraryStorage') ?
  JSON.parse(localStorage.getItem('libraryStorage')) :
  books.library.map(book => ({ ...book, listed: false }));

// Initializes the counter value that determines the priority of each book.
// This counter will be assigned to the priority property of a book each time it is added to the reading list.
// If the counter does not exist in the local storage, it starts with a value of zero.
let counterPriority = localStorage.getItem('counterPriorityStorage') ?
JSON.parse(localStorage.getItem('counterPriorityStorage')) :
0;

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    changeListedStatus: (state, action) => {
      // 'counterPriority' value is incremented by one each time a book is added to the reading list, ensuring newer added books have higher values (lower priority) for sorting by priority.
      counterPriority++;
      // Finds the index of the book in the state whose ISBN matches the one provided by the payload of the action  
      const index = state.findIndex(i => i.book.ISBN === action.payload);
      // Toggle the 'listed' status for the book at the found index
      state[index].listed = !state[index].listed;
      state[index].priority = counterPriority;
      // Store the updated state and 'counterPriority' value in localStorage to persist changes
      localStorage.setItem('libraryStorage', JSON.stringify(state));
      localStorage.setItem('counterPriorityStorage', JSON.stringify(counterPriority));
    }
  }
});

export const { changeListedStatus } = librarySlice.actions;
export default librarySlice.reducer;