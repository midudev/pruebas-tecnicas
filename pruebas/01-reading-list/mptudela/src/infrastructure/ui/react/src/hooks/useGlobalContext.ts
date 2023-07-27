import { useContext } from 'react';
import { useStore } from 'zustand';
import { GlobalStoreState } from '@/infrastructure/ui/react/src/store/globalStore';
import { GlobalContext } from '@/context/globalContext';

export function useGlobalContext<T>(selector: (state: GlobalStoreState) => T, equalityFn?: (left: T, right: T) => boolean): T {
    const store = useContext(GlobalContext);
    if (!store) throw new Error('Missing GlobalContext.Provider in the tree');
    return useStore(store, selector, equalityFn);
}
