import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/book.svg';
import { BookList } from '../pages/BookList';


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="min-h-full bg-gray-700">
            <nav className="bg-gray-800 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="w-10" src={ logo } alt="Book Logo" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavLink to="/" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Mi Biblioteca</NavLink>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/"  element={ <BookList /> } />
                <Route path="about" element={ <h1>About Page</h1> } />
                <Route path="users" element={ <h1>Users Page</h1> } />
                <Route path="/*" element={ <Navigate to="/home" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
