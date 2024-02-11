import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Todos';

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      // Update the 'genre' state to the string value (selected on the available options of the genre menu) provided in the action's payload
      state = action.payload;
      return state;
    }
  }
});

export const { changeGenre } = genreSlice.actions;
export default genreSlice.reducer;