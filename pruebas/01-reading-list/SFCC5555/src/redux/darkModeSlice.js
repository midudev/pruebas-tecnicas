import { createSlice } from "@reduxjs/toolkit"

// Check if 'darkModeStorage' exists in the local storage, and use its value as the initial state
// If 'darkModeStorage' doesn't exist, the initial state is set to 'false' (light-mode)
const initialState = localStorage.getItem('darkModeStorage') ?
  JSON.parse(localStorage.getItem('darkModeStorage')) :
  false;

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    changeDarkModeStatus: (state, action) => {
      // Update the 'darkMode' state (true or false) to the value provided in the action's payload
      state = action.payload;
      // Store the updated 'darkMode' state in localStorage to persist changes
      localStorage.setItem('darkModeStorage', state);
      return state;
    }
  }
});

export const { changeDarkModeStatus } = darkModeSlice.actions;
export default darkModeSlice.reducer;