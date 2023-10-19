import { FC } from 'react';
import { Link } from 'react-router-dom';

import '../styles/AppLayout.css';

interface Props {
    children: React.ReactNode;
}

export const AppLayout:FC<Props> = ({ children }) => {
    return (
        <>
            <header className='app-header'>
                <nav className='app-nav'>
                    <div className='app-title'>
                        <h1>BookStore</h1>
                    </div>
                    <ul className='nav-options'>
                        <li><Link to="/" data-testid='available-books-link'>Available Books</Link></li>
                        <li><Link to="/reading" data-testid='reading-books-link'>Reading Books</Link></li>
                    </ul>
                    <input type="checkbox" name="show-hidden-menu" id="checkbox-menu" />

                    <label htmlFor="checkbox-menu" className='svg-menu-open'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </label>

                    <label htmlFor="checkbox-menu" className='svg-menu-close'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>

                    <ul className='nav-options-responsive'>
                        <li><Link to="/">Available Books</Link></li>
                        <li><Link to="/reading">Reading Books</Link></li>
                    </ul>
                </nav>
            </header>
            <main className='main_container'>
                { children }
            </main>
      </>
    )
}
