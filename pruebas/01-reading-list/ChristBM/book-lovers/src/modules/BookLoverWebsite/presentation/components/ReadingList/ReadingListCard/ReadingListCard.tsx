/* eslint-disable @next/next/no-img-element */
import { BsFillBookmarkXFill } from 'react-icons/bs';

import { ReadingListCardProps } from './Interfaces';
import styles from './ReadingListCard.module.css';

export default function ReadingListCard({
  cover,
  onRemoveCard,
}: ReadingListCardProps) {
  return (
    <li className={styles.container}>
      <button
        type="button"
        data-testid="reading-list-remove-btn"
        className={styles.remove_card_btn}
        onClick={onRemoveCard}
      >
        <BsFillBookmarkXFill size={40} color="#f22456" />
      </button>

      <div className={styles.cover_container}>

        <img
          src={cover}
          alt="Reading List Book Cover"
          className={styles.cover}
        />
      </div>
    </li>
  );
}
