import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

import Header from '@/components/Header';
import Tabs from '@/components/Tabs';
import LibraryList from '@/components/LibraryList';
import Tab from '@/components/Tab';
import Footer from '@/components/Footer';
import useBookContext from '@/hooks/useBookContext';
import Filters from './components/Filters/Filters';

export default function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { filteredLibrary, savedBooks } = useBookContext();

  return (
    <>
      <main className="max-w-screen-xl min-h-screen mx-auto p-8 pt-0 flex flex-col">
        <Header />

        <nav className="mb-8 mt-60">
          <span className="font-bold text-2xl">
            {filteredLibrary.length} Libros para explorar - {savedBooks.length}{' '}
            {savedBooks.length > 1 ? 'Libros' : 'Libro'} en lista de lectura
          </span>
          <Filters />
        </nav>

        <div className="flex-1">
          <Tabs
            value={selectedTab}
            onChange={setSelectedTab}
            tabs={['Todos los libros', 'Lista de lectura']}
          >
            <Tab value={selectedTab} index={0}>
              <LibraryList library={filteredLibrary} libraryKey="all" />
            </Tab>
            <Tab value={selectedTab} index={1}>
              <LibraryList library={savedBooks} libraryKey="saved" />
            </Tab>
          </Tabs>
        </div>
        <Footer />
      </main>
      <ToastContainer />
    </>
  );
}

