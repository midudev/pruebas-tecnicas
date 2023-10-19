import type { StateCreator, StoreMutatorIdentifier } from "zustand";
import { LIBRARY } from "../books.store";

type State = IBooks.Store;

type SubcribeToStorage = <
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  f: StateCreator<State, Mps, Mcs>
) => StateCreator<State, Mps, Mcs>

type SubcribeToStorageImpl = (
  f: StateCreator<State, [], []>
) => StateCreator<State, [], []>

const subscribeMiddleware: SubcribeToStorageImpl = (storeFn) => {
  let storeListenerAlreadySet = false;

  return (set, get, store) => {
    const storeFlow = storeFn(set, get, store);
 
    if(storeListenerAlreadySet) return storeFlow;

    window.addEventListener("storage", event => {
      const { key, storageArea } = event;
    
      if(!key || !storageArea) return;
      if(key !== LIBRARY) return;
    
      const value = JSON.parse(storageArea[key]);
    
      set({ ...value?.state });
    })

    storeListenerAlreadySet = true;

    return storeFlow;
  };
}

export const subscribeToStorage = subscribeMiddleware as unknown as SubcribeToStorage