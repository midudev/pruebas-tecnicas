import Text from '@commonComponents/Text/Text';

import { SearchProps } from './Interfaces';
import useSearch from './useSearch.vm';
import styles from './Search.module.css';

export default function Search({
  label = 'Search a book By:',
  searchOpts = ['title'],
  onChange,
}: SearchProps) {
  const { searchProps, selectProps } = useSearch({ searchOpts, onChange });

  return (
    <div className={styles.container}>
      <label htmlFor={searchProps.id} className={styles.label}>
        <div className={styles.select_container}>
          <Text tag="p" paragraphStyle="labelLarge" text={label} className={styles.label_text} />

          <select
            value={selectProps.value}
            onChange={selectProps.onChange}
            className={styles.select}
          >
            {searchOpts.map((opt) => (
              <option key={`search-opt-${opt}`} value={opt} className={styles.opt_text}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <input
          type={searchProps.type}
          id={searchProps.id}
          name={searchProps.name}
          placeholder={searchProps.placeholder}
          value={searchProps.value}
          onChange={searchProps.onChange}
          className={styles.input}
        />
      </label>
    </div>
  );
}
