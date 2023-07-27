import { Link } from 'react-router-dom';
import Logo from '@/assets/logo.svg';
import { ThemeButton } from './ThemeButton';

export const Header = () => {
    return (
        <div className='navbar bg-base-100 py-4 px-8'>
            <div className='navbar-start'>
                <Link to={'/'} className='flex items-center gap-4 normal-case btn btn-ghost'>
                    <img src={Logo} alt='Logo' className='logo w-8 md:w-12' />
                    <h1 className='text-2xl text-bold md:text-4xl'>Book App</h1>
                </Link>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link to={'/'}>Libros Disponibles</Link>
                    </li>
                    <li>
                        <Link to={'/reading-list'}>Lista de Lectura</Link>
                    </li>
                </ul>
            </div>
            <div className='navbar-end'>
                <ThemeButton />
                <div className='dropdown dropdown-bottom dropdown-end'>
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
                        </svg>
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content z-[1] p-4 shadow bg-base-100 rounded-box w-52'>
                        <li className='py-2'>
                            <Link to={'/'}>Libros Disponibles</Link>
                        </li>
                        <li className='py-2'>
                            <Link to={'/reading-list'}>Lista de Lectura</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
