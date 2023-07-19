import styled from 'styled-components'
import Listbox from './components/Listbox'
import { BooksProvider } from './context/BooksContext'

function App () {
  return (
    <BooksProvider>
      <Container>
        <Header>
          <h1 className='head'>Reading BOOKS</h1>
        </Header>
        <Listbox />
      </Container>
    </BooksProvider>
  )
}

const Header = styled.header`
  h1 {
    color: black;
    display: flex;
    align-items: center;
    height: 200px;
  }
`
const Container = styled.main`
  padding: 0 10.3vw;
  background-color: white;
  height: 100vh;
`

export default App
