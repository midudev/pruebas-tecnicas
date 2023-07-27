let initialState = {
	allBooks: [],
	disponibilityBooks: [],
	toRead: [],
	filter: [],
	counterToRead: 0,
	counterDisp: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_BOOKS":
			return {
				...state,
				allBooks: action.payload,
				disponibilityBooks: action.payload,
				counterDisp: action.payload.length - state.counterToRead,
			};
		case "ADD_TOREAD":
			console.log("reducer", action.payload);

			return {
				...state,
				toRead: [...state.toRead, action.payload],
				disponibilityBooks: state.disponibilityBooks.filter(
					(book) => book.ISBN !== action.payload.ISBN
				),
				counterToRead: state.counterToRead + 1,
				counterDisp: state.counterDisp - 1,
			};
		case "REMOVE_TOREAD":
			return {
				...state,
				disponibilityBooks: [...state.disponibilityBooks, action.payload],
				toRead: state.toRead.filter(
					(book) => book.ISBN !== action.payload.ISBN
				),
				counterToRead: state.counterToRead - 1,
				counterDisp: state.counterDisp + 1,
			};

		case "FILTERPAGE":
			return {
				...state,
				disponibilityBooks: state.allBooks.filter(
					(book) => book.pages >= action.payload
				),
			};
		// case "ADD_TOREAD":
		//   return {
		//     ...state,
		//     toRead: [...state.toRead, action.payload]
		//   };
		// case "REMOVE_TOREAD":
		//   return {
		//     ...state,
		//     toRead: state.toRead.filter((book) => book.ISBN !== action.payload)
		//   };
		case "FILTER":
			if (action.payload === "all") {
				return {
					...state,
					disponibilityBooks: state.allBooks,
				};
			} else {
				return {
					...state,
					disponibilityBooks: state.allBooks.filter(
						(book) => book.genre === action.payload
					),
				};
			}

		default:
			return state;
	}
};
