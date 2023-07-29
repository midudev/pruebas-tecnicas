import { Route} from 'wouter'
import Home from './pages/home/Home'

function App() {
  return (
    <>
        <Route path="/" component={Home} />
    </>
  )
}

export default App
