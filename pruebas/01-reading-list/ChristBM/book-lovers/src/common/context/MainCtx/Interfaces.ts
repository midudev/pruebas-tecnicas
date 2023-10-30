export interface MainCtxStates {
  openAside: boolean;
  showAlert: boolean;
  booksAdded: number[];
  rangeValue: number;
  selectedOpt: string;
  searchCriteria: {
    searchBy: string;
    inputText: string;
  }
}

export interface MainCtxType {
  states: MainCtxStates;
  activateAlert: () => void;
  toggleOpenAside: () => void;
  handleBooksAdded: (id?: number, action?: 'add' | 'remove') => 'added' | 'removed' | 'error' | null
  changeRangeValue: (value: number) => void;
  changeSelectedOpt: (opt: string) => void;
  onSearch: ({ searchBy, inputText }: { searchBy: string; inputText: string; }) => void;
}

export type ACTION_TYPE =
  | { type: 'SET_OPEN_ASIDE'; payload: boolean }
  | { type: 'SET_SHOW_ALERT'; payload: boolean }
  | { type: 'SET_BOOKS'; payload: number[] }
  | { type: 'SET_RANGE_VALUE'; payload: number }
  | { type: 'SET_SELECTED_OPT'; payload: string }
  | { type: 'SET_SEARCH_CRITERIA'; payload: {searchBy: string; inputText: string;} };
