'use client';

import Text from '@commonComponents/Text/Text';

import useInfo from './useInfo.vm';
import styles from './Info.module.css';

export default function Info() {
  const { availableText, addedText } = useInfo();

  return (
    <div className={styles.container}>
      <Text tag="h2" text={availableText} className={styles.available_text} />

      {addedText && <Text tag="p" paragraphStyle="labelLarge" text={addedText} className={styles.added_text} />}
    </div>
  );
}
