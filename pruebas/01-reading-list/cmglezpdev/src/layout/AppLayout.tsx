import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

interface Props {
    children: React.ReactNode;
}

export const AppLayout:FC<Props> = ({ children }) => {
    const { availableBooks, readingBooks } = useContext(AppContext);

    return (
        <>
            <header className='app-header'>
            <nav className='app-nav'>
                <div className='app-title'>
                <h1>BookStore</h1>
                </div>
                <ul className='nav-options'>
                    <li><Link to="/">Aviable Books</Link></li>
                    <li><Link to="/reading">Reading Books</Link></li>
                </ul>
            </nav>
    
            <div className="app-general-info">
                <p><span>{availableBooks.length}</span> available books</p>
                <p><span>{readingBooks.length}</span> books to read</p>
            </div>
            </header>
        
            <main>
                { children }
            </main>
      </>
    )
}
