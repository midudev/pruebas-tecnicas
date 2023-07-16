const Book = ({ data }) => {
  return (
    <>
      <p key={data.ISBN}>
        <img src={data.cover} width={200} height={200} alt="alt image" />
        {/* <span>{b.book.pages} </span>
            <span>{b.book.genre} </span>
            <span>{b.book.cover} </span>
            <span>{b.book.synopsis} </span>
            <span>{b.book.year} </span>
            <span>{b.book.ISBN} </span>
            <span>{b.book.author.name} </span> */}
      </p>
    </>
  );
};

export default Book;
