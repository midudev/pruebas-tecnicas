'use client';

/* eslint-disable react/jsx-no-constructed-context-values */
import MainCtx from './MainCtx';
import useMainCtxProvider from './useMainCtxProvider';

export default function MainCtxProvider({ children }: { children: React.ReactNode }) {
  const {
    states,
    activateAlert,
    toggleOpenAside,
    handleBooksAdded,
    changeRangeValue,
    changeSelectedOpt,
    onSearch,
  } = useMainCtxProvider();

  return (
    <MainCtx.Provider
      value={{
        states,
        activateAlert,
        toggleOpenAside,
        handleBooksAdded,
        changeRangeValue,
        changeSelectedOpt,
        onSearch,
      }}
    >
      {children}
    </MainCtx.Provider>
  );
}
