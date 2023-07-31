import { useState, useEffect } from "react";
import { delayVariants } from "../../utils/tailwind";

interface BookCardProps {
  index: number;
  title: string;
  imageUrl: string;
  withRemoveBnt?: boolean;
  onClickHandler: () => void;
}

const BookCard = ({
  index,
  title,
  imageUrl,
  withRemoveBnt = false,
  onClickHandler,
}: BookCardProps) => {
  const [animationClass, setAnimationClass] = useState<string>(
    "opacity-0 translate-y-2"
  );
  // const [finalIndex, setFinalIndex] = useState<number>(index + 1);

  useEffect(() => {
    setAnimationClass("opacity-1 translate-y-0");
  }, []);
  return (
    <article
      className={`cursor-pointer ${animationClass} relative transition ease-in-out duration-300 ${
        delayVariants[index + 1]
      }`}
      onClick={onClickHandler}
    >
      {withRemoveBnt && (
        <div className="absolute w-6 h-6 -top-3 -right-3 z-10 bg-white border border-black flex align-center justify-center">
          <span className="font-bold">X</span>
        </div>
      )}
      <figure className="flex h-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
          src={imageUrl}
          alt={title}
        />
      </figure>
    </article>
  );
};

export default BookCard;
