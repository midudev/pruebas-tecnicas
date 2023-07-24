'use client';

import Text from '@commonComponents/Text/Text';

import useSelect from './useSelect.vm';
import { SelectProps } from './Interfaces';
import styles from './Select.module.css';

export default function Select({
  label = 'filter by genre',
  options = [],
  firstOptText = 'Select a genre',
  onChange,
}: SelectProps) {
  const { selectProps } = useSelect({ onChange });

  return (
    <div className={styles.container}>
      <label htmlFor={selectProps.id} className={styles.label}>
        <Text tag="p" paragraphStyle="labelLarge" text={label} className={styles.label_text} />

        <select
          data-testid="select-opt"
          name={selectProps.id}
          id={selectProps.id}
          value={selectProps.value}
          onChange={selectProps.onChange}
          className={styles.select}
        >
          <option value="" key="opt-default" className={styles.opt_text}>{firstOptText}</option>

          {options.map((opt) => (
            <option key={opt} value={opt} className={styles.opt_text}>
              {opt}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
