import Info from '@websiteComponents/Info/Info';
import Filters from '@websiteComponents/Filters/Filters';
import BookList from '@websiteComponents/BookList/BookList';
import ReadingList from '@websiteComponents/ReadingList/ReadingList';

import styles from './HomeView.module.css';

export default function HomeView() {
  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <Info />
      </section>

      <section className={styles.filters}>
        <Filters />
      </section>

      <section className={styles.book_list}>
        <BookList />
      </section>

      <section className={styles.reading_list}>
        <ReadingList />
      </section>

      <div className={styles.bg_effect1} />
      <div className={styles.bg_effect2} />
      <div className={styles.bg_effect3} />
    </div>
  );
}
