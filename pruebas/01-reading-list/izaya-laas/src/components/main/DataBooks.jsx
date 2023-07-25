import { myReadingListLength, totalFreeBooks } from '../../signals/store';

const DataBooks = () => {
  return (
    <div className="flex w-full justify-end gap-x-4 ">
      <p>My books {myReadingListLength}</p>
      <p>Free books {totalFreeBooks.value}</p>
      <p></p>
    </div>
  );
};

export default DataBooks;
