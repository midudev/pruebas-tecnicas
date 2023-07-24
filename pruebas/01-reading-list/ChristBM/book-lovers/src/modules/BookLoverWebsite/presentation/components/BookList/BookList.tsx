'use client';

import InfiniteScroll from 'react-infinite-scroll-component';

import Text from '@commonComponents/Text/Text';
import Spinner from '@commonComponents/Spinner/Spinner';

import BookCard from './BookListCard/BookListCard';
import useBookList from './useBookList.vm';
import styles from './BookList.module.css';

export default function BookList() {
  const {
    list,
    booksAdded,
    infiniteScrollProps,
    addToReadingList,
  } = useBookList();

  return (
    <ul>
      <InfiniteScroll
        dataLength={infiniteScrollProps.dataLength}
        next={infiniteScrollProps.next}
        hasMore={infiniteScrollProps.hasMore}
        loader={(
          <div className={styles.spinner}>
            <Spinner size={30} />
          </div>
        )}
        endMessage={(
          <Text
            tag="h4"
            paragraphStyle="labelLarge"
            text="Nothing more to show."
            className={styles.end_text}
          />
        )}
        className={styles.list}
      >
        {list.map(({ book, id }) => (
          <BookCard
            key={book.title}
            cover={book.cover}
            // eslint-disable-next-line @dspot/no-complex-logic-in-view-attributes
            isAdded={booksAdded.includes(id)}
            onAddCard={() => addToReadingList(id)}
          />
        ))}
      </InfiniteScroll>
    </ul>
  );
}
