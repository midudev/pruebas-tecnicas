import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/react.svg';
import { BookStore } from '../pages/BookStore';


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img className="logo-img" src={ logo } alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to="/" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Bookstore</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/"  element={ <BookStore /> } />
                <Route path="about" element={ <h1>About Page</h1> } />
                <Route path="users" element={ <h1>Users Page</h1> } />
                
                <Route path="/*" element={ <Navigate to="/home" replace /> } />
            </Routes>

        </div>
    </BrowserRouter>
  )
}
