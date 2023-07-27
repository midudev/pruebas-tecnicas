import { Header } from '@/components/Header';
import { PageFooter } from '@/components/PageFooter';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main>
                <Outlet />
            </main>
            <ToastContainer limit={1} autoClose={1000} />
            <PageFooter />
        </div>
    );
};
