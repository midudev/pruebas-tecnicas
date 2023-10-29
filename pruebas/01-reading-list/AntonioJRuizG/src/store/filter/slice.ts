import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type FilterProps = {
	genre: string;
};

const initialState: FilterProps = {
	genre: 'all',
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState: initialState,
	reducers: {
		updateFilter: (state, action: PayloadAction<FilterProps>) => {
			return { state, ...action.payload };
		},
	},
});

export default filtersSlice.reducer;

export const { updateFilter } = filtersSlice.actions;
