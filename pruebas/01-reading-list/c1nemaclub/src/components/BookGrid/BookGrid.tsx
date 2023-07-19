import style from './BookGrid.module.css';

type BookGridProps = {
  children: React.ReactNode;
  loading: boolean;
  bookCount: number;
};

function BookGrid({ children, loading, bookCount }: BookGridProps) {
  if (loading) return <p>Loading Books...</p>;

  return (
    <>
      {bookCount === 0 ? (
        <p>No hay libros disponibles</p>
      ) : (
        <div className={style['book-grid']}>{children}</div>
      )}
    </>
  );
}

export default BookGrid;
