interface BookCardProps {
  title: string;
  imageUrl: string;
  withRemoveBnt?: boolean;
  onClickHandler: () => void;
}

const BookCard = ({
  title,
  imageUrl,
  withRemoveBnt = false,
  onClickHandler,
}: BookCardProps) => {
  return (
    <article className="cursor-pointer relative" onClick={onClickHandler}>
      {withRemoveBnt && (
        <div className="absolute w-6 h-6 -top-3 -right-3 z-10 bg-white border border-black flex align-center justify-center">
          <span className="font-bold">X</span>
        </div>
      )}
      <figure className="flex h-full">
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
