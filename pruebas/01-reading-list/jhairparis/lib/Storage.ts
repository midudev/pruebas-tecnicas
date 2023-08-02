import type { StateType } from "@/types/context";

export const StorageKey = "state";

type ReadStorageType = (
  init: boolean,
  newValue?: string
) => StateType | undefined;

export const ReadStorage: ReadStorageType = (init = false, newValue) => {
  if (typeof window === "undefined") return undefined;

  let res;

  if (init) {
    const { [StorageKey]: value }: Storage = localStorage;
    if (!value) return undefined;
    res = JSON.parse(value);
  } else {
    if (!newValue) return undefined;
    res = JSON.parse(newValue);
  }

  return {
    library: res.library,
    read: res.read,
    total: res.total,
    nRead: res.nRead,
    min: res.min,
    max: res.max,
    genre: res.genre,
    origin: res.origin,
    isFilter: res.isFilter,
  };
};

export const WriteStorage = (state: StateType) => {
  localStorage.setItem(StorageKey, JSON.stringify(state));
};
