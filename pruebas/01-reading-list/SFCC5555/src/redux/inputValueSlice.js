import { createSlice } from "@reduxjs/toolkit"

const initialState = '';

export const inputValueSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    changeInputValue: (state, action) => {
      // Update the 'inputValue' state to the string value (typed on the text input) provided in the action's payload
      state = action.payload;
      return state;
    }
  }
});

export const { changeInputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;