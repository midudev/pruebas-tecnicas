import { filterBooks } from '../../filters/filterBooks';
import { filterOptions } from '../../signals/inputs.signals';
import { myReadingListISBN } from '../../signals/store';
import Card from './Card';
import HasNotBeenFound from './HasNotBeenFound ';

const RenderBooks = ({ books, isDrag = false }) => {
  const filterBooksData = filterBooks(
    books,
    filterOptions.value,
    myReadingListISBN.value,
  );

  if (filterBooksData.length === 0) return <HasNotBeenFound />;

  return (
    <>
      {filterBooksData.map((book) => {
        const { title, cover, author, ISBN } = book;
        const { name } = author;

        if (!isDrag) {
          return (
            <Card
              name={name}
              title={title}
              cover={cover}
              ISBN={ISBN}
              key={ISBN}
            />
          );
        } else {
          return (
            //Card con drag and drop
            <Card
              name={name}
              title={title}
              cover={cover}
              ISBN={ISBN}
              key={ISBN}
            />
          );
        }
      })}
    </>
  );
};

export default RenderBooks;
