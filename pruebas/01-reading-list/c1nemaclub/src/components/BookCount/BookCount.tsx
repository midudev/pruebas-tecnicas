import style from './BookCount.module.css';

function BookCount({ count }: { count: number }) {
  return (
    <h3 className={style['book-count']}>
      {count}
      {count > 1 ? ' Libros ' : ' Libro '}
      {count > 1 ? ' Disponibles ' : ' Disponible '}
    </h3>
  );
}

export default BookCount;
