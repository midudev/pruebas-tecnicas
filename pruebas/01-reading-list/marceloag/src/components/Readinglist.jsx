import Book from './Book';
import { useBooks } from '../store/bookStore';
import { shallow } from 'zustand/shallow';
import { AnimatePresence, Reorder } from 'framer-motion';

function Readinglist() {
  const readinglist = useBooks((store) => store.readinglist, shallow);
  const opacity =
    readinglist.length > 0 ? 'opacity-100 w-5/12' : 'w-0 opacity-0 hidden';

  return (
    <aside
      className={`bg-white py-6 px-3 rounded-l-xl drop-shadow-md shadow-slate-500 transition-all duration-300 ease-in ${opacity}`}
    >
      <h2 className="text-xl font-sans text-center font-thin">Reading List </h2>
      <section className="[&>ul]:grid [&>ul]:grid-cols-2 [&>ul]:xl:grid-cols-3">
        <Reorder.Group axis="x" values={readinglist}>
          <AnimatePresence>
            {readinglist.map((bookData) => (
              <Reorder.Item
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={bookData.ISBN}
              >
                <Book {...bookData} isInReadingList />
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </section>
    </aside>
  );
}

export default Readinglist;
