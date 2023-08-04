import { useState, useEffect } from "react";
import { textColorAnimationClass } from "../../utils/tailwind";
interface BookCardProps {
  index: number;
  title: string;
  year?: number;
  pages?: number;
  genre?: string;
  imageUrl: string;
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
  withRemoveBnt = false,
  onClickHandler,
}: BookCardProps) => {
  const [animationClass, setAnimationClass] = useState<string>(
    "opacity-0 translate-y-2"
  );

  // const delay = `delay-[${(index + 1) * 150}ms]`;

  useEffect(() => {
    setAnimationClass("opacity-1 translate-y-0");
  }, []);
  return (
    <article
      className={`cursor-pointer ${animationClass} rounded-lg shadow-[0_0_10px_-1px] shadow-gray-600 dark:shadow-gray-200 overflow-hidden relative transition ease-in-out duration-300`}
      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
      onClick={onClickHandler}
    >
      {withRemoveBnt && (
        <div className="absolute w-6 h-6 -top-3 -right-3 z-10 bg-white border border-black flex align-center justify-center">
          <span className="font-bold">X</span>
        </div>
      )}
      <figure className="flex h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
          src={imageUrl}
          alt={title}
        />
      </figure>
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
    </article>
  );
};

export default BookCard;
