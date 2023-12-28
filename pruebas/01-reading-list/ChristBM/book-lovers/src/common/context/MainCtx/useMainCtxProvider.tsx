import { useEffect, useReducer } from 'react';
import APP_KEY from '@common/config';
import useLocalStorage from '@commonHooks/useSessionStorage';

import { ACTION_TYPE, MainCtxStates } from './Interfaces';

const alertDurationInMS = 3000;

const initialCtxState: MainCtxStates = {
  openAside: false,
  showAlert: false,
  booksAdded: [],
  rangeValue: 1500,
  selectedOpt: '',
  searchCriteria: {
    searchBy: '',
    inputText: '',
  },
};

function reducer(state: MainCtxStates, action: ACTION_TYPE): MainCtxStates {
  switch (action.type) {
    case 'SET_OPEN_ASIDE':
      return { ...state, openAside: action.payload };
    case 'SET_SHOW_ALERT':
      return { ...state, showAlert: action.payload };
    case 'SET_BOOKS':
      return { ...state, booksAdded: action.payload };
    case 'SET_RANGE_VALUE':
      return { ...state, rangeValue: action.payload };
    case 'SET_SELECTED_OPT':
      return { ...state, selectedOpt: action.payload };
    case 'SET_SEARCH_CRITERIA':
      return { ...state, searchCriteria: action.payload };
    default:
      throw new Error();
  }
}

export default function useMainCtxProvider() {
  const [states, dispatch] = useReducer(reducer, initialCtxState);

  const { getValue, setValue } = useLocalStorage();

  /* Synchronization between tabs */
  useEffect(() => {
    const updateStorage = (ev: StorageEvent) => {
      if (ev.key === APP_KEY) {
        dispatch({ type: 'SET_BOOKS', payload: JSON.parse(ev.newValue as string).booksAdded });
      }
    };

    window.addEventListener('storage', updateStorage);

    return () => {
      window.removeEventListener('storage', updateStorage);
    };
  });

  /* Function that displays the alert in the mobile menu */
  const activateAlert = () => {
    dispatch({ type: 'SET_SHOW_ALERT', payload: true });

    setTimeout(() => {
      dispatch({ type: 'SET_SHOW_ALERT', payload: false });
    }, alertDurationInMS);
  };

  /* (Data Persistence) Get from localStorage the list of books in the readingList. */
  useEffect(() => {
    if (getValue(APP_KEY)) {
      const { booksAdded: booksAddedFromStorage }:
      { booksAdded: number[] | undefined } = getValue(APP_KEY);

      if (booksAddedFromStorage && booksAddedFromStorage.length) {
        dispatch({ type: 'SET_BOOKS', payload: booksAddedFromStorage });
        activateAlert();
      } else {
        dispatch({ type: 'SET_BOOKS', payload: [] });
        setValue(APP_KEY, { booksAdded: [] });
      }
    }
  }, []);

  /* Prevents undesired behavior of the reading list for screen widths greater than 1280px */
  useEffect(() => {
    const hideAsideMenu = () => {
      if (window.innerWidth >= 1280) dispatch({ type: 'SET_OPEN_ASIDE', payload: false });
    };

    window.addEventListener('resize', hideAsideMenu);

    return () => {
      window.removeEventListener('resize', hideAsideMenu);
    };
  }, []);

  /* Show or hide the list of readings (only for mobile devices) */
  const toggleOpenAside = () => dispatch({ type: 'SET_OPEN_ASIDE', payload: !states.openAside });

  /* (Data Persistence) + (Reading List Creation) */
  const handleBooksAdded = (id?: number, action?: 'add' | 'remove') => {
    const defaultID = id ?? 0;

    if (action === 'add') {
      const copyUpdated = states.booksAdded.concat(defaultID);
      // Update the state
      dispatch({ type: 'SET_BOOKS', payload: copyUpdated });
      // Update the localStore
      setValue(APP_KEY, { booksAdded: copyUpdated });

      return 'added';
    }

    if (action === 'remove' && states.booksAdded.includes(defaultID)) {
      const idx = states.booksAdded.findIndex((i) => i === defaultID);
      const copyUpdated = states.booksAdded.filter((_, index) => index !== idx);
      // Update the state
      dispatch({ type: 'SET_BOOKS', payload: copyUpdated });
      // Update the localStore
      setValue(APP_KEY, { booksAdded: copyUpdated });

      return 'removed';
    }

    return 'error';
  };

  /* Status management for filter by number of pages */
  const changeRangeValue = (value: number) => dispatch({ type: 'SET_RANGE_VALUE', payload: value });

  /* Status management for genre filtering */
  const changeSelectedOpt = (opt: string) => dispatch({ type: 'SET_SELECTED_OPT', payload: opt });

  /* Status management for search criteria */
  const onSearch = (criteria: { searchBy: string; inputText: string; }) => {
    dispatch({ type: 'SET_SEARCH_CRITERIA', payload: criteria });
  };

  /* Reorganize by priority */
  const handlePriority = (id: number, priority: 'increase' | 'decrease') => {
    if (states.booksAdded.length > 1) {
      const booksAddedCopy = [...states.booksAdded];
      const idIdx = states.booksAdded.findIndex((bookId) => bookId === id);

      if (priority === 'increase') {
        if (idIdx) {
          booksAddedCopy.splice(idIdx, 1, states.booksAdded[idIdx - 1]);
          booksAddedCopy.splice(idIdx - 1, 1, id);
          dispatch({ type: 'SET_BOOKS', payload: booksAddedCopy });
        }
      } else if (idIdx < states.booksAdded.length - 1) {
        booksAddedCopy.splice(idIdx, 1, states.booksAdded[idIdx + 1]);
        booksAddedCopy.splice(idIdx + 1, 1, id);
        dispatch({ type: 'SET_BOOKS', payload: booksAddedCopy });
      }
    }
  };

  return {
    states,
    activateAlert,
    toggleOpenAside,
    handleBooksAdded,
    changeRangeValue,
    changeSelectedOpt,
    onSearch,
    handlePriority,
  };
}
