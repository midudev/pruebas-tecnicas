//DEPENDENCIES
import { Route, Switch } from 'wouter'

//PAGES
import HomePage from './pages/home-page'
import BookPage from './pages/book-page'

function App() {
  return (
    <Switch>
      <Route path='/'>
        <HomePage />
      </Route>

      <Route path='/book/:isbn'>
        {(params) => <BookPage isbn={params.isbn} />}
      </Route>

      <Route>
        // Redirect to home page if route doesn't exist
        <HomePage />
      </Route>
    </Switch>
  )
}

export default App
