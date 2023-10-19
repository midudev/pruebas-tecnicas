import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { List } from './pages/List'
import { Layout } from './components/Layout'

function App () {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
      </Route>
    </Routes>
  )
}

export default App
