import 'animate.css';
import Container from './components/Container'
import Header from './components/Header'
import FiltersContainer from './components/FiltersContainer'
import BooksContainer from './components/BookContainer'
import ModalBookContent from './components/ModalBookContent';

function App() {
  return (
    <Container>
      <Header />
      <FiltersContainer />
      <BooksContainer />
      <ModalBookContent />
    </Container>
  )
}

export default App
