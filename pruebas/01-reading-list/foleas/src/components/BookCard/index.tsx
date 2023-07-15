interface BookCardProps {
  title: string;
  imageUrl: string;
  onClickHandler: () => void;
}

const BookCard = ({ title, imageUrl, onClickHandler }: BookCardProps) => {
  return (
    <article onClick={onClickHandler}>
      <figure>
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </figure>
    </article>
  );
};

export default BookCard;
