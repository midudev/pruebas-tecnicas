'use client';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classNames from 'classnames';
import { BsFillBookmarkPlusFill, BsFillBookmarkHeartFill, BsBoxArrowUpRight } from 'react-icons/bs';

import Text from '@commonComponents/Text/Text';

import { BookListCardProps } from './Interfaces';
import styles from './BookListCard.module.css';

export default function BookListCard({
  id,
  cover,
  addBtnText = 'Add to list',
  isAdded = false,
  onAddCard,
}:BookListCardProps) {
  return (
    <li className={styles.container}>
      <div
        data-testid="added-bookmark"
        className={classNames(styles.bookmark, { [styles.show__bookmark]: isAdded })}
      >
        <BsFillBookmarkHeartFill size={40} color="#f22456" />
      </div>

      <section
        data-testid="book-cover-container"
        className={classNames(styles.card, { [styles.obscure_card]: isAdded })}
      >
        <div className={styles.cover_container}>
          <img
            src={cover}
            alt="Book Cover"
            className={styles.cover}
          />
        </div>
      </section>

      <button
        type="button"
        className={classNames(styles.add_btn, styles.btn_hover, { [styles.hide_btn]: isAdded })}
        onClick={onAddCard}
      >
        <BsFillBookmarkPlusFill size={20} />

        <Text tag="p" text={addBtnText} paragraphStyle="labelLarge" />
      </button>

      <Link href={`/book/${id}`} className={styles.details_link}>
        <BsBoxArrowUpRight size={20} />

        <Text tag="p" text="Details" paragraphStyle="labelMedium" />
      </Link>
    </li>
  );
}
