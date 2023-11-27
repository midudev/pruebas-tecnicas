import { Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home/Home'
import ResultsContainer from './pages/ResultsContainer/ResultsContainer'
import DetailContainer from './pages/DetailContainer/DetailContainer'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<ResultsContainer />} />
        <Route path='/items/:id' element={<DetailContainer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
