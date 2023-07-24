'use client';

import classNames from 'classnames';
import Text from '@commonComponents/Text/Text';

import ReadingListCard from './ReadingListCard/ReadingListCard';
import { ReadingListProps } from './Interfaces';
import useReadingList from './useReadingList';
import styles from './ReadingList.module.css';

export default function ReadingList({ title = 'Reading list' }: ReadingListProps) {
  const { openAside, readingList, removeFromReadingList } = useReadingList();

  return (
    <div
      className={
        classNames(styles.container, styles.translate, { [styles.show_list]: openAside })
      }
    >
      <Text tag="h4" text={title} className={styles.title} />

      <ul
        className={
          classNames(
            styles.list,
            { [styles.less_than6]: readingList.length <= 6 },
            { [styles.less_than5]: readingList.length < 5 },
            { [styles.less_than2]: readingList.length <= 2 },
          )
        }
      >
        {readingList.map(({ book, id }) => (
          <ReadingListCard
            key={book.title}
            cover={book.cover}
            onRemoveCard={() => removeFromReadingList(id)}
          />
        ))}
      </ul>
    </div>
  );
}
