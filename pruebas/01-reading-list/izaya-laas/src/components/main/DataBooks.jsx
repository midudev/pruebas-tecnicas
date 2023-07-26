import { myReadingListLength, totalFreeBooks } from '../../signals/store';

const DataBooks = () => {
  return (
    <div className="flex w-full justify-end ">
      <p>My books {myReadingListLength}</p>
      <p className="ml-4 sm:mr-4">Free books {totalFreeBooks.value}</p>
      <p></p>
    </div>
  );
};

export default DataBooks;
