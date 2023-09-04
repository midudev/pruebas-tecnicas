import style from './BookCount.module.css';

function BookCount({ count }: { count: number }) {
  return (
    <h2 className={style['book-count']}>
      {count}
      {count > 1 ? ' Libros ' : ' Libro '}
      {count > 1 ? ' Disponibles ' : ' Disponible '}
    </h2>
  );
}

export default BookCount;
