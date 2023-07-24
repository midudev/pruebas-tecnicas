import {Book} from './features/Book';
import {BookContextProvider} from './utils/context';

function App() {
	return (
		<BookContextProvider>
			<Book />
		</BookContextProvider>
	);
}

export default App;
