import Card from './Card';
import CardDrag from './CardDrag';

const RenderBooks = ({ books, isDrag = false }) => {
  return (
    <>
      {books.map((book) => {
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
        }

        return (
          <CardDrag
            name={name}
            title={title}
            cover={cover}
            ISBN={ISBN}
            key={ISBN}
          />
        );
      })}
    </>
  );
};

export default RenderBooks;
