import { currentPath, isDark, myReadingListISBN } from '../../signals/store';

const addBookToReadingList = (ISBN) => {
  if (myReadingListISBN.value.includes(ISBN)) {
    myReadingListISBN.value = myReadingListISBN.value.filter(
      (book) => book !== ISBN,
    );

    return;
  }

  myReadingListISBN.value = [...myReadingListISBN.value, ISBN];
};

const Card = ({ title, cover, name, ISBN }) => {
  return (
    <figure
      className={`h-min w-36 cursor-pointer rounded-bl-[15px_255px] rounded-br-[255px_15px] rounded-tl-[255px_15px] rounded-tr-[15px_255px] border border-black bg-opacity-20 p-2 pb-2 sm:w-44 lg:w-48 ${
        currentPath.value === '/sandbox' && 'sm:w-36 lg:w-40'
      } ${
        myReadingListISBN.value.includes(ISBN) &&
        currentPath.value !== '/my-books'
          ? 'bg-grated-pattern '
          : 'bg-white'
      }`}
      id={ISBN}
      onClick={() => {
        addBookToReadingList(ISBN);
      }}
    >
      <img
        className={`relative aspect-[305/400] w-full rounded-tl-[255px_15px] rounded-tr-[15px_255px] object-cover grayscale-[60%] ${
          isDark.value ? 'invert' : ''
        }`}
        src={cover}
        alt={`cover of ${title}`}
      />

      <div className="bottom-0 left-0 mt-2 h-min w-full rounded-bl-[15px_255px] rounded-br-[255px_15px] rounded-tl-[255px_15px] rounded-tr-[15px_255px] border border-black bg-white px-2 py-0.5">
        <h4 title={title} className="truncate text-center text-base">
          {title}
        </h4>
        <p className="text-center text-xs text-gray-500">{name}</p>
      </div>
    </figure>
  );
};

export default Card;
