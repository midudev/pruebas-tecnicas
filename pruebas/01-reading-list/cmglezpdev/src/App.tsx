import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Home, ReadingList } from './pages';
import './styles/index.css';
  
export default function App () {
    return (
        <AppProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reading' element={<ReadingList />} />
            </Routes>
        </AppProvider>
    )
}
