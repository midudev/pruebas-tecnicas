import './App.css'
import { BookList } from './components/BookList'
import { Header } from './components/Header'
import { Title } from './components/Title'
import { Footer } from './components/Footer'

export default function App () {
  return (
    <>
      <Header />
      <Title />
      <BookList />
      <Footer />
    </>
  )
}
