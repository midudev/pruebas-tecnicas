import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '@/context/globalContext';
import { createGlobalStore } from '@/store/globalStore';
import { share } from 'shared-zustand';
import { HomePage } from '@/pages/HomePage.tsx';
import { ReadingListPage } from './pages/ReadingListPage.tsx';
import { MainLayout } from './layouts/MainLayout.tsx';

const store = createGlobalStore();
share('booksToRead', store);
share('avaibleBooks', store);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalContext.Provider value={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='*' element={<ReadingListPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    </React.StrictMode>
);
