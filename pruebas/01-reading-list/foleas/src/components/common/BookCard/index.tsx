import { useState, useEffect } from "react";
import { textColorAnimationClass } from "../../../utils/tailwind";
import { SquareMinusSolid } from "../../../assets/icons/icons";
interface BookCardProps {
  index: number;
  title: string;
  year?: number;
  pages?: number;
  genre?: string;
  imageUrl: string;
  showInfo?: boolean;
  withRemoveBnt?: boolean;
  onClickHandler: () => void;
}

const BookCard = ({
  index,
  title,
  year,
  pages,
  genre,
  imageUrl,
  showInfo = true,
  withRemoveBnt = false,
  onClickHandler,
}: BookCardProps) => {
  const [animationClass, setAnimationClass] = useState<string>(
    "opacity-0 translate-y-2"
  );

  useEffect(() => {
    setAnimationClass("opacity-1 translate-y-0");
  }, []);
  return (
    <article
      className={`cursor-pointer ${animationClass} flex flex-col rounded-lg shadow-[0_0_10px_-1px] shadow-gray-600 dark:shadow-gray-200 overflow-hidden relative transition ease-in-out duration-300`}
      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
      onClick={onClickHandler}
    >
      {withRemoveBnt && (
        <div className="absolute w-5 h-5 top-1 right-1 z-10 overflow-hidden rounded flex align-center justify-center bg-white">
          <SquareMinusSolid />
        </div>
      )}
      <figure className="flex flex-1 overflow-hidden">
        <img
          className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
          src={imageUrl}
          alt={title}
        />
      </figure>
      {showInfo && (
        <div
          className={`flex flex-col justify-between h-40 p-5 box-border ${textColorAnimationClass}`}
        >
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <h3 className="text-base text-gray-600 dark:text-gray-400 font-bold">
              {genre}
            </h3>
          </div>
          <div className="flex align-center justify-between">
            <p>
              <b>Año: </b>
              {year}
            </p>
            <p>
              <b>Páginas: </b>
              {pages}
            </p>
          </div>
        </div>
      )}
    </article>
  );
};

export default BookCard;
