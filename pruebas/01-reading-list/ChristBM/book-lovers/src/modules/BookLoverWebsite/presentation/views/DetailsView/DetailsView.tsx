/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Text from '@common/components/Text/Text';

import { DetailsViewProps } from './Interfaces';
import useDetailsView from './useDetailsView.vm';
import styles from './DetailsView.module.css';

export default function DetailsView({ id }: DetailsViewProps) {
  const { bookData: { book }, extraInfo } = useDetailsView({ id });

  return (
    <article className={styles.container}>
      <Link href="/" className={styles.go_back}>
        <BsFillArrowLeftSquareFill size={25} className={styles.arrow} />

        <Text tag="p" text="Back To Home" paragraphStyle="labelMedium" className={styles.return_text} />
      </Link>

      <section className={styles.title_container}>
        <Text tag="h3" text={book.title} className={styles.title} />
      </section>

      <section className={styles.cover_container}>
        <div className={styles.cover_content}>
          <img
            src={book.cover}
            alt="Book Cover"
            className={styles.cover}
          />
        </div>
      </section>

      <section className={styles.text_container}>
        <Text tag="p" text={book.synopsis} className={styles.synopsis} />

        <Text tag="p" text={book.author.name} className={styles.author} />
      </section>

      <section className={styles.tags_container}>
        {extraInfo.map((info) => (
          <div key={info} className={styles.info}>
            <Text tag="p" paragraphStyle="labelSmall" text={info} className={styles.info} />
          </div>
        ))}
      </section>

      <div className={styles.bg_effect1} />
      <div className={styles.bg_effect2} />
      <div className={styles.bg_effect3} />
    </article>
  );
}
