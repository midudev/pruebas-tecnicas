/* eslint-disable @next/next/no-img-element */
import { BsFillBookmarkXFill, BsFileArrowUpFill, BsFileArrowDownFill } from 'react-icons/bs';
import classNames from 'classnames';

import { ReadingListCardProps } from './Interfaces';
import styles from './ReadingListCard.module.css';

export default function ReadingListCard({
  cover,
  onRemoveCard,
  increasePriority,
  decreasePriority,
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

      <div className={styles.priority_btn_container}>
        <button
          type="button"
          className={classNames(styles.priority_btn, styles.up)}
          onClick={increasePriority}
        >
          <BsFileArrowUpFill size={30} color="#f22456" />
        </button>

        <button
          type="button"
          className={classNames(styles.priority_btn, styles.down)}
          onClick={decreasePriority}
        >
          <BsFileArrowDownFill size={25} />
        </button>
      </div>
    </li>
  );
}
