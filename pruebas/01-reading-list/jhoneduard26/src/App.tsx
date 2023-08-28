import { Switch, Route } from 'wouter'
import { Toaster } from 'react-hot-toast'

import { Footer, Header } from './components'
import { Authors, Genres, Home, ReadList } from './pages'

function App () {
  return (
    <>
      <div><Toaster /></div>
      <Header />
      <main className="min-h-screen px-4 py-24 bg-bg-main">
        <Switch>
          <Route path='/' component={Home} />
          <Route path="/lista-lectura" component={ReadList} />
          <Route path="/generos" component={Genres} />
          <Route path="/autores" component={Authors} />
          <Route>404 Not found</Route>
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
