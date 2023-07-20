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
        <h2 className={style.title}>No hay libros disponibles</h2>
      ) : (
        <div className={style['book-grid']}>{children}</div>
      )}
    </>
  );
}

export default BookGrid;
