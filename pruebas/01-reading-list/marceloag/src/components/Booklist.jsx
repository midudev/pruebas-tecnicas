import Book from './Book';
import Filters from './Filters';
import { AnimatePresence, Reorder } from 'framer-motion';

function Booklist({ books }) {
  return (
    <div className="w-7/12 flex flex-col p-2">
      <Filters />
      <section className=" [&>ul]:grid [&>ul]:grid-cols-2 [&>ul]:md:grid-cols-3 [&>ul]:xl:grid-cols-4 [&>ul]:gap-2">
        <Reorder.Group axis="x" values={books}>
          <AnimatePresence>
            {books.map((bookData) => (
              <Reorder.Item
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={bookData.ISBN}
              >
                <Book {...bookData} />
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </section>
    </div>
  );
}

export default Booklist;
