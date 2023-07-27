import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { genresAvailable } from "../../models/genresAvailable";

interface genresAvailableSlice {
	value: genresAvailable[];
}
const initialState: genresAvailableSlice = { value: [] };

export const genresAvailableState = createSlice({
	name: "genresAvailableSlice",
	initialState,
	reducers: {
		setGenresAvailable: (state, action: PayloadAction<genresAvailable[]>) => {
			state.value = action.payload;
		},
	},
});

export const { setGenresAvailable } = genresAvailableState.actions;
export default genresAvailableState.reducer;
