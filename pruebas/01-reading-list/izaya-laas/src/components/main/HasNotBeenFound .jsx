import { currentPath, myReadingListLength } from '../../signals/store';

const HasNotBeenFound = () => {
  if (currentPath.value === '/my-books' && myReadingListLength.value === 0)
    return <p>No books have been added to your reading list yet.</p>;

  return <p>No books found with the selected filter.</p>;
};

export default HasNotBeenFound;
