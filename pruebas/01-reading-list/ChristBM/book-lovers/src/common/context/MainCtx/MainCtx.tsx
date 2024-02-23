import { createContext } from 'react';
import { MainCtxType } from './Interfaces';

const initialCtx: MainCtxType = {
  states: {
    openAside: false,
    showAlert: false,
    booksAdded: [],
    rangeValue: 0,
    selectedOpt: '',
    searchCriteria: {
      searchBy: '',
      inputText: '',
    },
  },
  activateAlert: () => null,
  toggleOpenAside: () => null,
  handleBooksAdded: () => null,
  changeRangeValue: () => null,
  changeSelectedOpt: () => null,
  onSearch: () => null,
  handlePriority: () => null,
};

const MainCtx = createContext<MainCtxType>(initialCtx);

export default MainCtx;
