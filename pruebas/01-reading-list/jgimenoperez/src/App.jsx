import './App.css'
import './ListaLibros.css'
import { ListaLectura } from './components/ListaLectura'

function App() {

  return (
    <>
      <body>
        <header className="header">
          <h1 className="header__titulo">Lista de lectura</h1>
        </header>
        <main className="main-container">
          <ListaLectura/>
        </main>
      </body>
    </>
  )
}

export default App
