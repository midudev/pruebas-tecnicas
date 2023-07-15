import { readable } from 'svelte/store';
import type { StoreApi } from 'zustand';

export default function zustandToSvelte<S>(zustandStore: StoreApi<S>) {
  const svelteStore = readable(zustandStore.getState(), set => {
    zustandStore.subscribe((value) => set(value));
  });

  return {
    ...zustandStore,
    subscribe: svelteStore.subscribe
  };
}