'use client';

import { BsFilterSquare } from 'react-icons/bs';
import Text from '@commonComponents/Text/Text';
import Select from '@commonComponents/Select/Select';
import Search from '@common/components/Search/Search';
import InputRange from '@commonComponents/InputRange/InputRange';

import useFilters from './useFilters.vm';
import styles from './Filters.module.css';

export default function Filters() {
  const { changeRangeValue, selectProps, searchProps } = useFilters();

  return (
    <div className={styles.container}>
      <span className={styles.separator} />

      <div className={styles.filters_header}>
        <BsFilterSquare size={25} />

        <Text tag="h5" text="Filters" />
      </div>

      <div className={styles.filters_container}>
        <InputRange onChange={changeRangeValue} />

        <Select
          options={selectProps.options}
          onChange={selectProps.onChange}
        />

        <Search
          searchOpts={searchProps.searchOpts}
          onChange={searchProps.onChange}
        />
      </div>
    </div>
  );
}
