import { Books } from "./features/Books";
import BooksContextProvider from "./utils/context/BooksContextProvider";

function App() {
	return (
		<BooksContextProvider>
			<Books />
		</BooksContextProvider>
	);
}

export default App;
