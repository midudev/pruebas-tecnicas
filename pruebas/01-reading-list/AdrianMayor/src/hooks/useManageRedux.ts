"use client";

import { Book } from "@/models/book.model";
import { genresAvailable } from "@/models/genresAvailable";
import { setGenresAvailable } from "@/redux/features/genresAvailable";

import { setList } from "@/redux/features/readingList";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const useManageRedux = () => {
	const dispatch = useDispatch();

	// Get redux state
	const reduxAvailableGenres = useSelector((state: RootState) => state.genresAvailableReducer.value);

	const reduxListState = useSelector((state: RootState) => state.readingListReducer.value);

	// Set redux state
	const setGenresAvailableReduxState = (data: genresAvailable[]) => {
		dispatch(setGenresAvailable(data));
	};

	const setListReduxState = (data: Book[] | []) => {
		dispatch(setList(data));
	};

	// Update redux state
	const updateAvailableGenres = (data: genresAvailable) => {
		const genreToUpdate = reduxAvailableGenres.map((item) => {
			if (item.genre === data.genre && item.available !== undefined) {
				const available = data.type === "increment" ? item.available + 1 : item.available - 1;
				return { ...item, available };
			} else {
				return item;
			}
		});
		genreToUpdate.shift();
		const totalAvailable = genreToUpdate.reduce((total, item) => {
			return total + (item.available || 0);
		}, 0);
		genreToUpdate.unshift({ genre: "All", available: totalAvailable });

		dispatch(setGenresAvailable(genreToUpdate));
	};

	return {
		reduxAvailableGenres,
		reduxListState,
		setGenresAvailableReduxState,
		setListReduxState,
		updateAvailableGenres,
	};
};

export default useManageRedux;
