import { useContext } from 'react';
import MainCtx from '@commonContext/MainCtx/MainCtx';
import { SEARCH_BY_OPTS } from '@websiteUtils/hooks/useFilterData';
import { SelectProps } from '@commonComponents/Select/Interfaces';
import { SearchProps } from '@common/components/Search/Interfaces';

export default function useFilters() {
  const { changeRangeValue, changeSelectedOpt, onSearch } = useContext(MainCtx);

  const selectProps: SelectProps = {
    onChange: changeSelectedOpt,
    // eslint-disable-next-line spellcheck/spell-checker
    options: ['Fantasía', 'Ciencia ficción', 'Zombies', 'Terror'],
  };

  const searchProps: SearchProps = {
    searchOpts: SEARCH_BY_OPTS,
    onChange: (criteria) => onSearch(criteria),
  };

  return { changeRangeValue, selectProps, searchProps };
}
