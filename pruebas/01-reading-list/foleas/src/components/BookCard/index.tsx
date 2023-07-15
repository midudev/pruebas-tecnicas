interface BookCardProps {
  title: string;
  imageUrl: string;
}

const BookCard = ({ title, imageUrl }: BookCardProps) => {
  return (
    <article>
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
